# uuSelect

  Native JS elements selector and helpers for classes, attributes or styles.

  Why this plugin:
  - You can't/don't want to use jQuery in your project/plugin
  - You are tired of native DOM api syntax
  - you target modern browsers >= IE10
  - a fast way to automatically loop through elements

  Demo: [Codepen](http://codepen.io/lordfpx/pen/BKPEOQ)

  NPM: https://www.npmjs.com/package/uu-select

  > npm install uu-select

  The plugin is commonJS and AMD compliant.


## Plugin initialization

  __ function is attached to the window once the plugin is loaded.


## Usage

### Selectors

  The __ function accept 2 parameters, Selector and context (optional), that must be valid querySelectorAll selectors:

  ```javascript
  __(selector [, context]);

  // example
  __('.my-class img');
  __('.my-class', '.wrapper-class');
  ```

### Helpers

#### addClass
  Add 1 or more classes:
  ```javascript
  __(selector [, context]).addClass(className [, className]);
  ```

#### removeClass
  Remove 1 or more classes:
  ```javascript
  __(selector [, context]).removeClass(className [, className]);
  ```

#### toggleClass
  Toggle 1 or more classes:
  ```javascript
  __(selector [, context]).toggleClass(className [, className]);
  ```

#### hasClass
  Check if at least 1 element has this class:
  ```javascript
  __(selector [, context]).hasClass(className);
  // will return true or false
  ```

### attr
  - Get attribute's value:
    ```javascript
    __(selector [, context]).attr(attributeName);
    // will return its value
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

#### removeAttr
  Remove 1 or more attribute:
  ```javascript
  __(selector [, context]).removeAttr(attributeName [, attributeName]);
  ```

#### css
  - Get a computed style value:
    ```javascript
    __(selector [, context]).css(property);
    // will return its value
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