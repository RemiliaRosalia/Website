(function(){"use strict";var e={7881:function(e,t,n){var o=n(5130),i=n(6768),a=n.p+"img/logo.1592727d.jpg";const s={class:"header"},r={class:"logo"},l=(0,i.Lk)("img",{src:a,width:"200px"},null,-1),c={class:"navLinks"};function u(e,t,n,o,a,u){const h=(0,i.g2)("router-link"),d=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("body",null,[(0,i.Lk)("nav",s,[(0,i.Lk)("div",r,[(0,i.bF)(h,{to:"/"},{default:(0,i.k6)((()=>[l])),_:1})]),(0,i.Lk)("div",c,[(0,i.bF)(h,{to:"/",class:"navRight"},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1}),(0,i.eW)("   "),(0,i.bF)(h,{to:"/portfolio",class:"navRight"},{default:(0,i.k6)((()=>[(0,i.eW)("Portfolio")])),_:1}),(0,i.eW)("   "),(0,i.bF)(h,{to:"/cv",class:"navRight"},{default:(0,i.k6)((()=>[(0,i.eW)("CV")])),_:1}),(0,i.eW)("    "),(0,i.bF)(h,{to:"/about",class:"navRight"},{default:(0,i.k6)((()=>[(0,i.eW)("About")])),_:1})])])]),(0,i.bF)(d)],64)}var h={},d=n(1241);const g=(0,d.A)(h,[["render",u]]);var p=g,m=n(1387),f=n(4232),v=n.p+"img/JNJFotG.5cb790a4.png";const b={class:"home"},k={key:0,class:"featured"},y=(0,i.Lk)("img",{src:v,width:"33%",class:"featuredImg"},null,-1),w={class:"featuredText"},L=(0,i.Lk)("h2",null," Part 3 Released! ",-1),C=(0,i.Lk)("h3",null,"Part 3 of Journeys and Jazz: The Fruits of the Gods has been released for free on itch.io!",-1),T={key:0};function P(e,t,n,o,a,s){const r=(0,i.g2)("HomePostList");return(0,i.uX)(),(0,i.CE)("div",b,[o.postFeat?((0,i.uX)(),(0,i.CE)("div",k,[y,(0,i.Lk)("div",w,[(0,i.Lk)("h1",null,(0,f.v_)(o.postFeat.title),1),L,C,(0,i.Lk)("p",null,(0,f.v_)(o.postFeat.desc),1)])])):(0,i.Q3)("",!0),(0,i.Lk)("div",null,[o.posts.length?((0,i.uX)(),(0,i.CE)("div",T,[(0,i.bF)(r,{posts:o.posts},null,8,["posts"])])):(0,i.Q3)("",!0)])])}n(3986);const G={class:"GameRow"},F=(0,i.Lk)("h3",null,"Games",-1),M={class:"HomePosts"},A={key:0},j={class:"ModelRow"},E=(0,i.Lk)("h3",null,"3D Models & More",-1),R={class:"HomePosts"},S={key:0},J={class:"ArtRow"},I=(0,i.Lk)("h3",null,"Art(TEMP JAVASCRIPT)",-1),_={class:"HomePosts"},N={key:0};function X(e,t,n,o,a,s){const r=(0,i.g2)("SmallSinglePost");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",G,[F,(0,i.Lk)("div",M,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.posts,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id},[o.searchTag("Game",e.id)?((0,i.uX)(),(0,i.CE)("div",A,[(0,i.bF)(r,{post:e},null,8,["post"])])):(0,i.Q3)("",!0)])))),128))])]),(0,i.Lk)("div",j,[E,(0,i.Lk)("div",R,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.posts,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id},[o.searchTag("3D",e.id)?((0,i.uX)(),(0,i.CE)("div",S,[(0,i.bF)(r,{post:e},null,8,["post"])])):(0,i.Q3)("",!0)])))),128))])]),(0,i.Lk)("div",J,[I,(0,i.Lk)("div",_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.posts,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id},[o.searchTag("JavaScript",e.id)?((0,i.uX)(),(0,i.CE)("div",N,[(0,i.bF)(r,{post:e},null,8,["post"])])):(0,i.Q3)("",!0)])))),128))])])],64)}const D={class:"smallPost"},z=["src"],x={width:"100%",class:"smallPostTitle"};function O(e,t,n,o,a,s){const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",D,[(0,i.bF)(r,{to:{name:n.post.url}},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{src:n.post.icon,class:"smallPostImg"},null,8,z),(0,i.Lk)("h3",x,(0,f.v_)(n.post.title),1)])),_:1},8,["to"])])}var H={props:["post"],setup(e){const t=()=>(console.log(e.post.icon+"  |  ../assets/JNJFotG.png"),"../assets/JNJFotG.png");return{getIcon:t}}};const K=(0,d.A)(H,[["render",O]]);var W=K,B=n(144),U={props:["posts"],components:{SmallSinglePost:W},setup(e){const t=(0,B.KR)("3D"),n=(t,n)=>{for(var o=e.posts.length-n,i=0;i<e.posts[o].tags.length;i++)if(e.posts[o].tags[i].match(t))return console.log(e.posts[o]),!0};return{activeTag:t,searchTag:n}}};const V=(0,d.A)(U,[["render",X]]);var Z=V,Q=n(4007),Y={name:"HomeView",components:{HomePostList:Z},props:["id"],setup(){const e=Q.Y,t=e[2];return{posts:e,postFeat:t}}};const q=(0,d.A)(Y,[["render",P]]);var $=q;const ee={class:"projectPage"},te=(0,i.Fv)('<h1>Journeys And Jazz: The Fruits of the Gods</h1><div class="projectIMG"><img src="'+v+'" height="400em"><h5>Tools used: RPG Maker MZ, JavaScript, Photoshop, Clip Studio Paint</h5></div><div><h3>About</h3><p>Journeys and Jazz: The Fruits of the Gods is a turn-based RPG created in RPG Maker MZ. It features the four characters of Leonard, Seleth, Dreck, and Tezca as they explore the modern fantasy world of Eclysia for the titular Fruits of the Gods. The story will take place over 6 parts with parts 1 and 2 currently released and part 3 nearing completion. Play it for free on itch.io: (insert Link) </p><h3>Process</h3><p>Journeys and Jazz: The Fruit of the Gods (JNJ)&#39;s story originated from my first ever Tabletop RPG campaign, using my original system, Journeys and Jazz. The game not only retells that story but features additional content that went unused in the campaign. I originally started this project as my Senior Thesis and currently am continuing to work on it in my spare time. One of my main focuses in this project is to have a game that can be comedic but also is not afraid to take itself seriously. Along with this, I value the expressiveness of the characters which is showcased through their many different portrait expressions. </p><p> I find it very engaging to work on the combat system. I work as hard as I can to make each skill a character gets interesting and to keep each playable character balanced with one another. One way I worked to give player&#39;s choice in combat is through equipment. In JNJ, every item adjusts stats by a % rather then a flat value. This allowed me to keep items worthwhile throughout the game, including weapons. Each weapon is designed to fit a slightly different playstyle, making them sidegrades rather than upgrades. An example of this can be seen with three of Dreck&#39;s weapons. The Cactus grants Dreck a higher attack boost than his other choices but he takes damage each turn. The Limbo Pole instead sacrifices attack in exchange for allowing Dreck to act more often. The standard Log instead is more balanced, boosting his defense and attack, making it the best general pick. </p><h3>Challenges</h3><p> While RPG Maker MZ makes the creation progress much easier with its premade assets, engine, and combat systems, this has the downside of being less customizable. I have occassionally struggled to implement my ideas due to it&#39;s restrictions though I have been able to still succeed whether it be by finding plugins that add functionality or editing the engine&#39;s code myself. I have also numerous times during my work on JNJ, faced creative burn out. This was especially difficult to pull through in Part 3 which features many more NPCs than Part 1 and 2 combined. I found switching my focus to other aspects or different projects helped greatly with giving me time to create more NPC ideas. </p></div>',3),ne=[te];function oe(e,t){return(0,i.uX)(),(0,i.CE)("div",ee,ne)}const ie={},ae=(0,d.A)(ie,[["render",oe]]);var se=ae,re=n.p+"img/GiftofPain.86671d61.png";const le={class:"projectPage"},ce=(0,i.Fv)('<h1>Gift of Pain</h1><div class="projectIMG"><img src="'+re+'" height="400em"><h5>Tools used: Blender, Unity, GitHub</h5></div><div><h3>About</h3><p> Gift of Pain is a in-progress 3D Action Game staring a Mall Santa fighting mutant children who don&#39;t like the presents they got. I serve as the Lead 3D artist, in charge of creating various assets, including Santa himself. </p><h3>Process</h3><p> Gift of Pain was born out of a failed freelance project that two others and I were hoping to do. After that, we decided to bring on another friend and join a holiday Game Jam with the prompt of Giving. We decided to go with the idea of giving pain and then Gift of Pain was born. Here we decided on going for a low poly 3D action game. Once the Game Jam ended, we decided that we&#39;d continue the project in hopes of one day finishing it. </p><p> My first goal with this project was to create the main character, Santa. This included making the model itself, along with UV mapping, rigging, and animating him. I also created many of the props for the Mall the game takes place in featured below. The setting of a mall allowed us to get creative with what we can include, allowing me to make a wide variety of different models. </p><h3>Challenges</h3><p> Before this project, I had minimal experience with modeling people, expecially an exagerrated one like this Santa. As a result, the first version did have issues, especially regarding animating. Because of this, I decided to try again from scratch the second Santa model ended up looking more refined and was easier to animate. </p></div>',3),ue=[ce];function he(e,t){return(0,i.uX)(),(0,i.CE)("div",le,ue)}const de={},ge=(0,d.A)(de,[["render",he]]);var pe=ge;const me={class:"about"},fe=(0,i.Lk)("h1",null,"Nergs are cool c:",-1),ve=(0,i.Lk)("iframe",{src:"https://www.behance.net/embed/project/173371111?ilo0=1",height:"316",width:"404",allowfullscreen:"",lazyload:"",frameborder:"0",allow:"clipboard-write",refererPolicy:"strict-origin-when-cross-origin"},null,-1),be=[fe,ve];function ke(e,t){return(0,i.uX)(),(0,i.CE)("div",me,be)}const ye={},we=(0,d.A)(ye,[["render",ke]]);var Le=we,Ce=n.p+"img/RoyalFlush.8db6e008.png";const Te={class:"projectPage"},Pe=(0,i.Fv)('<h1>Royal Flush</h1><h2>A Gambling Inspired RPG</h2><div class="projectIMG"><img src="'+Ce+'" height="400em"><h5>Tools used: Unity</h5></div><div><h3>About</h3><p> Royal Flush is a gambling themed turn-based RPG starring Tim?, Roulette, and Gimble as they use their gambling skills to fight through the casino and save Tim?&#39;s sister.&#39; This prototype features 2 combat scenarios where you can learn the basics of each character&#39;s ability and respective gambling mini-game. </p><h3>Process</h3><p>I worked on this prototype with 4 others.</p><p>My goal was to balance combat along the gambling minigames for each character.</p><p>These minigames include Slots, High or Low, and Blackjack.</p><p>Before starting development in Unity, we decided to make a physical prototype of the combat system to test our idea&#39;s potential.</p><h3>Challenges</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet.</p></div>',4),Ge=[Pe];function Fe(e,t){return(0,i.uX)(),(0,i.CE)("div",Te,Ge)}const Me={},Ae=(0,d.A)(Me,[["render",Fe]]);var je=Ae;const Ee={class:"about"},Re=(0,i.Lk)("h1",null,"I hate this site lowkey",-1),Se=[Re];function Je(e,t){return(0,i.uX)(),(0,i.CE)("div",Ee,Se)}const Ie={},_e=(0,d.A)(Ie,[["render",Je]]);var Ne=_e;const Xe={class:"projectPage"},De=(0,i.Lk)("h1",null,"Maya MASH/nCloth",-1),ze=(0,i.Lk)("div",{class:"projectIMG"},[(0,i.Lk)("img",{src:v,height:"400em"}),(0,i.Lk)("h5",null,"Tools used: RPG Maker MZ, JavaScript, Photoshop, Clip Studio Paint")],-1),xe=(0,i.Lk)("div",null,[(0,i.Lk)("h3",null,"About"),(0,i.Lk)("p"),(0,i.Lk)("h3",null,"Process"),(0,i.Lk)("p"),(0,i.Lk)("p"),(0,i.Lk)("h3",null,"Challenges"),(0,i.Lk)("p")],-1),Oe=[De,ze,xe];function He(e,t){return(0,i.uX)(),(0,i.CE)("div",Xe,Oe)}const Ke={},We=(0,d.A)(Ke,[["render",He]]);var Be=We;var Ue=n.p+"img/nibbleKnight.6eace62f.png";const Ve={class:"projectPage"},Ze=(0,i.Lk)("h1",null,"NibbleKnight",-1),Qe=(0,i.Lk)("div",{class:"projectIMG"},[(0,i.Lk)("img",{src:Ue,height:"400em"}),(0,i.Lk)("h5",null,"Tools used: RPG Maker MZ, JavaScript, Photoshop, Clip Studio Paint")],-1),Ye=[Ze,Qe];function qe(e,t){return(0,i.uX)(),(0,i.CE)("div",Ve,Ye)}const $e={},et=(0,d.A)($e,[["render",qe]]);var tt=et;const nt={class:"projectPage"},ot=(0,i.Lk)("h1",null,"NibbleKnight",-1),it=(0,i.Lk)("div",{class:"projectIMG"},[(0,i.Lk)("img",{src:Ue,height:"400em"}),(0,i.Lk)("h5",null,"Tools used: RPG Maker MZ, JavaScript, Photoshop, Clip Studio Paint")],-1),at=[ot,it];function st(e,t){return(0,i.uX)(),(0,i.CE)("div",nt,at)}const rt={},lt=(0,d.A)(rt,[["render",st]]);var ct=lt;const ut=[{path:"/",name:"home",component:$,props:!0},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,5283))},{path:"/cv",name:"cv",component:()=>n.e(835).then(n.bind(n,3835))},{path:"/portfolio",name:"portfolio",component:()=>n.e(350).then(n.bind(n,9350))},{path:"/project/Journeys_and_Jazz_The_Fruits_of_the_Gods",name:"JourneysAndJazzTheFruitsOfTheGods",component:se},{path:"/project/Gift_of_Pain",name:"GiftOfPain",component:pe},{path:"/project/Nerg_Model",name:"NergModel",component:Le},{path:"/project/Royal_Flush",name:"RoyalFlush",component:je},{path:"/project/My_Website",name:"MyWebsite",component:Ne},{path:"/project/MASH_nCloth",name:"MashnCloth",component:Be},{path:"/project/NibbleKnight",name:"NibbleKnight",component:tt},{path:"/project/3DModels2024",name:"3DModels2024",component:ct}],ht=(0,m.aE)({history:(0,m.LA)("/"),routes:ut});var dt=ht;(0,o.Ef)(p).use(dt).mount("#app")},3986:function(e,t,n){n.d(t,{A:function(){return T}});var o=n(6768),i=n(4232);const a={class:"postList"},s={class:"tagArea"},r={class:"active"},l={class:"active"},c={class:"posts"},u={key:0},h={key:1};function d(e,t,n,d,g,p){const m=(0,o.g2)("SinglePost");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("h1",null,(0,i.v_)(d.activeTag)+" Projects",1),(0,o.Lk)("div",a,[(0,o.Lk)("div",s,[(0,o.Lk)("div",r,[(0,o.Lk)("label",null,"Current Filter: "+(0,i.v_)(d.activeTag),1)]),(0,o.Lk)("div",l,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>d.activeTag="")},"Clear Filter")]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=e=>d.activeTag="Game")},"Game"),(0,o.Lk)("button",{onClick:t[2]||(t[2]=e=>d.activeTag="JavaScript")},"JavaScript"),(0,o.Lk)("button",{onClick:t[3]||(t[3]=e=>d.activeTag="3D")},"3D"),(0,o.Lk)("button",{onClick:t[4]||(t[4]=e=>d.activeTag="Unity")},"Unity"),(0,o.Lk)("button",{onClick:t[5]||(t[5]=e=>d.activeTag="Programming")},"Programming"),(0,o.Lk)("button",{onClick:t[6]||(t[6]=e=>d.activeTag="C#")},"C#"),(0,o.Lk)("button",{onClick:t[7]||(t[7]=e=>d.activeTag="Videogame")},"Videogame"),(0,o.Lk)("button",{onClick:t[8]||(t[8]=e=>d.activeTag="Game Design")},"Game Design"),(0,o.Lk)("button",{onClick:t[9]||(t[9]=e=>d.activeTag="Rigging")},"Rigging"),(0,o.Lk)("button",{onClick:t[10]||(t[10]=e=>d.activeTag="Texturing")},"Texturing"),(0,o.Lk)("button",{onClick:t[11]||(t[11]=e=>d.activeTag="Animation")},"Animation")]),(0,o.Lk)("div",c,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.posts,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[""==d.activeTag?((0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(m,{post:e},null,8,["post"])])):d.searchTag(d.activeTag,e.id)?((0,o.uX)(),(0,o.CE)("div",h,[(0,o.bF)(m,{post:e},null,8,["post"])])):(0,o.Q3)("",!0)])))),128))])])],64)}const g={class:"post"},p=["src"],m={class:"tagContainer"};function f(e,t,n,a,s,r){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.bF)(l,{to:{name:n.post.url}},{default:(0,o.k6)((()=>[(0,o.Lk)("h3",null,(0,i.v_)(n.post.title),1),(0,o.Lk)("img",{src:n.post.icon},null,8,p)])),_:1},8,["to"]),(0,o.Lk)("p",null,(0,i.v_)(a.snippet),1),(0,o.Lk)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.post.tags,(e=>((0,o.uX)(),(0,o.CE)("span",{key:e}," #"+(0,i.v_)(e),1)))),128))])])}var v={props:["post"],setup(e){const t=(0,o.EW)((()=>e.post.desc.length>100?e.post.desc.substring(0,100)+"...":e.post.desc)),n=()=>(console.log(e.post.icon+"  |  ../assets/JNJFotG.png"),"../assets/JNJFotG.png");return{snippet:t,getIcon:n}}},b=n(1241);const k=(0,b.A)(v,[["render",f]]);var y=k,w=n(144),L={props:["posts"],components:{SinglePost:y},setup(e){const t=(0,w.KR)(""),n=(t,n)=>{for(var o=e.posts.length-n,i=0;i<e.posts[o].tags.length;i++)if(e.posts[o].tags[i].match(t))return console.log(e.posts[o]),!0};return{activeTag:t,searchTag:n}}};const C=(0,b.A)(L,[["render",d]]);var T=C},4007:function(e){e.exports=JSON.parse('{"Y":[{"id":8,"url":"NibbleKnight","title":"Nibble Knight","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/logo.1592727d.jpg?raw=true","desc":"Grabbling Hooks in the Sewer!","tags":["Game","Unity","Game Design","GitHub","Level Design","Team"]},{"id":7,"url":"MyWebsite","title":"My Website","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/logo.1592727d.jpg?raw=true","desc":"This site was all me!","tags":["HTML","JavaScript","CSS","GitHub","Programming"]},{"id":6,"url":"3DModels2024","title":"3D Models 2024","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/logo.1592727d.jpg?raw=true","desc":"A collection of every 3D model I made in 2024","tags":["3D","Blender","Photoshop","Texturing","Solo"]},{"id":5,"url":"GiftOfPain","title":"Gift of Pain","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/GiftofPain.png?raw=true","desc":"This ex-wrestler Santa has had enough!","tags":["Game","Videogame","Blender","3D","Unity","Programming","C#","Animation","Rigging","Texturing"]},{"id":4,"url":"JourneysAndJazzTheFruitsOfTheGods","title":"Journeys and Jazz: The Fruits of the Gods","icon":"https://img.itch.zone/aW1nLzEyNTY5MjUzLnBuZw==/315x250%23c/4ev6mR.png","desc":"The coolest RPG Maker game ever!","tags":["Game","Videogame","Game Design","JavaScript","Programming"]},{"id":3,"url":"MashnCloth","title":"Maya MASH & nCloth Independent Study","icon":"https://img.itch.zone/aW1nLzEyNTY5MjUzLnBuZw==/315x250%23c/4ev6mR.png","desc":"A collection of projects","tags":["3D","Maya","MASH","nCloth","Simulation"]},{"id":2,"url":"NergModel","title":"Nerg 3D Model","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/Nerg.jpg?raw=true","desc":"Meet this little guy!","tags":["3D","Maya","Creature","Organic","Texturing","Rigging","Animation"]},{"id":1,"url":"RoyalFlush","title":"Royal Flush","icon":"https://github.com/RemiliaRosalia/website/blob/gh-pages/img/RoyalFlush.png?raw=true","desc":"The Gambling RPG","tags":["Game","Videogame","Game Design","Unity","C#","Programming"]}]}')}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{350:"0a3b6c2f",594:"790b90f3",835:"e21bd3a6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{350:"d2dba2b9",594:"956c73b8",835:"9d1b4118"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="website:";n.l=function(o,i,a,s){if(e[o])e[o].push(i);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var h=c[u];if(h.getAttribute("src")==o||h.getAttribute("data-webpack")==t+a){r=h;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=o),e[o]=[i];var d=function(t,n){r.onerror=r.onload=null,clearTimeout(g);var i=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,i,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var r=function(n){if(s.onerror=s.onload=null,"load"===n.type)i();else{var o=n&&n.type,r=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+r+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=r,s.parentNode&&s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=r,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){i=s[o],a=i.getAttribute("data-href");if(a===e||a===t)return i}},o=function(o){return new Promise((function(i,a){var s=n.miniCssF(o),r=n.p+s;if(t(s,r))return i();e(o,r,null,i,a)}))},i={524:0};n.f.miniCss=function(e,t){var n={350:1,594:1,835:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=a);var s=n.p+n.u(t),r=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,i[1](r)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7881)}));o=n.O(o)})();
//# sourceMappingURL=app.fce998cf.js.map