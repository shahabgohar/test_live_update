import{q as Fn,r as T}from"./index-297d4747.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let sn;const yt=i=>(i.forEach(o=>{for(const s in o)if(o.hasOwnProperty(s)){const l=o[s];if(s==="easing"){const u="animation-timing-function";o[u]=l,delete o[s]}else{const u=Et(s);u!==s&&(o[u]=l,delete o[s])}}}),i),Et=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),an=i=>{if(sn===void 0){const o=i.style.animationName!==void 0,s=i.style.webkitAnimationName!==void 0;sn=!o&&s?"-webkit-":""}return sn},c=(i,o,s)=>{const l=o.startsWith("animation")?an(i):"";i.style.setProperty(l+o,s)},b=(i,o)=>{const s=o.startsWith("animation")?an(i):"";i.style.removeProperty(s+o)},At=(i,o)=>{let s;const l={passive:!0},u=()=>{s&&s()},E=v=>{i===v.target&&(u(),o(v))};return i&&(i.addEventListener("webkitAnimationEnd",E,l),i.addEventListener("animationend",E,l),s=()=>{i.removeEventListener("webkitAnimationEnd",E,l),i.removeEventListener("animationend",E,l)}),u},Ct=(i=[])=>i.map(o=>{const s=o.offset,l=[];for(const u in o)o.hasOwnProperty(u)&&u!=="offset"&&l.push("".concat(u,": ").concat(o[u],";"));return"".concat(s*100,"% { ").concat(l.join(" ")," }")}).join(" "),$n=[],bt=i=>{let o=$n.indexOf(i);return o<0&&(o=$n.push(i)-1),"ion-animation-".concat(o)},St=i=>{const o=i.getRootNode!==void 0?i.getRootNode():i;return o.head||o},vt=(i,o,s)=>{var l;const u=St(s),E=an(s),v=u.querySelector("#"+i);if(v)return v;const a=((l=s.ownerDocument)!==null&&l!==void 0?l:document).createElement("style");return a.id=i,a.textContent="@".concat(E,"keyframes ").concat(i," { ").concat(o," } @").concat(E,"keyframes ").concat(i,"-alt { ").concat(o," }"),u.appendChild(a),a},Z=(i=[],o)=>{if(o!==void 0){const s=Array.isArray(o)?o:[o];return[...i,...s]}return i},Tt=i=>{let o,s,l,u,E,v,a=[],J=[],Q=[],$=!1,m,X={},Y=[],nn=[],tn={},P=0,V=!1,q=!1,j,_,W,x,D=!0,L=!1,I=!0,O,r,B=!1;const fn=i,en=[],N=[],G=[],h=[],p=[],on=[],cn=[],ln=[],un=[],dn=[],S=[],wn=typeof AnimationEffect=="function"||Fn!==void 0&&typeof Fn.AnimationEffect=="function",A=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&wn,Tn=100,mn=()=>S,Pn=n=>(p.forEach(t=>{t.destroy(n)}),_n(n),h.length=0,p.length=0,a.length=0,Rn(),$=!1,I=!0,r),_n=n=>{pn(),n&&gn()},xn=()=>{V=!1,q=!1,I=!0,_=void 0,W=void 0,x=void 0,P=0,L=!1,D=!0,B=!1},Dn=()=>P!==0&&!B,hn=(n,t)=>{const e=t.findIndex(f=>f.c===n);e>-1&&t.splice(e,1)},Kn=(n,t)=>(G.push({c:n,o:t}),r),H=(n,t)=>((t!=null&&t.oneTimeCallback?N:en).push({c:n,o:t}),r),Rn=()=>(en.length=0,N.length=0,r),pn=()=>{if(A)S.forEach(n=>{n.cancel()}),S.length=0;else{const n=h.slice();T(()=>{n.forEach(t=>{b(t,"animation-name"),b(t,"animation-duration"),b(t,"animation-timing-function"),b(t,"animation-iteration-count"),b(t,"animation-delay"),b(t,"animation-play-state"),b(t,"animation-fill-mode"),b(t,"animation-direction")})})}},gn=()=>{on.forEach(n=>{n!=null&&n.parentNode&&n.parentNode.removeChild(n)}),on.length=0},kn=n=>(cn.push(n),r),Wn=n=>(ln.push(n),r),Ln=n=>(un.push(n),r),In=n=>(dn.push(n),r),On=n=>(J=Z(J,n),r),Nn=n=>(Q=Z(Q,n),r),zn=(n={})=>(X=n,r),Mn=(n=[])=>{for(const t of n)X[t]="";return r},Un=n=>(Y=Z(Y,n),r),Vn=n=>(nn=Z(nn,n),r),qn=(n={})=>(tn=n,r),jn=(n=[])=>{for(const t of n)tn[t]="";return r},z=()=>E!==void 0?E:m?m.getFill():"both",K=()=>_!==void 0?_:v!==void 0?v:m?m.getDirection():"normal",M=()=>V?"linear":l!==void 0?l:m?m.getEasing():"linear",C=()=>q?0:W!==void 0?W:s!==void 0?s:m?m.getDuration():0,F=()=>u!==void 0?u:m?m.getIterations():1,R=()=>x!==void 0?x:o!==void 0?o:m?m.getDelay():0,Bn=()=>a,Gn=n=>(v=n,g(!0),r),Hn=n=>(E=n,g(!0),r),Zn=n=>(o=n,g(!0),r),Jn=n=>(l=n,g(!0),r),Qn=n=>(!A&&n===0&&(n=1),s=n,g(!0),r),Xn=n=>(u=n,g(!0),r),Yn=n=>(m=n,r),nt=n=>{if(n!=null)if(n.nodeType===1)h.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)h.push(n[t]);else console.error("Invalid addElement value");return r},tt=n=>{if(n!=null)if(Array.isArray(n))for(const t of n)t.parent(r),p.push(t);else n.parent(r),p.push(n);return r},et=n=>{const t=a!==n;return a=n,t&&it(a),r},it=n=>{A?mn().forEach(t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(n);else{const e=new KeyframeEffect(t.effect.target,n,t.effect.getTiming());t.effect=e}}):yn()},ot=()=>{cn.forEach(f=>f()),ln.forEach(f=>f());const n=J,t=Q,e=X;h.forEach(f=>{const d=f.classList;n.forEach(y=>d.add(y)),t.forEach(y=>d.remove(y));for(const y in e)e.hasOwnProperty(y)&&c(f,y,e[y])})},rt=()=>{rn(),un.forEach(d=>d()),dn.forEach(d=>d());const n=D?1:0,t=Y,e=nn,f=tn;h.forEach(d=>{const y=d.classList;t.forEach(w=>y.add(w)),e.forEach(w=>y.remove(w));for(const w in f)f.hasOwnProperty(w)&&c(d,w,f[w])}),en.forEach(d=>d.c(n,r)),N.forEach(d=>d.c(n,r)),N.length=0,I=!0,D&&(L=!0),D=!0},k=()=>{P!==0&&(P--,P===0&&(rt(),m&&m.animationFinish()))},yn=(n=!0)=>{gn();const t=yt(a);h.forEach(e=>{if(t.length>0){const f=Ct(t);O=i!==void 0?i:bt(f);const d=vt(O,f,e);on.push(d),c(e,"animation-duration","".concat(C(),"ms")),c(e,"animation-timing-function",M()),c(e,"animation-delay","".concat(R(),"ms")),c(e,"animation-fill-mode",z()),c(e,"animation-direction",K());const y=F()===1/0?"infinite":F().toString();c(e,"animation-iteration-count",y),c(e,"animation-play-state","paused"),n&&c(e,"animation-name","".concat(d.id,"-alt")),T(()=>{c(e,"animation-name",d.id||null)})}})},st=()=>{h.forEach(n=>{const t=n.animate(a,{id:fn,delay:R(),duration:C(),easing:M(),iterations:F(),fill:z(),direction:K()});t.pause(),S.push(t)}),S.length>0&&(S[0].onfinish=()=>{k()})},En=(n=!0)=>{ot(),a.length>0&&(A?st():yn(n)),$=!0},U=n=>{if(n=Math.min(Math.max(n,0),.9999),A)S.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+C()*n,t.pause()});else{const t="-".concat(C()*n,"ms");h.forEach(e=>{a.length>0&&(c(e,"animation-delay",t),c(e,"animation-play-state","paused"))})}},An=n=>{S.forEach(t=>{t.effect.updateTiming({delay:R(),duration:C(),easing:M(),iterations:F(),fill:z(),direction:K()})}),n!==void 0&&U(n)},Cn=(n=!0,t)=>{T(()=>{h.forEach(e=>{c(e,"animation-name",O||null),c(e,"animation-duration","".concat(C(),"ms")),c(e,"animation-timing-function",M()),c(e,"animation-delay",t!==void 0?"-".concat(t*C(),"ms"):"".concat(R(),"ms")),c(e,"animation-fill-mode",z()||null),c(e,"animation-direction",K()||null);const f=F()===1/0?"infinite":F().toString();c(e,"animation-iteration-count",f),n&&c(e,"animation-name","".concat(O,"-alt")),T(()=>{c(e,"animation-name",O||null)})})})},g=(n=!1,t=!0,e)=>(n&&p.forEach(f=>{f.update(n,t,e)}),A?An(e):Cn(t,e),r),at=(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),bn(),V=n,$||En(),g(!1,!0,t),r),ft=n=>(p.forEach(t=>{t.progressStep(n)}),U(n),r),ct=(n,t,e)=>(V=!1,p.forEach(f=>{f.progressEnd(n,t,e)}),e!==void 0&&(W=e),L=!1,D=!0,n===0?(_=K()==="reverse"?"normal":"reverse",_==="reverse"&&(D=!1),A?(g(),U(1-t)):(x=(1-t)*C()*-1,g(!1,!1))):n===1&&(A?(g(),U(t)):(x=t*C()*-1,g(!1,!1))),n!==void 0&&(H(()=>{W=void 0,_=void 0,x=void 0},{oneTimeCallback:!0}),m||Sn()),r),bn=()=>{$&&(A?S.forEach(n=>{n.pause()}):h.forEach(n=>{c(n,"animation-play-state","paused")}),B=!0)},lt=()=>(p.forEach(n=>{n.pause()}),bn(),r),ut=()=>{j=void 0,k()},rn=()=>{j&&clearTimeout(j)},dt=()=>{if(rn(),T(()=>{h.forEach(n=>{a.length>0&&c(n,"animation-play-state","running")})}),a.length===0||h.length===0)k();else{const n=R()||0,t=C()||0,e=F()||1;isFinite(e)&&(j=setTimeout(ut,n+t*e+Tn)),At(h[0],()=>{rn(),T(()=>{mt(),T(k)})})}},mt=()=>{h.forEach(n=>{b(n,"animation-duration"),b(n,"animation-delay"),b(n,"animation-play-state")})},ht=()=>{S.forEach(n=>{n.play()}),(a.length===0||h.length===0)&&k()},pt=()=>{A?(U(0),An()):Cn()},Sn=n=>new Promise(t=>{n!=null&&n.sync&&(q=!0,H(()=>q=!1,{oneTimeCallback:!0})),$||En(),L&&(pt(),L=!1),I&&(P=p.length+1,I=!1);const e=()=>{hn(f,N),t()},f=()=>{hn(e,G),t()};H(f,{oneTimeCallback:!0}),Kn(e,{oneTimeCallback:!0}),p.forEach(d=>{d.play()}),A?ht():dt(),B=!1}),gt=()=>{p.forEach(n=>{n.stop()}),$&&(pn(),$=!1),xn(),G.forEach(n=>n.c(0,r)),G.length=0},vn=(n,t)=>{const e=a[0];return e!==void 0&&(e.offset===void 0||e.offset===0)?e[n]=t:a=[{offset:0,[n]:t},...a],r};return r={parentAnimation:m,elements:h,childAnimations:p,id:fn,animationFinish:k,from:vn,to:(n,t)=>{const e=a[a.length-1];return e!==void 0&&(e.offset===void 0||e.offset===1)?e[n]=t:a=[...a,{offset:1,[n]:t}],r},fromTo:(n,t,e)=>vn(n,t).to(n,e),parent:Yn,play:Sn,pause:lt,stop:gt,destroy:Pn,keyframes:et,addAnimation:tt,addElement:nt,update:g,fill:Hn,direction:Gn,iterations:Xn,duration:Qn,easing:Jn,delay:Zn,getWebAnimations:mn,getKeyframes:Bn,getFill:z,getDirection:K,getDelay:R,getIterations:F,getEasing:M,getDuration:C,afterAddRead:Ln,afterAddWrite:In,afterClearStyles:jn,afterStyles:qn,afterRemoveClass:Vn,afterAddClass:Un,beforeAddRead:kn,beforeAddWrite:Wn,beforeClearStyles:Mn,beforeStyles:zn,beforeRemoveClass:Nn,beforeAddClass:On,onFinish:H,isRunning:Dn,progressStart:at,progressStep:ft,progressEnd:ct}};export{Tt as c};