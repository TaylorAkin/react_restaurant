(this.webpackJsonpreact_restaurant=this.webpackJsonpreact_restaurant||[]).push([[0],{21:function(e,a,t){e.exports=t(53)},26:function(e,a,t){},49:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(3),l=t(5),c=t(4),i=t(6),s=t(0),o=t.n(s),m=t(18),u=t.n(m);t(26);var d=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top"},o.a.createElement("button",{className:"navbar-toggler navbar-toggler-icon h3",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"}),o.a.createElement("a",{className:"navbar-brand mr-5 h1",href:"#about"},"Stellas"),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},o.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0 text-end"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link h3",href:"#about"},"Hours & Location ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link dropdown-toggle h3",href:"#about",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Menus"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},o.a.createElement("a",{className:"dropdown-item",href:"#breakfast"},"Breakfast"),o.a.createElement("a",{className:"dropdown-item",href:"#lunch"},"Lunch"),o.a.createElement("a",{className:"dropdown-item",href:"#appetizers"},"Appetizers"),o.a.createElement("a",{className:"dropdown-item",href:"#dinner"},"Dinner"),o.a.createElement("a",{className:"dropdown-item",href:"#dessert"},"Dessert"))),o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link h3",href:"#about",tabIndex:"-1"},"Private Dining")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link h3",href:"#about",tabIndex:"-1"},"About Stellas")))))},h=t(8),b={padding:20,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"6.5rem",color:"white"};var g=function(e){return o.a.createElement("button",{className:"btn btn-link",style:b},e.name)},p=t(19),E=t.n(p),v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).state={items:[],price:["-20","-17","-40","-32","-10","-12","-16","-21","-25","-30","-45","-24","-10","-14","-15","-16","-12"],title:["Agliaita","Bagna cauda","Maccu","Minestrone","Boreto","Bari","Farinata","Crocche","Columba Pasquale","Pane toscana","Panino","Pesto","Penia","Riscotto","Riso tonnato","Acqua","Cacciucco","Cappon Magro","Involtini","Cozze","Buridda","Parafur","Bieta","Vlorfa","Rizto","Buonasera","Bene","Fonduta","Chitarra","Eliche"]},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://entree-f18.herokuapp.com/v1/menu/12").then((function(a){var t=a.data.menu_items;console.log(t),t.map((function(a,t){a.title=e.state.title[Math.floor(Math.random()*e.state.title.length)],a.price=e.state.price[Math.floor(Math.random()*e.state.price.length)]})),e.setState({items:t})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"row"},this.state.items.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",{className:"col-3 mt-5 text-white"}," ",o.a.createElement("span",{className:"h3"},e.title," ",e.price),"  ",o.a.createElement("br",null)," ",e.description))}))))}}]),a}(o.a.Component),f=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).state={clicked:!1},t.handleClick=t.handleClick.bind(Object(h.a)(t)),t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{clicked:!e.clicked}}))}},{key:"render",value:function(){return o.a.createElement("div",{onClick:this.handleClick},this.state.clicked?o.a.createElement(v,null):o.a.createElement(g,{name:this.props.name}))}}]),a}(o.a.Component);var k=function(){return o.a.createElement("footer",{className:"footer navbar navbar-light bg-dark text-white-50"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("small",{className:"col-4"},"Stellas"),o.a.createElement("small",{className:"col-4"},"8334 W. Trusel Avenue Spring Valley, CA 91977"),o.a.createElement("small",{className:"col-4"}," Monday-Thursday ",o.a.createElement("br",null),"10:45-10PM      ",o.a.createElement("br",null),"Friday & Saturday ",o.a.createElement("br",null),"10:45-11PM"))))},y=t(7),j={fontFamily:"Dancing Script",textAlign:"center"},N=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:j},o.a.createElement(y.Parallax,{bgImage:"/images/waterbar.jpg"},o.a.createElement(d,null),o.a.createElement("div",{style:{height:580}},o.a.createElement("div",{style:b},"Stellas"))),o.a.createElement("h1",{id:"breakfast"},"| | |"),o.a.createElement(y.Parallax,{bgImage:"/images/breakfast2.jpg",blur:{min:-1,max:5}},o.a.createElement("div",{style:{height:500}},o.a.createElement(f,{name:"Breakfast"}))),o.a.createElement("h1",{id:"lunch"},"| | |"),o.a.createElement(y.Parallax,{bgImage:"/images/lunch.jpg",strength:-100},o.a.createElement("div",{style:{height:500}},o.a.createElement(f,{name:"Lunch"}))),o.a.createElement("h1",{id:"appetizers"},"| | |"),o.a.createElement(y.Parallax,{bgImage:"/images/appetizers.jpg",renderLayer:function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{position:"absolute",background:"rgba(255, 125, 0, ".concat(1*e,")"),left:"50%",top:"50%",borderRadius:"50%",transform:"translate(-50%,-50%)",width:500*e,height:500*e}}))}},o.a.createElement("div",{style:{height:500}},o.a.createElement(f,{name:"Appetizers"}))),o.a.createElement("h1",{id:"dinner"},"| | |"),o.a.createElement(y.Parallax,{bgImage:"/images/dinner.jpg",blur:{min:-1,max:3}},o.a.createElement("div",{style:{height:500}},o.a.createElement(f,{name:"Dinner"}))),o.a.createElement("h1",{id:"dessert"},"| | |"),o.a.createElement(y.Parallax,{bgImage:"/images/dessert.jpg",strength:-100},o.a.createElement("div",{style:{height:500}},o.a.createElement(f,{name:"Dessert"}))),o.a.createElement("div",{style:{height:10}}),o.a.createElement("h2",null,"\u2728"))}}]),a}(o.a.Component),w=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(N,null)),o.a.createElement(k,null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(44),t(45),t(49);var O=t(20),x=t.n(O),C=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{fonts:[{font:"Dancing Script",weights:[400,"100i"]},{font:"Roboto Mono",weights:[400,700]}],subsets:["cyrillic-ext","greek"]}),o.a.createElement(w,null))}}]),a}(o.a.Component);a.default=C;u.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.dd035c04.chunk.js.map