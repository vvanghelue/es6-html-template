(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['es6-html-template'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.html = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // Use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.


    function html(literalSections, ...substs) {
        // Use raw literal sections: we don’t want
        // backslashes (\n etc.) to be interpreted
        let raw = literalSections.raw;

        let result = '';

        substs.forEach((subst, i) => {
            // Retrieve the literal section preceding
            // the current substitution
            let lit = raw[i];

            // In the example, map() returns an array:
            // If substitution is an array (and not a string),
            // we turn it into a string
            if (Array.isArray(subst)) {
                subst = subst.join('');
            }

            // If the substitution is preceded by a dollar sign,
            // we escape special characters in it
            if (lit.endsWith('$')) {
                subst = htmlEscape(subst);
                lit = lit.slice(0, -1);
            }
            result += lit;
            result += subst;
        });
        // Take care of last literal section
        // (Never fails, because an empty template string
        // produces one literal section, an empty string)
        result += raw[raw.length-1]; // (A)

        return result;
    }

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;') // first!
                  .replace(/>/g, '&gt;')
                  .replace(/</g, '&lt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
                  .replace(/`/g, '&#96;');
    }

    var users = [
        {name: 'John'}, {name: 'Pat'}, {name: '<div class="hacker">Joe</div>'}
    ]

    /*
    console.log(
      html`
        <h1>${users.length} users :</h1>
        <ul>
          ${users.map((user) => html`
              <li>$${user.name}</li>
          `)}
        </ul>
      `
    )
    */

    return html;
}));