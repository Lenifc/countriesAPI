(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5434:function(t,a,n){},7985:function(t,a,n){"use strict";n("5434")},a15b:function(t,a,n){"use strict";var r=n("23e7"),s=n("44ad"),e=n("fc6a"),i=n("a640"),o=[].join,c=s!=Object,u=i("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(e(this),void 0===t?",":t)}})},a640:function(t,a,n){"use strict";var r=n("d039");t.exports=function(t,a){var n=[][t];return!!n&&r((function(){n.call(null,a||function(){throw 1},1)}))}},d81d:function(t,a,n){"use strict";var r=n("23e7"),s=n("b727").map,e=n("1dde"),i=e("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e138:function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[t.error?n("SearchError"):t._e(),t.isLoaded?n("div",{staticClass:"fullCard"},[n("BackButton"),n("div",{staticClass:"detailedCard row"},[n("div",{staticClass:"detailed-card-img"},[n("img",{attrs:{src:t.data.flag}})]),n("div",{staticClass:"detailed-card-text"},[n("div",{staticClass:"detailed-country-name"},[t._v(t._s(t.data.name))]),n("div",{staticClass:"details-row"},[n("div",{staticClass:"details-row1"},[n("div",{staticClass:"country-native-name"},[n("span",[t._v("Native Name: ")]),t._v(t._s(t.data.nativeName))]),n("div",{staticClass:"population"},[n("span",[t._v("Population:")]),t._v(" "+t._s(t.data.population?t.countryPopulation:"Unknown"))]),t._v(" "),n("div",{staticClass:"region"},[n("span",[t._v("Region:")]),t._v(" "+t._s(t.data.subregion))]),n("div",{staticClass:"capital"},[n("span",[t._v("Capital: "+t._s(t.data.capital))])])]),n("div",{staticClass:"details-row2"},[n("div",{staticClass:"size"},[n("span",[t._v("Size: ")]),t._v(t._s(t.data.area?t.countrySize:"Unknown")+" "),t.data.area?n("span",[t._v(" km"),n("sup",[t._v("2")])]):t._e()]),n("div",{staticClass:"currencies"},[n("span",[t._v("Currencies: ")]),t._v(t._s(t.Currencies))]),n("div",{staticClass:"languages"},[n("span",[t._v("Languages: ")]),t._v(t._s(t.Languages))])])]),t.data.borders.length?n("div",{staticClass:"borders"},[n("span",[t._v("Border Countries: ")]),t._l(t.Borders,(function(a,r){return n("router-link",{key:r,attrs:{to:a}},[n("button",{staticClass:"border-btn"},[t._v(t._s(a))])])}))],2):t._e()])])],1):t.isLoaded||t.error?t._e():n("div",[n("Loader")],1)],1)},s=[],e=(n("b0c0"),n("5319"),n("ac1f"),n("d3b7"),n("25f0"),n("a15b"),n("d81d"),n("ffaa")),i=n("74c9"),o=n("555f"),c={components:{SearchError:e["a"],BackButton:i["a"],Loader:o["a"]},data:function(){return{name:this.$route.params.country,data:[],isLoaded:!1,error:!1}},created:function(){this.fetchCountry()},watch:{"$route.params.country":function(t){this.name=t,this.fetchCountry()}},computed:{countryPopulation:function(){return this.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},countrySize:function(){return this.data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},Currencies:function(){return this.data.currencies.map((function(t){return t.name})).join(", ")},Languages:function(){return this.data.languages.map((function(t){return t.name})).join(", ")},Borders:function(){return this.data.borders.map((function(t){return t}))}},methods:{fetchCountry:function(){var t=this;fetch("https://restcountries.com/v2/alpha/".concat(this.name)).then((function(t){return t.json()})).then((function(a){404!=a.status&&400!=a.status?(t.data=a,t.isLoaded=!0):t.error=!0}))}}},u=c,d=(n("7985"),n("2877")),l=Object(d["a"])(u,r,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=about.da448d8e.js.map