"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=c(function(P,f){
function g(e,r,a,s,n){var t,u,i,o;for(t=a.data,u=a.accessors[0],i=n,o=0;o<e;o++){if(u(t,i)<=r)return o;i+=s}return-1}f.exports=g
});var v=c(function(R,x){
var p=require('@stdlib/array-base-arraylike2object/dist'),O=q();function L(e,r,a,s,n){var t,u,i;if(e<=0)return-1;if(u=p(a),u.accessorProtocol)return O(e,r,u,s,n);for(t=n,i=0;i<e;i++){if(a[t]<=r)return i;t+=s}return-1}x.exports=L
});var l=c(function(m,d){
var T=require('@stdlib/strided-base-stride2offset/dist'),b=v();function h(e,r,a,s){return b(e,r,a,s,T(e,s))}d.exports=h
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),j=v();E(y,"ndarray",j);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
