(()=>{var a,t=[-6.919254047160112,107.61101714037947];function e(){var e=window.location.href.split("/"),o=e[e.length-1];$.ajax({type:"GET",url:"/api/hidden-food/".concat(o),success:function(e){var o=e.data;$("#name").html(o.name),$("#address").html(o.address),$("#detail_address").html(o.detail_address),$("#thumbnail").attr("src","https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/thumbnail/"+o.thumbnail),t[0]=o.lat,t[1]=o.long,a=L.map("map",{scrollWheelZoom:!1}).setView(t,16),mapSearchMarker=L.marker(t,{alt:"Marker"}).addTo(a),L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVja3k3dGIiLCJhIjoiY2t3Nm9ndm9iMnk2djJ2bXF1cHp2ZzNjZSJ9.-aUNxpC8cNi67yA53K0V8g",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoibHVja3k3dGIiLCJhIjoiY2t3Nm9ndm9iMnk2djJ2bXF1cHp2ZzNjZSJ9.-aUNxpC8cNi67yA53K0V8g"}).addTo(a)}})}$((function(){e()}))})();