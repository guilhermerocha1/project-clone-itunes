(this.webpackJsonpitunes=this.webpackJsonpitunes||[]).push([[0],{20:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(22),i=n.n(c),s=(n(31),n(16)),o=n(3),u=n(4),l=n(6),d=n(5),j=n(13),b=n(7),h=n(2),f=n.n(h),m=n(8),p="user",O=function(t){return localStorage.setItem(p,JSON.stringify(t))},v=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},x=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(p));null===e&&(e={}),v(e)(t)}))},g=function(t){return new Promise((function(e){O(Object(s.a)(Object(s.a)({},{name:"",email:"",image:"",description:""}),t)),v("OK")(e)}))},k=(n(33),n(0)),N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)("h1",{className:"lds-roller",children:"Carregando..."})}}]),n}(r.a.Component),w=N,S=(n(35),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handleChange=function(e){var n=e.target;t.setState({user:n.value,disabledbutton:3>n.value.length})},t.handleClick=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.user,t.setState({loading:!0}),e.next=4,g({name:n});case 4:t.setState({redirect:!0});case 5:case"end":return e.stop()}}),e)}))),t.checkInput=function(t,e,n){return e?n?Object(k.jsx)(b.Redirect,{to:"/search"}):Object(k.jsx)(w,{}):t},t.state={user:"",disabledbutton:!0,loading:!1,redirect:!1},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.disabledbutton,n=t.user,a=t.redirect,r=t.loading,c=Object(k.jsxs)("div",{"data-testid":"page-login",className:"main-login",children:[Object(k.jsx)("h1",{id:"trybe",children:"trybe"}),Object(k.jsx)("h1",{id:"tunes",children:"tunes"}),Object(k.jsxs)("div",{className:"login",children:[Object(k.jsx)("input",{value:n,name:"user",onChange:this.handleChange,type:"text",placeholder:"qual \xe9 o seu nome ?","data-testid":"login-name-input",className:"input-name"}),Object(k.jsx)("button",{className:"button-submit",type:"submit","data-testid":"login-submit-button",disabled:e,onClick:this.handleClick,onKeyDown:this.handleKeyDown,children:"Entrar"})]})]});return this.checkInput(c,r,a)}}]),n}(r.a.Component)),y=(n(20),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).userName=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t.setState({userName:n.name});case 4:case"end":return e.stop()}}),e)}))),t.state={userName:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.userName()}},{key:"render",value:function(){var t=this.state.userName;return t?Object(k.jsxs)("nav",{className:"bar-nav",children:[Object(k.jsx)("h1",{id:"title1",children:"trybe"}),Object(k.jsx)("h1",{id:"title2",children:"tunes"}),Object(k.jsx)(j.b,{to:"/search","data-testid":"link-to-search",id:"pesquisar",children:"Pesquisar"}),Object(k.jsx)(j.b,{to:"/favorites","data-testid":"link-to-favorites",id:"favoritos",children:"Favoritos"}),Object(k.jsx)(j.b,{to:"/profile","data-testid":"link-to-profile",id:"perfil",children:"Perfil"}),Object(k.jsx)("h2",{"data-testid":"header-user-name",children:t})]}):Object(k.jsx)(w,{})}}]),n}(r.a.Component)),I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.placeholder,a=t.tidInput,r=t.tidBtn,c=t.id,i=t.value,s=t.onChange,o=t.onClick,u=t.txtBtn,l=t.disabled;return Object(k.jsxs)("div",{className:e,children:[Object(k.jsx)("input",{"data-testid":a,type:"text",placeholder:n,id:c,value:i,onChange:s}),Object(k.jsx)("button",{"data-testid":r,type:"submit",disabled:!l,onClick:o,id:"button-search",children:u})]})}}]),n}(a.Component),C=I,L=function(){var t=Object(m.a)(f.a.mark((function t(e){var n,a,r,c,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,i=c.results,s=i.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=L,U=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handleSearch=function(e){var n=e.target.value;t.setState({input:n})},t.FilterAlbum=function(){var e=Object(m.a)(f.a.mark((function e(n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state.input,t.setState({input:"",isLoading:!0}),e.next=5,P(a);case 5:r=e.sent,t.setState({albumName:r,isLoading:!1,search:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.Form=function(){var e=t.state.input,n=e.length>=2;return Object(k.jsx)(C,{tidInput:"search-artist-input",tidBtn:"search-artist-button",id:"input-search",value:e,onChange:t.handleSearch,txtBtn:"Pesquisar",disabled:n,onClick:t.FilterAlbum,className:"form",placeholder:"DIGITE SUA PESQUISA"})},t.AlbumArtist=function(){var e=t.state,n=e.albumName,a=e.search;"Resultado de \xe1lbuns de: ".concat(a);return Object(k.jsx)("section",{className:"album",children:n.map((function(t){return Object(k.jsx)(j.b,{"data-testid":"link-to-album-".concat(t.collectionId),to:"album/".concat(t.collectionId),children:Object(k.jsxs)("section",{className:"box-album",children:[Object(k.jsx)("img",{src:t.artworkUrl100,alt:"Imagem do \xe1lbum"}),Object(k.jsx)("p",{id:"album",children:t.collectionName}),Object(k.jsx)("p",{id:"artista",children:t.artistName})]})},t.collectionId)}))})},t.state={isLoading:!1,input:"",search:"",albumName:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.albumName,n=t.search,a=t.isLoading,r=n.length>0&&0===e.length;return Object(k.jsxs)("div",{"data-testid":"page-search",children:[Object(k.jsx)(y,{}),a?Object(k.jsx)(w,{}):this.Form(),e.length>0&&this.AlbumArtist(),r&&Object(k.jsx)("span",{children:"Nenhum \xe1lbum foi encontrado"})]})}}]),n}(a.Component),A=U,D=n(18),R=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.preview,a=t.id,r=t.checked,c=t.onChange,i=t.thumb;return Object(k.jsxs)("div",{className:"musicCard",children:[i&&Object(k.jsx)("img",{src:i,alt:"Album da m\xfasica"}),Object(k.jsx)("h3",{children:e}),Object(k.jsxs)("audio",{"data-testid":"audio-component",src:n,controls:!0,children:[Object(k.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(k.jsx)("code",{children:"audio"})]}),Object(k.jsx)("label",{htmlFor:a,children:Object(k.jsx)("input",{className:"favorite",type:"checkbox","data-testid":"checkbox-music-".concat(a),id:a,name:e,checked:r,onChange:c})})]})}}]),n}(a.Component),F=function(){var t=Object(m.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=F,J="favorite_songs";JSON.parse(localStorage.getItem(J))||localStorage.setItem(J,JSON.stringify([]));var E=function(){return JSON.parse(localStorage.getItem(J))},B=function(t){return localStorage.setItem(J,JSON.stringify(t))},K=function(t){return function(e){setTimeout((function(){e(t)}),500)}},q=function(){return new Promise((function(t){var e=E();K(e)(t)}))},T=function(t){return new Promise((function(e){if(t){var n=E();B([].concat(Object(D.a)(n),[t]))}K("OK")(e)}))},G=function(t){return new Promise((function(e){var n=E();B(n.filter((function(e){return e.trackId!==t.trackId}))),K("OK")(e)}))},Q=(n(44),n(45),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).favoriteSongs=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,q();case 3:n=e.sent,t.setState((function(){return{isLoading:!1,favorites:n}}));case 5:case"end":return e.stop()}}),e)}))),t.musicSearch=Object(m.a)(f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.id,e.next=3,M(n);case 3:(a=e.sent).forEach((function(t){t.checked=!1})),t.setState({musics:a});case 6:case"end":return e.stop()}}),e)}))),t.saveSong=function(){var e=Object(m.a)(f.a.mark((function e(n){var a,r,c,i,s,o,u,l,d;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target,r=a.name,c=a.checked,t.setState({isLoading:!0}),i=t.state,s=i.musics,o=i.favorites,u=s.find((function(t){return t.trackName===r})),l=s.findIndex((function(t){return t.trackName===r})),s[l].checked=!s[l].checked,!c){e.next=12;break}return e.next=9,T(u);case 9:t.setState((function(t){return{favorites:[].concat(Object(D.a)(t.favorites),[u])}})),e.next=16;break;case 12:return e.next=14,G(u);case 14:d=o.filter((function(t){return t.trackId!==u.trackId})),t.setState({favorites:d});case 16:t.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.MountMusics=function(){var e=t.state,n=e.musics,a=e.isLoading,r=e.favorites,c=n[0].artistName,i=n[0].collectionName,s=n[0].artworkUrl100;return a?Object(k.jsx)(w,{}):Object(k.jsxs)("section",{className:"container",children:[Object(k.jsxs)("div",{className:"container-artista",children:[Object(k.jsx)("img",{src:s,alt:"Capa do album"}),Object(k.jsxs)("div",{className:"paragraf",children:[Object(k.jsx)("p",{id:"artista-name","data-testid":"artist-name",children:c}),Object(k.jsx)("p",{id:"album-name","data-testid":"album-name",children:i})]})]}),n.slice(1).map((function(e){var n=e.trackName,a=e.trackId,c=e.previewUrl;return Object(k.jsx)(R,{name:n,preview:c,id:a,checked:r.some((function(t){return t.trackId===a})),onChange:t.saveSong,favorites:r},a)}))]})},t.state={musics:[],isLoading:!1,favorites:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.musicSearch(),this.favoriteSongs();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.musics;return Object(k.jsxs)("div",{"data-testid":"page-album",children:[Object(k.jsx)(y,{}),0===t.length?Object(k.jsx)(w,{}):this.MountMusics()]})}}]),n}(a.Component)),W=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).favoriteSongs=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:n=e.sent,t.setState({isLoading:!1,musics:n});case 4:case"end":return e.stop()}}),e)}))),t.removeFavorite=function(){var e=Object(m.a)(f.a.mark((function e(n){var a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target.id,t.setState({isLoading:!0}),r=t.state.musics,c=r.find((function(t){return t.trackId===Number(a)})),e.next=6,G(c);case 6:i=r.filter((function(t){return t.trackId!==Number(a)})),t.setState({isLoading:!1,musics:i});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={isLoading:!0,musics:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.favoriteSongs()}},{key:"render",value:function(){var t=this,e=this.state,n=e.isLoading,a=e.musics;return Object(k.jsxs)("div",{"data-testid":"page-favorites",children:[Object(k.jsx)(y,{}),n?Object(k.jsx)(w,{}):a.map((function(e){var n=e.trackName,a=e.trackId,r=e.previewUrl,c=e.checked,i=e.artworkUrl100;return Object(k.jsx)(R,{name:n,previewUrl:r,id:a,checked:c,onChange:t.removeFavorite,thumb:i},a)}))]})}}]),n}(a.Component),_=n(25),z=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).componentDidMount=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getUserAPI();case 1:case"end":return e.stop()}}),e)}))),t.getUserAPI=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t.setState({isLoading:!1,user:n});case 4:case"end":return e.stop()}}),e)}))),t.state={isLoading:!0,user:{}},t}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){this.setState=function(){}}},{key:"render",value:function(){var t=this.state,e=t.isLoading,n=t.user,a=n.name,r=n.email,c=n.image,i=n.description;return Object(k.jsxs)("div",{"data-testid":"page-profile",children:[Object(k.jsx)(y,{}),e?Object(k.jsx)(w,{}):Object(k.jsxs)("section",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{"data-testid":"profile-image",src:c,alt:a})}),Object(k.jsx)(_.Link,{to:"/profile/edit",children:"Editar perfil"}),Object(k.jsx)("h4",{children:"Nome"}),Object(k.jsx)("p",{children:a}),Object(k.jsx)("h4",{children:"Email"}),Object(k.jsx)("p",{children:r}),Object(k.jsx)("h4",{children:"Descri\xe7\xe3o"}),Object(k.jsx)("p",{children:i})]})]})}}]),n}(a.Component),H=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{"data-testid":"page-profile-edit",children:["Profile edit",Object(k.jsx)(y,{})]})}}]),n}(r.a.Component),V=H,X=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{"data-testid":"page-not-found",children:Object(k.jsx)("h1",{children:"Notfound"})})}}]),n}(r.a.Component),Y=X,Z=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.Switch,{children:[Object(k.jsx)(b.Route,{path:"/".concat("project-clone-itunes"),component:S}),Object(k.jsx)(b.Route,{path:"/search",component:A}),Object(k.jsx)(b.Route,{path:"/album/:id",render:function(t){return Object(k.jsx)(Q,Object(s.a)({},t))}}),Object(k.jsx)(b.Route,{path:"/favorites",component:W}),Object(k.jsx)(b.Route,{path:"/profile/edit",component:V}),Object(k.jsx)(b.Route,{path:"/profile",component:z}),Object(k.jsx)(b.Route,{path:"/*",component:Y})]})})})}}]),n}(r.a.Component),$=Z;i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)($,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8f5fcde8.chunk.js.map