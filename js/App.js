
        $('#favcolor').spectrum({
            type: "color",
            showInitial: "true"
        });
        /*create function inside circle*/
        L.Circle.include({
            contains: function (latLng) {
                return this.getLatLng().distanceTo(latLng) < this.getRadius();
            }
        });

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();


        //ESRI basemap
        var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {

            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
        });
        var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
            maxZoom: 16
        });
        var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });
        //Stamen basemap
        var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 18,
            ext: 'png'
        });
        var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });
        //OSM
        var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {//CartoDB_DarkMatter
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        });
        var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });



        var tabcontent = document.getElementsByName("baseMaps");
        function uncheked() {
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].checked = false;
            }
        }
        /*
                function drawMap(tile) {
                    map.eachLayer(function (layer) {
                        map.removeLayer(layer);
                    });
                    //map.addLayer(Parcs_layer);
                    //map.addLayer(Parcs_layer_points);
        
                    if (document.getElementById("Parcs_poly").checked === true) {
                        map.addLayer(Parcs_layer);
                    } else {
                        map.removeLayer(Parcs_layer);
                    }
                    if (document.getElementById("Parcs_point").checked === true) {
                        map.addLayer(Parcs_layer_points);
                    } else {
                        map.removeLayer(Parcs_layer_points);
                    }
                    if (document.getElementById("POI").checked === true) {
                        map.addLayer(markerClusters);
                    } else {
                        map.removeLayer(markerClusters);
                    }
                    if (document.getElementById("POI").checked === true) {
                        map.addLayer(markerClusters);
                    } else {
                        map.removeLayer(markerClusters);
                    }
                }
        
        
        */


        function drawMap() {
            if (map.hasLayer(Esri_WorldStreetMap)) {
                map.removeLayer(Esri_WorldStreetMap);
            }
            if (map.hasLayer(Esri_NatGeoWorldMap)) {
                map.removeLayer(Esri_NatGeoWorldMap);
            }
            if (map.hasLayer(Esri_WorldImagery)) {
                map.removeLayer(Esri_WorldImagery);
            }
            if (map.hasLayer(Stamen_Toner)) {
                map.removeLayer(Stamen_Toner);
            }
            if (map.hasLayer(Stamen_Terrain)) {
                map.removeLayer(Stamen_Terrain);
            }
            if (map.hasLayer(OpenStreetMap_Mapnik)) {
                map.removeLayer(OpenStreetMap_Mapnik);
            }
            if (map.hasLayer(CyclOSM)) {
                map.removeLayer(CyclOSM);
            }

        }




        document.querySelector("input[id=EsriWorldStreetMap]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(Esri_WorldStreetMap)
            /*&& map.removeLayer(Esri_WorldImagery)
            && map.removeLayer(Esri_NatGeoWorldMap)
            && map.removeLayer(Stamen_Toner)
            && map.removeLayer(Stamen_Terrain)*/
            uncheked();
            document.getElementById("EsriWorldStreetMap").checked = true;




        })
        document.querySelector("input[id=Esri_NatGeoWorldMap]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(Esri_NatGeoWorldMap)

            uncheked();
            document.getElementById("Esri_NatGeoWorldMap").checked = true;

        })
        document.querySelector("input[id=Esri_WorldImagery]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(Esri_WorldImagery)

            uncheked();
            document.getElementById("Esri_WorldImagery").checked = true;

        })

        document.querySelector("input[id=Stamen_Terrain]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(Stamen_Terrain)

            uncheked();
            document.getElementById("Stamen_Terrain").checked = true;

        })
        document.querySelector("input[id=Stamen_Toner]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(Stamen_Toner)

            uncheked();
            document.getElementById("Stamen_Toner").checked = true;
        })
        document.querySelector("input[id=OpenStreetMap_Mapnik]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(OpenStreetMap_Mapnik)
            uncheked();
            document.getElementById("OpenStreetMap_Mapnik").checked = true;

        })
        document.querySelector("input[id=CyclOSM]").addEventListener('click', function () {
            drawMap();

            if (this.checked) map.addLayer(CyclOSM)
            uncheked();
            document.getElementById("CyclOSM").checked = true;
        })

        document.querySelector("input[id=Parcs_poly]").addEventListener('change', function () {
            //drawMap(Parcs_layer);
            if (this.checked) map.addLayer(Parcs_layer)
            else map.removeLayer(Parcs_layer)
            //uncheked();
            //document.getElementById("Parcs_poly").checked = true;
        })
        document.querySelector("input[id=Parcs_point]").addEventListener('change', function () {
            //drawMap(Parcs_layer);
            if (this.checked) map.addLayer(Parcs_layer_points)
            else map.removeLayer(Parcs_layer_points)
            //uncheked();
            //document.getElementById("Parcs_point").checked = true;
        })
        document.querySelector("input[id=POI]").addEventListener('change', function () {
            //drawMap(Parcs_layer);
            if (this.checked) map.addLayer(markerClusters)
            else map.removeLayer(markerClusters)
            //uncheked();
            //document.getElementById("Parcs_point").checked = true;
        })




        var map = L.map('map', {
            zoomControl: false, maxZoom: 28, minZoom: 0,

        }).setView([35.911, 3.225], 7);

        var MP = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });
        Esri_WorldStreetMap.addTo(map);
        // MP.addTo(map);
        var zoomHome = L.Control.zoomHome();
        zoomHome.addTo(map);

        function styleParcs(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.9,
                fillColor: 'rgba(10, 194, 22, 0.79)',/*getColorbew(feature.properties[field])*/
            }
        }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 6,
                color: 'rgba(5, 255, 213, 1)',//''#666',
                dashArray: '',
                fillOpacity: 0.3
            });

            if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
            }
            // info.update(layer.feature.properties);

        }
        function resetHighlight(e) {
            Parcs_layer.resetStyle(e.target);
            // info.update();

        }

       


        function onEachFeature(feature, layer) {
            layer._leaflet_id = feature.properties.name;

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight

            });

            // var teste = /* '<b>Nom:</b> ' +*/ feature.properties['name'];
            var teste = '<table>\
        <th style="background-color:steelblue;;letter-spacing: 2px;color:white; font-size:25px ;text-align: center;border-radius:8px;"scope="row" colspan="2">'+ feature.properties['name'] + '</th>\
        <tr>\
             <th scope="row">OSM is:</th>\
            <td colspan="2">' + (feature.properties['osm_id']) + '</td>\
       <tr>\
        <th scope="row">Classe:</th>\
            <td colspan="2">' + (feature.properties['fclass_fra']) + '</td>\
        </tr>\
        </table>'+ '<div class="line icon">\
    <p class="line " style="cursor: pointer;" onclick= getinfo()><i class="fas fa-info-circle fa-lg"></i>&nbsp;&nbsp;Pr�sentation</p>&nbsp;&nbsp;&nbsp;\
    <p class="line " style="cursor: pointer;" onclick= getliste()><i class="fas fa-list fa-lg"></i>&nbsp;&nbsp;Liste des parcs</p>\
    </div>';
            layer.bindPopup(teste, { maxHeight: 400, offset: new L.Point(0, -50) });

        }

        function getinfo() {
            // $('[href="#info"]').tab('show');
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById('info').style.display = "block";
            // document.getElementById('info_B').className.replace(" active", "");
            $("#info_B").addClass("active");

        }


        function getliste() {
            //$('[href="#list"]').tab('show');
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById('list').style.display = "block";
            // document.getElementById('list_B').className.replace(" active", "");
            $("#list_B").addClass("active");

        }


        var Parcs_layer = L.geoJson(Parcs, {
            style: styleParcs,
            onEachFeature: onEachFeature
        }).addTo(map);

        //info box 

        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = (props ? '<table>\
<th style="background-color: steelblue;letter-spacing: 2px;color:white; font-size:25px ;text-align: center;border-radius:0px;"scope="row" colspan="2">'+ props.name + '</th>\
<tr>\
     <th style="padding: 5px;font-size:15px" scope="row">OSM is:</th>\
    <td style="padding: 5px;font-size:15px" colspan="2">' + props.osm_id + '</td>\
<tr>\
<th style="padding: 5px;font-size:15px" scope="row">Classe:</th>\
    <td style="padding: 5px;font-size:15px" colspan="2">' + props.fclass + '</td>\
</tr>\
</table>' : '<i class="fas fa-info-circle"></i>');


        };
        //info.addTo(map);




        var ESRI_Icon_bleu = L.icon({
            iconUrl: 'css/images/marker_esri_3D.png',
            iconSize: [20, 37],
            iconAnchor: [8, 37],
            popupAnchor: [0, -28]
        });

        var ESRI_Icon_rouge = L.icon({
            iconUrl: 'css/images/marker_esri_3D_rouge.png',
            iconSize: [20, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
        });
        function forEachFeature6(feature, layer) {     //SubRegions

            layer.on("click", function (e) {
                //	subregions.setStyle(style6);
                //	layer.setStyle(highlight);
                //	theSubRegionIs = e.target.feature.properties.Coalitions;
                //sumSubRegion(theSubRegionIs);
            }).bindTooltip(feature.properties.name, { className: 'tooltip_parc' });
        }

        var Parcs_layer_points = L.geoJson(Parcs_point, {
            onEachFeature: forEachFeature6,
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: ESRI_Icon_rouge });
            },
        });
        // Parcs_layer_points.addTo(map);

        Parcs_layer.on('mouseout', function (e) {
            document.getElementById('info-pane').innerHTML = '<p style="padding: 5px;">Hover Parcs layer to inspect</p>';
        });

        Parcs_layer.on('mouseover', function (e) {
            // document.getElementById('info-pane').innerHTML = '<u>Name:</u>'+ e.layer.feature.properties.name+'<br>'+'Type:'+ e.layer.feature.properties.fclass;
            document.getElementById('info-pane').innerHTML = '<table>\
        <th style="background-color: steelblue;letter-spacing: 2px;color:white; font-size:25px ;text-align: center;border-radius:0px;"scope="row" colspan="2">'+ e.layer.feature.properties['name'] + '</th>\
        <tr>\
             <th style="padding: 5px;font-size:15px" scope="row">OSM is:</th>\
            <td style="padding: 5px;font-size:15px" colspan="2">' + (e.layer.feature.properties['osm_id']) + '</td>\
       <tr>\
        <th style="padding: 5px;font-size:15px" scope="row">Classe:</th>\
            <td style="padding: 5px;font-size:15px" colspan="2">' + (e.layer.feature.properties['fclass']) + '</td>\
        </tr>\
        </table>';
        });
        /*
        Parcs_layer_points.on('mouseout', function (e) {
            document.getElementById('info-pane').innerHTML = '<p style="padding: 5px;">Hover to Inspect</p>';
        });

        Parcs_layer_points.on('mouseover', function (e) {

            document.getElementById('info-pane').innerHTML = e.layer.feature.properties.name;
        });
        */


        map.on('mousemove', function (e) {
            var lat = e.latlng.lat.toFixed(4);
            var lon = e.latlng.lng.toFixed(4);
            document.getElementById('info-pane2').innerHTML = "LAT: " + lat + " <br> LONG: " + lon;// ("You clicked the map at " + e.latlng.toString()).openPopup();
        });





        $(document).ready(function () {
            $('#listparcs h3').click(function () {
                var string = $(this).text();
                //alert(string);
                var layer_selected = L.geoJson(Parcs, {
                    filter: filtre,
                    color: '#29fff1', weight: 6.5, fillColor: '#fffc2e', fillOpacity: 0, opacity: 0.7,

                });

                function filtre(feature) {
                    if (feature.properties['name'] === string) return true
                }
                map.fitBounds(layer_selected.getBounds(), { padding: [10, 10] });
                //hide all presentation
                var infolist = document.getElementsByClassName("infolist");
                for (i = 0; i < infolist.length; i++) {
                    infolist[i].style.display = "none";
                }
                //display selected parc presentation
                document.getElementById(string).style.display = "block";
                //Open Popup
                map._layers[string].fire('click');
                //var coords = map._layers[string]._latlng;
                //map.setView(coords, 15);
            });

        });
        $(document).ready(function () {
            $('#listparcs h3').hover(function () {
                var string = $(this).text();
                map._layers[string].fire('mouseover');

            });
        });
        $(document).ready(function () {
            $('#listparcs h3').mouseout(function () {
                var string = $(this).text();
                map._layers[string].fire('mouseout');

            });
        });

        var markerClusters = new L.MarkerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true,
            disableClusteringAtZoom: 16,
            /*Custom style from https://www.datavis.fr/index.php?page=leaflet-cluster */

            iconCreateFunction: function (cluster) {
                var digits = (cluster.getChildCount() + '').length;
                return L.divIcon({
                    html: cluster.getChildCount(),
                    className: 'cluster digits-' + digits,
                    iconSize: null
                });
            }

        });//.addTo(map);



        function forEachFeaturePoi(feature, layer) {
            layer._leaflet_id = feature.properties.name;
            var tooltip = "Type: " + feature.properties.fclass_fra + " <br> Nom: " + feature.properties.name;
            layer.on("click", function (e) {
            }).bindTooltip(tooltip, { className: 'tooltip_poi' });
        }
        var Points_POI = L.geoJson(POI, {

            // style: styleParcs,
            onEachFeature: forEachFeaturePoi,
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: ESRI_Icon_bleu });
            },
        });
        markerClusters.addLayer(Points_POI);



        var color;

       // var verified_POI = document.getElementById("POI").checked;

       function search(e) {
        dist = document.getElementById("miles").value;
        theRadius = parseInt(dist);

        var lat = e.latlng.lat;
        var lon = e.latlng.lng;
        ProcessClick(lat, lon)

        // theMarker = L.marker([lat, lon]).addTo(map);

        theMarker = L.circle([lat, lon], 15, {
            color: color,
            fillOpacity: 0,
            opacity: 1
        }).addTo(map);


        theCircle = L.circle([lat, lon], theRadius, {
            color: color,
            fillOpacity: 0,
            opacity: 1
        }).addTo(map);


        if ($('#search').is(":checked") && theRadius !== 0) { map.fitBounds(theCircle.getBounds(), { padding: [10, 10] }) }
        if ($('#search').is(":checked") && theRadius === 0) { alert('Introduire le rayon de recherche') }

        sel.length = 0; //vider la table sel

        Points_POI.eachLayer(function (layer) {
            XY = layer.getLatLng();

            if (theCircle.contains(XY)) {
                sel.push(layer.feature);

            }
            var GeoJS = { type: "FeatureCollection", features: sel };
            //Show number of selected features.
            //console.log(GeoJS.features.length + " Selected features");
        });


        geojsonLayer = L.geoJson(sel, {
            onEachFeature: forEachFeaturePoi,
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: ESRI_Icon_bleu });
            },

        });

        //Add selected points back into map as green circles.

        map.addLayer(geojsonLayer);



        if (map.hasLayer(markerClusters)) {
            map.removeLayer(markerClusters);
            document.getElementById("POI").checked = false;
        }

        $("#t_points").empty();

        for (var i = 0; i < sel.length; i++) {
            var id = sel[i].properties.fclass_fra;
            var x_p = sel[i].geometry.coordinates[0];
            var y_p = sel[i].geometry.coordinates[1];

            addRowTable(id, [y_p, x_p]);


        }
        // sortTable();

    }

        document.querySelector("input[id=search]").addEventListener('change', function () {
            if (this.checked===true) {
                document.getElementById("miles").disabled = false;
                document.getElementById("favcolor").disabled = false;
                color = document.getElementById("favcolor").value;
                map.on('click', search);

            } else  if (this.checked===false) {
                document.getElementById("miles").disabled = true;
                document.getElementById("miles").value = 0;
                document.getElementById("favcolor").disabled = true;
                color = 'rgba(255, 255, 255, 0)';
                map.removeLayer(theMarker);
                map.removeLayer(theCircle);
                map.removeLayer(geojsonLayer);
                $("#t_points").empty();
                map.off('click', search);

            }

        })


        //Recherche par cercle
        var theMarker;
        var theCircle;
        var geojsonLayer;
        var dist;
        var theRadius;

        function ProcessClick(lat, lon) {
            console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);
            //Clear existing marker, circle, and selected points if selecting new points
            if (theCircle != undefined) {
                map.removeLayer(theCircle);
            };
            if (theMarker != undefined) {
                map.removeLayer(theMarker);
            };
            if (geojsonLayer != undefined) {
                map.removeLayer(geojsonLayer);
            };


        };


        function myFunction() {
            color = document.getElementById("favcolor").value;
        }

        var sel = [];



      


        /*
        $(document).ready(function () {
            $('#demo10').click(function () {
                var string2 = $(this).text();
                alert(string2)
            });
        });
        */

        function addRowTable(code, coords) {
            //function addRowTable(code) {
            var highlight;

            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.textContent = code;
            tr.appendChild(td);
            tr.onclick = function () {
                map.flyTo(coords, 17);
                var highlight = L.circle(coords, 15, {
                    color: '#10e3e3',
                    fillColor: '#10e3e3',
                    fillOpacity: 0.8,
                    opacity: 1
                }).addTo(map);
                $(document).off("mouseout", "tr", map.removeLayer(highlight));

            };
            document.querySelector("input[id=Panfromtable]").addEventListener('change', function () {
                if (this.checked) {
                    tr.onmouseover = function () {
                        map.panTo(coords, 17);
                        highlight = L.circle(coords, 15, {
                            color: '#10e3e3',
                            fillColor: '#10e3e3',
                            fillOpacity: 0.8,
                            opacity: 1
                        }).addTo(map);
                    };
                    tr.onmouseout = function () {
                        map.removeLayer(highlight);
                    };

                } else {

                    tr.onmouseover = function () {
                        // map.panTo(coords, 17);
                        highlight = L.circle(coords, 15, {
                            color: '#10e3e3',
                            fillColor: '#10e3e3',
                            fillOpacity: 0.8,
                            opacity: 1
                        }).addTo(map);
                    };
                    tr.onmouseout = function () {
                        map.removeLayer(highlight);
                    };

                }

            })

            tr.onmouseover = function () {
                // map.panTo(coords, 17);
                highlight = L.circle(coords, 15, {
                    color: '#10e3e3',
                    fillColor: '#10e3e3',
                    fillOpacity: 0.8,
                    opacity: 1
                }).addTo(map);
            };
            tr.onmouseout = function () {
                map.removeLayer(highlight);
            };

            document.getElementById("t_points").appendChild(tr);
        }

        function sortTable() {
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("liste_P");
            switching = true;
            /*Make a loop that will continue until
            no switching has been done:*/
            while (switching) {
                //start by saying: no switching is done:
                switching = false;
                rows = table.rows;
                /*Loop through all table rows (except the
                first, which contains table headers):*/
                for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    x = rows[i].getElementsByTagName("TD")[0];
                    y = rows[i + 1].getElementsByTagName("TD")[0];
                    //check if the two rows should switch place:
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
