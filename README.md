# Micro HTML template engine over ES6 template literals

Features : 
## Escaping
Prevent script injection, with $${myVariable}

## Loops
direct usage of [...].map() instead of [...].map().join('')


## Example

```javascript

const title = 'The cool folks list'

const folks = [
  {name: 'John'},
  {name: 'David'},
  {name: '<b>Goliath</b>'}
]

const output = html`
  <h1>${title}</h1>
  <ul>
    ${folks.map((folk) => html`
      <li>$${folk.name}</li>
    `)}
  </ul>
`
console.log(output)
```

Result :
```
<h1>The cool folks list</h1>
<ul>
  <li>John</li>
  <li>David</li>
  <li>&lt;b&gt;Goliath&lt;/b&gt;</li>
</ul>
```


## What is template literals :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## 100% inspired by : 
http://2ality.com/2015/01/template-strings-html.html