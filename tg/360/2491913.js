(function(g,s){var a=Math,b=encodeURIComponent,m="length",r="push",d="join",e="split",j="replace",n="toLowerCase";function o(u){return u==null?"":u.toString().replace(/^\s+/,"").replace(/\s+$/,"")}function t(w,v,u){w.addEventListener?w.addEventListener(v,u,false):w.attachEvent&&w.attachEvent("on"+v,u)}var f={};function c(u,w,v){u=o(u);if(!u||!w||!v){return}if(f[w]){f[w][r]({"selector":u,"handler":v})}else{f[w]=[{"selector":u,"handler":v}];t(s,w,function(x){x=x||window.event;p(x,w)})}}function p(A,w){var z=A.target||A.srcElement,y=f[w];if(!y){return}for(var v=0,u=y[m];v<u;v++){var x=k(z,y[v].selector);x&&y[v].handler&&(y[v].handler.call(x,A))}}function k(z,x){if(!z||!x){return null}var w=x[e](" "),v=[];for(var y=0,u=w.length;y<u;y++){w[y]&&v.push(w[y])}if(!h(z,v.pop())){if(z.ownerDocument&&(z=z.parentNode)){return k(z,x)}return null}var A=z;while(z&&z.ownerDocument&&(z=z.parentNode)){if(h(z,v[v[m]-1])){v.pop()}if(!v[m]){return A}}return null}function h(x,u){var v=/^(\w+)?(?:(\.|#)(\w+))?/.exec(o(u));if(!v){return false}if(v[1]){if(x.nodeName[n]()!=v[1][n]()){return false}}var w=true;switch(v[2]){case"#":w=x.id&&x.id==v[3];break;case".":w=x.className&&(new RegExp("(^|\\s)"+v[3]+"(\\s|$)")).test(x.className);break;default:break}return w}function l(x){var v=[];var w=function(z,y){var C=y instanceof Array,B=typeof(y),A;if(B=="object"&&y!==null){for(A in y){w(z+"["+(!C||typeof(y[A])=="object"?A:"")+"]",y[A])}}else{if(B!="function"){v[r](b(z)+"="+(y===null?"":b(y)))}}};for(var u in x){w(u,x[u])}return v[d]("&")[j](/%20/g,"+")}function q(v){if(typeof(v)!="object"){return 0}v.id="2491913";v.dl=g.location.href;v.dt=s.title;v.rf=s.referrer;v.ts=a.round((new Date()).getTime()/1000);var u=new Image(0,0);u.src="http://s.fenxi.gtanhao.com/collect?"+l(v);return true}var i=null;c(".manxing","touchstart",function(){i=(new Date)*1});c(".manxing","touchend",function(){var v;if(this.nodeName=="IMG"){var u=(this.src||"")[e]("/");v=u[m]?u[u[m]-1]:""}else{v=o(this.innerText||"")}(new Date)-i>=500&&q({"t":"event","ct":v})})})(window,document);