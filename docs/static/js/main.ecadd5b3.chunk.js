(this["webpackJsonpset-trainer"]=this["webpackJsonpset-trainer"]||[]).push([[0],{13:function(e,r,l){},14:function(e,r,l){},15:function(e,r,l){"use strict";l.r(r);var i=l(0),n=l.n(i),s=l(5),t=l.n(s),p=(l(13),l(3)),a=l(2),o=l(6),g=l(7);l(14);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("img",{alt:"",src:e.img,onClick:e.onClick}))},d=["green-double-outline-capsule.jpg","green-double-outline-diamond.jpg","green-double-outline-squiggle.jpg","green-double-solid-capsule.jpg","green-double-solid-diamond.jpg","green-double-solid-squiggle.jpg","green-double-stripes-capsule.jpg","green-double-stripes-diamond.jpg","green-double-stripes-squiggle.jpg","green-single-outline-capsule.jpg","green-single-outline-diamond.jpg","green-single-outline-squiggle.jpg","green-single-solid-capsule.jpg","green-single-solid-diamond.jpg","green-single-solid-squiggle.jpg","green-single-stripes-capsule.jpg","green-single-stripes-diamond.jpg","green-single-stripes-squiggle.jpg","green-triple-outline-capsule.jpg","green-triple-outline-diamond.jpg","green-triple-outline-squiggle.jpg","green-triple-solid-capsule.jpg","green-triple-solid-diamond.jpg","green-triple-solid-squiggle.jpg","green-triple-stripes-capsule.jpg","green-triple-stripes-diamond.jpg","green-triple-stripes-squiggle.jpg","purple-double-outline-capsule.jpg","purple-double-outline-diamond.jpg","purple-double-outline-squiggle.jpg","purple-double-solid-capsule.jpg","purple-double-solid-diamond.jpg","purple-double-solid-squiggle.jpg","purple-double-stripes-capsule.jpg","purple-double-stripes-diamond.jpg","purple-double-stripes-squiggle.jpg","purple-single-outline-capsule.jpg","purple-single-outline-diamond.jpg","purple-single-outline-squiggle.jpg","purple-single-solid-capsule.jpg","purple-single-solid-diamond.jpg","purple-single-solid-squiggle.jpg","purple-single-stripes-capsule.jpg","purple-single-stripes-diamond.jpg","purple-single-stripes-squiggle.jpg","purple-triple-outline-capsule.jpg","purple-triple-outline-diamond.jpg","purple-triple-outline-squiggle.jpg","purple-triple-solid-capsule.jpg","purple-triple-solid-diamond.jpg","purple-triple-solid-squiggle.jpg","purple-triple-stripes-capsule.jpg","purple-triple-stripes-diamond.jpg","purple-triple-stripes-squiggle.jpg","red-double-outline-capsule.jpg","red-double-outline-diamond.jpg","red-double-outline-squiggle.jpg","red-double-solid-capsule.jpg","red-double-solid-diamond.jpg","red-double-solid-squiggle.jpg","red-double-stripes-capsule.jpg","red-double-stripes-diamond.jpg","red-double-stripes-squiggle.jpg","red-single-outline-capsule.jpg","red-single-outline-diamond.jpg","red-single-outline-squiggle.jpg","red-single-solid-capsule.jpg","red-single-solid-diamond.jpg","red-single-solid-squiggle.jpg","red-single-stripes-capsule.jpg","red-single-stripes-diamond.jpg","red-single-stripes-squiggle.jpg","red-triple-outline-capsule.jpg","red-triple-outline-diamond.jpg","red-triple-outline-squiggle.jpg","red-triple-solid-capsule.jpg","red-triple-solid-diamond.jpg","red-triple-solid-squiggle.jpg","red-triple-stripes-capsule.jpg","red-triple-stripes-diamond.jpg","red-triple-stripes-squiggle.jpg"],c=[["red","green","purple"],["single","double","triple"],["solid","stripes","outline"],["diamond","squiggle","capsule"]],m=function(){function e(r,l){Object(o.a)(this,e),this.updateRight=r,this.updateWrong=l}return Object(g.a)(e,[{key:"randomCard",value:function(){var e=Math.floor(Math.random()*d.length);return n.a.createElement(u,{img:"labeled/"+d[e],fname:d[e],key:d[e],onClick:this.updateWrong})}},{key:"removeDuplicates",value:function(e,r,l,i){for(var n={},s={},t=0,p=[e,r,l];t<p.length;t++){s[p[t].props.fname]=!0}i=f(i),n[l.props.fname]=l;var o,g=Object(a.a)(i);try{for(g.s();!(o=g.n()).done;){var u=o.value;Object.keys(n).length>=6||(u.props.fname in s||(s[u.props.fname]=!0,n[u.props.fname]=u))}}catch(c){g.e(c)}finally{g.f()}for(;Object.keys(n).length<6;){var d=this.randomCard();d.props.fname in s||(s[d.props.fname]=!0,n[d.props.fname]=d)}return f(Object.values(n))}},{key:"answerFromArray",value:function(e){for(var r="",l=0;l<e.length;l++)0!==l&&(r+="-"),r+=e[l];return r+=".jpg"}},{key:"getCloseAnswers",value:function(e){for(var r=[],l=0;l<e.length;l++){for(var i=[],s=0;s<e.length;s++)if(l!==s)i.push(e[s]);else{var t=e[s],p=v(c[l],t);i.push(p)}r.push(i)}for(var a=[],o=0,g=r;o<g.length;o++){var d=g[o],m=n.a.createElement(u,{img:"labeled/"+this.answerFromArray(d),fname:this.answerFromArray(d),onClick:this.updateWrong,key:this.answerFromArray(d)});a.push(m)}return a}},{key:"randomTwoCards",value:function(){for(var e=this.randomCard(),r=this.randomCard();e.props.fname===r.props.fname;)r=this.randomCard();return[e,r]}},{key:"getOtherCards",value:function(e,r){for(var l=e.props.fname.slice(0,-4),i=r.props.fname.slice(0,-4),s=l.split("-"),t=i.split("-"),p=[],a=0;a<4;a++)if(s[a]!==t[a]){var o=j(c[a],s[a],t[a]);p.push(o)}else p.push(s[a]);var g=n.a.createElement(u,{img:"labeled/"+this.answerFromArray(p),fname:this.answerFromArray(p),onClick:this.updateRight,key:"correctAnswer"}),d=this.getCloseAnswers(p);return d=d.concat([this.randomCard(),this.randomCard(),this.randomCard()]),this.removeDuplicates(e,r,g,d)}}]),e}();function j(e,r,l){var i,n=Object(a.a)(e);try{for(n.s();!(i=n.n()).done;){var s=i.value;if(s!==r&&s!==l)return s}}catch(t){n.e(t)}finally{n.f()}}function h(e){return JSON.parse(JSON.stringify(e))}var f=function(e){for(var r,l,i=e.length;0!==i;)l=Math.floor(Math.random()*i),r=e[i-=1],e[i]=e[l],e[l]=r;return e};function v(e,r){var l,i=[],n=Object(a.a)(e);try{for(n.s();!(l=n.n()).done;){var s=l.value;s!==r&&i.push(s)}}catch(t){n.e(t)}finally{n.f()}return(i=f(i))[0]}var b=function(){var e=Object(i.useState)({correct:0,wrong:0,startTime:(new Date).getTime()/1e3,solveTime:-1}),r=Object(p.a)(e,2),l=r[0],s=r[1],t=new m((function(){var e=h(l);if(e.correct=e.correct+1,1===e.correct&&(e.startTime=(new Date).getTime()/1e3),20===e.correct){var r=(new Date).getTime()/1e3;e.solveTime=r-e.startTime}s(e)}),(function(){var e=h(l);alert("DWIGHT YOU IGNORANT SLUT"),e.wrong=e.wrong+1,s(e)})),a=t.randomTwoCards(),o=Object(p.a)(a,2),g=o[0],u=o[1],d=t.getOtherCards(g,u);return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"rowC"},g,u,n.a.createElement("div",{className:"scoreBoard"},n.a.createElement("h1",{className:"hr"}," Race To 20! "),n.a.createElement("h5",null,"Match The Top Two Cards"),n.a.createElement("p",null,"Correct: ",l.correct,n.a.createElement("br",null),"Wrong: ",l.wrong,-1!==l.solveTime&&n.a.createElement("h1",null,"Total Time: ",l.solveTime)))),n.a.createElement("div",{className:"rowC"},[d[0],d[1],d[2]]),n.a.createElement("div",{className:"rowC"},[d[3],d[4],d[5]])))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,r,l){e.exports=l(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ecadd5b3.chunk.js.map