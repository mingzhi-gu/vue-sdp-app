(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2365"],{"7e78":function(o,e,r){"use strict";r.r(e);var t=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("a-form-model",o._b({ref:"loginForm",attrs:{model:o.loginForm,rules:o.rules}},"a-form-model",o.layout,!1),[r("a-form-model-item",{attrs:{"has-feedback":"",label:"邮箱",prop:"email"}},[r("a-input",{model:{value:o.loginForm.email,callback:function(e){o.$set(o.loginForm,"email",e)},expression:"loginForm.email"}})],1),r("a-form-model-item",{attrs:{"has-feedback":"",label:"密码",prop:"password"}},[r("a-input",{attrs:{type:"password",autocomplete:"off"},model:{value:o.loginForm.password,callback:function(e){o.$set(o.loginForm,"password",e)},expression:"loginForm.password"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return o.submitForm("loginForm")}}},[o._v(" 提交 ")]),r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return o.resetForm("loginForm")}}},[o._v(" 重置 ")])],1)],1)},a=[],s=r("5530"),n=r("2f62"),l={data:function(){var o=/^[\w-]+@[\w.-]+.com/,e=function(e,r,t){return r?o.test(r)?t():t(new Error("请输入正确的邮箱格式")):t(new Error("请输入邮箱"))},r=function(o,e,r){""===e?r(new Error("Please input the password")):r()};return{loginForm:{password:"123456",email:"137925357@qq.com"},rules:{password:[{validator:r,trigger:"change"}],email:[{validator:e,trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["setUser"])),{},{submitForm:function(o){var e=this;this.$refs[o].validate((function(o){return o?(e.$axios.login(e.loginForm).then((function(o){console.log(o.data.data),"success"===o.data.status?(e.setUser(o.data.data),console.log(e.$store.state.user),e.$router.push({name:"Home"})):"fail"===o.data.status&&e.$message.error(o.data.msg)})).catch((function(o){console.log(o),e.$message.error(o)})),!0):(console.log("error submit!!"),!1)}))},resetForm:function(o){this.$refs[o].resetFields()}})},i=l,m=r("2877"),c=Object(m["a"])(i,t,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e2365.8621b4fd.js.map