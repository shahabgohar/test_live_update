System.register(["./index-legacy-7f083e32.js"],(function(e,t){"use strict";var n,o,s;return{setters:[e=>{n=e.s,o=e.v,s=e.x}],execute:function(){e("startTapClick",(e=>{if(void 0===n)return;let u,v,f,p=10*-l,m=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,w=e=>{p=o(e),T(e)},E=()=>{f&&clearTimeout(f),f=void 0,u&&(R(!1),u=void 0)},g=e=>{u||y(t(e),e)},T=e=>{y(void 0,e)},y=(e,t)=>{if(e&&e===u)return;f&&clearTimeout(f),f=void 0;const{x:n,y:o}=s(t);if(u){if(h.has(u))throw new Error("internal error");u.classList.contains(a)||b(u,n,o),R(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e)),e.classList.remove(a);const s=()=>{b(e,n,o),f=void 0};i(e)?s():f=setTimeout(s,c)}u=e},b=(e,t,n)=>{if(m=Date.now(),e.classList.add(a),!L)return;const o=r(e);null!==o&&(x(),v=o.addRipple(t,n))},x=()=>{void 0!==v&&(v.then((e=>e())),v=void 0)},R=e=>{x();const t=u;if(!t)return;const n=d-Date.now()+m;if(e&&n>0&&!i(t)){const e=setTimeout((()=>{t.classList.remove(a),h.delete(t)}),d);h.set(t,e)}else t.classList.remove(a)};n.addEventListener("ionGestureCaptured",E),n.addEventListener("touchstart",(e=>{p=o(e),g(e)}),!0),n.addEventListener("touchcancel",w,!0),n.addEventListener("touchend",w,!0),n.addEventListener("pointercancel",E,!0),n.addEventListener("mousedown",(e=>{if(2===e.button)return;const t=o(e)-l;p<t&&g(e)}),!0),n.addEventListener("mouseup",(e=>{const t=o(e)-l;p<t&&T(e)}),!0)}));
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(!(n instanceof ShadowRoot)&&n.classList.contains("ion-activatable"))return n}}},i=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},a="ion-activated",c=100,d=150,l=2500}}}));