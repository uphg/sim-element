import{n as c,r as u,a as m}from"./index.52b79b48.js";const i={__name:"number",setup(o){const t=u(0),r=u(0),e=u(0),n=u(0),l=u(1),a=u(1),s=u(null);function b(){console.log("blur \u89E6\u53D1\u4E86")}return m(()=>{s.value.focus()}),setTimeout(()=>{s.value.blur()},2e3),{__sfc:!0,number1:t,number2:r,number3:e,number4:n,number5:l,number6:a,numberRef:s,onBlur:b,ref:u,nextTick:m}}};var p=function(){var t=this,r=t._self._c,e=t._self._setupProxy;return r("div",{staticClass:"test-number"},[r("s-demo",[r("s-input",{ref:"numberRef",attrs:{type:"number",max:5,min:-1},on:{blur:e.onBlur},model:{value:e.number1,callback:function(n){e.number1=n},expression:"number1"}}),r("s-input",{attrs:{type:"number",disabled:""},model:{value:e.number2,callback:function(n){e.number2=n},expression:"number2"}}),r("s-input",{attrs:{type:"number",step:2},model:{value:e.number3,callback:function(n){e.number3=n},expression:"number3"}}),r("br"),r("br"),r("s-input",{attrs:{type:"number",step:2,"step-strictly":""},model:{value:e.number4,callback:function(n){e.number4=n},expression:"number4"}}),r("s-input",{attrs:{type:"number",precision:2,step:.1,max:10},model:{value:e.number5,callback:function(n){e.number5=n},expression:"number5"}}),r("s-input",{attrs:{type:"number",step:2,"controls-position":"right"},model:{value:e.number6,callback:function(n){e.number6=n},expression:"number6"}})],1)],1)},f=[],_=c(i,p,f,!1,null,null,null,null),d=_.exports;export{d as default};
