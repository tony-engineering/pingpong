!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}([function(t,e,n){"use strict";function i(t,e){this.components={},this.name=t,this.add=function(t){!1===Array.isArray(t)&&(t=[t]),t.forEach(t=>{this.components[t.name]=t})},this.get=function(t){return this.components[t]},this.has=function(t){!1===Array.isArray(t)&&(t=[t]);for(let e=0,n=t.length;e<n;e+=1){const n=t[e],i=n.replace("not:",""),s=n!==i;if(this.components.hasOwnProperty(i)===s)return!1}return!0},this.remove=function(t){!1===Array.isArray(t)&&(t=[t]);for(let e=0,n=t.length;e<n;e+=1){const n=t[e];!0===this.components.hasOwnProperty(n)&&delete this.components[n]}},this.add(e)}function s(t){this.entities={},this.add=function(t){!1===Array.isArray(t)&&(t=[t]),t.forEach(t=>{this.entities[t.name]=t})},this.get=function(t){return this.entities[t]},this.remove=function(t){!1===Array.isArray(t)&&(t=[t]);for(let e=0,n=t.length;e<n;e+=1){const n=t[e],i=n.name||n;!0===this.entities.hasOwnProperty(i)&&delete this.entities[i]}},this.system=function(e,n,i=this.entities){const s={};Object.entries(i).forEach(([t,n])=>{!0===n.has(e)&&(s[t]=n)}),n.call(t,s)}}n.d(e,"b",function(){return s}),n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(6);function s(t){this.name="forces",this.parts=[],this.add=function(t){const{easing:e,elapsed:n,ending:s,handling:o,duration:r,x:a,y:c}=t;t.x=a,t.y=c,t.duration=r,t.easing=e||i.b(1),t.elapsed=n||0,t.ending=s||!1,t.handling=o||!1,t.moved={x:0,y:0},this.parts.push(t)},t.forEach(t=>{this.add(t)})}},function(t,e,n){"use strict";function i(t,e=1){this.name="camera",this.camera=t,this.opacity=e}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t,e,n=0){this.name="position",this.x=t,this.y=e,this.z=n}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t){this.name="zone",this.frame=t}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t,e){this.name="hitbox",this.width=t,this.height=e}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t){return e=>e**t}function s(t){return e=>1-i(t)(1-e)}function o(t){return e=>e*t}function r(t){return e=>t(1-e)}n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r})},function(t,e,n){"use strict";function i(t){this.name="input",this.inputs=t}n.d(e,"a",function(){return i})},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";n.r(e),function(t){var i=n(10);n.d(e,"destroy",function(){return i.a});var s=n(21);n.d(e,"start",function(){return s.a});var o=n(11);n.d(e,"setup",function(){return o.a});var r=n(20);n.d(e,"update",function(){return r.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./../start.js","./setup.js","./update.js"])}.call(this,n(8)(t))},function(t,e,n){"use strict";function i(){console.log("destroy demo scene"),console.log("-------"),this.room.io.to(this.room.room).emit("endGameSesion",this.state.winner)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("setup demo scene"),this.zones={gameLayout:{}},this.zones.gameLayout.refSize=1024,this.player1={inputs:[]},this.player2={inputs:[]},this.room.sockets.forEach((t,e)=>{t.on("inputs",t=>{0==e?this.player1.inputs.push(...t):1==e&&this.player2.inputs.push(...t)})})}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),function(t){var i=n(13);n.d(e,"destroy",function(){return i.a});var s=n(23);n.d(e,"setup",function(){return s.a});var o=n(14);n.d(e,"start",function(){return o.a});var r=n(15);n.d(e,"update",function(){return r.a}),void 0!==t.hot&&t.hot.accept(["./../destroy.js","./../setup.js","./../start.js","./update.js"])}.call(this,n(8)(t))},function(t,e,n){"use strict";function i(){console.log("destroy loading scene"),console.log("-------"),delete this.state.redirect}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("start loading scene"),this.state.redirect=!1}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){!1===this.preloading&&!1===this.state.redirect&&(setTimeout(()=>{this.load("demo")},3e3),this.state.redirect=!0)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),function(t){var i=n(17);n.d(e,"destroy",function(){return i.a});var s=n(22);n.d(e,"start",function(){return s.a});var o=n(18);n.d(e,"setup",function(){return o.a});var r=n(19);n.d(e,"update",function(){return r.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./../start.js","./setup.js","./update.js"])}.call(this,n(8)(t))},function(t,e,n){"use strict";function i(){console.log("destroy ending scene"),console.log("-------")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("setup ending scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t){Object.entries(t).forEach(([t,e])=>{const n=e.get("forces"),i=e.get("position"),s=[];n.parts.forEach(t=>{const n=!1===t.ending,o=t.duration-t.elapsed,r=!1===n&&this.delta.update>o?o:this.delta.update,a=(t.elapsed+r)/t.duration,c={x:t.x*t.easing(a),y:t.y*t.easing(a)};if(i.x+=c.x-t.moved.x,i.y+=c.y-t.moved.y,t.moved=c,t.elapsed+=this.delta.update,"function"==typeof t.handling){const n=()=>{s.push(t)};t.handling(e,t.moved.x,t.moved.y,t.elapsed,n)}t.elapsed>=t.duration&&"function"==typeof t.ending&&-1===s.indexOf(t)&&(t.ending(e,t.moved.x,t.moved.y,t.elapsed),s.push(t))}),n.parts=n.parts.filter(t=>-1===s.indexOf(t))})}var s=n(1);function o(t){Object.entries(t).forEach(([t,e])=>{var n=[];"player1"==t&&(n=this.player1.inputs),"player2"==t&&(n=this.player2.inputs),n.forEach(t=>{var n=e.get("input").inputs.indexOf(t.action);if(-1!==n&&"DOWN"===t.state)switch(n){case 0:e.add([new s.a([{x:0,y:-10,duration:15}])]);break;case 1:e.add([new s.a([{x:0,y:10,duration:15}])])}else if(-1!==n&&"UP"===t.state)switch(n){case 0:case 1:e.remove("forces")}})})}function r(t,e){this.x=t,this.y=e}function a(t,e,n,i){this.height=i,this.width=n,this.x=t,this.y=e}const c={collidePointPoint:function(t,e){if(t.x!==e.x||t.y!==e.y)return!1;return!0},collidePointRectangle:function(t,e){if(t.x<e.x||t.x>e.x+e.width||t.y<e.y||t.y>e.y+e.height)return!1;return!0},collideRectangleRectangle:function(t,e){if(t.x+t.width<e.x||t.x>e.x+e.width||t.y+t.height<e.y||t.y>e.y+e.height)return!1;return!0}};function u(t){Object.entries(t).forEach(([e,n])=>{if("ball"===e){var i=n.get("position"),o=n.get("hitbox"),u=n.get("forces"),h=new a(i.x,i.y,o.width,o.height);Object.entries(t).forEach(([t,i])=>{if(i.name!=e){var o=new a(i.get("position").x,i.get("position").y,i.get("hitbox").width,i.get("hitbox").height);if(function(t,e){const n=[];let i="collide";return t instanceof r==1&&(n.push(t),i+="Point"),e instanceof r==1&&(n.push(e),i+="Point"),-1===n.indexOf(t)&&t instanceof a==1&&(n.push(t),i+="Rectangle"),-1===n.indexOf(e)&&e instanceof a==1&&(n.push(e),i+="Rectangle"),c[i].apply(null,n)}(h,o)){var f=function(t,e){var n={x:0,y:0},i=t.x+t.width/2-(e.x+e.width/2),s=t.y+t.height/2-(e.y+e.height/2),o=t.width/2+e.width/2,r=t.height/2+e.height/2;if(Math.abs(i)<o&&Math.abs(s)<r){!1===n.active&&(n.active=!0);var a=o-Math.abs(i),c=r-Math.abs(s);a>=c?n.y=s>0?c:-c:n.x=i>0?a:-a}return n}(h,o).x>0?u.parts[0].x+5:-u.parts[0].x-5;Math.abs(f>30);var d=i.get("forces"),l=0;l-=(o.y+o.height/2-(h.y+h.height/2))/10,d&&d.parts.length>0&&(l+=d.parts[0].y),n.add([new s.a([{x:f,y:l,duration:30}])])}}})}})}function h(t){Object.entries(t).forEach(([t,e])=>{var n=e.get("position"),i=e.get("hitbox"),o=e.get("forces"),r=e.get("zone");n.x<0?(this.state.winner="P2",this.load("ending")):n.x+i.width>r.frame.refSize&&(this.state.winner="P1",this.load("ending")),(n.y<0||n.y+i.height>r.frame.refSize)&&e.add([new s.a([{x:o.parts[0].x,y:-o.parts[0].y,duration:o.parts[0].duration}])])})}function f(t){Object.entries(t).forEach(([t,e])=>{var n=e.get("position"),i=e.get("hitbox"),s=(e.get("forces"),e.get("zone"));n.y<0?(n.y=0,e.remove("forces")):n.y+i.height>s.frame.refSize&&(n.y=s.frame.refSize-i.height,e.remove("forces"))})}function d(){this.world.system(["forces","position"],i),this.world.system(["input"],o),this.world.system(["hitbox","position"],u),this.world.system(["hitbox","position","sphere"],h),this.world.system(["hitbox","position","ping"],f);let t=[];Object.entries(this.world.entities).forEach(([e,n])=>{let i=n.get("position");t.push({name:e,components:[i]})}),0!=t.length&&this.room.io.to(this.room.room).emit("updateEntities",t),this.player1.inputs=[],this.player2.inputs=[]}n.d(e,"a",function(){return d})},function(t,e,n){"use strict";var i=n(0),s=n(2),o=n(3);function r(t){this.name="images",this.parts=t,this.parts.forEach(t=>{const{destination:e,frame:n,framerate:i,frames:s,opacity:o,source:r}=t;t.source=r,t.frames=s||[[0,0,32,32]],t.frame=n||0,t.framerate=i||8,t.destination=e||[0,0,0,32,32],t.opacity=o||1,t.elapsed=0})}var a=n(5),c=n(4),u=n(7);function h(t,e,n,h){const f=new i.a("player"+t,[new s.a(this.camera),new c.a(this.zones.gameLayout),new o.a(n,h,1),new function(){this.name="ping"},new a.a(32,96),new r([{source:this.assets.images.common.player(),frames:[[0,0,32,96]],frame:0,destination:[0,0,0,32,96]}])]);return e&&e.length>0&&f.add(new u.a(e)),f}var f=n(1);function d(){console.log("start demo scene"),this.world=new i.b(this);var t=[],e=this.zones.gameLayout;if(1==this.player||"number"!=typeof this.player)var n=["KEY_UP","KEY_DOWN"];if(2==this.player||"number"!=typeof this.player)t=["KEY_UP","KEY_DOWN"];var u=h.call(this,1,n,16,e.refSize/2-48),d=h.call(this,2,t,e.refSize-48,e.refSize/2-48),l=function(t,e){return new i.a("ball",[new s.a(this.camera),new c.a(this.zones.gameLayout),new o.a(t,e,1),new f.a([{x:-5,y:0,duration:30}]),new a.a(32,32),new function(){this.name="sphere"},new r([{source:this.assets.images.common.ball(),frames:[[0,0,32,32]],frame:0,destination:[0,0,0,32,32]}])])}.call(this,e.refSize/2,e.refSize/2-16);this.world.add(l),this.world.add(u),this.world.add(d)}n.d(e,"a",function(){return d})},function(t,e,n){"use strict";var i=n(0),s=n(2),o=n(3),r=n(4);function a(t){this.name="text",this.text=t}n(7);n(5);function c(t,e,n){return new i.a("title"+n,[new s.a(this.camera),new r.a(this.zones.gameLayout),new o.a(t,e,1),new a(n)])}function u(){console.log("start ending scene"),this.world=new i.b(this);var t=this.zones.gameLayout,e=this.state.winner,n=c.call(this,t.refSize/2,100,"Ping Pong"),s=c.call(this,t.refSize/2,t.refSize/2-100,"Press Enter to restart"),o=c.call(this,t.refSize/2,t.refSize/2-200,"Player "+e+" won");this.world.add([n,o,s])}n.d(e,"a",function(){return u})},function(t,e,n){"use strict";var i=n(6);function s(){console.log("setup loading scene"),this.camera=new function(t,e,n){let s=[],o={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}};this.position={x:0,y:0},this.size={width:e,height:n},this.add=function(t){let e=0;for(let n=s.length-1;n>=0;n-=1){const i=s[n];if(t.destination.z>=i.destination.z){e=n+1;break}}s.splice(e,0,t)},this.idle=function(){o={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}}},this.render=function(){s.forEach(e=>{const{destination:n,frame:i,opacity:s,source:r}=e;if(s>0&&!0===this.visible(n.x,n.y,n.width,n.height)){const e=t.globalAlpha;t.globalAlpha=s,t.drawImage(r,i.x,i.y,i.width,i.height,n.x-(this.position.x+o.shift.x),n.y-(this.position.y+o.shift.y),n.width,n.height),t.globalAlpha=e}}),s=[]},this.set=function(t,e){this.position.x=t,this.position.y=e},this.shake=function(t,e,n,s=i.c(i.a(2))){this.idle(),o.force={x:t,y:e},o.current=!0,o.duration=n,o.easing=s},this.update=function(t){if(!1===o.current)return;if(o.elapsed+t>=o.duration)return void this.idle();o.elapsed+=t;const e=o.easing(o.elapsed/o.duration),n=2*Math.random()*Math.PI;o.shift.x=Math.round(Math.cos(n)*o.force.x*e),o.shift.y=Math.round(Math.sin(n)*o.force.y*e)},this.visible=function(t,e,n,i){const s=this.position.x+o.shift.x,r=this.position.y+o.shift.y,a=this.size.width,c=this.size.height;return!(t+n<=s||t>=s+a||e+i<=r||e>=r+c)}}(this.context,this.size.width,this.size.height)}n.d(e,"a",function(){return s})},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("http")},function(t,e){t.exports=require("socket.io")},function(t,e){t.exports=require("module-alias/register")},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAYAAAB8InCYAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAFRJREFUaIHtzjEBADAIxMCnS7VUGv4FFBksFwO56vt+FjubcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAJBluAwJY4NotAAAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAMRJREFUWIXtl7EVwyAMRA8/D0PGSJ3RPItnyihORR4mkoAgAQXX+dm6+xwUxgGA9x4KcsnzVTK0A8Dznc6KyhlXme1Kody3WZhNObx6VmqgJZjyIdvgGtAKz3pSABbhrHfJGTBVCmC5ejJj4170gphuC4YB9Kw/6IoBhmkBLIAFEACqfqOU5GKAYZoKoOc2fLPSBnpA3DKm2oIgyxZ+vLkGLCBIT+leEAZa/xXExZScgZY2srOld8PYaMjl9O8ASa/zeHwAksMXkqW9xfwAAAAASUVORK5CYII="},function(t,e){t.exports=require("worker_threads")},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"demo",function(){return d}),n.d(i,"loading",function(){return l}),n.d(i,"ending",function(){return p});n(27);var s=n(24),o=n.n(s);const r=[{name:"player",scope:"common",type:"image",source:n(28)},{name:"ball",scope:"common",type:"image",source:n(29)}],a=[...[],...r,...[]];var c=n(25),u=n.n(c);n(30);function h(t){const{assets:e,container:n,scenes:i,room:s}=t,o=t.expose||!1,r=t.framerate||60,a=(t.sharp,t.speed||1),c={height:n.offsetHeight,width:n.offsetWidth};let u=null,h=!1;this.preloading=!1,this.scenes=i,this.size=c,this.room=s,this.state={},this.version="0.33.0",this.load=function(t){u=t},this.restart=function(){h=!0},function(){this.assets={},this.delta={},this.delta.render=0,this.delta.update=0,this.scene=this.scenes.loading,this.scene.setup.call(this),this.scene.start.call(this);const t=new function(t=60,e=1){let n=0,i=null,s=null;this.framerate=t,this.speed=e,this.render=function(t){const e=Date.now();null!==i&&t(e-i),requestAnimationFrame(this.render.bind(this,t)),i=e},this.update=function(t){const e=Date.now();for(null!==s&&(n+=e-s);n>=1e3/this.framerate/this.speed;)n-=1e3/this.framerate/this.speed,t(1e3/this.framerate);s=e,setTimeout(this.update.bind(this,t),1e3/Math.max(this.framerate,60))}}(r,a);t.update(t=>(this.delta.update=t,this.scene.update.call(this),!0===h?(this.scene.start.call(this),void(h=!1)):null!==u?(this.scene.destroy.call(this),this.scene=this.scenes[u],this.scene.setup.call(this),this.scene.start.call(this),void(u=null)):void 0)),function(t,e){let n=[];t.forEach(function(t){const e=new Promise(function(e,n){if("dataset"===t.type&&(t.getter=(()=>t.source),e(t)),"image"===t.type){const n={};n.src=t.source,t.getter=(()=>n),e(t)}else if("sound"===t.type){const n={};t.getter=(()=>n),e(t)}});n.push(e)}),Promise.all(n).then(e)}(e,t=>{t.forEach(t=>{void 0===this.assets[t.type+"s"]&&(this.assets[t.type+"s"]={}),void 0===this.assets[t.type+"s"][t.scope]&&(this.assets[t.type+"s"][t.scope]={}),this.assets[t.type+"s"][t.scope][t.name]=t.getter}),this.preloading=!1}),this.loop=t,this.preloading=!0}.call(this,t),!0===o&&(window.theatre=this)}var d=n(9),l=n(12),p=n(16),g=n(26),A=n.n(g);"undefined"==typeof window&&(global.window={},global.window.requestAnimationFrame=function(){setImmediate(()=>f(Date.now()))});const y=o()(),m=u.a.createServer(y),w=A.a.listen(m);let x=0;const v=[],b={};w.sockets.on("connection",function(t){console.log("new connection",t.id);var e="";e=v.length>0?v.pop():function(){(++x).toString();return v.push(x),b[x]={io:w,room:x,sockets:[]},x}(),t.join(e,()=>{console.log(e),t.emit("playerSelected",b[e].sockets.length+1),b[e].sockets.push(t),w.to(e).emit("new user in room",t.id),w.to(e).emit("gameReady"),t.on("disconnect",n=>{b[e].sockets.filter(e=>e.id!=t.id),0==b[e].sockets.length&&delete b[e]}),2==b[e].sockets.length&&(new h({assets:a,container:{offsetHeight:0,offsetWidth:0},expose:!1,scenes:i,sharp:!1,room:b[e]}),w.to(e).emit("startGameSession"))})}),exports.start=function(){m.listen(3e3,function(){console.log("listening on *:3000")})}}]);