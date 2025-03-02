(()=>{var t={56:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},72:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=e(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var y=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:y,references:1})}a.push(l)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=e(i[s]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=u}}},113:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},124:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)).attachShadow({mode:"open"}),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"note",set:function(t){this._note=t,this.render()}},{key:"connectedCallback",value:function(){this.render()}},{key:"handleDelete",value:function(){this.dispatchEvent(new CustomEvent("delete-note",{detail:{noteId:this._note.id},bubbles:!0,composed:!0}))}},{key:"render",value:function(){var t=this;this._note&&(this.shadowRoot.innerHTML='\n      <style>\n        .note-card {\n          display: flex;\n          flex-direction: column;\n          gap: 0.5rem;\n          padding: 1rem;\n          border-radius: 6px;\n          background: #f8f9fa;\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n        }\n\n        .note-title {\n          font-size: 1.2rem;\n          font-weight: bold;\n        }\n\n        .note-body {\n          font-size: 1rem;\n          color: #555;\n        }\n\n        .button-container {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        .delete-btn {\n          padding: 0.6rem 1.2rem;\n          background: linear-gradient(to right, #e74c3c, #c0392b);\n          color: white;\n          border: none;\n          border-radius: 6px;\n          font-size: 1rem;\n          font-weight: 600;\n          cursor: pointer;\n          transition: all 0.3s ease;\n        }\n\n        .delete-btn:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n      </style>\n\n      <div class="note-card">\n        <div class="note-title">'.concat(this._note.title,'</div>\n        <div class="note-body">').concat(this._note.body,'</div>\n        <div class="button-container">\n          <button class="delete-btn">Hapus</button>\n        </div>\n      </div>\n    '),this.shadowRoot.querySelector(".delete-btn").addEventListener("click",(function(){return t.handleDelete()})))}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-item",c)},314:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},521:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)).attachShadow({mode:"open"}),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var t=this,n=this.getAttribute("data-form-type")||"Add Note";this.shadowRoot.innerHTML='\n      <style>\n        .form-group {\n          display: grid;\n          gap: 0.5rem;\n        }\n\n        input, textarea {\n          width: 100%;\n          padding: 0.8rem;\n          border: 2px solid #e2e8f0;\n          border-radius: 6px;\n          font-size: 1rem;\n          transition: all 0.3s ease;\n          box-sizing: border-box;\n        }\n\n        input:focus, textarea:focus {\n          border-color: #3498db;\n          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.1);\n          outline: none;\n        }\n\n        textarea {\n          min-height: 120px;\n          resize: vertical;\n        }\n\n        .button-container {\n          display: grid;\n          justify-content: center;\n          margin-top: 1rem;\n        }\n\n        button {\n          padding: 0.8rem 2rem;\n          background: linear-gradient(to right, #2c3e50, #3498db);\n          color: white;\n          border: none;\n          border-radius: 6px;\n          font-size: 1rem;\n          font-weight: 600;\n          cursor: pointer;\n          transition: all 0.3s ease;\n        }\n\n        button:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n\n        button:active {\n          transform: translateY(0);\n        }\n\n        .error {\n          color: #e74c3c;\n          font-size: 0.875rem;\n          margin-top: 0.25rem;\n          font-weight: 500;\n        }\n\n        @media (max-width: 768px) {\n          .form-container {\n            padding: 1rem;\n            margin: 1rem;\n          }\n        }\n      </style>\n\n      <div class="form-container">\n        <form>\n          <div class="form-group">\n            <input \n              type="text" \n              id="title" \n              placeholder="Enter note title..." \n              required \n            />\n            <div id="title-error" class="error"></div>\n          </div>\n\n          <div class="form-group">\n            <textarea \n              id="body" \n              placeholder="Enter note content..." \n              required\n            ></textarea>\n            <div id="body-error" class="error"></div>\n          </div>\n\n          <div class="button-container">\n            <button type="submit">'.concat(n,"</button>\n          </div>\n        </form>\n      </div>\n    ");var e=this.shadowRoot.querySelector("form"),r=this.shadowRoot.querySelector("#title"),o=this.shadowRoot.querySelector("#body"),i=this.shadowRoot.querySelector("#title-error"),a=this.shadowRoot.querySelector("#body-error"),c=function(t,n,e){return""===t.value.trim()?(n.textContent="".concat(e," is required."),!1):(n.textContent="",!0)};r.addEventListener("input",(function(){c(r,i,"Title")})),o.addEventListener("input",(function(){c(o,a,"Body")})),e.addEventListener("submit",(function(n){n.preventDefault();var u=c(r,i,"Title"),s=c(o,a,"Body");if(u&&s){var f={id:"notes-".concat(Date.now()),title:r.value.trim(),body:o.value.trim(),createdAt:(new Date).toISOString(),archived:!1};t.dispatchEvent(new CustomEvent("add-note",{detail:f})),e.reset()}}))}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-form",c)},540:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},601:t=>{"use strict";t.exports=function(t){return t[1]}},659:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},831:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)).attachShadow({mode:"open"}),n.notesData=[],n.isLoading=!0,n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"notes",set:function(t){this.notesData=t,this.saveNotes(),this.render()}},{key:"connectedCallback",value:function(){this.loadNotes()}},{key:"loadNotes",value:function(){var t=this;this.isLoading=!0,this.render(),setTimeout((function(){var n=localStorage.getItem("notesData");n&&(t.notesData=JSON.parse(n)),t.isLoading=!1,t.render()}),1e3)}},{key:"render",value:function(){var t=this;this.shadowRoot&&(this.shadowRoot.innerHTML='\n      <style>\n        .note-list {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n          gap: 1rem;\n          padding: 1rem;\n        }\n\n        .loading-container {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100px;\n        }\n\n        .spinner {\n          width: 50px;\n          height: 50px;\n          border: 5px solid rgba(0, 0, 0, 0.1);\n          border-top: 5px solid #3498db;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      </style>\n\n      <div class="note-list">\n        '.concat(this.isLoading?'<div class="loading-container"><div class="spinner"></div></div>':this.notesData.length>0?this.notesData.map((function(){return"<note-item></note-item>"})).join(""):"<p>Tidak ada catatan aktif.</p>","\n      </div>\n    "),this.isLoading||this.shadowRoot.querySelectorAll("note-item").forEach((function(n,e){n.note=t.notesData[e]})))}},{key:"saveNotes",value:function(){localStorage.setItem("notesData",JSON.stringify(this.notesData))}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-list",c)},845:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)).attachShadow({mode:"open"}),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowRoot.innerHTML='\n      <style>\n        .header-container {\n          display: grid;\n          grid-template-columns: 1fr;\n          background: linear-gradient(to right, #2c3e50, #3498db);\n          padding: 1.5rem;\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n        }\n\n        .app-title {\n          text-align: center;\n          color: #ecf0f1;\n          margin: 0;\n          font-size: 2rem;\n          font-weight: 600;\n          letter-spacing: 0.5px;\n        }\n\n        @media (max-width: 768px) {\n          .header-container {\n            padding: 1rem;\n          }\n\n          .app-title {\n            font-size: 1.5rem;\n          }\n        }\n      </style>\n\n      <header class="header-container">\n        <h1 class="app-title">Notes App</h1>\n      </header>\n    '}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("app-header",c)},919:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,"body {\n    font-family: 'Roboto', sans-serif;\n    background: #f7f9fc;\n    margin: 0;\n    padding: 0;\n    color: #333;\n}\n\nmain {\n    max-width: 1200px;\n    margin: 3rem auto;\n    padding: 0 1.5rem;\n}\n\nh1 {\n    font-weight: bold;\n}\n",""]);const c=a},973:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)).attachShadow({mode:"open"}),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowRoot.innerHTML='\n        <style>\n          .footer-container {\n            display: grid;\n            grid-template-columns: 1fr;\n            background: linear-gradient(135deg, #2c3e50, #3498db);\n            color: white;\n            padding: 1.5rem;\n            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);\n          }\n  \n          .copyright {\n            text-align: center;\n            font-size: 0.9rem;\n            color: #ecf0f1;\n          }\n  \n          .copyright p {\n            margin: 0;\n          }\n  \n          @media (max-width: 768px) {\n            .footer-container {\n              padding: 1rem;\n            }\n          }\n        </style>\n  \n        <footer class="footer-container">\n          <div class="copyright">\n            <p>&copy; '.concat((new Date).getFullYear()," FruHa. All rights reserved.</p>\n          </div>\n        </footer>\n      ")}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("footer-bar",c)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";var t="https://notes-api.dicoding.dev/v2";e(124),e(831),e(521),e(845),e(973);var n=e(72),r=e.n(n),o=e(825),i=e.n(o),a=e(659),c=e.n(a),u=e(56),s=e.n(u),f=e(540),l=e.n(f),p=e(113),d=e.n(p),y=e(919),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),r()(y.A,b),y.A&&y.A.locals&&y.A.locals,document.addEventListener("DOMContentLoaded",(function(){!function(){var n=document.querySelector("note-list");function e(){fetch("".concat(t,"/notes")).then((function(t){return t.json()})).then((function(t){"success"===t.status?n.notes=t.data:r(t.message)})).catch((function(t){return r(t)}))}function r(){alert(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Terjadi kesalahan")}document.querySelector("note-form").addEventListener("add-note",(function(n){var o;o=n.detail,fetch("".concat(t,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o.title,body:o.body})}).then((function(t){return t.json()})).then((function(t){"success"===t.status?e():r(t.message)})).catch((function(t){return r(t)}))})),n.addEventListener("delete-note",(function(n){var o;confirm("Apakah Anda yakin ingin menghapus catatan ini?")&&(o=n.detail.noteId,fetch("".concat(t,"/notes/").concat(o),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){"success"===t.status?e():r(t.message)})).catch((function(t){return r(t)})))})),e()}()}))})()})();