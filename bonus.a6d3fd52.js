parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"kDgu":[function(require,module,exports) {

},{"/Users/paualmirall/Projects/scmtest/assets/fonts/proximanova-regular.eot":[["proximanova-regular.4aecc64c.eot","T/C8"],"T/C8"],"/Users/paualmirall/Projects/scmtest/assets/fonts/proximanova-regular.ttf":[["proximanova-regular.27c851a3.ttf","m5TJ"],"m5TJ"]}],"C9vq":[function(require,module,exports) {
"use strict";require("./bonus.scss");var e=function(){var e=document.querySelector("[data-bonusresults]"),t=document.querySelector("[data-bonusModal]"),n=function(t){var n=t.target.value;e.querySelectorAll("[data-bonusImageItem]").forEach(function(e){return e.removeEventListener("click",s)}),e.innerHTML="",fetch("https://images-api.nasa.gov/search?q=".concat(n,"&media_type=image")).then(function(e){if(e.ok)return e.json();throw Error(e.statusText)}).then(function(t){var r=t.collection.items.map(function(e){return{imageSrc:e.links[0].href,description:e.data[0].description_508}});r.length?(r.forEach(o),e.querySelectorAll("[data-bonusImageItem]").forEach(function(e){e.addEventListener("click",s)})):a(n)}).catch(function(e){return r(e)})},r=function(t){return e.innerHTML+='<p class="Bonus-zeroResult">Oops, the following error has occurred: <span class="Bonus-errorText">'.concat(t,"</span></p>")},a=function(t){return e.innerHTML+='<p class="Bonus-zeroResult">We haven\'t found any result with the keyword <span class="Bonus-quotedQuery">'.concat(t,"</span></em>")},o=function(t){return e.innerHTML+='<img data-bonusImageItem class="Bonus-imageItem" src="'.concat(t.imageSrc,'" alt="').concat(t.description,'"/>')},c=function(){return t.classList.toggle("Bonus-modal--active")},s=function(e){var t=e.target,n=document.querySelector("[data-bonusmodalimage]");n.src=t.src,n.alt=t.alt,c()};document.querySelector("[data-bonusInput]").addEventListener("change",n),t.addEventListener("click",c)};document.addEventListener("DOMContentLoaded",function(){return e()});
},{"./bonus.scss":"kDgu"}]},{},["C9vq"], null)
//# sourceMappingURL=https://paulinhos23.github.io/scm-frontend/bonus.a6d3fd52.map