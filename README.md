# uuSelect

Pure JavaScript elements selector and helpers for classes, attributes or styles.
It's very small: about **700 bytes** when uglified and Gziped!
The plugin is commonJS and AMD compliant.

**Why this plugin ?**
- when jQuery is not an option
- You are tired of the native DOM api syntax
- you target only modern browsers >= IE10 (IE9, see below)
- an easy way to loop through collection of elements

You can easily add IE9 browser support with this [shim for classList](https://www.npmjs.com/package/classlist-polyfill).

**Demo**
[Codepen](http://codepen.io/lordfpx/pen/BKPEOQ)

**NPM**
[NPM page](https://www.npmjs.com/package/uu-select)

> npm install uu-select

## Selectors

  The __ function accept 2 parameters, a `selector` and a `context` (optional), that must be valid querySelectorAll selectors:

  ```javascript
  __(selector [, context]);

  // example
  __('.my-class img');
  __('.my-class', '.wrapper-class');
  ```

## Helpers

### addClass
  - Add 1 or more classes:
  ```javascript
  __(selector [, context]).addClass(className [, className]);
  ```

### removeClass
  - Remove 1 or more classes:
  ```javascript
  __(selector [, context]).removeClass(className [, className]);
  ```

### toggleClass
  - Toggle 1 or more classes:
  ```javascript
  __(selector [, context]).toggleClass(className [, className]);
  ```

### hasClass
  - Check if at least 1 element has this class:
  ```javascript
  __(selector [, context]).hasClass(className);
  // return true or false
  ```

### attr
  - Get attribute's value:
  ```javascript
  __(selector [, context]).attr(attributeName);
  // return its value
  ```

  - Set attribute and value (1 or more):
  ```javascript
  __(selector [, context]).attr(attributeName, value);
  // or
  __(selector [, context]).attr({
      attributeName: value,
      attributeName: value
  });
  ```

### removeAttr
  - Remove 1 or more attribute:
  ```javascript
  __(selector [, context]).removeAttr(attributeName [, attributeName]);
  ```

### css
  - Get a computed style value:
  ```javascript
  __(selector [, context]).css(property);
  // return its value
  ```

  - Set styles:
  ```javascript
  __(selector [, context]).css(property, value);
  // or
  __(selector [, context]).css({
      property: value,
      property: value
  });
  ```

### on
  - addEventListener
  ```javascript
  __(selector [, context]).on(event, listener [, capture]);
  // Don't use an anonymous function is you plan to remove that event later
  ```

### off
  - removeEventListener
  ```javascript
  __(selector [, context]).of(event, listener);
  ```