const assert = require('assert')
const html = require('../es6-html-template')

describe('Loops', function() {

  it('should do loops', function() {
    const folks = [
      {name: 'John'},
      {name: 'David'},
      {name: 'Goliath'}
    ]

    const output = html`
      <h1>Folks</h1>
      <ul>
        ${folks.map((folk) => html`
        <li>${folk.name}</li>
        `)}
      </ul>
    `

    const expected = `
      <h1>Folks</h1>
      <ul>
        
        <li>John</li>
        
        <li>David</li>
        
        <li>Goliath</li>
        
      </ul>
    `
    assert.equal(output, expected)
  })

  it('should do loops recursively', function() {
    const folks = [
      { name: 'John', preferedNumbers: [12, 20, 7] },
      { name: 'David', preferedNumbers: [7, 23, 5] },
      { name: 'Goliath', preferedNumbers: [2, 12, 4] }
    ]

    const output = html`
      <h1>Folks</h1>
      <ul>
        ${folks.map((folk) => html`
        <li>
          ${folk.name}
          <ul>
            ${folk.preferedNumbers.map((number) => html`
            <li>${number}</li>
            `)}
          </ul>
        </li>
        `)}
      </ul>
    `

    const expected = `
      <h1>Folks</h1>
      <ul>
        
        <li>
          John
          <ul>
            
            <li>12</li>
            
            <li>20</li>
            
            <li>7</li>
            
          </ul>
        </li>
        
        <li>
          David
          <ul>
            
            <li>7</li>
            
            <li>23</li>
            
            <li>5</li>
            
          </ul>
        </li>
        
        <li>
          Goliath
          <ul>
            
            <li>2</li>
            
            <li>12</li>
            
            <li>4</li>
            
          </ul>
        </li>
        
      </ul>
    `
    assert.equal(output, expected)
  })

})