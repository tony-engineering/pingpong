!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(1);function r(t){var e=this;this.name="forces",this.parts=[],this.add=function(t){var e=t.easing,n=t.elapsed,r=t.ending,s=t.handling,o=t.duration,a=t.x,h=t.y;t.x=a,t.y=h,t.duration=o,t.easing=e||i.b(1),t.elapsed=n||0,t.ending=r||!1,t.handling=s||!1,t.moved={x:0,y:0},this.parts.push(t)},t.forEach(function(t){e.add(t)})}},function(t,e,n){"use strict";function i(t){return function(e){return Math.pow(e,t)}}function r(t){return function(e){return 1-i(t)(1-e)}}function s(t){return function(e){return e*t}}function o(t){return function(e){return t(1-e)}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o})},function(t,e,n){"use strict";function i(){console.log("resize demo scene");var t=0,e=0,n=n=this.size.width,i=this.size.height,r=1;this.camera.set(0,0),this.camera.size.width=this.size.width,this.camera.size.height=this.size.height,this.size.width>this.size.height?(n=this.size.height,t=Math.ceil((this.size.width-this.size.height)/2)):this.size.width<this.size.height&&(r=Math.round(100*(this.size.width/this.size.height+Number.EPSILON))/100,n=this.size.height,i=this.size.height,e=(this.size.height-this.size.width)/r/2,t=0),this.zone[0]={x:t,y:e,z:0,width:n,height:i,scale:r}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),function(t){var i=n(5);n.d(e,"destroy",function(){return i.a});var r=n(6);n.d(e,"render",function(){return r.a});var s=n(7);n.d(e,"resize",function(){return s.a});var o=n(8);n.d(e,"setup",function(){return o.a});var a=n(9);n.d(e,"start",function(){return a.a});var h=n(10);n.d(e,"update",function(){return h.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./render.js","./resize.js","./setup.js","./start.js","./update.js"])}.call(this,n(4)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";function i(){console.log("destroy loading scene"),console.log("-------"),delete this.state.redirect}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){this.context.fillStyle="#181a1f",this.context.fillRect(0,0,this.size.width,this.size.height),this.context.font="16px Courier New",this.context.textAlign="start",this.context.textBaseline="top",this.context.fillStyle="#6b717d",this.context.fillText("/ Theatre",8,8),this.context.fillStyle="#d7dae0",this.context.fillText("$ preloading assets...",8,32),!1===this.preloading&&(this.context.fillText("$ preloading completed",8,56),this.context.fillText("$ loading demo scene...",8,80))}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("resize loading scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("setup loading scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("start loading scene"),this.state.redirect=!1}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){var t=this;!1===this.preloading&&!1===this.state.redirect&&(setTimeout(function(){t.load("demo")},3e3),this.state.redirect=!0)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),function(t){var i=n(12);n.d(e,"destroy",function(){return i.a});var r=n(16);n.d(e,"render",function(){return r.a});var s=n(2);n.d(e,"resize",function(){return s.a});var o=n(15);n.d(e,"setup",function(){return o.a});var a=n(13);n.d(e,"start",function(){return a.a});var h=n(14);n.d(e,"update",function(){return h.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./render.js","./resize.js","./setup.js","./start.js","./update.js"])}.call(this,n(4)(t))},function(t,e,n){"use strict";function i(){console.log("destroy demo scene"),console.log("-------")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){this.components={},this.name=t,this.add=function(t){var e=this;!1===Array.isArray(t)&&(t=[t]),t.forEach(function(t){e.components[t.name]=t})},this.get=function(t){return this.components[t]},this.has=function(t){!1===Array.isArray(t)&&(t=[t]);for(var e=0,n=t.length;e<n;e+=1){var i=t[e],r=i.replace("not:",""),s=i!==r;if(this.components.hasOwnProperty(r)===s)return!1}return!0},this.remove=function(t){!1===Array.isArray(t)&&(t=[t]);for(var e=0,n=t.length;e<n;e+=1){var i=t[e];!0===this.components.hasOwnProperty(i)&&delete this.components[i]}},this.add(e)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.name="camera",this.camera=t,this.opacity=e}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.name="position",this.x=t,this.y=e,this.z=n}function a(t){this.name="images",this.parts=t,this.parts.forEach(function(t){var e=t.destination,n=t.frame,i=t.framerate,r=t.frames,s=t.opacity,o=t.source;t.source=o,t.frames=r||[[0,0,32,32]],t.frame=n||0,t.framerate=i||8,t.destination=e||[0,0,0,32,32],t.opacity=s||1,t.elapsed=0})}function h(t,e){this.name="hitbox",this.width=t,this.height=e}function c(t){return{name:"zone",frame:t}}function u(t,e,n,i){var u=new r("player"+t,[new s(this.camera),c(this.zone),new o(n,i,1),new function(){this.name="ping"},new h(32,96),new a([{source:this.assets.images.common.player(),frames:[[0,0,32,96]],frame:0,destination:[0,0,0,32,96]}])]);return e&&e.length>0&&u.add(new function(t){this.name="input",this.inputs=t}(e)),u}var f=n(0);function l(){console.log("start demo scene"),this.world=new function(t){this.entities={},this.add=function(t){var e=this;!1===Array.isArray(t)&&(t=[t]),t.forEach(function(t){e.entities[t.name]=t})},this.get=function(t){return this.entities[t]},this.remove=function(t){!1===Array.isArray(t)&&(t=[t]);for(var e=0,n=t.length;e<n;e+=1){var i=t[e],r=i.name||i;!0===this.entities.hasOwnProperty(r)&&delete this.entities[r]}},this.system=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.entities,s={};Object.entries(r).forEach(function(t){var n=i(t,2),r=n[0],o=n[1];!0===o.has(e)&&(s[r]=o)}),n.call(t,s)}}(this);var t=u.call(this,1,["KEY_UP","KEY_DOWN"],16,this.zone[0].height/2-48),e=u.call(this,2,["KEY_Z","KEY_S"],this.zone[0].width-48,this.zone[0].height/2-48),n=function(){return new r("ball",[new s(this.camera),c(this.zone),new o(this.size.width/2,this.size.height/2,1),new f.a([{x:-5,y:0,duration:30}]),new h(32,32),new function(){this.name="sphere"},new a([{source:this.assets.images.common.ball(),frames:[[0,0,32,32]],frame:0,destination:[0,0,0,32,32]}])])}.call(this);this.world.add(n),this.world.add(t),this.world.add(e)}n.d(e,"a",function(){return l})},function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){var e=this;Object.entries(t).forEach(function(t){var n=i(t,2),r=(n[0],n[1]),s=r.get("forces"),o=r.get("position"),a=[];s.parts.forEach(function(t){var n=!1===t.ending,i=t.duration-t.elapsed,s=!1===n&&e.delta.update>i?i:e.delta.update,h=(t.elapsed+s)/t.duration,c={x:t.x*t.easing(h),y:t.y*t.easing(h)};if(o.x+=c.x-t.moved.x,o.y+=c.y-t.moved.y,t.moved=c,t.elapsed+=e.delta.update,"function"==typeof t.handling){t.handling(r,t.moved.x,t.moved.y,t.elapsed,function(){a.push(t)})}t.elapsed>=t.duration&&"function"==typeof t.ending&&-1===a.indexOf(t)&&(t.ending(r,t.moved.x,t.moved.y,t.elapsed),a.push(t))}),s.parts=s.parts.filter(function(t){return-1===a.indexOf(t)})})}var s=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t){var e=this;Object.entries(t).forEach(function(t){var n=o(t,2),i=(n[0],n[1]);e.inputs.forEach(function(t){var e=i.get("input").inputs.indexOf(t.action);if(-1!==e&&"DOWN"===t.state)switch(e){case 0:i.add([new s.a([{x:0,y:-5,duration:10}])]);break;case 1:i.add([new s.a([{x:0,y:5,duration:10}])])}else if(-1!==e&&"UP"===t.state)switch(e){case 0:case 1:i.remove("forces")}})})}function h(t,e){this.x=t,this.y=e}function c(t,e,n,i){this.height=i,this.width=n,this.x=t,this.y=e}var u={collidePointPoint:function(t,e){if(t.x!==e.x||t.y!==e.y)return!1;return!0},collidePointRectangle:function(t,e){if(t.x<e.x||t.x>e.x+e.width||t.y<e.y||t.y>e.y+e.height)return!1;return!0},collideRectangleRectangle:function(t,e){if(t.x+t.width<e.x||t.x>e.x+e.width||t.y+t.height<e.y||t.y>e.y+e.height)return!1;return!0}};function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(t){Object.entries(t).forEach(function(e){var n=f(e,2),i=n[0],r=n[1];if("ball"===i){var o=r.get("position"),a=r.get("hitbox"),l=r.get("forces"),d=new c(o.x,o.y,a.width,a.height);Object.entries(t).forEach(function(t){var e=f(t,2),n=(e[0],e[1]);if(n.name!=i){var o=new c(n.get("position").x,n.get("position").y,n.get("hitbox").width,n.get("hitbox").height);if(function(t,e){var n=[],i="collide";return t instanceof h==1&&(n.push(t),i+="Point"),e instanceof h==1&&(n.push(e),i+="Point"),-1===n.indexOf(t)&&t instanceof c==1&&(n.push(t),i+="Rectangle"),-1===n.indexOf(e)&&e instanceof c==1&&(n.push(e),i+="Rectangle"),u[i].apply(null,n)}(d,o)){var a=function(t,e){var n={x:0,y:0},i=t.x+t.width/2-(e.x+e.width/2),r=t.y+t.height/2-(e.y+e.height/2),s=t.width/2+e.width/2,o=t.height/2+e.height/2;if(Math.abs(i)<s&&Math.abs(r)<o){!1===n.active&&(n.active=!0);var a=s-Math.abs(i),h=o-Math.abs(r);a>=h?n.y=r>0?h:-h:n.x=i>0?a:-a}return n}(d,o),p=a.x>0?5:-5,y=n.get("forces"),g=a.y+l.parts[0].y;y&&y.parts.length>0&&(g+=y.parts[0].y),r.add([new s.a([{x:p,y:g,duration:30}])])}}})}})}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t){var e=this;Object.entries(t).forEach(function(t){var n=d(t,2),i=(n[0],n[1]),r=i.get("position"),o=i.get("hitbox"),a=i.get("forces"),h=i.get("zone");r.x<0?e.restart():r.x+o.width>h.frame[0].width&&e.restart(),(r.y<0||r.y+o.height>h.frame[0].height)&&i.add([new s.a([{x:a.parts[0].x,y:-a.parts[0].y,duration:a.parts[0].duration}])])})}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t){Object.entries(t).forEach(function(t){var e=y(t,2),n=(e[0],e[1]),i=n.get("position"),r=n.get("hitbox"),s=(n.get("forces"),n.get("zone"));i.y<0?(i.y=0,n.remove("forces")):i.y+r.height>s.frame[0].height&&(i.y=s.frame[0].height-r.height,n.remove("forces"))})}function A(){this.world.system(["forces","position"],r),this.world.system(["input"],a),this.world.system(["hitbox","position"],l),this.world.system(["hitbox","position","sphere"],p),this.world.system(["hitbox","position","ping"],g),this.inputs.length=0}n.d(e,"a",function(){return A})},function(t,e,n){"use strict";var i=n(1);var r=[];r[9]="TAB",r[13]="ENTER",r[16]="SHIFT",r[17]="CTRL",r[18]="ALT",r[27]="ESC",r[32]="SPACE",r[37]="LEFT",r[38]="UP",r[39]="RIGHT",r[40]="DOWN",r[48]="ZERO",r[49]="ONE",r[50]="TWO",r[51]="THREE",r[52]="FOUR",r[53]="FIVE",r[54]="SIX",r[55]="SEVEN",r[56]="EIGHT",r[57]="NINE",r[65]="A",r[66]="B",r[67]="C",r[68]="D",r[69]="E",r[70]="F",r[71]="G",r[72]="H",r[73]="I",r[74]="J",r[75]="K",r[76]="L",r[77]="M",r[78]="N",r[79]="O",r[80]="P",r[81]="Q",r[82]="R",r[83]="S",r[84]="T",r[85]="U",r[86]="V",r[87]="W",r[88]="X",r[89]="Y",r[90]="Z";var s=38,o=40,a=83,h=90,c=n(2);function u(){console.log("setup demo scene"),this.camera=new function(t,e,n){var r=[],s={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}};this.position={x:0,y:0},this.size={width:e,height:n},this.add=function(t){for(var e=0,n=r.length-1;n>=0;n-=1){var i=r[n];if(t.destination.z>=i.destination.z){e=n+1;break}}r.splice(e,0,t)},this.idle=function(){s={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}}},this.render=function(){var e=this;r.forEach(function(n){var i=n.destination,r=n.frame,o=n.opacity,a=n.source;if(o>0&&!0===e.visible(i.x,i.y,i.width,i.height)){var h=t.globalAlpha;t.globalAlpha=o,t.drawImage(a,r.x,r.y,r.width,r.height,i.x-(e.position.x+s.shift.x),i.y-(e.position.y+s.shift.y),i.width,i.height),t.globalAlpha=h}}),r=[]},this.set=function(t,e){this.position.x=t,this.position.y=e},this.shake=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.c(i.a(2));this.idle(),s.force={x:t,y:e},s.current=!0,s.duration=n,s.easing=r},this.update=function(t){if(!1!==s.current)if(s.elapsed+t>=s.duration)this.idle();else{s.elapsed+=t;var e=s.easing(s.elapsed/s.duration),n=2*Math.random()*Math.PI;s.shift.x=Math.round(Math.cos(n)*s.force.x*e),s.shift.y=Math.round(Math.sin(n)*s.force.y*e)}},this.visible=function(t,e,n,i){var r=this.position.x+s.shift.x,o=this.position.y+s.shift.y,a=this.size.width,h=this.size.height;return!(t+n<=r||t>=r+a||e+i<=o||e>=o+h)}}(this.context,this.size.width,this.size.height),this.zone=[],c.a.call(this),this.inputs=[],this.keyboard=new function(t,e){var n=[],i={};function s(){for(var t in i)i.hasOwnProperty(t)&&!0===i[t]&&(i[t]=!1,e.push({type:"KEYBOARD",action:t,state:"UP"}))}function o(r){var s=r.keyCode,o=t.indexOf(s);-1!==o&&!1===i[n[o]]&&(r.preventDefault(),i[n[o]]=!0,e.push({type:"KEYBOARD",action:n[o],state:"DOWN"}))}function a(r){var s=r.keyCode,o=t.indexOf(s);-1!==o&&!0===i[n[o]]&&(r.preventDefault(),i[n[o]]=!1,e.push({type:"KEYBOARD",action:n[o],state:"UP"}))}function h(){addEventListener("blur",s),addEventListener("keydown",o),addEventListener("keyup",a)}t.forEach(function(e){if(void 0!==r[e]){var s="KEY_"+r[e];t.push(e),n.push(s),i[s]=!1}}),h.call(this),this.destroy=function(){removeEventListener("blur",s),removeEventListener("keydown",o),removeEventListener("keyup",a)},this.setup=h}([s,o,h,a],this.inputs)}n.d(e,"a",function(){return u})},function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){var e=this;Object.entries(t).forEach(function(t){var n=i(t,2),r=(n[0],n[1]),s=r.get("camera"),o=r.get("images"),a=r.get("position"),h=r.get("zone");o.parts.forEach(function(t){var n=t.destination,i=t.frame,r=t.framerate,o=t.frames,c=t.opacity,u=t.source;if(o.length>1){t.elapsed+=e.delta.render;for(var f=1e3/r;t.elapsed>=f;)t.elapsed-=f,t.frame=i===o.length-1?0:i+1}s.camera.add({source:u,frame:{x:o[t.frame][2]*o[t.frame][0],y:o[t.frame][3]*o[t.frame][1],width:o[t.frame][2],height:o[t.frame][3]},destination:{x:(a.x+n[0]+h.frame[0].x)*h.frame[0].scale,y:(a.y+n[1]+h.frame[0].y)*h.frame[0].scale,z:(a.z+n[2]+h.frame[0].z)*h.frame[0].scale,width:n[3]*h.frame[0].scale,height:n[4]*h.frame[0].scale},opacity:s.opacity*c})})})}function s(){this.context.fillStyle="#d7dae0",this.context.fillRect(0,0,this.size.width,this.size.height),this.context.fillStyle="#000000",this.context.fillRect(this.zone[0].x*this.zone[0].scale,this.zone[0].y*this.zone[0].scale,this.zone[0].width*this.zone[0].scale,this.zone[0].height*this.zone[0].scale),this.world.system(["images","position"],r),this.camera.render()}n.d(e,"a",function(){return s})},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAYAAAB8InCYAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAFRJREFUaIHtzjEBADAIxMCnS7VUGv4FFBksFwO56vt+FjubcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAJBluAwJY4NotAAAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAMRJREFUWIXtl7EVwyAMRA8/D0PGSJ3RPItnyihORR4mkoAgAQXX+dm6+xwUxgGA9x4KcsnzVTK0A8Dznc6KyhlXme1Kody3WZhNObx6VmqgJZjyIdvgGtAKz3pSABbhrHfJGTBVCmC5ejJj4170gphuC4YB9Kw/6IoBhmkBLIAFEACqfqOU5GKAYZoKoOc2fLPSBnpA3DKm2oIgyxZ+vLkGLCBIT+leEAZa/xXExZScgZY2srOld8PYaMjl9O8ASa/zeHwAksMXkqW9xfwAAAAASUVORK5CYII="},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"loading",function(){return a}),n.d(i,"demo",function(){return h});var r=[{name:"player",scope:"common",type:"image",source:n(17)},{name:"ball",scope:"common",type:"image",source:n(18)}];function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=[].concat(s([]),s(r),s([])),a=n(3),h=n(11);new function(t){var e=t.assets,n=t.container,i=t.scenes,r=t.expose||!1,s=t.framerate||60,o=t.sharp||!1,a=t.speed||1,h={height:n.offsetHeight,width:n.offsetWidth},c=null,u=!1;this.preloading=!1,this.scenes=i,this.size=h,this.state={},this.version="0.33.0",this.load=function(t){c=t},this.restart=function(){u=!0},function(){var t=this,i=new function(t,e,n,i){var r=document.createElement("canvas"),s=r.getContext(t),o=window.devicePixelRatio||1;function a(t,e){r.setAttribute("height",o*e),r.setAttribute("width",o*t),r.style.height=e+"px",r.style.width=t+"px",s.scale(o,o)}r.setAttribute("id",e),a(n,i),this.context=s,this.element=r,this.resize=a,this.sharp=function(){r.style.imageRendering="-moz-crisp-edges",r.style.imageRendering="-webkit-crisp-edges",r.style.imageRendering="crisp-edges",r.style.imageRendering="pixelated",s.imageSmoothingEnabled=!1}}("2d","theatre",this.size.width,this.size.height);!0===o&&i.sharp(),n.appendChild(i.element),this.container=n,this.context=i.context,this.element=i.element,this.assets={},this.delta={},this.delta.render=0,this.delta.update=0,this.scene=this.scenes.loading,this.scene.setup.call(this),this.scene.start.call(this);var r=new function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,i=null,r=null;this.framerate=t,this.speed=e,this.render=function(t){var e=Date.now();null!==i&&t(e-i),requestAnimationFrame(this.render.bind(this,t)),i=e},this.update=function(t){var e=Date.now();for(null!==r&&(n+=e-r);n>=1e3/this.framerate/this.speed;)n-=1e3/this.framerate/this.speed,t(1e3/this.framerate);r=e,setTimeout(this.update.bind(this,t),1e3/Math.max(this.framerate,60))}}(s,a);r.update(function(e){return t.delta.update=e,t.scene.update.call(t),!0===u?(t.scene.start.call(t),void(u=!1)):null!==c?(t.scene.destroy.call(t),t.scene=t.scenes[c],t.scene.setup.call(t),t.scene.start.call(t),void(c=null)):void 0}),r.render(function(e){t.delta.render=e,n.offsetWidth===t.size.width&&n.offsetHeight===t.size.height||(t.size.width=n.offsetWidth,t.size.height=n.offsetHeight,i.resize(t.size.width,t.size.height),!0===o&&i.sharp(),t.scene.resize.call(t)),t.scene.render.call(t)}),function(t,e){var n=[];t.forEach(function(t){var e=new Promise(function(e,n){if("dataset"===t.type&&(t.getter=function(){return t.source},e(t)),"image"===t.type){var i=new Image;i.src=t.source,i.onload=function(){t.getter=function(){return i},e(t)}}else if("sound"===t.type){var r=new Audio(t.source);r.oncanplaythrough=function(){t.getter=function(){return r.cloneNode()},e(t)}}});n.push(e)}),Promise.all(n).then(e)}(e,function(e){e.forEach(function(e){void 0===t.assets[e.type+"s"]&&(t.assets[e.type+"s"]={}),void 0===t.assets[e.type+"s"][e.scope]&&(t.assets[e.type+"s"][e.scope]={}),t.assets[e.type+"s"][e.scope][e.name]=e.getter}),t.preloading=!1}),this.loop=r,this.preloading=!0}.call(this,t),!0===r&&(window.theatre=this)}({assets:o,container:document.body,expose:!0,scenes:i,sharp:!0})}]);
//# sourceMappingURL=index.js.map