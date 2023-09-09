(function(g){var window=this;'use strict';var Gmb=function(a,b){g.Y.call(this,{I:"button",Na:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Z:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},Y:[{I:"svg",Z:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},Y:[{I:"g",Z:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},Y:[{I:"g",Z:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
Y:[{I:"path",Z:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.QS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.tb(this,g.KS(b.Ec(),this.element))},Hmb=function(a){g.Y.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.yg=!1;this.player=a;this.V(a,"minimized",this.Ch);this.V(a,"onStateChange",this.WQ)},Imb=function(a){g.xT.call(this,a);
this.B=new g.VJ(this);this.j=new Hmb(this.player);this.j.hide();g.wS(this.player,this.j.element,4);a.zg()&&(this.load(),g.nr(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Gmb,g.Y);Gmb.prototype.onClick=function(){this.J.Ra("onExpandMiniplayer")};g.x(Hmb,g.Y);g.k=Hmb.prototype;
g.k.ON=function(){this.tooltip=new g.aW(this.player,this);g.H(this,this.tooltip);g.wS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Zc=new g.dU(this.player);g.H(this,this.Zc);this.zk=new g.Y({I:"div",T:"ytp-miniplayer-scrim"});g.H(this,this.zk);this.zk.Ka(this.element);this.V(this.zk.element,"click",this.BI);var a=new g.Y({I:"button",Na:["ytp-miniplayer-close-button","ytp-button"],Z:{"aria-label":"Close"},Y:[g.EQ()]});g.H(this,a);a.Ka(this.zk.element);this.V(a.element,"click",this.Mp);
a=new Gmb(this.player,this);g.H(this,a);a.Ka(this.zk.element);this.Ev=new g.Y({I:"div",T:"ytp-miniplayer-controls"});g.H(this,this.Ev);this.Ev.Ka(this.zk.element);this.V(this.Ev.element,"click",this.BI);var b=new g.Y({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,b);b.Ka(this.Ev.element);a=new g.Y({I:"div",T:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ka(this.Ev.element);var c=new g.Y({I:"div",T:"ytp-miniplayer-button-container"});g.H(this,c);c.Ka(this.Ev.element);this.DY=new g.nV(this.player,
this,!1);g.H(this,this.DY);this.DY.Ka(b.element);b=new g.mV(this.player,this);g.H(this,b);b.Ka(a.element);this.nextButton=new g.nV(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ka(c.element);this.Nj=new g.UV(this.player,this);g.H(this,this.Nj);this.Nj.Ka(this.zk.element);this.Qc=new g.sV(this.player,this);g.H(this,this.Qc);g.wS(this.player,this.Qc.element,4);this.lI=new g.Y({I:"div",T:"ytp-miniplayer-buttons"});g.H(this,this.lI);g.wS(this.player,this.lI.element,4);a=new g.Y({I:"button",
Na:["ytp-miniplayer-close-button","ytp-button"],Z:{"aria-label":"Close"},Y:[g.EQ()]});g.H(this,a);a.Ka(this.lI.element);this.V(a.element,"click",this.Mp);a=new g.Y({I:"button",Na:["ytp-miniplayer-replay-button","ytp-button"],Z:{"aria-label":"Close"},Y:[g.SFa()]});g.H(this,a);a.Ka(this.lI.element);this.V(a.element,"click",this.W8);this.V(this.player,"presentingplayerstatechange",this.Nd);this.V(this.player,"appresize",this.Lb);this.V(this.player,"fullscreentoggled",this.Lb);this.Lb()};
g.k.show=function(){this.Af=new g.$q(this.Gw,null,this);this.Af.start();this.yg||(this.ON(),this.yg=!0);0!==this.player.getPlayerState()&&g.Y.prototype.show.call(this);this.Qc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.Y.prototype.hide.call(this);this.player.zg()||(this.yg&&this.Qc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.Y.prototype.ya.call(this)};
g.k.Mp=function(){this.player.stopVideo();this.player.Ra("onCloseMiniplayer")};
g.k.W8=function(){this.player.playVideo()};
g.k.BI=function(a){if(a.target===this.zk.element||a.target===this.Ev.element)g.CP(this.player.Kb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Ch=function(){g.nr(this.player.getRootNode(),"ytp-player-minimized",this.player.zg())};
g.k.df=function(){this.Qc.Dc();this.Nj.Dc()};
g.k.Gw=function(){this.df();this.Af&&this.Af.start()};
g.k.Nd=function(a){g.XO(a.state,32)&&this.tooltip.hide()};
g.k.Lb=function(){g.EV(this.Qc,0,this.player.qb().getPlayerSize().width,!1);g.tV(this.Qc)};
g.k.WQ=function(a){this.player.zg()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.Yg=function(){return!1};
g.k.Am=function(){return!1};
g.k.BJ=function(){};
g.k.wq=function(){};
g.k.cz=function(){};
g.k.vn=function(){return null};
g.k.XG=function(){return null};
g.k.dN=function(){return new g.we(0,0)};
g.k.Vk=function(){return new g.vo(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ow=function(a,b,c,d,e){var f=0,h=d=0,l=g.Jo(a);if(b){c=g.ir(b,"ytp-prev-button")||g.ir(b,"ytp-next-button");var m=g.ir(b,"ytp-play-button"),n=g.ir(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ho(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ir(b,"ytp-miniplayer-button-top-left"),f=g.Ho(b,this.element),b=g.Jo(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.qe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Yp=function(){};
g.k.pm=function(){return!1};
g.k.bF=function(){};
g.k.QA=function(){};
g.k.Sr=function(){};
g.k.Rr=function(){};
g.k.By=function(){};
g.k.Ys=function(){};
g.k.LE=function(){};g.x(Imb,g.xT);g.k=Imb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.nr(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.xT.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Cl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.wT("miniplayer",Imb);})(_yt_player);
