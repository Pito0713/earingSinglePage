(function(t){function r(r){for(var e,c,i=r[0],n=r[1],u=r[2],l=0,h=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(r);while(h.length)h.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,r=0;r<s.length;r++){for(var o=s[r],e=!0,i=1;i<o.length;i++){var n=o[i];0!==a[n]&&(e=!1)}e&&(s.splice(r--,1),t=c(c.s=o[0]))}return t}var e={},a={app:0},s=[];function c(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=e,c.d=function(t,r,o){c.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,r){if(1&r&&(t=c(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)c.d(o,e,function(r){return t[r]}.bind(null,e));return o},c.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(r,"a",r),r},c.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},c.p="/earingSinglePage/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=r,i=i.slice();for(var u=0;u<i.length;u++)r(i[u]);var d=n;s.push([0,"chunk-vendors"]),o()})({0:function(t,r,o){t.exports=o("56d7")},"034f":function(t,r,o){"use strict";o("85ec")},2474:function(t,r,o){},5300:function(t,r,o){},"56d7":function(t,r,o){"use strict";o.r(r);o("e260"),o("e6cf"),o("cca6"),o("a79d");var e=o("2b0e"),a=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{attrs:{id:"app"}},[o("Navbar",{attrs:{id:"nav"}}),o("productInfo",{attrs:{id:"Production"}}),o("Footer")],1)},s=[],c=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("nav",{staticClass:"nav"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:o("7c04"),alt:"logo"}})]),e("div",{staticClass:"navBranch"},[e("ul",[e("li",{staticClass:"nav-Item"},[e("a",{attrs:{href:"https://pito0713.github.io/earIngProudct"}},[t._v("耳環 Earrings")])]),e("li",{staticClass:"nav-Item"},[e("a",{attrs:{href:"https://pito0713.github.io/carcartEaring/"}},[t._v("購物車 Cart")])])])])])}],n={data:function(){return{}}},u=n,d=(o("95a5"),o("2877")),l=Object(d["a"])(u,c,i,!1,null,"0149df87",null),h=l.exports,f=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{attrs:{id:"app"}},[t._l(t.Products,(function(r,e){return o("div",{key:r[0]+e,staticClass:"ProductItem"},[o("div",{staticClass:"ProductImg",staticStyle:{flex:"50%"}},[o("img",{attrs:{src:r[7]}})]),o("div",{staticClass:"ProductItemInfo",staticStyle:{flex:"50%"}},[o("div",{staticClass:"ProductName"},[o("a",[t._v(t._s(r[2]))])]),o("div",{staticClass:"ProuductDescription",domProps:{innerHTML:t._s(r[6])}}),o("div",{staticClass:"ProuductPrice"},[o("a",[t._v("NT: "+t._s(r[3]))]),o("br"),o("a",{staticStyle:{"font-size":"1.2rem"}},[t._v("下單"+t._s(t.textComputedStk)+"個")]),o("a",{staticStyle:{"font-size":"1.2rem"}},[t._v("共$"+t._s(t.TotalPrice))]),o("br"),o("a",{staticStyle:{"font-size":"1.2rem"}},[t._v("目前庫存 "+t._s(t.textComputed)+"付")])]),o("div",{staticClass:"AddProduct"},[o("button",{on:{click:t.addProdcut}},[o("a",[t._v("+1")])]),o("button",{on:{click:t.cutProdcut}},[o("a",[t._v("-1")])]),o("button",{on:{click:function(r){t.addCartbackData(),t.coverBackData()}}},[o("a",[t._v("送出訂單")])])])])])})),o("div",{directives:[{name:"show",rawName:"v-show",value:t.reload,expression:"reload"}],staticClass:"reload"},[o("a",[t._v("重新載入")])])],2)},p=[],g=(o("4de4"),o("d3b7"),o("25f0"),o("1157")),m=o.n(g),P={data:function(){return{Products:[],ProductData:{},ProductDataStorage:"",ProductDataStorageStk:0,cartStorageStk:0,Carts:[],reload:!1}},methods:{addProdcut:function(){0===this.Products[0][4]?alert("庫存不夠惹"):(this.ProductDataStorage=this.Products[0][4]-1,this.Products[0][4]=this.ProductDataStorage,this.ProductDataStorageStk=this.ProductDataStorageStk+1)},cutProdcut:function(){this.ProductDataStorageStk>0&&(this.ProductDataStorage=this.Products[0][4]+1,this.Products[0][4]=this.ProductDataStorage,this.ProductDataStorageStk=this.ProductDataStorageStk-1)},addCartbackData:function(){this.filterCart(),void 0!==this.Carts[0]?this.cartStorageStk=this.ProductDataStorageStk+this.Carts[0][4]:this.cartStorageStk=this.ProductDataStorageStk;var t=[[this.Products[0][0],this.Products[0][1],this.Products[0][2],this.Products[0][3],this.cartStorageStk,this.Products[0][5],this.Products[0][6],this.Products[0][7],this.Products[0][8],this.Products[0][9]]],r={};r={url:"https://docs.google.com/spreadsheets/d/1RJiDnmyc0MZ9ySQy4u8_8PZTJe90LZCkTIs_NCDSjS8/edit#gid=0",name:"工作表1",data:t.toString(),row:this.Products[0][0]+1,column:this.Products[0].length},m.a.get("https://script.google.com/macros/s/AKfycbz-k7jYi1VMPguXmuvf7W2cZFb39JZD9_QnnuBYbH9Okm5vb4Ui/exec",r)},coverBackData:function(){var t=[[this.Products[0][0],this.Products[0][1],this.Products[0][2],this.Products[0][3],this.Products[0][4],this.Products[0][5],this.Products[0][6],this.Products[0][7],this.Products[0][8],this.Products[0][9]]],r={};r={url:"https://docs.google.com/spreadsheets/d/1nXquMbDuBjMx2Eo7qO1XBKNrJBm8xNGRGexuOFozlts/edit#gid=0",name:"工作表1",data:t.toString(),row:this.Products[0][0]+1,column:this.Products[0].length},m.a.get("https://script.google.com/macros/s/AKfycbxQ5_HzD8ow_wRBH839AXXptKL_JqbA1DsiO55iwsL33pyhshUA/exec",r);var o={};o={url:"https://docs.google.com/spreadsheets/d/1LhZ_9DO6JNX2Q7DO_HKRVDoGtyRGEp2ne-m_aIlYQq4/edit#gid=0",name:"工作表1",data:t.toString(),row:1,column:this.Products[0].length},m.a.get("https://script.google.com/macros/s/AKfycbzKEwZkfPc610W7d8w8cktq6OO2R8Tfw6GgmHe1aZVGDbkXlGQ/exec",o),this.reload=!this.reload,this.timer=setTimeout((function(){window.location.reload()}),1e3)},filterCart:function(){var t=this.Products[0][0];this.Carts=this.Carts.filter((function(r){return r[0]===t}))}},computed:{textComputed:function(){return this.ProductDataStorage},textComputedStk:function(){return this.ProductDataStorageStk},TotalPrice:function(){return this.ProductDataStorageStk*this.Products[0][3]}},mounted:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbxguddnzylMny9C4bu2lm3ojmd_NYQPw2HjfzmbrPVnV9laIX4/exec").then((function(t){return t.json()})).then((function(r){t.Products=r,t.ProductDataStorage=r[0][4]})),fetch("https://script.google.com/macros/s/AKfycbxLQARlHh9k7LbV8-ORSmVjIYAJtgphhKXFS0e6ypXmpAWJX8cV/exec").then((function(t){return t.json()})).then((function(r){t.Carts=r}))}},v=P,S=(o("c676"),Object(d["a"])(v,f,p,!1,null,"8c702ffe",null)),b=S.exports,_=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"footer"},[o("div",{staticClass:"sciocal"},[o("i",{staticClass:"fab fa-instagram",attrs:{href:"https://www.instagram.com/miruku.acc/"}}),o("a",{attrs:{href:"https://www.instagram.com/miruku.acc/"}},[t._v("miruku.acc")]),o("button",{staticClass:"my-2"},[o("a",{attrs:{href:"https://www.instagram.com/miruku.acc/"}},[t._v("follow")])])]),o("a",[t._v("© 2020.09.18 By Pito")])])}],k=(o("c94c"),{}),w=Object(d["a"])(k,_,y,!1,null,"50eedfdc",null),C=w.exports,D={name:"app",data:function(){return{}},components:{Navbar:h,productInfo:b,Footer:C}},x=D,O=(o("034f"),Object(d["a"])(x,a,s,!1,null,null,null)),j=O.exports,I=o("8c4f");e["a"].use(I["a"]);var A=new I["a"]({mode:"history",base:"/earingSinglePage/"}),E=A,T=o("2f62");e["a"].use(T["a"]);var X=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});e["a"].config.productionTip=!1,new e["a"]({router:E,store:X,render:function(t){return t(j)}}).$mount("#app")},"6feb":function(t,r,o){},"7c04":function(t,r,o){t.exports=o.p+"img/logo.a1002524.png"},"85ec":function(t,r,o){},"95a5":function(t,r,o){"use strict";o("2474")},c676:function(t,r,o){"use strict";o("5300")},c94c:function(t,r,o){"use strict";o("6feb")}});
//# sourceMappingURL=app.69635c87.js.map