(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77a3540c"],{be3d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{timeout:t.timeout,absolute:"",top:"",center:""},model:{value:t.isShowing,callback:function(e){t.isShowing=e},expression:"isShowing"}},[t._v(" \n"+t._s(t.SNACK_MSG)+"\n")])},a=[],c=i("2f62"),o={name:"snack",data(){return{timeout:4e3,forceHide:!1}},methods:{...Object(c["d"])(["SET_SNACK_MSG"])},watch:{SNACK_MSG(t){t&&(this.forceHide=!0,this.$nextTick(()=>this.forceHide=!1))}},computed:{...Object(c["c"])(["SNACK_MSG"]),isShowing:{get(){return this.SNACK_MSG&&!this.forceHide},set(t){!t&&this.SET_SNACK_MSG(!1)}}}},n=o,h=i("2877"),r=i("6544"),u=i.n(r),l=(i("ca71"),i("a9ad")),v=i("f2e7"),d=i("fe6c"),m=i("58df"),b=i("d9bd"),k=Object(m["a"])(l["a"],v["a"],Object(d["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(b["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),p=Object(h["a"])(n,s,a,!1,null,null,null);e["default"]=p.exports;u()(p,{VSnackbar:k})},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-77a3540c.cad34bf5.js.map