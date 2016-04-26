(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('uuSelect', function() {

  'use strict';

  function loop(array, callback, scope) {
    for (var i = 0, len = array.length; i < len; i++) {
      callback.call(scope, i, array[i]);
    }
  }

  var __ = window.__ = function(selector, context) {
    return new __.fn(selector, context);
  };

  __.fn = function(selector, context) {
    var that = this,
        nodes;

    if (context) {
      that.length = 0;
      context = document.querySelectorAll(context);

      // loop through contexts
      loop(context, function(index, value){
        nodes = value.querySelectorAll(selector || 'body');
        // loop through elements
        loop(nodes, function(index, value){
          that[that.length] = value;
          that.length++;
        });
      });
    } else {
      nodes = document.querySelectorAll(selector || 'body');
      this.length = nodes.length;
      // loop through elements
      loop(nodes, function(index, value){
        that[index] = value;
      });
    }

    return this;
  };

  __.fn.prototype = {
    // classList.add()
    addClass: function(string) {
      if (typeof string === 'undefined') return this;
      var names = string.split(' '),
          that = this;
      loop(names, function(index, value){
        loop(that, function(index, value){
          value.classList.add(this);
        }, value);
      });
      return this;
    },

    // classList.remove()
    removeClass: function(string) {
      if (typeof string === 'undefined') return this;
      var names = string.split(' '),
          that = this;
      loop(names, function(index, value){
        loop(that, function(index, value){
          value.classList.remove(this);
        }, value);
      });
      return this;
    },

    // classList.toggle()
    toggleClass: function(string) {
      if (typeof string === 'undefined') return this;
      var names = string.split(' '),
          that = this;
      loop(names, function(index, value){
        loop(that, function(index, value){
          value.classList.toggle(this);
        }, value);
      });
      return this;
    },

    // classList.contains()
    hasClass: function(string){
      if (typeof string === 'undefined') return false;
      for (var i = 0, len = this.length; i < len; i++) {
        if (this[i].classList.contains(string)) {
          return true;
        }
      }
      return false;
    },

    // getAttribute() | setAttribute()
    attr: function(property, setValue){
      if (typeof property === 'undefined') return this;
      var that = this;

      // getAttribute
      if (typeof property === 'string' && typeof setValue === 'undefined') {
        return that[0].getAttribute(property);
      }

      // setAttribute
      // ... multiple attributes
      if (typeof property === 'object') {
        for (var prop in property) {
          if (!property.hasOwnProperty(prop)) continue;
          loop(that, function(index, value){
            value.setAttribute(prop, property[prop]);
          });
        }
        return this;
      }

      // ... single attribute
      if (typeof property === 'string') {
        loop(that, function(index, value){
          value.setAttribute(property, setValue);
        });
      }
      return this;
    },

    // removeAttribute()
    removeAttr: function(string){
      if (typeof string === 'undefined') return this;
      var names = string.split(' '),
          that = this;
      loop(names, function(index, value){
        loop(that, function(index, value){
          value.removeAttribute(this);
        }, value);
      });
      return this;
    },

    // style
    css: function(property, setValue){
      if (typeof property === 'undefined') return this;
      var that = this;

      // getComputedStyle(). getPropertyValue()
      if (typeof property === 'string' && typeof setValue === 'undefined') {
        return getComputedStyle(that[0], null). getPropertyValue(property);
      }

      // style
      // ... multiple properties
      if (typeof property === 'object') {
        for (var prop in property) {
          if (!property.hasOwnProperty(prop)) continue;
          loop(that, function(index, value){
            value.style[prop] = property[prop];
          });
        }
        return this;
      }

      // ... single property
      if (typeof property === 'string') {
        loop(that, function(index, value){
          value.style[property] = setValue;
        });
      }
      return this;
    }
  };

  return __;
}));