(()=>{var t,e={144:()=>{$((function(){$("#hidden-food-table").DataTable({ajax:{url:"/api/hidden-food",contentType:"application/json",type:"GET"},columns:[{render:function(t,e,n){return"\n\t\t\t\t\t<div style=\"width: 64px; height: 64px; background-image: url('https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/".concat(n.thumbnail,"'); background-size: cover; background-repeat: no-repeat;margin: 0 auto\">\n\t\t\t\t\t</div>\n\t\t\t\t")}},{data:"name"},{data:"address"},{data:"status"},{render:function(t,e,n){return'\n\t\t\t\t\t<a href="/admin/hidden-food/'.concat(n.id,'" class="btn btn-md btn-info"><i class="fas fa-eye text-white"></i></a>\n\t\t\t\t')}}]})}))},224:()=>{}},n={};function a(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,a),o.exports}a.m=e,t=[],a.O=(e,n,r,o)=>{if(!n){var i=1/0;for(u=0;u<t.length;u++){for(var[n,r,o]=t[u],d=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(d=!1,o<i&&(i=o));if(d){t.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,r,o]},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={58:0,393:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,[i,d,c]=n,s=0;if(i.some((e=>0!==t[e]))){for(r in d)a.o(d,r)&&(a.m[r]=d[r]);if(c)var u=c(a)}for(e&&e(n);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[i[s]]=0;return a.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a.O(void 0,[393],(()=>a(144)));var r=a.O(void 0,[393],(()=>a(224)));r=a.O(r)})();