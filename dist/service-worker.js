if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const r=e=>n(e,a),f={module:{uri:a},exports:s,require:r};i[a]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(d(...e),s)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"132.bundle.js",revision:"133e6b6e9826a987d4cdaa2fd4a6403e"},{url:"666.bundle.js",revision:"3066028c267053175374392c62528c62"},{url:"app.webmanifest",revision:"9f0d10c482a8cfa7c7bc3c1240cea5d4"},{url:"app~9af0ee1e.bundle.js",revision:"9ae65cf3fbe226a31743e4233ccab267"},{url:"app~a51fa3f5.bundle.js",revision:"6e730e9c291280e1c82ebb60ce2d97bc"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"c1e546aa67aa3cb1879868071c07810e"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"2556f1b734e9400204dcb3d6c81602bf"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"a7a9cda932c13dbd64f3f582e045adaa"},{url:"icons/icon-192x192.png",revision:"740830cbb273a07ad6c16687a0605c3e"},{url:"icons/icon-256x256.png",revision:"ad05505f05b879ca3ea1d2da7763f519"},{url:"icons/icon-384x384.png",revision:"2d672446d93ac9322160445ac8837c7c"},{url:"icons/icon-512x512.png",revision:"7efbf8ed762baf5a4d05bf354a8ddde7"},{url:"index.html",revision:"81fecc2b6604d8c8bfc04d405ddb352c"},{url:"sw.bundle.js",revision:"3d0490dacd3da2dfa8fb8bd74e446343"},{url:"sw.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
//# sourceMappingURL=service-worker.js.map
