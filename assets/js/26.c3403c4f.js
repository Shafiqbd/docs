(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{318:function(t,s,e){t.exports=e.p+"assets/img/palette_color.eeac131a.png"},319:function(t){t.exports=JSON.parse('{"type":"palette-color","name":"Palette Color","description":null,"icon":null,"groups":{"Global":["id","type","title","desc","subtitle","class"],"Advanced":["attributes","data","compiler","output","output_variables","permissions","required","default","validate"]},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"compiler":{"name":"compiler","title":"Compiler","type":"bool","default":false,"order":25},"permissions":{"type":"input","inputType":"text","name":"permissions","title":"Permissions","order":30},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":35},"palettes":{"name":"palettes","title":"Palettes","type":"array","formatter":"multiarray","arrayType":"key","valueType":"plain","default":{},"order":50}}}')},404:function(t,s,e){"use strict";e.r(s);var a=e(319),n={data:function(){return{builder:a,defaults:{}}}},r=e(1),p=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"palette-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#palette-color"}},[t._v("#")]),t._v(" Palette Color")]),t._v(" "),a("p",[t._v("The Palette Color field allows you to display a set of color palettes that a theme or plugin might use throughout,\ngiving your users a choice of UI colors.")]),t._v(" "),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(318),alt:""}})])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),a("li",[a("a",{attrs:{href:"#setting-palettes"}},[t._v("Setting Palettes")])]),a("li",[a("a",{attrs:{href:"#build-config"}},[t._v("Build Config")])]),a("li",[a("a",{attrs:{href:"#example-config"}},[t._v("Example Config")])]),a("li",[a("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[a("div",{staticStyle:{width:"80px"}},[t._v("Default")])]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("palette")])]),t._v(" "),a("td",[t._v("Value identifying the field type.")])]),t._v(" "),a("tr",[a("td",[t._v("palettes")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v('An array of individual arrays defining the color palettes.  See "Setting Palettes" below.')])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),a("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),a("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),a("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),a("h2",{attrs:{id:"setting-palettes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-palettes"}},[t._v("#")]),t._v(" Setting Palettes")]),t._v(" "),a("p",[t._v("Each palette in the palettes argument is a key/pair array that defines each individual palette.  The key of the array\nis the palette name.  Assigned to the key is an array of hex colors to be displayed in the palette entry. \nSee the example below for a complete breakdown.")]),t._v(" "),a("h2",{attrs:{id:"build-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-config"}},[t._v("#")]),t._v(" Build Config")]),t._v(" "),a("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),a("h2",{attrs:{id:"example-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Redux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Palette Colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'color-palette'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subsection'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-palette-color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'palette'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Palette Color Option'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Only color validation can be done on this field type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is the description field, again good for additional info.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'palettes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'red'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#ef9a9a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#f44336'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#ff1744'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pink'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#fce4ec'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#f06292'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#e91e63'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#ad1457'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#f50057'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cyan'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#e0f7fa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#80deea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#26c6da'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#0097a7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#00e5ff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This example in based on the example usage provided above. Be sure to change "),a("code",[t._v("$redux_demo")]),t._v(" to the value you specified\nin your "),a("router-link",{attrs:{to:"/configuration/global_arguments.html#opt_name"}},[t._v("opt_name")]),t._v(" argument.")],1),t._v(" "),a("p",[t._v("This field does NOT return the palette array.  It returns the name of the selected palette.  Ideally, the developer\nwill have set the palette colors in their CSS, using the palette key name as the CSS selector.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Selected palette: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-palette-color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=p.exports}}]);