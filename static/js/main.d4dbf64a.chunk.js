(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(16),a=n.n(i),o=n(7),s=n.n(o),l=n(17),u=n(5),p=(n(24),n(18)),j=n.n(p),h=(n(43),n(0)),b=function(e){var t=e.recipe;return Object(h.jsxs)("div",{className:"recipe-comp",children:[Object(h.jsx)("img",{className:"recipe-img",src:t.recipe.image,alt:""}),Object(h.jsx)("p",{className:"recipe-name",children:t.recipe.label})]})};var d=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),o=a[0],p=a[1],d=Object(c.useState)("vegan"),f=Object(u.a)(d,2),O=f[0],x=f[1],m="https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("081a4054","&app_key=").concat("3e95b25f50aa6f35579aaedb27187b4f","&health=").concat(O);function g(){return(g=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(m);case 2:t=e.sent,p(t.data.hits),console.log(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App-title",children:"Food Recipe Plaza"}),Object(h.jsxs)("form",{className:"app-search",onSubmit:function(e){e.preventDefault(),function(){g.apply(this,arguments)}()},children:[Object(h.jsx)("input",{type:"text",placeholder:"enter ingridient",value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("button",{className:"app_btn",type:"submit",value:"Search",children:"Search"}),Object(h.jsxs)("select",{className:"app-health",children:[Object(h.jsx)("option",{onClick:function(){return x("Vegan")},children:"Vegan"}),Object(h.jsx)("option",{onClick:function(){return x("Vegetarian")},children:"Vegetarian"}),Object(h.jsx)("option",{onClick:function(){return x("Egg-Free")},children:"Egg-Free"}),Object(h.jsx)("option",{onClick:function(){return x("Gluten-Free")},children:"Gluten-Free"}),Object(h.jsx)("option",{onClick:function(){return x("Keto-Friendly")},children:"Keto-Friendly"}),Object(h.jsx)("option",{onClick:function(){return x("Fish-Free")},children:"Fish-Free"}),Object(h.jsx)("option",{onClick:function(){return x("Alcohol-Free")},children:"Alcohol-Free"}),Object(h.jsx)("option",{onClick:function(){return x("Dairy-Free")},children:"Dairy-Free"}),Object(h.jsx)("option",{onClick:function(){return x("Mustard-Free")},children:"Mustard-Free"})]})]}),Object(h.jsx)("div",{className:"app-recipe",children:o.map((function(e){return Object(h.jsx)(b,{recipe:e})}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.d4dbf64a.chunk.js.map