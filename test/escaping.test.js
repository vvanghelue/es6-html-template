const assert = require('assert')
const html = require('../es6-html-template')

describe('Escaping', function() {
  
  it('should escape html tags in variables with $$', function() {
    const foo = '<b>John</b>'
    assert.equal(html`hello $${foo}`, `hello &lt;b&gt;John&lt;/b&gt;`)
  })

  it('should not escape html tags in variables with simple $', function() {
    const foo = '<b>John</b>'
    assert.equal(html`hello ${foo}`, `hello <b>John</b>`)
  })

  it('should escape html tags in variables event in loops', function() {
    const folks = [
      {name: 'John'},
      {name: 'David'},
      {name: '<b>Goliath</b>'}
    ]

    const output = html`
      <h1>Folks</h1>
      <ul>
        ${folks.map((folk) => html`
        <li>$${folk.name}</li>
        `)}
      </ul>
    `

    const expected = `
      <h1>Folks</h1>
      <ul>
        
        <li>John</li>
        
        <li>David</li>
        
        <li>&lt;b&gt;Goliath&lt;/b&gt;</li>
        
      </ul>
    `
    assert.equal(output, expected)
  })

})