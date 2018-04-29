## micro HTML template engine over ES6 template literals

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

100% inspired by : http://2ality.com/2015/01/template-strings-html.html

```javascript
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
    console.log(html)
```