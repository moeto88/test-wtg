(function(){"use strict";var e={126:function(e,t,r){var s=r(9242),o=r(3396);const i=(0,o._)("h1",null,"World Trading Game",-1);function n(e,t,r,s,n,a){const u=(0,o.up)("Room"),l=(0,o.up)("Game"),c=(0,o.up)("Production"),d=(0,o.up)("Trade"),p=(0,o.up)("Announce");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o.Wm)(u),(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(p)],64)}var a=r(7139);const u=e=>((0,o.dD)("data-v-5e169352"),e=e(),(0,o.Cn)(),e),l={class:"container"},c={key:0,class:"name-input"},d={for:"userName"},p={class:"room-members"},h=u((()=>(0,o._)("div",null,"Room Members: ",-1))),m={key:0},_=u((()=>(0,o._)("div",null,"Select Your Country",-1))),g={class:"radio-buttons"},f={key:1},k={class:"input-section"},v={class:"radio-section"},y={key:0,class:"create-room-button"},b={key:1,class:"join-room-section"},P={class:"error-message"};function w(e,t,r,i,n,u){return(0,o.wg)(),(0,o.iD)("div",l,[n.isJoined?((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("label",d," User Name: "+(0,a.zw)(n.userName),1),(0,o._)("div",null,"Room ID: "+(0,a.zw)(n.roomId),1),(0,o._)("div",p,[h,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.userList,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},(0,a.zw)(e),1)))),128))])]),n.start?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",m,[_,(0,o._)("div",g,[(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>n.country=e),value:"A"},null,512),[[s.G2,n.country]]),(0,o.Uk)(" A ")]),(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>n.country=e),value:"B"},null,512),[[s.G2,n.country]]),(0,o.Uk)(" B ")])]),(0,o._)("div",null,[(0,o._)("input",{type:"button",value:"Start Game",onClick:t[2]||(t[2]=(...e)=>u.startGame&&u.startGame(...e))})])]))])):((0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",k,[(0,o.Uk)(" Name: "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.userName=e),type:"text"},null,512),[[s.nr,n.userName]])]),(0,o._)("div",v,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>n.joinType=e),value:"1"},null,512),[[s.G2,n.joinType]]),(0,o.Uk)(" Create Room "),(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=e=>n.joinType=e),value:"2"},null,512),[[s.G2,n.joinType]]),(0,o.Uk)(" Join Room ")]),1==n.joinType?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("input",{type:"button",value:"Create Room",onClick:t[6]||(t[6]=(...e)=>u.createRoom&&u.createRoom(...e))})])):(0,o.kq)("",!0),2==n.joinType?((0,o.wg)(),(0,o.iD)("div",b,[(0,o.Uk)(" Room ID: "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>n.roomId=e),type:"text"},null,512),[[s.nr,n.roomId]]),(0,o._)("input",{class:"join-room-button",type:"button",value:"Join Room",onClick:t[8]||(t[8]=(...e)=>u.joinRoom&&u.joinRoom(...e))})])):(0,o.kq)("",!0)])),(0,o._)("div",P,(0,a.zw)(n.error_message),1)])}var C=r(65),R={name:"Room",data(){return{error_message:"",userName:"",userId:"",joinType:1,roomId:"",isJoined:!1,userList:[],country:"",start:!1}},created(){this.socket.on("connect",(()=>{console.log("connected")}))},mounted(){this.socket.on("initUser",((e,t)=>{this.isJoined=!0,this.roomId=e.id,this.userId=t.id,this.updateUser(t),this.updateRoom(e)})),this.socket.on("updateRoom",(e=>{this.userList=e.users.map((e=>e.name)),this.updateRoom(e)})),this.socket.on("notifyError",(e=>{this.start=!1,this.error_message=e})),this.socket.on("deleteError",(()=>{this.error_message=""}))},methods:{...(0,C.OI)(["setUser","setRoom"]),createRoom(){this.socket.emit("createRoom",this.userName),this.error_message=""},joinRoom(){this.socket.emit("joinRoom",this.userName,this.roomId),this.error_message=""},startGame(){this.start=!0,this.socket.emit("startGame",this.roomId,this.userId,this.country)},updateUser(e){this.setUser(e)},updateRoom(e){this.setRoom(e)}},computed:{...(0,C.rn)(["socket","user"])}},q=r(89);const O=(0,q.Z)(R,[["render",w],["__scopeId","data-v-5e169352"]]);var T=O;const D=e=>((0,o.dD)("data-v-d7441d88"),e=e(),(0,o.Cn)(),e),U={key:0},G={class:"userName"},I={class:"country"},z={class:"budget",model:"user.budget"},F=D((()=>(0,o._)("div",{class:"resource"},"Your Resource:",-1))),j={class:"styled-table"},S=D((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Item"),(0,o._)("th",null,"Quantity")])],-1))),Y=D((()=>(0,o._)("hr",null,null,-1)));function A(e,t,r,s,i,n){return i.start?((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",G,"User: "+(0,a.zw)(e.user.name),1),(0,o._)("div",I,"Your country: "+(0,a.zw)(e.user.country),1),(0,o._)("div",z,"Your budget: €"+(0,a.zw)(e.user.budget),1),F,(0,o._)("table",j,[S,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.user.resource,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,a.zw)(t.charAt(0).toUpperCase()+t.slice(1)),1),(0,o._)("td",null,(0,a.zw)(e),1)])))),128))])]),Y])):(0,o.kq)("",!0)}var N={name:"Game",data(){return{start:!1}},mounted(){this.socket.on("initGame",(e=>{this.start=!0,this.updateUser(e)})),this.socket.on("updateAll",(e=>{this.updateRoom(e)})),this.socket.on("updateUser",(e=>{this.updateUser(e)}))},methods:{...(0,C.OI)(["setUser","setRoom"]),updateUser(e){this.setUser(e)},updateRoom(e){this.setRoom(e)}},computed:{...(0,C.rn)(["socket","user","room"])}};const x=(0,q.Z)(N,[["render",A],["__scopeId","data-v-d7441d88"]]);var L=x,V=r.p+"img/rectangle.7fb63c03.png",M=r.p+"img/triangle.8dbf2edd.png",B=r.p+"img/circle.b7686712.png";const H=e=>((0,o.dD)("data-v-27cbb85b"),e=e(),(0,o.Cn)(),e),E={key:0},K=H((()=>(0,o._)("h1",null,"Production: ",-1))),W={class:"container"},Z={class:"shape-container"},J=H((()=>(0,o._)("img",{src:V},null,-1))),Q=H((()=>(0,o._)("div",null,"Need:",-1))),X=H((()=>(0,o._)("ul",null,[(0,o._)("li",null,"Scissors"),(0,o._)("li",null,"Pencil"),(0,o._)("li",null,"Ruler"),(0,o._)("li",null,"Paper: 15")],-1))),$=H((()=>(0,o._)("div",null,"+ Glue, ColouredPaper: 5",-1))),ee={key:0,style:{color:"red"}},te={class:"shape-container"},re=H((()=>(0,o._)("img",{src:M},null,-1))),se=H((()=>(0,o._)("div",null,"Need:",-1))),oe=H((()=>(0,o._)("ul",null,[(0,o._)("li",null,"Scissors"),(0,o._)("li",null,"Pencil"),(0,o._)("li",null,"Triangle"),(0,o._)("li",null,"Paper: 10")],-1))),ie=H((()=>(0,o._)("div",null,"+ Glue, ColouredPaper: 5",-1))),ne={key:0,style:{color:"red"}},ae={class:"shape-container"},ue=H((()=>(0,o._)("img",{src:B},null,-1))),le=H((()=>(0,o._)("div",null,"Need:",-1))),ce=H((()=>(0,o._)("ul",null,[(0,o._)("li",null,"Scissors"),(0,o._)("li",null,"Pencil"),(0,o._)("li",null,"Compass"),(0,o._)("li",null,"Paper: 20")],-1))),de=H((()=>(0,o._)("div",null,"+ Glue, ColouredPaper: 5",-1))),pe={key:0,style:{color:"red"}},he=H((()=>(0,o._)("hr",null,null,-1)));function me(e,t,r,s,i,n){return i.start?((0,o.wg)(),(0,o.iD)("div",E,[K,(0,o._)("div",W,[(0,o._)("div",Z,[J,(0,o._)("input",{type:"button",value:"Create Rectangle",onClick:t[0]||(t[0]=(...e)=>n.createRectangle&&n.createRectangle(...e))}),Q,X,(0,o._)("input",{type:"button",value:"Create Rectangle with Coloured Paper",onClick:t[1]||(t[1]=(...e)=>n.createRectangle_colour&&n.createRectangle_colour(...e))}),$,i.resourceFlag?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ee,(0,a.zw)(i.messageRect),1))]),(0,o._)("div",te,[re,(0,o._)("input",{type:"button",value:"Create Triangle",onClick:t[2]||(t[2]=(...e)=>n.createTriangle&&n.createTriangle(...e))}),se,oe,(0,o._)("input",{type:"button",value:"Create Triangle with Coloured Paper",onClick:t[3]||(t[3]=(...e)=>n.createTriangle_colour&&n.createTriangle_colour(...e))}),ie,i.resourceFlag?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ne,(0,a.zw)(i.messageTri),1))]),(0,o._)("div",ae,[ue,(0,o._)("input",{type:"button",value:"Create Circle",onClick:t[4]||(t[4]=(...e)=>n.createCircle&&n.createCircle(...e))}),le,ce,(0,o._)("input",{type:"button",value:"Create Circle with Coloured Paper",onClick:t[5]||(t[5]=(...e)=>n.createCircle_colour&&n.createCircle_colour(...e))}),de,i.resourceFlag?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",pe,(0,a.zw)(i.messageCirc),1))])]),he])):(0,o.kq)("",!0)}var _e={name:"Production",data(){return{start:!1,resourceFlag:!0,rectangle_info:{costOfPaper:15,costOfColouredPaper:5,profit:300},triangle_info:{costOfPaper:10,costOfColouredPaper:5,profit:150},circle_info:{costOfPaper:20,costOfColouredPaper:5,profit:500},messageRect:"",messageTri:"",messageCirc:""}},mounted(){this.socket.on("initGame",(()=>{this.start=!0}))},methods:{createRectangle(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.ruler,s=this.user.resource.paper;if(e>0&&t>0&&r>0&&s>=this.rectangle_info.costOfPaper)this.resourceFlag=!0,this.socket.emit("createRectangle",this.room.id,this.user.id);else{let o="You don't have enough: ";0==e&&(o+="Scissors, "),0==t&&(o+="Pencil, "),0==r&&(o+="Ruler, "),s<this.rectangle_info.costOfPaper&&(o+="Paper, "),this.resourceFlag=!1,o=o.slice(0,-2),this.messageRect=o}},createRectangle_colour(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.ruler,s=this.user.resource.paper,o=this.user.resource.glue,i=this.user.resource.colouredPaper;if(e>0&&t>0&&r>0&&s>=this.rectangle_info.costOfPaper&&o>0&&i>=this.rectangle_info.costOfColouredPaper)this.resourceFlag=!0,this.socket.emit("createRectangle_colour",this.room.id,this.user.id);else{let n="You don't have enough: ";0==e&&(n+="Scissors, "),0==t&&(n+="Pencil, "),0==r&&(n+="Ruler, "),s<this.rectangle_info.costOfPaper&&(n+="Paper, "),0==o&&(n+="Glue, "),i<this.rectangle_info.costOfColouredPaper&&(n+="Coloured Paper, "),this.resourceFlag=!1,n=n.slice(0,-2),this.messageRect=n}},createTriangle(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.triangle,s=this.user.resource.paper;if(e>0&&t>0&&r>0&&s>=this.triangle_info.costOfPaper)this.resourceFlag=!0,this.socket.emit("createTriangle",this.room.id,this.user.id);else{let o="You don't have enough: ";0==e&&(o+="Scissors, "),0==t&&(o+="Pencil, "),0==r&&(o+="Triangle, "),s<this.triangle_info.costOfPaper&&(o+="Paper, "),this.resourceFlag=!1,o=o.slice(0,-2),this.messageTri=o}},createTriangle_colour(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.triangle,s=this.user.resource.paper,o=this.user.resource.glue,i=this.user.resource.colouredPaper;if(e>0&&t>0&&r>0&&s>=this.triangle_info.costOfPaper&&o>0&&i>=this.triangle_info.costOfColouredPaper)this.resourceFlag=!0,this.socket.emit("createTriangle_colour",this.room.id,this.user.id);else{let n="You don't have enough: ";0==e&&(n+="Scissors, "),0==t&&(n+="Pencil, "),0==r&&(n+="Triangle, "),s<this.triangle_info.costOfPaper&&(n+="Paper, "),0==o&&(n+="Glue, "),i<this.triangle_info.costOfColouredPaper&&(n+="Coloured Paper, "),this.resourceFlag=!1,n=n.slice(0,-2),this.messageTri=n}},createCircle(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.compass,s=this.user.resource.paper;if(e>0&&t>0&&r>0&&s>=this.circle_info.costOfPaper)this.resourceFlag=!0,this.socket.emit("createCircle",this.room.id,this.user.id);else{let o="You don't have enough: ";0==e&&(o+="Scissors, "),0==t&&(o+="Pencil, "),0==r&&(o+="Compass, "),s<this.circle_info.costOfPaper&&(o+="Paper, "),this.resourceFlag=!1,o=o.slice(0,-2),this.messageCirc=o}},createCircle_colour(){const e=this.user.resource.scissors,t=this.user.resource.pencil,r=this.user.resource.compass,s=this.user.resource.paper,o=this.user.resource.glue,i=this.user.resource.colouredPaper;if(e>0&&t>0&&r>0&&s>=this.circle_info.costOfPaper&&o>0&&i>=this.circle_info.costOfColouredPaper)this.resourceFlag=!0,this.socket.emit("createCircle_colour",this.room.id,this.user.id);else{let n="You don't have enough: ";0==e&&(n+="Scissors, "),0==t&&(n+="Pencil, "),0==r&&(n+="Compass, "),s<this.circle_info.costOfPaper&&(n+="Paper, "),0==o&&(n+="Glue, "),i<this.circle_info.costOfColouredPaper&&(n+="Coloured Paper, "),this.resourceFlag=!1,n=n.slice(0,-2),this.messageCirc=n}}},computed:{...(0,C.rn)(["socket","user","room"])}};const ge=(0,q.Z)(_e,[["render",me],["__scopeId","data-v-27cbb85b"]]);var fe=ge;const ke=e=>((0,o.dD)("data-v-1dd00032"),e=e(),(0,o.Cn)(),e),ve={key:0},ye=ke((()=>(0,o._)("h1",null,"Trade: ",-1))),be={key:0,class:"trade-container"},Pe={class:"partner"},we=["onClick"],Ce={key:0},Re={class:"styled-table"},qe=ke((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Item"),(0,o._)("th",null,"Quantity"),(0,o._)("th",null,"Ask")])],-1))),Oe={class:"ask-column"},Te={class:"ask-row"},De=ke((()=>(0,o._)("span",null,"Quantity: ",-1))),Ue=["onUpdate:modelValue"],Ge={class:"ask-row"},Ie=ke((()=>(0,o._)("span",null,"Budget: €",-1))),ze=["onUpdate:modelValue"],Fe=["onClick"],je={style:{color:"red","margin-bottom":"3px"}},Se={style:{color:"red","margin-bottom":"3px"}},Ye={style:{color:"green","margin-bottom":"3px"}},Ae=ke((()=>(0,o._)("hr",null,null,-1))),Ne=ke((()=>(0,o._)("h1",null,"Trade Request:",-1))),xe={id:"trade-request-container"},Le={class:"trading-partner"},Ve={class:"ask-pay"},Me={class:"ask-pay"},Be=["onClick"],He=["onClick"],Ee=ke((()=>(0,o._)("hr",null,null,-1)));function Ke(e,t,r,i,n,u){return n.start?((0,o.wg)(),(0,o.iD)("div",ve,[ye,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.room.users,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t},[t.name!==e.user.name?((0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("div",Pe,(0,a.zw)(t.name),1),(0,o._)("input",{class:"tradeButton",type:"button",value:"Trade",onClick:e=>u.trade(t.name)},null,8,we),t.tradeButtonFlag?((0,o.wg)(),(0,o.iD)("div",Ce,[(0,o._)("table",Re,[qe,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.resource,((e,r)=>((0,o.wg)(),(0,o.iD)("tr",{key:r},[(0,o._)("td",null,(0,a.zw)(r.charAt(0).toUpperCase()+r.slice(1)),1),(0,o._)("td",null,(0,a.zw)(e),1),(0,o._)("td",Oe,[(0,o._)("div",Te,[De,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e=>n.ask_resource_quantity[r]=e},null,8,Ue),[[s.nr,n.ask_resource_quantity[r]]])]),(0,o._)("div",Ge,[Ie,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e=>n.budget_pay[r]=e},null,8,ze),[[s.nr,n.budget_pay[r]]])]),(0,o._)("input",{class:"ask-button",type:"button",value:"Ask",onClick:s=>u.askPartner(t.name,r,e)},null,8,Fe),(0,o._)("div",je,(0,a.zw)(n.ask_resource_error[r]),1),(0,o._)("div",Se,(0,a.zw)(n.budget_error[r]),1),(0,o._)("div",Ye,(0,a.zw)(n.request_sent[r]),1)])])))),128))])])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])))),128)),Ae,Ne,(0,o._)("div",xe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.trade_requests,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"trade-request",key:e},[(0,o._)("div",Le,(0,a.zw)(e.tradingPartner),1),(0,o._)("div",Ve,"Trade: "+(0,a.zw)(e.item.charAt(0).toUpperCase()+e.item.slice(1))+" "+(0,a.zw)(e.quantity),1),(0,o._)("div",Me,"Payment: €"+(0,a.zw)(e.payment),1),(0,o._)("input",{class:"accept-button",type:"button",value:"Accept",onClick:t=>u.accept(e.tradingPartner,e.item,e.quantity,e.payment)},null,8,Be),(0,o._)("input",{class:"refuse-button",type:"button",value:"Refuse",onClick:t=>u.refuse(e.tradingPartner,e.item,e.quantity,e.payment)},null,8,He)])))),128))]),Ee])):(0,o.kq)("",!0)}r(560);var We={name:"Trade",data(){return{start:!1,ask_resource_quantity:{scissors:0,ruler:0,compass:0,triangle:0,paper:0,colouredPaper:0,glue:0,pencil:0},ask_resource_error:{scissors:"",ruler:"",compass:"",triangle:"",paper:"",colouredPaper:"",glue:"",pencil:""},budget_pay:{scissors:0,ruler:0,compass:0,triangle:0,paper:0,colouredPaper:0,glue:0,pencil:0},budget_error:{scissors:"",ruler:"",compass:"",triangle:"",paper:"",colouredPaper:"",glue:"",pencil:""},trade_requests:[],request_sent:{scissors:"",ruler:"",compass:"",triangle:"",paper:"",colouredPaper:"",glue:"",pencil:""}}},methods:{trade(e){const t=this.room.users.find((t=>t.name===e));t&&(t.tradeButtonFlag=!t.tradeButtonFlag)},askPartner(e,t,r){let s=!0,o=!0;this.ask_resource_error=this.initMessageLists(this.ask_resource_error),this.budget_error=this.initMessageLists(this.budget_error),this.request_sent=this.initMessageLists(this.request_sent),(this.ask_resource_quantity[t]>r||this.ask_resource_quantity[t]<=0)&&(this.ask_resource_error[t]="Please enter a valid number: 1 ~ "+r,this.ask_resource_quantity[t]=0,s=!1),this.budget_pay[t]>this.user.budget&&(this.budget_error[t]="You don't have enough budget",this.budget_pay[t]=0,o=!1),s&&o&&(this.socket.emit("askPartner",this.user.id,this.room.id,e,t,this.ask_resource_quantity[t],this.budget_pay[t]),this.ask_resource_quantity[t]=0,this.budget_pay[t]=0,this.request_sent[t]="Your request was sent to "+e)},accept(e,t,r,s){const o=this.trade_requests.findIndex((t=>t.tradingPartner==e));this.trade_requests.splice(o,1),this.socket.emit("acceptTradeRequest",this.user.id,this.room.id,e,t,r,s)},refuse(e,t,r,s){const o=this.trade_requests.findIndex((t=>t.tradingPartner==e));this.trade_requests.splice(o,1),this.socket.emit("refuseTradeRequest",this.room.id,e,t,r,s)},initMessageLists(e){for(const t in e)e[t]="";return e}},mounted(){this.socket.on("initGame",(()=>{this.start=!0})),this.socket.on("request",(e=>{this.trade_requests.push(e)}))},computed:{...(0,C.rn)(["socket","user","room"])}};const Ze=(0,q.Z)(We,[["render",Ke],["__scopeId","data-v-1dd00032"]]);var Je=Ze;const Qe=e=>((0,o.dD)("data-v-d02fba24"),e=e(),(0,o.Cn)(),e),Xe={key:0},$e=Qe((()=>(0,o._)("h1",null,"Announce",-1)));function et(e,t,r,s,i,n){return i.start?((0,o.wg)(),(0,o.iD)("div",Xe,[$e,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.announcementList,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:(0,a.C_)({"good-msg":e.msgGoodFlag,"bad-msg":!e.msgGoodFlag})},(0,a.zw)(e.msg),3)))),128))])])):(0,o.kq)("",!0)}var tt={name:"Announce",data(){return{start:!1,announcementList:[]}},mounted(){this.socket.on("initGame",(()=>{this.start=!0})),this.socket.on("announce",((e,t)=>{const r={msg:e,msgGoodFlag:t};this.announcementList.push(r)}))},computed:{...(0,C.rn)(["socket","user","room"])}};const rt=(0,q.Z)(tt,[["render",et],["__scopeId","data-v-d02fba24"]]);var st=rt,ot=r(4488),it={name:"App",components:{Room:T,Game:L,Production:fe,Trade:Je,Announce:st},created(){const e=(0,ot.io)("https://test-kw53.onrender.com:"+{NODE_ENV:"production",BASE_URL:"/"}.PORT);this.setSocket(e)},computed:{},methods:{...(0,C.OI)(["setSocket"])}};const nt=(0,q.Z)(it,[["render",n]]);var at=nt,ut=(0,C.MT)({state:{socket:null,user:{},room:{}},mutations:{setSocket(e,t){e.socket=t},setUser(e,t){e.user=t},setRoom(e,t){e.room=t}},actions:{},getters:{}});const lt=(0,s.ri)(at);lt.use(ut),lt.mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,i){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,u=0;u<s.length;u++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[u])}))?s.splice(u--,1):(a=!1,i<n&&(n=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,n=s[0],a=s[1],u=s[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var c=u(r)}for(t&&t(s);l<n.length;l++)i=n[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},s=self["webpackChunkclient"]=self["webpackChunkclient"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(126)}));s=r.O(s)})();
//# sourceMappingURL=app.f9d48aa9.js.map