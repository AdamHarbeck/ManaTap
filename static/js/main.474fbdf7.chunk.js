(this.webpackJsonpmanatap=this.webpackJsonpmanatap||[]).push([[0],{14:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),c=n(17),a=n.n(c),s=(n(24),n(14),n(5)),r=n(3),l=n(1),d=function(e){return Object(l.jsxs)("div",{id:"hcContainer",children:[Object(l.jsx)("h1",{style:j.heading,children:e.HCHeading}),Object(l.jsx)("div",{id:"overlay",children:Object(l.jsx)(r.c,{to:e.pathLink,style:j.link})})]})},j={link:{textDecoration:"none",display:"flex",width:"100%",height:"100%",color:"#0d0d0d"},heading:{position:"absolute",zIndex:"2",color:"#fffdeb",fontSize:"3rem"}},h=n(4),u=n(36),m=function(e){if(!e.menuShow)return null;var t=function(){e.onClose()};return Object(l.jsx)("div",{style:b.modal,onClick:e.onClose,children:Object(l.jsx)("div",{style:b.content,onClick:function(e){return e.stopPropagation()},children:Object(l.jsxs)("div",{style:b.mBody,children:[Object(l.jsx)(r.b,{to:"/Home",onClick:t,style:b.link,children:"Home"}),Object(l.jsx)(r.b,{to:"/Search",onClick:t,style:b.link,children:"Card Search"}),Object(l.jsx)(r.b,{to:"/Deck",onClick:t,style:b.link,children:"Deck Builder"}),Object(l.jsx)(r.b,{to:"/Forum",onClick:t,style:b.link,children:"Forum"})]})})})},b={modal:{position:"fixed",zIndex:1},content:{width:"11rem",backgroundColor:"#fff7ae"},mBody:{padding:"1rem",border:".1rem solid #eee",color:"#48284a"},link:{textDecoration:"none",width:"10rem",height:"3rem",display:"block",fontSize:"1.8rem"}},p=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],o=t[1];return Object(l.jsxs)("div",{id:"headingContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onClick:function(){o(!0!==n)},children:Object(l.jsx)(u.c,{style:x.menuBtn})}),Object(l.jsx)(m,{menuShow:n,onClose:function(){o(!1)}})]}),Object(l.jsx)(r.b,{to:"/Home",style:x.homeLink,className:null,children:Object(l.jsx)("h1",{style:x.heading,children:"Mana Tap"})}),Object(l.jsx)("div",{children:Object(l.jsx)(u.a,{style:x.menuBtn})})]})},x={menuBtn:{width:"3rem",height:"3rem",color:"#fff7ae",cursor:"pointer"},heading:{fontFamily:'"Elsie Swash Caps", cursive',fontSize:"3rem",color:"#fff7ae"},homeLink:{textDecoration:"none",display:"inline-block"}},g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(d,{HCHeading:"Card Search",pathLink:"/Search"}),Object(l.jsx)(d,{HCHeading:"Deck Building",pathLink:"/Deck"}),Object(l.jsx)(d,{HCHeading:"Forum",pathLink:"/Forum"})]})},f=n.p+"static/media/blue.eb2f1fc6.png",y=n.p+"static/media/white.63e33a26.png",O=n.p+"static/media/red.a61cedae.png",v=n.p+"static/media/black.2923fb32.png",k=n.p+"static/media/green.cc6f1349.png";var w=function(){var e=[];function t(t){if(console.log(e.toString()),console.log(e.includes(t)),!0===e.includes(t)){var n=e.indexOf(t);console.log(n),console.log(e),e.splice(n,1)}else e.push(t),console.log(e)}return Object(l.jsxs)("div",{id:"searchContainer",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(r.c,{to:"/Home",style:C.link,children:Object(l.jsx)(u.d,{style:C.icon})}),Object(l.jsx)("h1",{children:"Search"})]}),Object(l.jsxs)("div",{style:C.iContainer,children:[Object(l.jsxs)("div",{style:C.column,children:[Object(l.jsx)("input",{type:"checkbox",id:"Black",name:"Black",onChange:function(){t("Black")}}),Object(l.jsx)("label",{htmlFor:"Black",children:"Black"}),Object(l.jsx)("img",{src:v,style:C.icon,alt:"Swamp mana"})]}),Object(l.jsxs)("div",{style:C.column,children:[Object(l.jsx)("input",{type:"checkbox",id:"Blue",name:"Blue",onChange:function(){t("Blue")}}),Object(l.jsx)("label",{htmlFor:"Blue",children:"Blue"}),Object(l.jsx)("img",{src:f,style:C.icon,alt:"Island mana"})]}),Object(l.jsxs)("div",{style:C.column,children:[Object(l.jsx)("input",{type:"checkbox",id:"Green",name:"Green",onChange:function(){t("Green")}}),Object(l.jsx)("label",{htmlFor:"Green",children:"Green"}),Object(l.jsx)("img",{src:k,style:C.icon,alt:"Forest mana"})]}),Object(l.jsxs)("div",{style:C.column,children:[Object(l.jsx)("input",{type:"checkbox",id:"Red",name:"Red",onChange:function(){t("Red")}}),Object(l.jsx)("label",{htmlFor:"Red",children:"Red"}),Object(l.jsx)("img",{src:O,style:C.icon,alt:"Mountain mana"})]}),Object(l.jsxs)("div",{style:C.column,children:[Object(l.jsx)("input",{type:"checkbox",id:"White",name:"White",onChange:function(){t("White")}}),Object(l.jsx)("label",{htmlFor:"White",children:"White"}),Object(l.jsx)("img",{src:y,style:C.icon,alt:"Plains mana"})]})]}),Object(l.jsx)("button",{className:"button",children:Object(l.jsx)(r.b,{to:function(){return'/Results/colors="'.concat(e.toString(),'"')},style:C.btnLink,children:"Search"})})]})},C={link:{display:"inline-block",textDecoration:"none",color:"#111"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"},btnLink:{textDecoration:"none",color:"#48284A"},column:{height:"9rem",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"1.8rem",justifyContent:"space-between",color:"#fff7ae"},iContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"3rem auto 0 auto",width:"37.5rem"}},z=n(9),B=n.n(z),q=n(11),P=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(r.b,{to:'/Card/name="'.concat(e.cardName,'"'),children:Object(l.jsx)("img",{src:e.image,alt:"".concat(e.cardName," card art"),style:T.img})})})},T={img:{display:"block",width:"30rem",height:"41.839rem",margin:"0 auto",marginBottom:"1rem",borderRadius:"1.3rem",boxShadow:"0 .3rem .5rem .3rem #48284a"}},D=function(){var e="https://api.magicthegathering.io/v1/cards?",t=Object(s.f)().id;console.log(t);var n=Object(i.useState)([]),o=Object(h.a)(n,2),c=o[0],a=o[1];Object(i.useEffect)((function(){function n(){return(n=Object(q.a)(B.a.mark((function n(){var i,o,s,r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e+t,n.next=3,fetch(i);case 3:return o=n.sent,n.next=6,o.json();case 6:s=n.sent,r=s.cards,a(r),console.log(c);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var d=[];return c.forEach((function(e){void 0!==e.imageUrl&&d.push(e)})),Object(l.jsxs)("div",{id:"resultDiv",style:S.container,children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(r.c,{to:"/Search",style:S.link,children:Object(l.jsx)(u.d,{style:S.icon})}),Object(l.jsx)("h1",{children:"Results"})]}),0!==c.length?d.map((function(e){return Object(l.jsx)(P,{image:e.imageUrl,cardName:e.name})})):"Loading..."]})},S={link:{display:"inline-block",textDecoration:"none"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"}},W=function(e){var t=e.data;return Object(l.jsxs)("div",{style:R.text,children:[Object(l.jsxs)("p",{children:["Cost: ",t.cmc," ",t.manaCost]}),Object(l.jsxs)("p",{children:["Types: ",t.type]}),Object(l.jsxs)("p",{children:["P/T : ",t.power,"/",t.toughness]}),Object(l.jsxs)("p",{children:["Text: ",t.text]}),Object(l.jsxs)("p",{children:["Rarity: ",t.rarity]})]})},R={text:{fontSize:"1.6rem",background:"#fff7ae",display:"inline-block",width:"100%"}},M=function(e){var t=e.data;return Object(l.jsxs)("div",{style:A.text,children:[Object(l.jsxs)("p",{children:["Set: ",t.set]}),Object(l.jsxs)("p",{children:["Number: ",t.number]}),Object(l.jsxs)("p",{children:["Artist: ",t.artist]}),Object(l.jsx)("p",{children:"Legalities"}),Object(l.jsx)("ul",{children:t.legalities.map((function(e){return Object(l.jsxs)("p",{children:["Format: ",e.format," Legality: ",e.legality]})}))}),Object(l.jsxs)("p",{children:["Prints: ",t.printings.toString()]})]})},A={text:{fontSize:"1.6rem",background:"#fff7ae",display:"inline-block",width:"100%"}},F=function(e){var t=Object(i.useState)("tab1"),n=Object(h.a)(t,2),o=n[0],c=n[1],a=e.data;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"tabs",children:[Object(l.jsx)("div",{id:"tabContainer",className:"tab1"===o?"active":"",children:Object(l.jsx)("p",{id:"tabItem",onClick:function(){c("tab1")},children:"Basic"})}),Object(l.jsx)("div",{id:"tabContainer",className:"tab2"===o?"active":"",children:Object(l.jsx)("p",{id:"tabItem",onClick:function(){c("tab2")},children:"More Info"})})]}),"tab1"===o?Object(l.jsx)(W,{data:a}):Object(l.jsx)(M,{data:a})]})},G=function(){var e="https://api.magicthegathering.io/v1/cards?",t=Object(s.f)().id,n=Object(i.useState)([]),o=Object(h.a)(n,2),c=o[0],a=o[1];return console.log(t),Object(i.useEffect)((function(){function n(){return(n=Object(q.a)(B.a.mark((function n(){var i,o,c,s;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e+t,n.next=3,fetch(i);case 3:return o=n.sent,n.next=6,o.json();case 6:c=n.sent,console.log(c),s=c.cards[0],console.log(s),a(s);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),0===c.length?Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Loading..."})}):Object(l.jsxs)("div",{id:"cardContainer",children:[Object(l.jsx)(p,{}),Object(l.jsx)("h1",{style:L.mar,children:c.name}),Object(l.jsx)("img",{src:c.imageUrl,alt:"card art",style:L.mar}),Object(l.jsx)("div",{style:L.btnContainer,children:Object(l.jsx)(F,{data:c})}),c.rulings?Object(l.jsxs)("div",{style:L.ruling,children:[Object(l.jsx)("h2",{children:"Rulings"}),c.rulings.map((function(e){return Object(l.jsxs)("div",{style:L.rulingCon,children:[Object(l.jsx)("div",{style:L.rCon1,children:Object(l.jsx)("p",{children:e.date})}),Object(l.jsx)("div",{style:L.rCon2,children:Object(l.jsx)("p",{children:e.text})})]})}))]}):""]})},L={btnContainer:{display:"block"},rulingCon:{display:"flex",flexDirection:"row",width:"37.5rem",justifyContent:"space-around",alignItems:"center"},rCon1:{width:"5rem"},rCon2:{width:"28rem"},mar:{display:"block",margin:"1rem auto",textAlign:"center",color:"#fffdeb"},ruling:{color:"#fff7ae",fontSize:"1.4rem"}},I=function(e){return Object(l.jsx)(r.b,{to:{pathname:"/UserDeck/".concat(e.val.title),state:e.val},style:N.link,children:Object(l.jsxs)("div",{id:"deckCardContainer",children:[Object(l.jsxs)("div",{style:N.nColor,children:[Object(l.jsx)("h2",{style:N.heading,children:e.val.title}),Object(l.jsx)("p",{style:N.text,children:e.val.colors})]}),Object(l.jsx)("div",{style:N.cardCount,children:Object(l.jsx)("h1",{children:e.val.cards.length})})]},e.id)})},N={cardCount:{marginRight:"1rem",justifyContent:"center"},nColor:{marginLeft:"1rem",display:"flex",flexDirection:"column"},link:{textDecoration:"none",display:"inline-block",width:"100%",height:"100%",color:"#0d0d0d"},text:{fontSize:"1.4rem"},heading:{fontSize:"2rem"}},J=function(e){if(!e.show)return null;return Object(l.jsx)("div",{style:H.modal,onClick:e.onClose,children:Object(l.jsxs)("div",{style:H.content,onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("div",{style:H.pad,children:Object(l.jsx)("h2",{style:H.title,children:"New Deck"})}),Object(l.jsxs)("div",{style:H.body,children:[Object(l.jsx)("input",{type:"text",placeholder:"Deck Name",id:"deckInput",style:H.input}),Object(l.jsxs)("select",{id:"colorType",style:H.select,children:[Object(l.jsx)("option",{value:"Black",children:"Black"}),Object(l.jsx)("option",{value:"Blue",children:"Blue"}),Object(l.jsx)("option",{value:"Green",children:"Green"}),Object(l.jsx)("option",{value:"Red",children:"Red"}),Object(l.jsx)("option",{value:"White",children:"White"}),Object(l.jsx)("option",{value:"Black,Blue",children:"Black and Blue"}),Object(l.jsx)("option",{value:"Black,Green",children:"Black and Green"}),Object(l.jsx)("option",{value:"Black,Red",children:"Black and Red"}),Object(l.jsx)("option",{value:"Black,White",children:"Black and White"}),Object(l.jsx)("option",{value:"Blue,Green",children:"Blue and Green"}),Object(l.jsx)("option",{value:"Blue,Red",children:"Blue and Red"}),Object(l.jsx)("option",{value:"Blue,White",children:"Blue and White"}),Object(l.jsx)("option",{value:"Green,Red",children:"Green and Red"}),Object(l.jsx)("option",{value:"Green,White",children:"Green and White"}),Object(l.jsx)("option",{value:"Red,White",children:"Red and White"}),Object(l.jsx)("option",{value:"Black,Blue,Green",children:"Black, Blue, and Green"}),Object(l.jsx)("option",{value:"Black,Blue,Red",children:"Black, Blue, and Red"}),Object(l.jsx)("option",{value:"Black,Blue,White",children:"Black, Blue, and White"}),Object(l.jsx)("option",{value:"Black,Green,Red",children:"Black, Green, and Red"}),Object(l.jsx)("option",{value:"Black,Green,White",children:"Black, Green, and White"}),Object(l.jsx)("option",{value:"Black,Red,White",children:"Black, Red, and White"}),Object(l.jsx)("option",{value:"Blue,Green,Red",children:"Blue, Green, and Red"}),Object(l.jsx)("option",{value:"Blue,Green,White",children:"Blue, Green, and White"}),Object(l.jsx)("option",{value:"Blue,Red,White",children:"Blue, Red, and White"}),Object(l.jsx)("option",{value:"Green,Red,White",children:"Green, Red, and White"}),Object(l.jsx)("option",{value:"Black,Blue,Green,Red",children:"Black, Blue, Green, adn Red"}),Object(l.jsx)("option",{value:"Black,Green,Red,White",children:"Black, Green, Red, and White"}),Object(l.jsx)("option",{value:"Blue,Green,Red,White",children:"Blue, Green, Red, and White"}),Object(l.jsx)("option",{value:"Black,Blue,Green,White",children:"Black, Blue, Green, and White"}),Object(l.jsx)("option",{value:"Black,Blue,Red,White",children:"Black, Blue, Red, and White"}),Object(l.jsx)("option",{value:"Black,Blue,Red,Green,White",children:"Black, Blue, Red, Green, and White"})]})]}),Object(l.jsxs)("div",{style:H.pad,children:[Object(l.jsx)("button",{onClick:e.onClose,style:H.button,children:"Cancel"}),Object(l.jsx)("button",{onClick:function(){var t={title:document.querySelector("#deckInput").value,colors:document.querySelector("#colorType").value,cards:[]};e.newDeck(t),e.onClose()},style:H.button,children:"Create"})]})]})})},H={modal:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},content:{width:"30rem",backgroundColor:"#fff7ae",fontSize:"2rem"},pad:{padding:"1rem"},title:{margin:"0",color:"#48284a"},body:{padding:"1rem",borderTop:".1rem solid #eee",borderBottom:".1rem solid #eee"},input:{width:"24rem",height:"2rem",color:"#48284a",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0.05rem #48284a",margin:"0 0 1rem 0"},select:{width:"24.6rem",height:"2.5rem",color:"#48284a",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0 #48284a"},button:{width:"8rem",height:"3rem",border:".1rem solid #48284a",borderRadius:"1rem",background:"#acd7ec",boxShadow:"0 .2rem .4rem 0 #48284a",textTransform:"uppercase",margin:"0 1rem"}},V=function(){var e=Object(i.useState)([{title:"Azorius",colors:"Blue, White",cards:[{name:"Geist of Saint Traft",manaCost:"{1}{W}{U}",pAndT:"2/2"},{name:"Sphinx of New Prahv",manaCost:"{W}{W}{U}{U}",pAndT:"4/3"}]},{title:"Golgari",colors:"Black, Green",cards:[{name:"Lord of Extinction",manaCost:"{3}{B}{G}",pAndT:"*/*"},{name:"Baloth Null",manaCost:"{4}{B}{G}",pAndT:"4/5"},{name:"Winding Constrictor",manaCost:"{B}{G}",pAndT:"2/3"}]}]),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(!1),a=Object(h.a)(c,2),s=a[0],d=a[1];return Object(l.jsxs)("div",{id:"deckContainer",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(r.c,{to:"/Home",style:U.link,children:Object(l.jsx)(u.d,{style:U.icon})}),Object(l.jsx)("h1",{children:"Deck Builder"})]}),n.map((function(e){return Object(l.jsx)(I,{id:e.title,val:e},e.title)})),Object(l.jsx)("button",{onClick:function(){return d(!0)},className:"button",children:"Create New Deck"}),Object(l.jsx)(J,{show:s,onClose:function(){d(!1)},newDeck:function(e){var t=e;console.log(t),o(n.concat(t))}})]})},U={link:{display:"block",marginTop:"1rem",textDecoration:"none",color:"#111"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"}},E=function(e){return Object(l.jsxs)("div",{id:"UDCardContainer",children:[Object(l.jsx)(r.b,{to:'/Card/name="'.concat(e.id,'"'),style:Q.link,children:Object(l.jsxs)("div",{style:Q.tAndM,children:[Object(l.jsx)("h2",{style:Q.heading,children:e.val.name}),Object(l.jsx)("p",{style:Q.text,children:e.val.manaCost})]})}),Object(l.jsxs)("div",{style:Q.delPAndT,children:[Object(l.jsx)("div",{onClick:function(){var t=e.val.name;e.deleteMe(t)},children:Object(l.jsx)(u.b,{style:Q.icon})}),Object(l.jsx)("p",{style:Q.PT,children:e.val.pAndT})]})]},e.id)},Q={tAndM:{marginLeft:"1rem",display:"flex",flexDirection:"column"},delPAndT:{marginRight:"1rem"},PT:{marginTop:"1rem",fontSize:"1.2rem"},link:{textDecoration:"none",width:"80%",height:"100%",color:"#0d0d0d"},heading:{fontSize:"1.8rem"},text:{fontSize:"1.2rem"},icon:{width:"2.4rem",height:"2.4rem",color:"#9a569f"}},_=function(e){var t=Object(i.useState)(e.location.state.cards),n=Object(h.a)(t,2),o=n[0],c=n[1],a=Object(s.f)().id;function d(e){console.log(e);var t=o.findIndex((function(t){return t.name===e}));console.log(t),c(o.filter((function(t){return t.name!==e})))}return console.log(a),Object(l.jsxs)("div",{id:"UDContainer",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(r.c,{to:"/Deck",style:Y.link,children:Object(l.jsx)(u.d,{style:Y.icon})}),Object(l.jsx)("h1",{children:a})]}),o.map((function(e){return Object(l.jsx)(E,{id:e.name,val:e,deleteMe:d},e.name)}))]})},Y={link:{display:"block",textDecoration:"none",color:"#111"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"}},Z=function(e){return Object(l.jsx)("div",{id:"topicCardContainer",children:Object(l.jsxs)(r.b,{to:{pathname:"/Topic/".concat(e.val.title),state:e.val},style:K.link,children:[Object(l.jsx)("img",{src:e.val.image,alt:"User avatar",style:K.img}),Object(l.jsxs)("div",{style:K.textContainer,children:[Object(l.jsx)("h2",{children:e.val.title}),Object(l.jsx)("p",{children:"Last post by: ".concat(e.val.lastPost)}),Object(l.jsx)("p",{children:"Last post:  ".concat(e.val.postTime," ").concat(e.val.postDate)})]})]})},e.id)},K={textContainer:{display:"inline-block",maxWidth:"28rem",marginLeft:".5rem"},link:{textDecoration:"none",display:"inline-block",width:"100%",height:"100%",color:"#0d0d0d",boxShadow:"inset 0 0 .8rem .2rem #48284a",borderRadius:".9rem"},img:{marginLeft:"1rem"}},X=function(e){if(!e.show)return null;return Object(l.jsx)("div",{style:$.modal,onClick:e.onClose,children:Object(l.jsxs)("div",{style:$.content,onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("div",{style:$.headFootPad,children:Object(l.jsx)("h2",{style:$.mTitle,children:"Create a Discussion Topic"})}),Object(l.jsxs)("div",{style:$.mBody,children:[Object(l.jsx)("input",{type:"text",placeholder:"Discussion Topic",style:$.input}),Object(l.jsx)("label",{htmlFor:"category",children:"Category"}),Object(l.jsxs)("select",{id:"category",style:$.select,children:[Object(l.jsx)("option",{value:"Sets",children:"Sets"}),Object(l.jsx)("option",{value:"Cards",children:"Cards"}),Object(l.jsx)("option",{value:"Decks",children:"Decks"}),Object(l.jsx)("option",{value:"Tournaments",children:"Tournaments"})]}),Object(l.jsx)("textarea",{id:"forumModal",placeholder:"Message...",style:$.textArea})]}),Object(l.jsxs)("div",{style:$.headFootPad,children:[Object(l.jsx)("button",{onClick:e.onClose,style:$.button,children:"Cancel"}),Object(l.jsx)("button",{onClick:function(){var t=Date().split(" "),n={image:"https://picsum.photos/50/50?random-11",title:document.querySelector("input").value,lastPost:"local_User",postTime:t[4],postDate:"".concat(t[1]," ").concat(t[2]," ").concat(t[3]),posts:[{user:"local_user",timePosted:t[4],datePosted:"".concat(t[1]," ").concat(t[2]," ").concat(t[3]),post:document.querySelector("#forumModal").value,image:"https://picsum.photos/50/50?random-11"}],category:document.querySelector("select").value};e.newTopic(n),e.onClose()},style:$.button,children:"Create"})]})]})})},$={modal:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},content:{width:"30rem",backgroundColor:"#fff7ae",color:"#48284a"},headFootPad:{padding:"1rem"},mTitle:{margin:"0",fontSize:"2rem"},mBody:{padding:"1rem",borderTop:".1rem solid #eee",borderBottom:".1rem solid #eee",fontSize:"1.6rem"},input:{width:"24rem",height:"2rem",color:"#48284a",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0.05rem #48284a",margin:"0 0 1rem 0"},select:{width:"18.4rem",height:"2.5rem",color:"#48284a",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0 #48284a",margin:" 0 0 0 1rem"},button:{width:"8rem",height:"3rem",border:".1rem solid #48284a",borderRadius:"1rem",background:"#acd7ec",boxShadow:"0 .2rem .4rem 0 #48284a",textTransform:"uppercase",margin:"0 1rem"},textArea:{width:"24rem",height:"4rem",color:"#48284a",margin:"1rem 0 0 0",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0.05rem #48284a"}},ee=n(37),te=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)([{image:"https://picsum.photos/50/50?random-1",title:"General Forum Rules",lastPost:"Diablo_Destroyer",postTime:"10:35 AM",postDate:"10/07/2021",posts:[{user:"ManaAdmin",timePosted:"09:21 AM",datePosted:"10/06/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                    quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting \n                    zephyrs vex bold Jim.",image:"https://picsum.photos/50/50?random-2"},{user:"Diablo_Destroyer",timePosted:"10:35 AM",datePosted:"10/07/2021",post:'How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. \n                    Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled.',image:"https://picsum.photos/50/50?random-1"}]},{image:"https://picsum.photos/50/50?random-2",title:"Maintenance and Bugs",lastPost:"ManaAdmin",postTime:"07:47 PM",postDate:"10/01/2021",posts:[{user:"ManaAdmin",timePosted:"09:21 AM",datePosted:"09/13/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-2"},{user:"ManaAdmin",timePosted:"07:47 PM",datePosted:"10/01/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-2"}]}]),a=Object(h.a)(c,1)[0],s=Object(i.useState)([{image:"https://picsum.photos/50/50?random-3",title:"A Forgotten Realm",lastPost:"Classy Cleric",postTime:"03:19 PM",postDate:"09/21/2021",posts:[{user:"Classy Cleric",timePosted:"03:19 PM",datePosted:"09/21/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                    quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-3"}]},{image:"https://picsum.photos/50/50?random-4",title:"Theros Beyond Death",lastPost:"Soul_Devourer",postTime:"012:56 AM",postDate:"10/04/2021",posts:[{user:"Diablo_Destroyer",timePosted:"09:21 AM",datePosted:"09/27/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-1"},{user:"Soul_Devourer",timePosted:"12:56 AMM",datePosted:"10/04/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-4"}]}]),d=Object(h.a)(s,2),j=d[0],m=d[1],b=Object(i.useState)([{image:"https://picsum.photos/50/50?random-5",title:"Lord of Extinction",lastPost:"Black&Green",postTime:"011:19 AM",postDate:"01/15/2020",posts:[{user:"Black&Green",timePosted:"11:19 AM",datePosted:"01/15/2020",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-5"}]}]),x=Object(h.a)(b,2),g=x[0],f=x[1],y=Object(i.useState)([{image:"https://picsum.photos/50/50?random-6",title:"Challenger Decks",lastPost:"Wizard deCoast",postTime:"06:33 PM",postDate:"08/12/2021",posts:[{user:"ManaAdmin",timePosted:"07:57 AM",datePosted:"04/08/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                    quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-7"},{user:"Wizard deCoast",timePosted:"06:33 PM",datePosted:"08/12/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-6"}]},{image:"https://picsum.photos/50/50?random-7",title:"Zendakir vs Eldrazi",lastPost:"Burning Power",postTime:"02:01 AM",postDate:"03/28/2021",posts:[{user:"Classy Cleric",timePosted:"07:33 PM",datePosted:"01/09/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                    prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                    Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                    quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-4"},{user:"Wizard deCoast",timePosted:"03:16 PM",datePosted:"02/22/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-11"},{user:"Burning Power",timePosted:"02:01 AM",datePosted:"03/28/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-7"}]}]),O=Object(h.a)(y,2),v=O[0],k=O[1],w=Object(i.useState)([{image:"https://picsum.photos/50/50?random-8",title:"Unsactioned Obliteration",lastPost:"ManaAdmin",postTime:"05:09 AM",postDate:"10/09/2021",posts:[{user:"Classy Cleric",timePosted:"07:33 PM",datePosted:"09/28/2021",post:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz \n                prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. \n                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick \n                quiz whangs jumpy veldt fox. ",image:"https://picsum.photos/50/50?random-10"},{user:"Wizard deCoast",timePosted:"03:16 PM",datePosted:"10/01/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-9"},{user:"ManaAdmin",timePosted:"05:09 AM",datePosted:"10/09/2021",post:"ive quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps \n                    Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy \n                    fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy \n                    fox.",image:"https://picsum.photos/50/50?random-8"}]}]),C=Object(h.a)(w,2),z=C[0],B=C[1];return Object(l.jsxs)("div",{id:"forumDiv",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{style:ne.topper,children:[Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(r.c,{to:"/Home",style:ne.link,children:Object(l.jsx)(u.d,{style:ne.icon})}),Object(l.jsx)("h1",{children:"Forum"})]}),Object(l.jsx)("div",{onClick:function(){return o(!0)},children:Object(l.jsx)(ee.a,{style:ne.icon})}),Object(l.jsx)(X,{show:n,onClose:function(){return o(!1)},newTopic:function(e){!function(e){var t={image:e.image,title:e.title,lastPost:e.lastPost,postTime:e.postTime,postDate:e.postDate,posts:e.posts};switch(console.log(t),e.category){case"Sets":m(j.concat(t));break;case"Cards":f(g.concat(t));break;case"Decks":k(v.concat(t));break;case"Tournaments":B(z.concat(t))}}(e)}})]}),Object(l.jsx)("h1",{style:ne.heading,children:"General"}),a.map((function(e){return Object(l.jsx)(Z,{id:e.title,val:e},e.title)})),Object(l.jsx)("h1",{style:ne.heading,children:"Sets"}),j.map((function(e){return Object(l.jsx)(Z,{id:e.title,val:e},e.title)})),Object(l.jsx)("h1",{style:ne.heading,children:"Cards"}),g.map((function(e){return Object(l.jsx)(Z,{id:e.title,val:e},e.title)})),Object(l.jsx)("h1",{style:ne.heading,children:"Decks"}),v.map((function(e){return Object(l.jsx)(Z,{id:e.title,val:e},e.title)})),Object(l.jsx)("h1",{style:ne.heading,children:"Tournaments"}),z.map((function(e){return Object(l.jsx)(Z,{id:e.title,val:e},e.title)}))]})},ne={link:{display:"block",textDecoration:"none",color:"#111"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"},heading:{color:"#fff7ae"},topper:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},ie=function(e){return Object(l.jsxs)("div",{id:"postCardContainer",children:[Object(l.jsxs)("div",{style:oe.avaText,children:[Object(l.jsx)("img",{src:e.val.image,alt:"User avatar"}),Object(l.jsxs)("div",{style:oe.mLeft,children:[Object(l.jsx)("h3",{style:oe.heading,children:e.val.user}),Object(l.jsx)("h3",{style:oe.heading,children:e.val.timePosted})]})]}),Object(l.jsx)("div",{style:oe.textBox,children:Object(l.jsx)("p",{children:e.val.post})})]},e.id)},oe={avaText:{display:"flex",flexDirection:"row",margin:"1rem 0 0 .5rem"},mLeft:{marginLeft:".5rem"},textBox:{maxWidth:"30rem",margin:"0 auto",fontSize:"1.4rem"},heading:{fontSize:"1.6rem"}},ce=function(e){if(!e.show)return null;return Object(l.jsx)("div",{style:ae.modal,onClick:e.onClose,children:Object(l.jsxs)("div",{style:ae.content,onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("div",{style:ae.hfPad,children:Object(l.jsx)("h2",{style:ae.mTitle,children:"Reply"})}),Object(l.jsx)("div",{style:ae.mBody,children:Object(l.jsx)("textarea",{id:"replyTArea",placeholder:"Message...",style:ae.textArea})}),Object(l.jsxs)("div",{style:ae.hfPad,children:[Object(l.jsx)("button",{onClick:e.onClose,style:ae.button,children:"Cancel"}),Object(l.jsx)("button",{onClick:function(){var t=Date().split(" ");console.log(t);var n={user:"Current_User",timePosted:"".concat(t[4]),datePosted:"".concat(t[1],"  ").concat(t[2]," ").concat(t[3]),post:document.querySelector("#replyTArea").value,image:"https://picsum.photos/50/50?random-20"};e.newReply(n),e.onClose()},style:ae.button,children:"Reply"})]})]})})},ae={modal:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},content:{width:"30rem",backgroundColor:"#fff7ae",color:"#48284a"},hfPad:{padding:"1rem"},mTitle:{margin:"0",fontSize:"2rem"},mBody:{padding:"1rem",borderTop:".1rem solid #eee",borderBottom:".1rem solid #eee"},textArea:{width:"27rem",height:"8rem",color:"#48284a",border:".1rem solid #48284a",borderRadius:".5rem",boxShadow:"inset 0 0 .3rem 0.05rem #48284a"},button:{width:"8rem",height:"3rem",border:".1rem solid #48284a",borderRadius:"1rem",background:"#acd7ec",boxShadow:"0 .2rem .4rem 0 #48284a",textTransform:"uppercase",margin:"0 1rem"}},se=function(e){var t=Object(i.useState)(!1),n=Object(h.a)(t,2),o=n[0],c=n[1],a=Object(i.useState)(e.location.state.posts),d=Object(h.a)(a,2),j=d[0],m=d[1],b=Object(s.f)().id;return console.log({id:b}),console.log(j),Object(l.jsxs)("div",{id:"topicContainer",children:[Object(l.jsx)(p,{}),Object(l.jsx)(r.c,{to:"/Forum",style:re.link,children:Object(l.jsx)(u.d,{style:re.icon})}),Object(l.jsx)("div",{style:re.header,children:Object(l.jsx)("h1",{children:b})}),j.map((function(e){return Object(l.jsx)(ie,{id:e.user,val:e},e.user)})),Object(l.jsx)("button",{onClick:function(){c(!0)},className:"button",children:"REPLY"}),Object(l.jsx)(ce,{show:o,onClose:function(){c(!1)},newReply:function(e){var t={user:e.user,timePosted:e.timePosted,datePosted:e.datePosted,post:e.post,image:e.image};m(j.concat(t)),console.log(j)}})]})},re={header:{maxWidth:"36rem",height:"6rem",border:".1rem solid #000",margin:"0 auto",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1rem",background:"#fff7ae"},link:{display:"block",marginTop:"1rem",textDecoration:"none",color:"#111"},icon:{width:"2.4rem",height:"2.4rem",color:"#fff7ae"}};var le=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:g}),Object(l.jsx)(s.a,{exact:!0,path:"/Home",component:g}),Object(l.jsx)(s.a,{exact:!0,path:"/Search",component:w}),Object(l.jsx)(s.a,{exact:!0,path:"/Results/:id",component:D}),Object(l.jsx)(s.a,{exact:!0,path:"/Card/:id",component:G}),Object(l.jsx)(s.a,{exact:!0,path:"/Deck",component:V}),Object(l.jsx)(s.a,{exact:!0,path:"/UserDeck/:id",component:_}),Object(l.jsx)(s.a,{exact:!0,path:"/Forum",component:te}),Object(l.jsx)(s.a,{exact:!0,path:"/Topic/:id",component:se})]})})};var de=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(r.a,{children:Object(l.jsx)(le,{})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(de,{})}),document.getElementById("root")),je()}},[[35,1,2]]]);
//# sourceMappingURL=main.474fbdf7.chunk.js.map