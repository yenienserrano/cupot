(this.webpackJsonpcupot=this.webpackJsonpcupot||[]).push([[0],{30:function(e,s,a){},31:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(1),r=a(17),n=a.n(r),i=a(2),o=a(3);var l=Object(o.h)((function(e){var s=e.history;return Object(c.useEffect)((function(){var e=s.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[s]),null})),j=function(){return Object(t.jsxs)("footer",{className:"footer__main",children:[Object(t.jsx)(i.b,{to:"/ubicacion",children:Object(t.jsx)("img",{src:"./assets/home/ubicacion.png",alt:"ubicacion"})}),Object(t.jsx)(i.b,{to:"/favoritos",children:Object(t.jsx)("img",{src:"./assets/home/favoritos.png",alt:"favoritos"})}),Object(t.jsx)(i.b,{to:"/home",children:Object(t.jsx)("img",{src:"./assets/home/home.png",alt:"home"})}),Object(t.jsx)(i.b,{to:"/buscador",children:Object(t.jsx)("img",{src:"./assets/home/buscador.png",alt:"buscador"})}),Object(t.jsx)(i.b,{to:"/auth/login",children:Object(t.jsx)("img",{src:"./assets/home/persona.png",alt:"persona"})})]})},m=function(){return Object(t.jsxs)("nav",{className:"nav-cupot d-flex justify-content-between",children:[Object(t.jsx)(i.b,{to:"/home",children:Object(t.jsx)("img",{src:"../../assets/home/logo-nav.png",alt:"logo"})}),Object(t.jsx)("div",{className:"d-flex justify-content-end",children:Object(t.jsxs)("button",{className:"home__btn",children:["Escanear c\xf3digo",Object(t.jsx)("img",{className:"ml-2",src:"/assets/home/qrcodigo.png",alt:"qr codigo"})]})})]})},d=function(){return Object(t.jsxs)("div",{className:"container mt-3",children:[Object(t.jsx)("h3",{className:"categorias__titulo",children:"Categor\xedas"}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsxs)("div",{className:"mr-4",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/gourmet.png",alt:"categoria"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Gourmet"})]}),Object(t.jsxs)("div",{className:"mr-4 ml-1",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/fastfood.png",alt:"categoria"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Fast food"})]}),Object(t.jsxs)("div",{className:"mr-4 ml-1",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/veggie.png",alt:"categoria"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Veggie"})]}),Object(t.jsxs)("div",{className:"mr-4 ml-2",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/sintacc.png",alt:"categoria"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Sin tacc"})]}),Object(t.jsxs)("div",{className:"ml-2",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/dulces.png",alt:"categoria"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Dulces"})]})]})]})},b=function(e){var s=e.promociones,a=["r1p1","r1p2","r1p3"],c=["r2p1","r2p2","r2p3","r2p4"],r=["r3p1","r3p2","r3p3"],n=["r4p1","r4p2","r4p3","r4p4"];return Object(t.jsxs)("div",{className:"restaurantecard__card mb-2 mr-4",children:[Object(t.jsx)("div",{style:{height:"15px"}}),Object(t.jsx)(i.b,{to:"/promocion/".concat(a.includes(s.id)?1:c.includes(s.id)?2:r.includes(s.id)?3:n.includes(s.id)?4:void 0,"/").concat(s.id),children:Object(t.jsx)("div",{className:"restaurantecard__datos",style:{backgroundSize:"cover",backgroundImage:"url(".concat(s.img,")")},children:Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(t.jsx)("p",{className:"restaurantecard__restaurante",children:s.restaurante}),Object(t.jsxs)("p",{className:"restaurantecard__descuento",children:["-",s.descuento,"%"]})]}),Object(t.jsx)("p",{className:"restaurantecard__desc",children:s.desc})]})})}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsx)("button",{className:"w-50 restaurantecard__btn brl",children:Object(t.jsx)("img",{src:"./assets/home/info.png",alt:"boton"})}),Object(t.jsx)("button",{className:"w-50 restaurantecard__btn brr",children:Object(t.jsx)("img",{src:"./assets/home/3puntos.png",alt:"boton"})})]})]})},p=function(){return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h3",{className:"categorias__titulo",children:"Destacados"}),Object(t.jsx)("div",{className:"d-flex overflow-hidden",children:[{id:"r1p1",restaurante:"Restaurante 1",img:"./assets/restaurantes/promocion1.png",desc:"1 Copa helada",descuento:50},{id:"r2p1",restaurante:"Restaurante 2",img:"./assets/restaurantes/promocion2.png",desc:"Papas bravas con queso y perejil",descuento:30},{id:"r4p2",restaurante:"Restaurante 4",img:"./assets/restaurantes/promocion3.png",desc:"Lemon pie 2 porciones",descuento:25},{id:"r3p1",restaurante:"Restaurante 3",img:"./assets/restaurantes/promocion4.png",desc:"Pizza napolitana",descuento:20}].map((function(e){return Object(t.jsx)(b,{promociones:e},e.restaurante)}))})]})},u=function(){return Object(t.jsxs)("div",{className:"container restaurante__main",children:[Object(t.jsx)("h3",{className:"categorias__titulo",children:"Categor\xedas"}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/resta1.png",alt:"restaurante"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Restaurante 1"})]}),Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/resta2.png",alt:"restaurante"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Restaurante 2"})]}),Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/resta3.png",alt:"restaurante"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Restaurante 3"})]}),Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/resta4.png",alt:"restaurante"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Restaurante 4"})]}),Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("img",{className:"mb-2",src:"./assets/home/resta5.png",alt:"restaurante"}),Object(t.jsx)("p",{className:"categorias__parrafo",children:"Restaurante 5"})]}),Object(t.jsxs)("div",{className:"mr-3",children:[Object(t.jsx)("h1",{className:"restaurantes_plus",children:"+"}),Object(t.jsx)("button",{className:"restaurantes__btn",children:"Ver todos"})]})]})]})},x=[{id:1,logo:"./assets/restaurantes/r1l.png",restaurante:"Restaurante 1",promociones:[{id:"r1p1",logo:"./assets/restaurantes/r1l.png",restaurante:"Restaurante 1",img:"./assets/restaurantes/r1p1.png",desc:"Caja x 20 palitos helados",descuento:50},{id:"r1p2",logo:"./assets/restaurantes/r1l.png",restaurante:"Restaurante 1",img:"./assets/restaurantes/r1p2.png",desc:"1 Copa helada",descuento:50},{id:"r1p3",logo:"./assets/restaurantes/r1l.png",restaurante:"Restaurante 1",img:"./assets/restaurantes/r1p3.png",desc:"Cucurucho de 1 bocha",descuento:15}]},{id:2,logo:"./assets/restaurantes/r2l.png",restaurante:"Restaurante 2",promociones:[{id:"r2p1",logo:"./assets/restaurantes/r2l.png",restaurante:"Restaurante 2",img:"./assets/restaurantes/r2p1.png",desc:"Papas bravas con queso y perejil",descuento:30},{id:"r2p2",logo:"./assets/restaurantes/r2l.png",restaurante:"Restaurante 2",img:"./assets/restaurantes/r2p2.png",desc:"Ensalada mixta",descuento:20},{id:"r2p3",logo:"./assets/restaurantes/r2l.png",restaurante:"Restaurante 2",img:"./assets/restaurantes/r2p3.png",desc:"Lomo grande con papas",descuento:10},{id:"r2p4",logo:"./assets/restaurantes/r2l.png",restaurante:"Restaurante 2",img:"./assets/restaurantes/r2p4.png",desc:"2 Hamburgesas",descuento:15}]},{id:3,logo:"./assets/restaurantes/r3l.png",restaurante:"Restaurante 3",promociones:[{id:"r3p1",logo:"./assets/restaurantes/r3l.png",restaurante:"Restaurante 3",img:"./assets/restaurantes/r3p1.png",desc:"Pizza napolitana",descuento:20},{id:"r3p2",restaurante:"Restaurante 3",logo:"./assets/restaurantes/r3l.png",img:"./assets/restaurantes/r3p2.png",desc:"Hamburgesa con papas",descuento:15},{id:"r3p3",logo:"./assets/restaurantes/r3l.png",restaurante:"Restaurante 3",img:"./assets/restaurantes/r3p3.png",desc:"Pizza rucula + Coca-Cola 2 L",descuento:10}]},{id:4,logo:"./assets/restaurantes/r4l.png",restaurante:"Restaurante 4",promociones:[{id:"r4p1",logo:"./assets/restaurantes/r4l.png",restaurante:"Restaurante 4",img:"./assets/restaurantes/r4p1.png",desc:"Licuado de frutilla",descuento:20},{id:"r4p2",logo:"./assets/restaurantes/r4l.png",restaurante:"Restaurante 4",img:"./assets/restaurantes/r4p2.png",desc:"Lemon pie 2 porciones",descuento:25},{id:"r4p3",logo:"./assets/restaurantes/r4l.png",restaurante:"Restaurante 4",img:"./assets/restaurantes/r4p3.png",desc:"6 Donas glaseadas",descuento:15},{id:"r4p4",logo:"./assets/restaurantes/r4l.png",restaurante:"Restaurante 4",img:"./assets/restaurantes/r4p4.png",desc:"Porcion de tarta a eleccion",descuento:10}]}],h=function(){var e=x;return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h3",{className:"categorias__titulo",children:"Restaurantes"}),e.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsxs)("h4",{className:"restaurantelist__titulo mt-4",children:[Object(t.jsx)("img",{className:"mr-2",src:e.logo,alt:e.restaurante})," ",e.restaurante," "]},e.id),Object(t.jsx)("div",{className:"d-flex overflow-hidden",children:e.promociones.map((function(e){return Object(t.jsx)(b,{promociones:e},e.id)}))})]},e.restaurante)}))]})},g=function(){return Object(t.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[Object(t.jsxs)("div",{className:"carousel-inner",children:[Object(t.jsx)("div",{className:"carousel-item active",children:Object(t.jsx)("img",{src:"./assets/home/paso1.png",className:"d-block w-100",alt:"paso 1"})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:"./assets/home/paso2.png",className:"d-block w-100",alt:"paso 2"})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:"./assets/home/paso3.png",className:"d-block w-100",alt:"paso 3"})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:"./assets/home/paso4.png",className:"d-block w-100",alt:"paso 4"})})]}),Object(t.jsx)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:Object(t.jsx)("span",{className:"sr-only",children:"Previous"})}),Object(t.jsx)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:Object(t.jsx)("span",{className:"sr-only",children:"Next"})})]})},O=function(){return Object(t.jsxs)("div",{className:"pb-4",children:[Object(t.jsx)(m,{}),Object(t.jsx)(g,{}),Object(t.jsx)(d,{}),Object(t.jsx)(u,{}),Object(t.jsx)(p,{}),Object(t.jsx)(h,{}),Object(t.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(t.jsx)("button",{className:"home__btn mb-5",children:"Ver todos"})}),Object(t.jsx)(j,{})]})},N=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("nav",{className:"navbar nav-explicacion",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("p",{className:"navbar-brand",children:Object(t.jsx)("img",{src:"./assets/explicacion/logo-nav.png",alt:"logo coput"})}),Object(t.jsx)("p",{className:"nav-explicacion-tutorial me-1",children:"Tutorial"})]})}),Object(t.jsx)("div",{id:"tutorial-img-expicacion",className:"carousel slide d-flex align-items-center mb-0","data-ride":"carousel","data-interval":"false",children:Object(t.jsxs)("div",{className:"carousel-inner",children:[Object(t.jsxs)("div",{className:"carousel-item active",children:[Object(t.jsx)("h4",{className:"carrusel-title",children:"Filtr\xe1 lo que estas buscando"}),Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-center ml-5",children:[Object(t.jsx)("img",{src:"./assets/explicacion/paso1.png",className:"d-block img-explica",alt:"paso 1"}),Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"next",children:Object(t.jsx)("img",{src:"./assets/explicacion/next.png",alt:"Flecha"})})]}),Object(t.jsxs)("div",{className:"footer-explicacion d-flex justify-content-around pb-4",children:[Object(t.jsx)(i.b,{className:"btn-saltar",to:"./home",children:"Saltear"}),Object(t.jsx)("button",{className:"btn btn-tutorial",href:"#tutorial-img-expicacion","data-slide":"next",children:"Entendido"})]})]}),Object(t.jsxs)("div",{className:"carousel-item",children:[Object(t.jsx)("h4",{className:"carrusel-title",children:"Crea una cuenta o logeate"}),Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"prev",children:Object(t.jsx)("img",{src:"./assets/explicacion/prev.png",alt:"Flecha"})}),Object(t.jsx)("img",{src:"./assets/explicacion/paso2.png",className:"d-block img-explica",alt:"paso 1"}),Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"next",children:Object(t.jsx)("img",{src:"./assets/explicacion/next.png",alt:"Flecha"})})]}),Object(t.jsxs)("div",{className:"footer-explicacion d-flex justify-content-around pb-4",children:[Object(t.jsx)(i.b,{className:"btn-saltar",to:"./home",children:"Saltear"}),Object(t.jsx)("button",{className:"btn btn-tutorial",href:"#tutorial-img-expicacion","data-slide":"next",children:"Entendido"})]})]}),Object(t.jsxs)("div",{className:"carousel-item",children:[Object(t.jsx)("h4",{className:"carrusel-title",children:"Eleg\xed la promoci\xf3n"}),Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"prev",children:Object(t.jsx)("img",{src:"./assets/explicacion/prev.png",alt:"Flecha"})}),Object(t.jsx)("img",{src:"./assets/explicacion/paso3.png",className:"d-block img-explica",alt:"paso 1"}),Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"next",children:Object(t.jsx)("img",{src:"./assets/explicacion/next.png",alt:"Flecha"})})]}),Object(t.jsxs)("div",{className:"footer-explicacion d-flex justify-content-around pb-4",children:[Object(t.jsx)(i.b,{className:"btn-saltar",to:"./home",children:"Saltear"}),Object(t.jsx)("button",{className:"btn btn-tutorial",href:"#tutorial-img-expicacion","data-slide":"next",children:"Entendido"})]})]}),Object(t.jsxs)("div",{className:"carousel-item",children:[Object(t.jsx)("h4",{className:"carrusel-title",children:"Escane\xe1 el c\xf3digo en el restaurante"}),Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-center mr-5",children:[Object(t.jsx)("a",{href:"#tutorial-img-expicacion",role:"button","data-slide":"prev",children:Object(t.jsx)("img",{src:"./assets/explicacion/prev.png",alt:"Flecha"})}),Object(t.jsx)("img",{src:"./assets/explicacion/paso4.png",className:"d-block img-explica",alt:"paso 4"})]}),Object(t.jsx)("div",{className:"footer-explicacion d-flex justify-content-center pb-4",children:Object(t.jsx)(i.b,{className:"btn btn-tutorial",to:"/home",children:"Entendido"})})]})]})})]})},v=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("img",{className:"imgBg",src:"./assets/tutorial/bgTop.png",alt:"bgTop"}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"d-flex flex-column align-items-center mt-3",children:[Object(t.jsx)("h1",{className:"tutorial-titulo",children:"\xa1Bienvenido a Cupot!"}),Object(t.jsx)("p",{className:"tutorial-parrafo",children:"Encontr\xe1 los descuentos de tus restaurantes favoritos"}),Object(t.jsx)("img",{src:"./assets/tutorial/logo.png",alt:"logo"}),Object(t.jsxs)("div",{className:"d-flex justify-content-between w-75 tutorial-div-boton",children:[Object(t.jsx)(i.b,{className:"btn-saltar",to:"./home",children:"Saltear"}),Object(t.jsx)(i.b,{className:"btn-tutorial",to:"/explicacion",children:"Ver tutorial"})]})]})}),Object(t.jsx)("img",{src:"./assets/tutorial/bgBot.png",alt:"bgBot"})]})},f=a(15),_=function(e){var s=e.promo,a=e.resta;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"promocion__volver",children:Object(t.jsxs)(i.b,{to:"/home",className:"promocion__btnvolver",children:[Object(t.jsx)("img",{className:"mr-2",alt:"volver",src:"/assets/promocion/volver.png"}),"Volver"]})}),Object(t.jsxs)("div",{className:"promocion__main",children:[Object(t.jsxs)("div",{className:"promocion__promo",children:[Object(t.jsx)("img",{className:"promocion__img",src:"../../".concat(s.img),alt:s.desc}),Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-start promocion__precios",children:[Object(t.jsx)("p",{className:"promocion__momento mr-2",children:"Antes"}),Object(t.jsx)("p",{className:"promocion__precio mr-2",children:Object(t.jsx)("s",{children:"$300"})}),Object(t.jsxs)("p",{className:"promocion__descuento",children:["-",s.descuento,"%"]}),Object(t.jsxs)("p",{className:"promocion__precio ml-2",children:["$",300*("0."+(100-s.descuento))]}),Object(t.jsx)("p",{className:"promocion__momento ml-2",children:"Ahora"})]}),Object(t.jsxs)("div",{className:"promocion__desbot",children:[Object(t.jsx)("h3",{className:"promocion__descripcion",children:s.desc}),Object(t.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(t.jsxs)("button",{className:"promocion__btnfavcomp",children:[Object(t.jsx)("img",{className:"mr-2",alt:"favoritos",src:"/assets/promocion/favoritos.png"}),"Guardar"]}),Object(t.jsxs)("button",{className:"promocion__btnfavcomp",children:[Object(t.jsx)("img",{className:"mr-2",alt:"compartir",src:"/assets/promocion/compartir.png"}),"Compartir"]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("button",{className:"promocion__btnescanea",children:"Escanea el codigo"}),Object(t.jsx)("span",{className:"promocion__span",children:"(Debes estar en el local)"})]})]})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("h3",{className:"promocion__restaurante",children:[Object(t.jsx)("img",{src:"../../".concat(a.logo),alt:"logo",className:"mr-2"}),a.restaurante]}),Object(t.jsx)("button",{className:"promocion__btn-seguir",children:"Seguir marca"}),Object(t.jsxs)("h5",{className:"promocion__datosresta",children:[Object(t.jsx)("img",{className:"mr-2",src:"/assets/promocion/ubicacion.png",alt:"ubicacion"}),"Galeano 2920, Villa Cabrera"]}),Object(t.jsx)("a",{className:"promociones__ubicacion",href:"https://www.google.com/maps?q=Galeano+2920,+Villa+Cabrera&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiaj6DdhL_uAhVQIrkGHQTEDjoQ_AUoAXoECAQQAw",children:"Como llegar"}),Object(t.jsxs)("h5",{className:"promocion__datosresta",children:[Object(t.jsx)("img",{className:"mr-2",src:"/assets/promocion/horario.png",alt:"ubicacion"}),"Horarios: lun a dom 9 - 21 hs"]}),Object(t.jsx)("span",{className:"promocion__span justify-content-start mb-2",children:"(Abierto ahora)"}),Object(t.jsx)("h4",{className:"promocion__mas-info",children:"Mas informacion del cupon"}),Object(t.jsxs)("h5",{className:"promocion__datosresta",children:[Object(t.jsx)("img",{className:"mr-2",src:"/assets/promocion/experiencias.png",alt:"ubicacion"}),"Experiencias"]}),Object(t.jsxs)("div",{className:"d-flex mb-3",children:[Object(t.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column mr-3",children:[Object(t.jsx)("h2",{className:"promocion__rating-resta",children:"4.0"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("span",{className:"fas fa-star"}),Object(t.jsx)("span",{className:"fas fa-star"}),Object(t.jsx)("span",{className:"fas fa-star"}),Object(t.jsx)("span",{className:"fas fa-star"}),Object(t.jsx)("span",{className:"far fa-star"})]}),Object(t.jsx)("span",{className:"promocion__span justify-content-start mt-2",children:"(2 votos)"})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0 mr-2",children:"5"}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(t.jsxs)("div",{className:"d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0 mr-2",children:"4"}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(t.jsxs)("div",{className:"d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0 mr-2",children:"3"}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(t.jsxs)("div",{className:"d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0 mr-2",children:"2"}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]}),Object(t.jsxs)("div",{className:"d-flex align-items-center",children:[Object(t.jsx)("p",{className:"m-0 mr-2",children:"1"}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})]})]})]}),Object(t.jsx)("p",{className:"promocion__datospromo",children:"Valido hasta 21/10/2021"}),Object(t.jsx)("p",{className:"promocion__datospromo",children:"Descuento del ".concat(s.descuento," en ").concat(s.desc," en el restaurante ").concat(s.restaurante,". Descuento exclusivo de Cupot, promocion no acumulable.")})]})]})]})},w=function(){var e,s=Object(o.g)(),a=s.restaurante,c=s.id,r=(e=a,x.filter((function(s){return s.id===parseInt(e)}))),n=Object(f.a)(r,1)[0],i=function(e,s){return e.filter((function(e){return e.id===s}))}(n.promociones,c),l=Object(f.a)(i,1)[0];return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(m,{}),Object(t.jsx)(_,{promo:l,resta:n})]})},y=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(m,{}),Object(t.jsx)("div",{className:"mb-4",children:Object(t.jsxs)(i.b,{to:"/home",className:"d-flex align-items-center m-2 auth__btnvolver",children:[Object(t.jsx)("img",{className:"mr-2",alt:"volver",src:"/assets/auth/volver.png"}),"Volver"]})}),Object(t.jsxs)("div",{className:"auth__main",children:[Object(t.jsxs)("div",{className:"mt-4",children:[Object(t.jsxs)(i.b,{to:"/home",className:"promocion__btnescanea mb-4",children:[Object(t.jsx)("img",{className:"mr-3",src:"/assets/auth/facebook.png",alt:"face"}),"Continuar con facebook"]}),Object(t.jsxs)(i.b,{to:"/home",className:"promocion__btnescanea",children:[Object(t.jsx)("img",{className:"mr-4",src:"/assets/auth/google.png",alt:"google"}),"Continuar con google"]})]}),Object(t.jsx)("img",{className:"w-100 mt-4",src:"/assets/auth/divi.png",alt:"div"}),Object(t.jsxs)("form",{children:[Object(t.jsx)("p",{className:"auth__name-input",children:"Correo electronico:"}),Object(t.jsx)("input",{className:"auth__input",type:"email",name:"email"}),Object(t.jsx)("p",{className:"auth__name-input",children:"Contrase\xf1a:"}),Object(t.jsx)("input",{className:"auth__input",type:"password",name:"password"}),Object(t.jsx)(i.b,{to:"/home",className:"promocion__btnescanea mt-5",children:"Entrar"})]}),Object(t.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(t.jsx)("p",{className:"auth__footer",children:"\xbfOlvidaste tu contrase\xf1a?"}),Object(t.jsx)("p",{className:"auth__footer",children:"Registrate"})]})]})]})},R=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(o.d,{children:[Object(t.jsx)(o.b,{exact:!0,path:"/tutorial",component:v}),Object(t.jsx)(o.b,{exact:!0,path:"/explicacion",component:N}),Object(t.jsx)(o.b,{exact:!0,path:"/home",component:O}),Object(t.jsx)(o.b,{exact:!0,path:"/promocion/:restaurante/:id",component:w}),Object(t.jsx)(o.b,{exact:!0,path:"/auth/login",component:y}),Object(t.jsx)(o.a,{to:"/tutorial"})]})})})},C=a(10),E=a(19),F=function(e){var s=e.component,a=Object(E.a)(e,["component"]);return Object(t.jsx)(o.b,Object(C.a)(Object(C.a)({},a),{},{component:function(e){return Object(t.jsx)(s,Object(C.a)({},e))}}))},k=function(){return Object(t.jsx)(i.a,{children:Object(t.jsxs)("div",{children:[Object(t.jsx)(l,{}),Object(t.jsx)(o.d,{children:Object(t.jsx)(F,{path:"/",component:R})})]})})},V=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(k,{})})};a(30);n.a.render(Object(t.jsx)(V,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cd8a7884.chunk.js.map