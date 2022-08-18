(function(e){function t(t){for(var o,s,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tree/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"moveInUp"}},[n("router-view")],1),n("Modal")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"},[n("div",{staticClass:"flex flex-col m-auto h-60 p-4 center rounded-lg bg-white shadow-lg"},[n("div",{staticClass:"bg-blue-900 w-full h-16 text-yellow-300 font-semibold uppercase text-center py-5 mb-5 rounded shadow-lg"},[e._v(" "+e._s(e.selected.name)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"mb-4 rounded"},[n("div",{staticClass:"font-semibold text-gray-800"},[e._v("Edit")]),n("div",{staticClass:"py-2 overflow-auto"},[n("span",{staticClass:"bg-orange-400 px-2 rounded inline-block"},[e._v(" "+e._s(e.activeNodeValue)+" ")])])]),n("div",{staticClass:"flex flex-wrap gap-1 mb-2"},e._l(e.optFormulas,(function(t){return n("div",{key:t.value,staticClass:"cursor-pointer bg-gray-400 px-2 py-1 rounded",on:{click:function(n){return e.handleSelect(t)}}},[n("span",{staticClass:"font-semibold text-pink-700"},[e._v(e._s(t.value.charAt(0).toUpperCase()))]),n("span",[e._v(e._s(t.value.substr(1)))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{change:function(t){return e.addMessage()},input:function(t){t.target.composing||(e.message=t.target.value)}}})])})),0),n("div",{staticClass:"justify-start flex gap-1"},[n("button",{staticClass:"p-2 bg-pink-600 text-white rounded mr-auto",on:{click:function(t){return t.preventDefault(),e.close.apply(null,arguments)}}},[e._v(" CANCEL ")]),n("button",{staticClass:"p-2 bg-orange-400 text-white rounded",on:{click:function(t){return t.preventDefault(),e.undo.apply(null,arguments)}}},[e._v(" UNDO ")]),n("button",{staticClass:"p-2 bg-blue-400 text-white rounded",on:{click:function(t){return t.preventDefault(),e.confirm.apply(null,arguments)}}},[e._v(" CONFIRM ")])])])]):e._e()},i=[],u=n("5530"),l=(n("d81d"),n("99af"),n("a15b"),n("b0c0"),n("2909")),c=(n("d3b7"),n("25f0"),n("7db0"),function(){var e=["entity"];return e.map((function(e){return{type:"formula",value:""+e,name:""}}))}()),d=function(){var e=[0,1,2,3,4,5,6,7,8,9];return e.map((function(e){return{type:"number",value:e}}))}(),f=function(e){var t=c.map((function(e){var t=e.value.substr(0,1);return Object(u["a"])(Object(u["a"])({},e),{},{key:t})})),n=Object(l["a"])(d).map((function(e){var t=e.value.toString();return Object(u["a"])(Object(u["a"])({},e),{},{key:t})})),o=[{type:"action",value:"Enter",key:"Enter"},{type:"action",value:"Escape",key:"Escape"},{type:"action",value:"Backspace",key:"Backspace"}];return t.find((function(t){return t.key===e}))||n.find((function(t){return t.key===e}))||o.find((function(t){return t.key===e}))},m={name:"Modal",data:function(){return{txtInput:"",showKBKey:!0,optFormulas:c,optNumbers:d,message:"",selected:{type:"",value:"",name:""},show:!1,editMode:!1,activeNode:null}},computed:{disabledNumber:function(){return this.editMode?!this.activeNode.parentId:!this.$store.getters.existFormula},cursorDisplay:function(){return this.disabledNumber?["text-gray-500","pointer-events-none"]:["cursor-pointer","hover:bg-gray-300","text-pink-700"]},activeNodeValue:function(){if(!this.editMode)return"";var e=this.activeNode;if("formula"===this.activeNode.type){var t=e.items.map((function(e){return"formula"===e.type?"".concat(e.value,"(...)"):e.value}));return"".concat(e.value,"(").concat(t.join(", "),")")}return e.value}},mounted:function(){var e=this;this.$bus.$on("show-panel",this.open),this.$bus.$on("close-panel",this.close),this.$once("hook:beforeDestroy",(function(){e.$bus.$off("show-panel",e.open),e.$bus.$off("close-panel",e.close)}))},methods:{addMessage:function(){this.messages.push(this.message)},open:function(e){this.show=!0,null!==e&&void 0!==e&&e.edit&&(this.editMode=!0),this.activeNode=null===e||void 0===e?void 0:e.activeNode,document.addEventListener("keydown",this.keyboardHandler)},close:function(){this.selected.type="",this.selected.value="",this.selected.name="",this.editMode=!1,this.show=!1,document.removeEventListener("keydown",this.keyboardHandler)},undo:function(){if(this.selected.type){if("number"===this.selected.type){var e=this.selected.value;this.selected.value=e.substr(0,e.length-1)}"operator"===this.selected.type&&(this.selected.value="")}},keyboardHandler:function(e){var t=f(e.key);if(t){if("number"===t.type&&!this.disabledNumber){var n={type:t.type,value:t.value};this.handleSelect(n)}if("formula"===t.type){var o={type:t.type,value:t.value};this.handleSelect(o)}if("action"===t.type)switch(t.key){case"Enter":this.confirm();break;case"Escape":this.close();break;case"Backspace":this.undo();break}}},confirm:function(){var e;if(this.selected.type||this.selected.value){var t=(new Date).getTime(),n=null===(e=this.activeNode)||void 0===e?void 0:e.id;this.editMode&&(t=this.activeNode.id,n=this.activeNode.parentId);var o=Object(u["a"])(Object(u["a"])({},this.selected),{},{id:t,parentId:n});"formula"===this.selected.type&&(o.items=[]),this.editMode?this.$store.commit("editNode",o):this.$store.commit("addNode",o),this.$bus.$emit("newMutation"),this.close()}else this.close()},handleSelect:function(e){this.selected.type=e.type,this.selected.value=e.value,this.selected.name=this.message}}},p=m,v=n("2877"),h=Object(v["a"])(p,s,i,!1,null,"39500a28",null),b=h.exports,g={name:"App",components:{Modal:b}},y=g,x=Object(v["a"])(y,r,a,!1,null,null,null),w=x.exports,k=(n("c740"),n("a434"),n("2f62")),C=n("b85c"),_=(n("b64b"),n("159b"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("1276"),n("b680"),function(e){return!!e&&0===Object.keys(e).length&&e.constructor===Object}),N=function e(t,n){if(t.id===n)return t;var o,r=Object(C["a"])(t.items);try{for(r.s();!(o=r.n()).done;){var a=o.value;if("formula"===a.type){var s=e(a,n);if(s)return s}}}catch(i){r.e(i)}finally{r.f()}},$=function(e){return e.reduce((function(e,t){return e*=t,e}),1)},j=function(e){return e.reduce((function(e,t){return e+t}))},O=function(e){return e.reduce((function(e,t){return e-t}))},S=function(e){return e.reduce((function(e,t){return e/t}))},M={multiply:$,addition:j,subtraction:O,division:S},F=function e(t){if(!(t.items&&t.items.length<2)){if(t.items.every((function(e){return"number"===e.type})))return M[t.value](E(t.items,"value"));var n=[];return t.items.forEach((function(t){"formula"===t.type?n.push(e(t)):n.push(+t.value)})),n.length===t.items.length?(console.log(t.value,n),console.log("total: ",M[t.value](n)),M[t.value](n)):void 0}},E=function(e,t){return e.map((function(e){return+e[t]}))},D=function(e,t){if(isNaN(e))throw"NumberFormatException: not a number";t&&"string"===typeof t||(t="0,000");var n=",",o=".",r=!1,a=e<0;e=Math.abs(e),"/i"===t.substr(t.length-2)&&(t=t.substr(0,t.length-2),r=!0,n=".",o=",");var s=t.includes(n),i=r?t.replace(/[^\d,]/g,""):t.replace(/[^\d.]/g,"");if(i=i.split(o),i.length>1)e=e.toFixed(i[1].length);else{if(i.length>2)throw"NumberFormatException: invalid format, formats should have no more than 1 period: "+t;e=e.toFixed(0)}var u=e.toString();if(i=u.split("."),s){var l,c=i[0],d=[],f=c.length,m=(Math.floor(f/3),c.length%3||3);for(l=0;l<f;l+=m)0!==l&&(m=3),d[d.length]=c.substr(l,m),1;u=d.join(n),i[1]&&(u+=o+i[1])}else i[1]&&(u=i[0]+o+i[1]);return(a?"-":"")+t.replace(/[\d,?.]+/,u)},I=n("cd3f");o["a"].use(k["a"]);var P=new k["a"].Store({state:{formula:{}},mutations:{addNode:function(e,t){if(_(e.formula))e.formula=t;else{var n=I(e.formula),o=N(n,t.parentId);o.items.push(t),e.formula=n}},editNode:function(e,t){if(t.parentId){var n=I(e.formula),o=N(n,t.parentId),r=o.items.findIndex((function(e){return e.id===t.id}));o.items.splice(r,1,t),e.formula=n}else e.formula=t},deleteNode:function(e,t){if(t.parentId){var n=I(e.formula),o=N(n,t.parentId),r=o.items.findIndex((function(e){return e.id===t.id}));o.items.splice(r,1),e.formula=n}else e.formula={}},resetFormula:function(){this.replaceState({formula:{}})}},actions:{},getters:{existFormula:function(e){return!_(e.formula)}}}),J=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-screen overflow-auto bg-blue-200 py-4"},[n("div",{staticClass:"w-1/2 mx-auto h-64"},[n("div",{staticClass:"mb-2 text-center text-3xl text-teal-700"},[e._v("Testing")]),n("div",{staticClass:"flex justify-between items-center py-2"},[n("div",{staticClass:"flex gap-2 mr-auto"},[n("p",{staticClass:"py-1 text-gray-700 font-bold"},[e._v(" "+e._s(e.result)+" ")])]),n("div",[n("div",{staticClass:"flex gap-2"},[n("button",{staticClass:"p-2 text-gray-300 rounded",class:e.existFormula?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.existFormula},on:{click:function(t){e.showJsonData=!e.showJsonData}}},[e._v(" Show Json data ")]),n("button",{staticClass:"p-2 text-gray-300 rounded",class:e.canUndo?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.canUndo},on:{click:e.undo}},[e._v(" UNDO ")]),n("button",{staticClass:"p-2 text-gray-300 rounded",class:e.canRedo?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.canRedo},on:{click:e.redo}},[e._v(" REDO ")])])])]),n("div",{staticClass:"bg-gray-200 py-4 px-2 shadow-lg border overflow-x-auto",staticStyle:{"max-height":"600px"}},[e.existFormula?e._e():n("div",{staticClass:"cursor-pointer bg-blue-500 text-white py-1 px-2 rounded w-40 mx-auto",on:{click:e.showPanel}},[e._v(" Add Something... ")]),e.existFormula?n("div",{staticClass:"text-teal-700 font-semibold text-xl mb-2"}):e._e(),n("nested-capsule-formula",{attrs:{formula:e.formula}}),e.existFormula?n("div",{staticClass:"text-teal-700 mt-10 font-semibold text-xl mb-2"},[e._v(" Tree view 🌲 ")]):e._e(),n("tree-view",{attrs:{formula:e.formula}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showJsonData,expression:"showJsonData"}],staticClass:"mt-5"},[n("div",{staticClass:"text-gray-700 font-semibold text-xl"},[e._v("Json Data")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonData,expression:"jsonData"}],staticClass:"w-full",attrs:{rows:"10"},domProps:{value:e.jsonData},on:{input:function(t){t.target.composing||(e.jsonData=t.target.value)}}})])])])},R=[],U=(n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("formula-render-less",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.editNode,r=t.deleteNode,a=t.addChild;return[e.formula&&e.formula.value?n("div",{ref:"ref-formula-"+e.formula.id,staticClass:"node-enter relative"},[n("div",{staticClass:"formula-name inline flex mb-1"},[n("span",{staticClass:"uppercase rounded-full font-semibold px-2 mr-1 cursor-pointer bg-orange-700 text-gray-200 hover:bg-orange-600",on:{click:function(t){e.showChildren=!e.showChildren}}},[e._v(" "+e._s(e.formula.value.charAt(0))+" ")]),n("div",{staticClass:"font-semibold text-gray-700 hover:text-gray-500 cursor-pointer",on:{click:function(t){return o(e.formula)}}},[e._v(" "+e._s(e.formula.value)+" "+e._s(e.formula.name)+" ")]),n("div",{staticClass:"formula-action"},[n("span",{staticClass:"mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(t){return r(e.formula)}}},[e._v(" remove ")]),n("span",{staticClass:"mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(t){return a(e.formula)}}},[e._v(" add ")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}],ref:"children-"+e.formula.id,staticClass:"flex flex-col gap-1 ml-3 rounded border-l-4 border-orange-700"},e._l(e.formula.items,(function(t){return n("div",{key:t.id,staticClass:"inline"},["number"===t.type?n("div",{staticClass:"number node-enter flex max-w-sm items-center"},[n("div",{staticClass:"w-4 h-1 bg-orange-700 inline mr-1 rounded-r"}),n("div",{staticClass:"rounded-xl bg-green-500 px-1 text-gray-700 font-medium cursor-pointer hover:text-gray-600 hover:bg-green-400",on:{click:function(e){return o(t)}}},[e._v(" "+e._s(t.value)+" ")]),n("span",{staticClass:"number-action font-semibold hover:text-gray-500 text-gray-700 mx-1 px-1 text-xs text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(e){return r(t)}}},[e._v(" remove ")])]):n("div",{staticClass:"flex max-w-sm items-baseline"},[n("div",{staticClass:"w-4 h-1 bg-orange-700 inline mr-1 rounded-r"}),n("tree-view",{attrs:{formula:t}})],1)])})),0)]):e._e()]}}])})}),A=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default",null,null,{addChild:e.addChild,editNode:e.editNode,deleteNode:e.deleteNode})],2)},K=[],L={name:"FormulaRenderLess",data:function(){return{}},methods:{addChild:function(e){this.$bus.$emit("show-panel",{activeNode:e})},editNode:function(e){this.$bus.$emit("show-panel",{edit:!0,activeNode:e})},deleteNode:function(e){var t=this;this.$bus.$emit("newMutation"),setTimeout((function(){t.$store.commit("deleteNode",e)}),500)}}},V=L,H=Object(v["a"])(V,B,K,!1,null,null,null),q=H.exports,z={name:"TreeView",components:{FormulaRenderLess:q},props:{formula:{type:Object,default:function(){}}},data:function(){return{showChildren:!0}}},G=z,Q=(n("c5ba"),Object(v["a"])(G,U,A,!1,null,"b7c7627c",null)),W=Q.exports,X={name:"FormulaBuilder",components:{TreeView:W},filters:{number:D},data:function(){return{result:"",undoStack:[],redoStack:[],showJsonData:!1}},computed:{formula:function(){return this.$store.state.formula},existFormula:function(){return this.$store.getters.existFormula},canUndo:function(){return this.undoStack.length},canRedo:function(){return this.redoStack.length},jsonData:function(){var e=function(e,t){return"undefined"===typeof t?null:t};return JSON.stringify(this.formula,e,4)}},created:function(){var e=this;this.$store.subscribe((function(t){"resetFormula"!==t.type&&e.undoStack.push(t)})),this.$bus.$on("newMutation",(function(){e.redoStack=[]}))},methods:{getResult:function(){try{var e=F(this.formula);this.result=this.$options.filters.number(e)}catch(t){console.error(t),this.result="There is formula that missing arguments..."}},showPanel:function(){this.$bus.$emit("show-panel")},undo:function(){var e=this;this.$store.commit("resetFormula");var t=this.undoStack.pop();this.redoStack.push(I(t)),this.undoStack.forEach((function(t){e.$store.commit("".concat(t.type),I(t.payload)),e.undoStack.pop()}))},redo:function(){var e=this.redoStack.pop();this.$store.commit("".concat(e.type),I(e.payload))}}},Y=X,Z=Object(v["a"])(Y,T,R,!1,null,"d1d3871c",null),ee=Z.exports;o["a"].use(J["a"]);var te=[{path:"/",component:ee},{path:"/formula",component:ee}],ne=new J["a"]({routes:te,base:"/formula-builder/",mode:"history",linkExactActiveClass:"active"}),oe=(n("034b"),new o["a"]),re=oe;o["a"].directive("keyboardKey",{bind:function(e,t,n){var o=t.modifiers,r=t.value;console.log(o),console.log(r),o.showKBKey&&r&&(console.log(t),console.log(n))}}),o["a"].prototype.$bus=re,o["a"].config.productionTip=!1,new o["a"]({store:P,router:ne,render:function(e){return e(w)}}).$mount("#app")},c5ba:function(e,t,n){"use strict";n("f96f")},f96f:function(e,t,n){}});
//# sourceMappingURL=app.2039dbe0.js.map