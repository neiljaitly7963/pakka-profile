(this.webpackJsonppakka=this.webpackJsonppakka||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),s=(a(35),a(21)),l=a(22),i=a(25),d=a(24),m=(a(36),a(37),a(38),function(e){var t=e.lettersArray,a=e.createWord;return n.a.createElement("div",null,t.map((function(e,t){return n.a.createElement("button",{onClick:a.bind(void 0,t),id:t,key:t},n.a.createElement("span",{className:"letter"},n.a.createElement("p",{className:"lettertext"},e)))})))}),u=a(66),g=a(70),E=a(74),f=a(73),p=a(68),w=a(71),h=a(72),v=a(69),y=a(75),A=(a(39),Object(u.a)({table:{minWidth:650}}));function b(e){var t=e.wordsArray,a=A();return n.a.createElement(p.a,{component:v.a},n.a.createElement(g.a,{className:a.table,"aria-label":"simple table"},n.a.createElement(w.a,null,n.a.createElement(h.a,null,n.a.createElement(f.a,null,"Word"),n.a.createElement(f.a,{align:"right"},"Count"),n.a.createElement(f.a,{align:"right"},"Action"))),n.a.createElement(E.a,null,t.map((function(e){return n.a.createElement(h.a,{key:e},n.a.createElement(f.a,{component:"th",scope:"row"},e),n.a.createElement(f.a,{align:"right"},n.a.createElement("div",{className:"circle"},n.a.createElement("span",{className:"count"},e.length))),n.a.createElement(f.a,{align:"right"},n.a.createElement(y.a,null,"Remove")))})))))}a(44);var k=function(e){var t=e.wordInProgress,a=e.addWord;return n.a.createElement("div",{className:"Input"},n.a.createElement("p",null,t),n.a.createElement(y.a,{variant:"contained",color:"secondary",onClick:a},"Add"))},P=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).createWord=function(e){var t=r.state.wordInProgress;console.log(t,"before"),t+=r.state.lettersArray[e],console.log(t,"after"),r.setState({wordInProgress:t},(function(){return console.log(r.state.wordInProgress)}))},r.addWord=function(){if(""!==r.state.wordInProgress){var e=JSON.parse(JSON.stringify(r.state.wordsArray));e.push(r.state.wordInProgress),r.setState({wordsArray:e},(function(){return r.setState({wordInProgress:""})}))}else alert("Please click on letters to create a word!")},r.state={lettersArray:["P","L","P","T","S","A","C","E","H","D"],wordsArray:[],wordInProgress:""},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m,{lettersArray:this.state.lettersArray,createWord:this.createWord}),n.a.createElement(k,{wordInProgress:this.state.wordInProgress,addWord:this.addWord}),n.a.createElement(b,{wordsArray:this.state.wordsArray}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.64510c6f.chunk.js.map