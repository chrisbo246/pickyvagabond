---
title: Map tile server list
X:
Y:
Z:
GALILEO: Ge
---
<h2>Arcgis</h2>
<h3>Arcgis - Topographic Map 1</h3><p>http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{ZOOM}/{X}/{Y}</p><img src="http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{ZOOM}/{X}/{Y}" />
<h3>Arcgis - Topographic Map 2</h3><p>http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{ZOOM}/{X}/{Y}</p><img src="http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{ZOOM}/{X}/{Y}" />
<h3>Arcgis - National Geograpgic Map</h3><p>http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{ZOOM}/{X}/{Y}</p><img src="http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{ZOOM}/{X}/{Y}" />
<h3>Arcgis - Ocean Basemap</h3><p>http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{ZOOM}/{X}/{Y}</p><img src="http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{ZOOM}/{X}/{Y}" />
<h2>Bing maps</h2>
<h3>Bing Maps - Bird View</h3><p>http://ak.t$calc({2} + 1).tiles.virtualearth.net/tiles/cmd/svhybrid?a={QUAD}&g=5141&dir=dir_n&n=z</p><img src="http://ak.t$calc({2} + 1).tiles.virtualearth.net/tiles/cmd/svhybrid?a={QUAD}&g=5141&dir=dir_n&n=z" />
rescale=true
<h3>Bing Maps - Satellite</h3><p>http://ecn.t1.tiles.virtualearth.net/tiles/a{QUAD}.jpeg?g=3653&n=z</p><img src="http://ecn.t1.tiles.virtualearth.net/tiles/a{QUAD}.jpeg?g=3653&n=z" />
<h3>Bing Maps - Satellite + Labels</h3><p>http://ecn.dynamic.t1.tiles.virtualearth.net/comp/CompositionHandler/{QUAD}?mkt=en-us&it=A,G,L&n=z</p><img src="http://ecn.dynamic.t1.tiles.virtualearth.net/comp/CompositionHandler/{QUAD}?mkt=en-us&it=A,G,L&n=z" />
<h3>Bing Maps - Map</h3><p>http://ecn.t1.tiles.virtualearth.net/tiles/r{QUAD}?g=796&mkt=en-us&lbl=l1&stl=h&shading=hill&n=z</p><img src="http://ecn.t1.tiles.virtualearth.net/tiles/r{QUAD}?g=796&mkt=en-us&lbl=l1&stl=h&shading=hill&n=z" />
<h2>CartoDB</h2>
<h3>* CartoDB - Roads light</h3><p>https://cartodb-basemaps-b.global.ssl.fastly.net/light_all/{ZOOM}/{X}/{Y}.png</p><img src="https://cartodb-basemaps-b.global.ssl.fastly.net/light_all/{ZOOM}/{X}/{Y}.png" />
<h3>* CartoDB - Roads dark</h3><p>https://cartodb-basemaps-b.global.ssl.fastly.net/dark_all/{ZOOM}/{X}/{Y}.png</p><img src="https://cartodb-basemaps-b.global.ssl.fastly.net/dark_all/{ZOOM}/{X}/{Y}.png" />
<h2>Eniro Nordic</h2>
<h3>Eniro Nordic - Map</h3><p>http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/map/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1</p><img src="http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/map/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1" />
<h3>Eniro Nordic - Satellite</h3><p>http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/aerial/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).jpeg?c=1&v=1</p><img src="http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/aerial/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).jpeg?c=1&v=1" />
rescale=true
<h3>Eniro Nordic - Sea</h3><p>http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/nautical/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1</p><img src="http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/nautical/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1" />
<h3>Eniro Nordic - Hybrid <small>overlay</small></h3><p>http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/hybrid/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1</p><img src="http://map0$calc({2} + 1).eniro.no/geowebcache/service/tms1.0.0/hybrid/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png?c=1&v=1" />
<h2>ESRI World imagery</h2>
<h3>ESRI World imagery</h3><p>http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{ZOOM}/{Y}/{X}</p><img src="http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{ZOOM}/{Y}/{X}" />
<h2>Falk</h2>
<h3>* Falk - Original</h3><p>http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX={X}&TileY={Y}&ZoomLevel={ZOOM}&Experience=falk&MapStyle=Falk%20Base</p><img src="http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX={X}&TileY={Y}&ZoomLevel={ZOOM}&Experience=falk&MapStyle=Falk%20Base" />
<h3>* Falk - Original (50%) <small>overlay</small></h3><p>http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX={X}&TileY={Y}&ZoomLevel={ZOOM}&Experience=falk&MapStyle=Falk%20Base</p><img src="http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX={X}&TileY={Y}&ZoomLevel={ZOOM}&Experience=falk&MapStyle=Falk%20Base" />
<h2>GeoMapServer (Iran)</h2>
<h3>GeoMapServer - Map</h3><p>http://maps.geomapserver.com/page.gmsl?b=1&z={ZOOM}&x={X}&y={Y}</p><img src="http://maps.geomapserver.com/page.gmsl?b=1&z={ZOOM}&x={X}&y={Y}" />
<h2>Google Maps</h2>
<h3>Google Maps - Satellite</h3><p>https://www.google.se/maps/vt/pb=!1m5!1m4!1i{ZOOM}!2i{X}!3i{Y}!4i256!2m2!1e1!3i198!4e0</p><img src="https://www.google.se/maps/vt/pb=!1m5!1m4!1i{ZOOM}!2i{X}!3i{Y}!4i256!2m2!1e1!3i198!4e0" />
<h3>Google Maps - Terrain</h3><p>http://mts{1}.google.com/vt/lyrs=t@132,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=t@132,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>Google Maps - Map</h3><p>http://mt{1}.google.com/vt/lyrs=m@285235804&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mt{1}.google.com/vt/lyrs=m@285235804&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>Google Maps - Bike Map <small>overlay</small></h3><p>http://mts0.google.com/vt/lyrs=h@239000000,bike&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts0.google.com/vt/lyrs=h@239000000,bike&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>Google Maps - Hybrid <small>overlay</small></h3><p>http://mt1.google.com/vt/lyrs=h@239000000&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mt1.google.com/vt/lyrs=h@239000000&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Terrain</h3><p>http://mts{1}.google.com/vt/lyrs=t@132,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=t@132,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Terrain + labels</h3><p>http://mts{1}.google.com/vt/lyrs=p&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=p&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Terrain + labels (latest)</h3><p>http://mts{1}.google.com/vt/lyrs=p&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=p&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Terrain v100</h3><p>http://mts{1}.google.com/vt/lyrs=t@100,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=t@100,r@285000000&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Bike Map (transparent)</h3><p>http://mts0.google.com/vt/lyrs=h@239000000,bike&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts0.google.com/vt/lyrs=h@239000000,bike&hl=en&src=app&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Road</h3><p>http://mt1.google.com/vt/lyrs=h@239000000&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mt1.google.com/vt/lyrs=h@239000000&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Sat + label</h3><p>http://mts{1}.google.com/vt/lyrs=y&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=y&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Altered road</h3><p>http://mts{1}.google.com/vt/lyrs=r&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=r&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Roads <small>overlay</small></h3><p>http://mts{1}.google.com/vt/lyrs=h&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts{1}.google.com/vt/lyrs=h&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h3>* Google Maps - Bike <small>overlay</small></h3><p>http://mts0.google.com/vt/lyrs=h,bike&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}</p><img src="http://mts0.google.com/vt/lyrs=h,bike&hl=en&x={X}&y={Y}&z={ZOOM}&s={GALILEO}" />
<h2>Gov.sa</h2>
<h3>Gov.sa - Map</h3><p>http://mapserv.address.gov.sa/mapserv/rest/services/SPLocator/Basemap_Ar/MapServer/tile/{ZOOM}/{Y}/{X}</p><img src="http://mapserv.address.gov.sa/mapserv/rest/services/SPLocator/Basemap_Ar/MapServer/tile/{ZOOM}/{Y}/{X}" />
<h2>Here</h2>
<h3>* Here - Terrain</h3><p>https://2.aerial.maps.api.here.com/maptile/2.1/maptile/newest/terrain.day/{ZOOM}/{X}/{Y}/256/png8?app_id=g7UuRR708Tsut4YSnDLy&token=fVzaDAdRK62zo3CuNcPtDg&lg=ENG</p><img src="https://2.aerial.maps.api.here.com/maptile/2.1/maptile/newest/terrain.day/{ZOOM}/{X}/{Y}/256/png8?app_id=g7UuRR708Tsut4YSnDLy&token=fVzaDAdRK62zo3CuNcPtDg&lg=ENG" />
<h3>* Here - Transit</h3><p>https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{ZOOM}/{X}/{Y}/256/png8?app_id=g7UuRR708Tsut4YSnDLy&token=fVzaDAdRK62zo3CuNcPtDg&lg=ENG</p><img src="https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{ZOOM}/{X}/{Y}/256/png8?app_id=g7UuRR708Tsut4YSnDLy&token=fVzaDAdRK62zo3CuNcPtDg&lg=ENG" />
<h2>Kompass</h2>
<h3>Kompass.at - Kompass tourism Map</h3><p>http://ec{2}.cdn.ecmaps.de/WmsGateway.ashx.jpg?Experience=kompass&MapStyle=KOMPASS%20Touristik&TileX={X}&TileY={Y}&ZoomLevel={ZOOM}</p><img src="http://ec{2}.cdn.ecmaps.de/WmsGateway.ashx.jpg?Experience=kompass&MapStyle=KOMPASS%20Touristik&TileX={X}&TileY={Y}&ZoomLevel={ZOOM}" />
<h3>Kompass.at - Winter Map</h3><p>http://ec{2}.cdn.ecmaps.de/WmsGateway.ashx.jpg?Experience=kompass&MapStyle=Winter%20Touristik&TileX={X}&TileY={Y}&ZoomLevel={ZOOM}</p><img src="http://ec{2}.cdn.ecmaps.de/WmsGateway.ashx.jpg?Experience=kompass&MapStyle=Winter%20Touristik&TileX={X}&TileY={Y}&ZoomLevel={ZOOM}" />
<h2>Kosmosnimki.ru</h2>
<h3>* Kosmosnimki.ru - Spot Satellite</h3><p> http://irs.gis-lab.info/?layers=spot&request=GetTile&z={ZOOM}&x={X}&y={Y} </p><img src=" http://irs.gis-lab.info/?layers=spot&request=GetTile&z={ZOOM}&x={X}&y={Y} " />
<h3>* Kosmosnimki.ru - IRS Satellite</h3><p>http://irs.gis-lab.info/?layers=irs&request=GetTile&z={ZOOM}&x={X}&y={Y} </p><img src="http://irs.gis-lab.info/?layers=irs&request=GetTile&z={ZOOM}&x={X}&y={Y} " />
<h2>Lantmateriet (Sweden)</h2>
<h3>Lantmateriet - Terrängskuggning SWEDEN ONLY</h3><p>http://kso.lantmateriet.se/karta/hojdmodell/wms/v1?LAYERS=terrangskuggning&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256</p><img src="http://kso.lantmateriet.se/karta/hojdmodell/wms/v1?LAYERS=terrangskuggning&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256" />
<h3>Lantmateriet - ?</h3><p>http://kso.lantmateriet.se/karta/topowebb-skikt/wms/v1.1?LAYERS=hydrografi&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}WIDTH=256&HEIGHT=256</p><img src="http://kso.lantmateriet.se/karta/topowebb-skikt/wms/v1.1?LAYERS=hydrografi&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}WIDTH=256&HEIGHT=256" />
<h3>Lantmateriet - Topografisk SWEDEN ONLY</h3><p>http://kso.lantmateriet.se/karta/topowebb/wms/v1?LAYERS=topowebbkartan&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256</p><img src="http://kso.lantmateriet.se/karta/topowebb/wms/v1?LAYERS=topowebbkartan&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256" />
<h3>Lantmateriet - Ortofoto SWEDEN ONLY</h3><p>http://kso.lantmateriet.se/karta/ortofoto/wms/v1?LAYERS=orto%2Corto025&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default%2Cdefault&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256</p><img src="http://kso.lantmateriet.se/karta/ortofoto/wms/v1?LAYERS=orto%2Corto025&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default%2Cdefault&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256" />
<h3>Lantmateriet - Terrängkartan SWEDEN ONLY</h3><p>http://kso.lantmateriet.se/karta/allmannakartor/wms/v1?LAYERS=terrangkartan&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256</p><img src="http://kso.lantmateriet.se/karta/allmannakartor/wms/v1?LAYERS=terrangkartan&EXCEPTIONS=application%2Fvnd.ogc.se_xml&FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=default&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3006&BBOX={BBOX(SWEREF99)}&WIDTH=256&HEIGHT=256" />
<h2>Lonvia</h2>
<h3>Lonvia - Hiking routes <small>overlay</small></h3><p>http://tile.lonvia.de/hiking/{ZOOM}/{X}/{Y}.png</p><img src="http://tile.lonvia.de/hiking/{ZOOM}/{X}/{Y}.png" />
<h3>Lonvia - Cycling routes <small>overlay</small></h3><p>http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png</p><img src="http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png" />
<h3>* Lonvia - Cycling routes (transparent)</h3><p>http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png</p><img src="http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png" />
<h3>* Lonvia - Cycling routes <small>overlay</small></h3><p>http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png</p><img src="http://tile.waymarkedtrails.org/cycling/{ZOOM}/{X}/{Y}.png" />
<h2>Map1</h2>
<h3>* Map1 - Many labels</h3><p>http://beta.map1.eu/tiles/{ZOOM}/{X}/{Y}.jpg</p><img src="http://beta.map1.eu/tiles/{ZOOM}/{X}/{Y}.jpg" />
<h2>MapmyIndia</h2>
<h3>MapmyIndia - Map India only</h3><p>http://mt{2}.mapmyindia.com/MapServer/MapServer.aspx?lwM=$calc(({X} - (8 * (2 ^ ({ZOOM} - 4)))) * ((65536 \ (2 ^ ({ZOOM} - 4))) * 256))&twM=$calc(((8 * (2 ^ ({ZOOM} - 4))) - {Y}) * ((65536 \ (2 ^ ({ZOOM} - 4))) * 256))&zf=$calc(65536 \ (2 ^ ({ZOOM} - 4)))&type=hybrid&cache=cache</p><img src="http://mt{2}.mapmyindia.com/MapServer/MapServer.aspx?lwM=$calc(({X} - (8 * (2 ^ ({ZOOM} - 4)))) * ((65536 \ (2 ^ ({ZOOM} - 4))) * 256))&twM=$calc(((8 * (2 ^ ({ZOOM} - 4))) - {Y}) * ((65536 \ (2 ^ ({ZOOM} - 4))) * 256))&zf=$calc(65536 \ (2 ^ ({ZOOM} - 4)))&type=hybrid&cache=cache" />
<h2>Mapplus (Switzerland)</h2>
<h3>Switzerland</h3><p>http://mpa1.mapplus.ch/swisstopo/{ZOOM}/{X}/{Y}.jpg</p><img src="http://mpa1.mapplus.ch/swisstopo/{ZOOM}/{X}/{Y}.jpg" />
<h2>Mappy</h2>
<h3>* Mappy - standard</h3><p>https://map3.mappy.net/map/1.0/slab/standard/256/{ZOOM}/{X}/{Y}</p><img src="https://map3.mappy.net/map/1.0/slab/standard/256/{ZOOM}/{X}/{Y}" />
<h2>Mapquest</h2>
<h3>MapQuest - Map</h3><p>http://mtile01.mqcdn.com/tiles/1.0.0/vy/map/{ZOOM}/{X}/{Y}.png</p><img src="http://mtile01.mqcdn.com/tiles/1.0.0/vy/map/{ZOOM}/{X}/{Y}.png" />
<h3>MapQuest - Satellite</h3><p>http://mtile01.mqcdn.com/tiles/1.0.0/vy/sat/{ZOOM}/{X}/{Y}.png</p><img src="http://mtile01.mqcdn.com/tiles/1.0.0/vy/sat/{ZOOM}/{X}/{Y}.png" />
<h3>MapQuest - Hybrid <small>overlay</small></h3><p>http://mtile01.mqcdn.com/tiles/1.0.0/vy/hyb/{ZOOM}/{X}/{Y}.png</p><img src="http://mtile01.mqcdn.com/tiles/1.0.0/vy/hyb/{ZOOM}/{X}/{Y}.png" />
<h3>* MapQuest - Hybrid (transparent)</h3><p>http://mtile01.mqcdn.com/tiles/1.0.0/vy/hyb/{ZOOM}/{X}/{Y}.png</p><img src="http://mtile01.mqcdn.com/tiles/1.0.0/vy/hyb/{ZOOM}/{X}/{Y}.png" />
<h2>maps-for-free.com</h2>
<h3>* maps-for-free.com - Relief</h3><p>http://www.maps-for-free.com/layer/relief/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.jpg</p><img src="http://www.maps-for-free.com/layer/relief/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.jpg" />
<h3>* maps-for-free.com - Water (transparent)</h3><p>http://www.maps-for-free.com/layer/water/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.gif</p><img src="http://www.maps-for-free.com/layer/water/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.gif" />
<h3>* maps-for-free.com - Admin (transparent)</h3><p>http://www.maps-for-free.com/layer/admin/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.gif</p><img src="http://www.maps-for-free.com/layer/admin/z{ZOOM}/row{Y}/{ZOOM}_{X}-{Y}.gif" />
<h2>MapSurfer.NET</h2>
<h3>* MapSurfer.NET - Hillshade <small>overlay</small></h3><p>http://korona.geog.uni-heidelberg.de/tiles/asterh/x={X}&y={Y}&z={ZOOM}</p><img src="http://korona.geog.uni-heidelberg.de/tiles/asterh/x={X}&y={Y}&z={ZOOM}" />
<h3>* MapSurfer.NET - Admin boundaries <small>overlay</small></h3><p>http://korona.geog.uni-heidelberg.de/tiles/adminb/x={X}&y={Y}&z={ZOOM}</p><img src="http://korona.geog.uni-heidelberg.de/tiles/adminb/x={X}&y={Y}&z={ZOOM}" />
<h3>* MapSurfer.NET - Hybrid <small>overlay</small></h3><p>http://korona.geog.uni-heidelberg.de/tiles/hybrid/x={X}&y={Y}&z={ZOOM}</p><img src="http://korona.geog.uni-heidelberg.de/tiles/hybrid/x={X}&y={Y}&z={ZOOM}" />
<h3>* MapSurfer.NET - Roads</h3><p>http://korona.geog.uni-heidelberg.de/tiles/roads/x={X}&y={Y}&z={ZOOM}</p><img src="http://korona.geog.uni-heidelberg.de/tiles/roads/x={X}&y={Y}&z={ZOOM}" />
<h3>* MapSurfer.NET - Roads grayscale</h3><p>http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={X}&y={Y}&z={ZOOM}</p><img src="http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={X}&y={Y}&z={ZOOM}" />
<h2>Memomaps</h2>
<h3>Memomaps - Transport Map</h3><p>http://tile.memomaps.de/tilegen/{ZOOM}/{X}/{Y}.png</p><img src="http://tile.memomaps.de/tilegen/{ZOOM}/{X}/{Y}.png" />
<h2>NZ topo maps (NZ)</h2>
<h3>NZ topo</h3><p>http://nz1.nztopomaps.com/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png</p><img src="http://nz1.nztopomaps.com/{ZOOM}/{X}/$calc(((2 ^ {ZOOM}) - {Y}) - 1).png" />
<h2>onearth.jpl.nasa.gov</h2>
<h3>* Landsat from onearth.jpl.nasa.gov</h3><p>http://irs.gis-lab.info/?layers=landsat&request=GetTile&z={ZOOM}&x={X}&y={Y}</p><img src="http://irs.gis-lab.info/?layers=landsat&request=GetTile&z={ZOOM}&x={X}&y={Y}" />
<h2>Openstreetmap</h2>
<h3>OSM - Basic map</h3><p>http://a.tile.openstreetmap.org/{ZOOM}/{X}/{Y}.png</p><img src="http://a.tile.openstreetmap.org/{ZOOM}/{X}/{Y}.png" />
<h3>* OSM - FR</h3><p>http://c.tile.openstreetmap.fr/osmfr/{ZOOM}/{X}/{Y}.png</p><img src="http://c.tile.openstreetmap.fr/osmfr/{ZOOM}/{X}/{Y}.png" />
<h3>* OSM - Hydra</h3><p>http://c.tile.openstreetmap.se/hydda/base/{ZOOM}/{X}/{Y}.png</p><img src="http://c.tile.openstreetmap.se/hydda/base/{ZOOM}/{X}/{Y}.png" />
<h2>Opencyclemap</h2>
<h3>OCM - Cycle Map</h3><p>http://a.tile.opencyclemap.org/cycle/{ZOOM}/{X}/{Y}.png</p><img src="http://a.tile.opencyclemap.org/cycle/{ZOOM}/{X}/{Y}.png" />
<h3>OCM - Transport Map</h3><p>http://a.tile2.opencyclemap.org/transport/{ZOOM}/{X}/{Y}.png</p><img src="http://a.tile2.opencyclemap.org/transport/{ZOOM}/{X}/{Y}.png" />
<h3>* OCM - Cycle Map</h3><p>http://a.tile.opencyclemap.org/cycle/{ZOOM}/{X}/{Y}.png</p><img src="http://a.tile.opencyclemap.org/cycle/{ZOOM}/{X}/{Y}.png" />
<h2>OpenPisteMap</h2>
<h3>OPM - Ski Map <small>overlay</small></h3><p>http://tiles.openpistemap.org/nocontours/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles.openpistemap.org/nocontours/{ZOOM}/{X}/{Y}.png" />
<h2>OpenPtMap</h2>
<h3>OpenPtMap - Transport Map <small>overlay</small></h3><p>http://www.openptmap.org/tiles/{ZOOM}/{X}/{Y}.png</p><img src="http://www.openptmap.org/tiles/{ZOOM}/{X}/{Y}.png" />
<h2>OpenSeaMap</h2>
<h3>OSM - Sea marks Map <small>overlay</small></h3><p>http://tiles.openseamap.org/seamark/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles.openseamap.org/seamark/{ZOOM}/{X}/{Y}.png" />
<h2>Sigma</h2>
<h3>* Sigma - Road Map (layer 1)</h3><p>http://tiles1.sigma-dc-control.com/layer1/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer1/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Road Map + relief (layer 2)</h3><p>http://tiles1.sigma-dc-control.com/layer2/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer2/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Road Map (layer 3)</h3><p>http://tiles1.sigma-dc-control.com/layer3/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer3/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map (layer 4)</h3><p>http://tiles1.sigma-dc-control.com/layer4/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer4/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Road Map + topo (layer 5)</h3><p>http://tiles1.sigma-dc-control.com/layer5/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer5/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map + relief (layer 6)</h3><p>http://tiles1.sigma-dc-control.com/layer6/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer6/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map + topo (layer 7)</h3><p>http://tiles1.sigma-dc-control.com/layer7/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer7/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map (layer 8)</h3><p>http://tiles1.sigma-dc-control.com/layer8/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer8/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map (layer 9) <small>overlay</small></h3><p>http://tiles1.sigma-dc-control.com/layer9/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer9/{ZOOM}/{X}/{Y}.png" />
<h3>* Sigma - Cycle Map (layer 10) <small>overlay</small></h3><p>http://tiles1.sigma-dc-control.com/layer10/{ZOOM}/{X}/{Y}.png</p><img src="http://tiles1.sigma-dc-control.com/layer10/{ZOOM}/{X}/{Y}.png" />
<h2>Stamen</h2>
<h3>Stamen - Black & White Map</h3><p>http://a.tile.stamen.com/toner/{ZOOM}/{X}/{Y}.png</p><img src="http://a.tile.stamen.com/toner/{ZOOM}/{X}/{Y}.png" />
<h3>Stamen - Artistic map</h3><p>http://c.tile.stamen.com/watercolor/{ZOOM}/{X}/{Y}.png</p><img src="http://c.tile.stamen.com/watercolor/{ZOOM}/{X}/{Y}.png" />
<h2>Statkart (Norway)</h2>
<h3>Statkart Norway</h3><p>http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo2&zoom={ZOOM}&x={X}&y={Y}</p><img src="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo2&zoom={ZOOM}&x={X}&y={Y}" />
<h2>Toolserver</h2>
<h3>Toolserver - Cycling routes <small>overlay</small></h3><p>http://a.www.toolserver.org/tiles/bicycle_network/{ZOOM}/{X}/{Y}.png</p><img src="http://a.www.toolserver.org/tiles/bicycle_network/{ZOOM}/{X}/{Y}.png" />
<h3>ToolServer - Hike & Bike Map</h3><p>http://toolserver.org/tiles/hikebike/{ZOOM}/{X}/{Y}.png</p><img src="http://toolserver.org/tiles/hikebike/{ZOOM}/{X}/{Y}.png" />
<h3>ToolServer - Hillshading</h3><p>http://toolserver.org/~cmarqu/hill/{ZOOM}/{X}/{Y}.png</p><img src="http://toolserver.org/~cmarqu/hill/{ZOOM}/{X}/{Y}.png" />
<h3>ToolServer - Map Grayscale</h3><p>http://a.www.toolserver.org/tiles/bw-mapnik/{ZOOM}/{X}/{Y}.png</p><img src="http://a.www.toolserver.org/tiles/bw-mapnik/{ZOOM}/{X}/{Y}.png" />
<h2>Via Michelin</h2>
<h3>* Via Michelin - Viamichelin v201503191157</h3><p>http://map1.viamichelin.com/map/mapdirect?map=viamichelin&z={ZOOM}&x={X}&y={Y}&format=png&version=201503191157&layer=background&locale=default&debug_pattern=.*</p><img src="http://map1.viamichelin.com/map/mapdirect?map=viamichelin&z={ZOOM}&x={X}&y={Y}&format=png&version=201503191157&layer=background&locale=default&debug_pattern=.*" />
<h3>* Via Michelin - Light v201503191157</h3><p>http://map1.viamichelin.com/map/mapdirect?map=light&z={ZOOM}&x={X}&y={Y}&format=png&version=201503191157&layer=background&locale=default&debug_pattern=.*</p><img src="http://map1.viamichelin.com/map/mapdirect?map=light&z={ZOOM}&x={X}&y={Y}&format=png&version=201503191157&layer=background&locale=default&debug_pattern=.*" />
<h3>* Via Michelin - Viamichelin v201606031210</h3><p>http://map1.viamichelin.com/map/mapdirect?map=viamichelin&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*</p><img src="http://map1.viamichelin.com/map/mapdirect?map=viamichelin&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*" />
<h3>* Via Michelin - Light v201606031210</h3><p>http://map1.viamichelin.com/map/mapdirect?map=light&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*</p><img src="http://map1.viamichelin.com/map/mapdirect?map=light&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*" />
<h3>* Via Michelin - Hybrid v201606031210 <small>overlay</small></h3><p>http://map1.viamichelin.com/map/mapdirect?map=hybrid&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=network&locale=default&debug_pattern=.*</p><img src="http://map1.viamichelin.com/map/mapdirect?map=hybrid&z={ZOOM}&x={X}&y={Y}&format=png&version=201606031210&layer=network&locale=default&debug_pattern=.*" />
<h2>wmflabs</h2>
<h3>* wmflabs - Hill shading (transparent)</h3><p>http://a.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png</p><img src="http://a.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png" />
<h3>* wmflabs - No labels</h3><p>https://tiles.wmflabs.org/osm-no-labels/{ZOOM}/{X}/{Y}.png</p><img src="https://tiles.wmflabs.org/osm-no-labels/{ZOOM}/{X}/{Y}.png" />
<h3>* wmflabs - Hill shading (transparent) <small>overlay</small></h3><p>http://a.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png</p><img src="http://a.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png" />
<h2>Yahoo</h2>
<h3>* Yahoo - standard</h3><p>https://4.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{ZOOM}/{X}/{Y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B</p><img src="https://4.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{ZOOM}/{X}/{Y}/256/png8?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B" />
<h3>* Yahoo - satellite</h3><p>https://4.aerial.maps.api.here.com/maptile/2.1/maptile/newest/hybrid.day/8/132/91/256/jpg?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B</p><img src="https://4.aerial.maps.api.here.com/maptile/2.1/maptile/newest/hybrid.day/8/132/91/256/jpg?lg=ENG&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B" />
