(this.webpackJsonpvindictiveresume=this.webpackJsonpvindictiveresume||[]).push([[0],{46:function(e,t,s){},49:function(e,t,s){},81:function(e,t,s){"use strict";s.r(t);var c=s(6),a=s(35),r=s.n(a),n=(s(46),s(0)),i=s(3),l=s(4),j=s(5),o=s(33),d=s(36),h=s.n(d),b=(s(49),s(37)),u=s.n(b),O=s(38),m=s(14),x=s.n(m),p=s(2),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.linkedin,t=this.props.data.github,s=this.props.data.name,c=this.props.data.job,a=this.props.data.description,r=this.props.data.resumedownload,n=["color","lines","thick","circle","polygon","square","fountain"],i=n[Math.floor(Math.random()*n.length)];return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(O.a,{type:i,bg:!0}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsxs)(x.a,{bottom:!0,children:[Object(p.jsx)("h1",{className:"responsive-headline",children:s}),Object(p.jsx)("h2",{className:"responsive-headline",children:c})]}),Object(p.jsx)(x.a,{bottom:!0,duration:1200,children:Object(p.jsxs)("h3",{children:[a,"."]})}),Object(p.jsx)("hr",{}),Object(p.jsx)(x.a,{bottom:!0,duration:2e3,children:Object(p.jsxs)("ul",{className:"social",children:[Object(p.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:"button btn linked-btn",children:[Object(p.jsx)("i",{className:"fa fa-linkedin"}),"Linkedin"]}),Object(p.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer noopener",className:"button btn project-btn",children:[Object(p.jsx)("i",{className:"fa fa-user"}),"My Resume"]}),Object(p.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:"button btn github-btn",children:[Object(p.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(x.a,{bottom:!0,children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsx)("ul",{className:"copyright",children:Object(p.jsx)("li",{children:"Modified by Vinay Valson"})})]})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/".concat(this.props.data.image),s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,r=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,l=this.props.data.email;return Object(p.jsx)("section",{id:"about",children:Object(p.jsx)(x.a,{duration:1e3,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{children:s}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"columns contact-details",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{className:"address",children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[c,Object(p.jsx)("br",{}),a," ",r,","," ",n]}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:i}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:l})]})]}),Object(p.jsx)("div",{className:"columns download"})]})]})]})})})}}]),s}(c.Component),g=s(15),y=function(){var e=Object(c.useRef)(),t=Object(c.useState)({width:0,height:0}),s=Object(g.a)(t,2),a=s[0],r=s[1];return Object(c.useLayoutEffect)((function(){e.current&&r({width:e.current.scrollWidth,height:e.current.scrollHeight})}),[]),Object(p.jsx)("div",{className:"hex-container",ref:e,children:function(){for(var e=[],t=[],s=0;s<=a.width/95;s++)e.push(Object(p.jsx)("div",{className:"hexagon"}));for(var c=0;c<=a.height/80;c++)t.push(Object(p.jsx)("div",{className:"hexagon-row",children:e}));return t}()})},w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description}),Object(p.jsx)("br",{})]},e.school)})),s=this.props.data.experience.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description}),Object(p.jsx)("br",{})]},e.company)})),c=this.props.data.skills.map((function(e){return Object(p.jsx)("a",{href:"#resume",className:"button skills-btn",children:e.name},e.name)}));return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsx)(y,{}),Object(p.jsx)(x.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Experience"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(p.jsx)(x.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(p.jsx)(x.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row skill",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Core Skills"})})}),Object(p.jsxs)("div",{className:"nine columns main-col",children:[Object(p.jsx)("p",{children:e}),Object(p.jsx)("ul",{className:"social",children:c})]})]})})]})}}]),s}(c.Component),k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,r=this.props.data.phone,n=this.props.data.contactmessage;return Object(p.jsxs)("section",{id:"contact",children:[Object(p.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"row section-head",children:[Object(p.jsx)("div",{className:"two columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Get In Touch"})})}),Object(p.jsx)("div",{className:"ten columns",children:Object(p.jsx)("p",{className:"lead",children:n})})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"eight columns",children:[Object(p.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(p.jsxs)("fieldset",{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange,required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange,required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(p.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",required:!0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{id:"submit",name:"submit",type:"submit",className:"submit",children:"Submit"}),Object(p.jsx)("span",{id:"image-loader",children:Object(p.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(p.jsx)("div",{id:"message-warning",children:"Error boy"}),Object(p.jsxs)("div",{id:"message-success",children:[Object(p.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(p.jsx)("br",{})]})]})}),Object(p.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(p.jsx)("aside",{className:"four columns footer-widgets",children:Object(p.jsxs)("div",{className:"widget widget_contact",children:[Object(p.jsx)("h4",{children:"Address and Phone"}),Object(p.jsxs)("p",{className:"address",children:[e,Object(p.jsx)("br",{}),t," ",Object(p.jsx)("br",{}),s,", ",c," ",a,Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:r})]})]})})})]})]})}}]),s}(c.Component),C=0,D=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsxs)("div",{className:"item-wrap container",children:[Object(p.jsx)("img",{alt:e.title,src:t}),Object(p.jsxs)("a",{href:e.url,children:[" ",e.title]}),Object(p.jsx)("p",{children:e.category}),Object(p.jsx)("p",{children:e.description})]})},C++)}));return Object(p.jsxs)("section",{id:"portfolio",children:[Object(p.jsx)(y,{}),Object(p.jsx)(x.a,{distance:"40px",children:Object(p.jsxs)("div",{className:"pointerEventRemover",children:[Object(p.jsx)("h1",{children:"Check out some of my Projects"}),Object(p.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})]})}}]),s}(c.Component),M=0,S=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.techStack.map((function(e){var t="images/techStack/"+e.image;return Object(p.jsx)("div",{className:"flip-card columns",children:Object(p.jsxs)("div",{className:"flip-card-inner item-wrap container",children:[Object(p.jsx)("div",{className:"flip-card-front",children:Object(p.jsx)("img",{src:t,alt:e.title})}),Object(p.jsx)("div",{className:"flip-card-back",children:Object(p.jsxs)("h3",{href:e.url,children:[" ",e.title]})})]})},M++)}));return Object(p.jsx)("section",{id:"techStack",children:Object(p.jsx)(x.a,{left:!0,duration:1e3,distance:"40px",children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Technologies Worked with"}),Object(p.jsx)("div",{id:"techStack-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),F=s(8),A=s(18),E=s(39),q=s(84),R=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=125e3,t=new F.Object3D,s=new F.Color,a=new Array(e).fill().map((function(){return E[17][Math.floor(5*Math.random())]}));function r(){var r=Object(c.useMemo)((function(){return Float32Array.from(new Array(e).fill().flatMap((function(e,t){return s.set(a[t]).toArray()})))}),[]),n=Object(c.useRef)();return Object(c.useLayoutEffect)((function(){for(var e=0,s=0;s<50;s++)for(var c=0;c<50;c++)for(var a=0;a<50;a++){var r=e++;t.position.set(25-s,25-c,25-a),t.updateMatrix(),n.current.setMatrixAt(r,t.matrix)}n.current.instanceMatrix.needsUpdate=!0}),[]),Object(p.jsxs)("instancedMesh",{ref:n,args:[null,null,e],children:[Object(p.jsx)("boxBufferGeometry",{attach:"geometry",args:[.15,.15,.15],children:Object(p.jsx)("instancedBufferAttribute",{attachObject:["attributes","color"],args:[r,3]})}),Object(p.jsx)("meshLambertMaterial",{attach:"material",vertexColors:F.VertexColors})]})}return Object(p.jsx)("section",{id:"threeTest",className:"threeTest-panel",children:Object(p.jsxs)(A.a,{linear:!0,camera:{position:[0,0,.1]},children:[Object(p.jsx)("ambientLight",{}),Object(p.jsx)("directionalLight",{position:[150,150,150],intensity:.55}),Object(p.jsx)(r,{}),Object(p.jsx)(q.a,{enablePan:!1,autoRotate:!0,minDistance:.5,maxDistance:100})]})})}}]),s}(c.Component),T=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={loading:!0,foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(i.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e}),this.setState({loading:!1})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){for(;this.state.loading;)return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"loadingToCenter",children:Object(p.jsx)(u.a,{type:"Rings",color:"#00BFFF",height:100,width:100})})});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f,{data:this.state.resumeData.main}),Object(p.jsx)(N,{data:this.state.resumeData.main}),Object(p.jsx)(w,{data:this.state.resumeData.resume}),Object(p.jsx)(S,{data:this.state.resumeData.portfolio}),Object(p.jsx)(R,{data:this.state.resumeData.portfolio}),Object(p.jsx)(D,{data:this.state.resumeData.portfolio}),Object(p.jsx)(k,{data:this.state.resumeData.main}),Object(p.jsx)(v,{data:this.state.resumeData.main}),Object(p.jsx)(y,{})]})}}]),s}(c.Component),L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,85)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};r.a.render(Object(p.jsx)(T,{}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.f96bda42.chunk.js.map