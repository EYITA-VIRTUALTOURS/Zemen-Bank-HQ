(function(){
    var script = {
 "start": "this.playAudioList([this.audio_1DA89177_1164_3FF2_41A1_5B6A936D8CCA]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "id": "rootPlayer",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "minHeight": 20,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -126.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_066B1710_11DC_C30E_418F_C0D003790E74",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120350_00_546",
 "overlays": [
  "this.overlay_02A56C7F_0F27_6FF2_4191_EAD0736E1192",
  "this.panorama_031E581F_0E6F_3870_4186_D7269B1BB796_tcap0",
  "this.overlay_1EBC6620_116D_C50E_41A9_46501F5BDA28"
 ],
 "id": "panorama_031E581F_0E6F_3870_4186_D7269B1BB796",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -119.62,
   "class": "AdjacentPanorama",
   "yaw": 133.18,
   "panorama": "this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -117.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_09BC3756_11DC_C332_4125_43EB7AA121B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 96.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06DE263C_11DC_C576_41B1_18118DAD62A1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -72.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0659E704_11DC_C316_41A0_0AD6FF014BC8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121136_00_merged",
 "overlays": [
  "this.overlay_1D720651_0F23_5B0E_419D_77CE732D9467",
  "this.overlay_1C8ED555_0F23_3936_418B_6F7D4620C63C",
  "this.overlay_1A90E640_0F22_DB0E_4184_DAD2B92C4E2C",
  "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_tcap0",
  "this.overlay_015737F4_1165_C2F6_41AD_DAF12F53A711",
  "this.overlay_0125310E_1164_3F13_41A1_4E03C2436165",
  "this.overlay_0132336A_1164_4313_4190_B5C7E4BA5929"
 ],
 "id": "panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 55.02,
   "class": "AdjacentPanorama",
   "yaw": -54.39,
   "panorama": "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9",
   "distance": 1
  },
  {
   "backwardYaw": -34.8,
   "class": "AdjacentPanorama",
   "yaw": 62.55,
   "panorama": "this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22",
   "distance": 1
  },
  {
   "backwardYaw": -121.97,
   "class": "AdjacentPanorama",
   "yaw": 134.4,
   "panorama": "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120516_00_547",
 "overlays": [
  "this.overlay_025F2659_0F22_DB3E_414B_5E6F3FE5C50E",
  "this.overlay_035364EF_0F21_FF12_417C_94FDAB81DE80",
  "this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0",
  "this.overlay_1F89E390_116C_430F_4191_04CE380666B2",
  "this.overlay_011D04F3_116C_46F2_4198_9C5B1D25C3D1"
 ],
 "id": "panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 133.18,
   "class": "AdjacentPanorama",
   "yaw": -119.62,
   "panorama": "this.panorama_031E581F_0E6F_3870_4186_D7269B1BB796",
   "distance": 1
  },
  {
   "backwardYaw": 32.16,
   "class": "AdjacentPanorama",
   "yaw": 130.89,
   "panorama": "this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 56.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06B87603_11DC_C512_41A1_DDDB91F749FB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033FD39E_0F91_0870_41A9_729A540D8225_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 160.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_09A1A740_11DC_C30E_41A7_CEF28E3BCFA6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120911_00_551",
 "overlays": [
  "this.overlay_1E12210C_0F3F_5916_4192_808F959F8D62",
  "this.overlay_1D493626_0F21_3B12_41A4_1088D0916139",
  "this.overlay_1B0CB71C_0F21_D935_417E_6B6D709CACDC",
  "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94_tcap0",
  "this.overlay_01417FED_1163_C316_41AF_35EA90D5BE9D",
  "this.overlay_01C109DA_1163_CF32_41A4_F644AA4A6A63",
  "this.overlay_017776DF_1164_C531_41A0_C47A52C176CA"
 ],
 "id": "panorama_033FF9A4_0F91_1851_4198_4634D1720D94",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 134.4,
   "class": "AdjacentPanorama",
   "yaw": -121.97,
   "panorama": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A",
   "distance": 1
  },
  {
   "backwardYaw": -120.84,
   "class": "AdjacentPanorama",
   "yaw": 71.1,
   "panorama": "this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA",
   "distance": 1
  },
  {
   "backwardYaw": 84.54,
   "class": "AdjacentPanorama",
   "yaw": -21.99,
   "panorama": "this.panorama_033FD39E_0F91_0870_41A9_729A540D8225",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120654_00_549",
 "overlays": [
  "this.overlay_00995FC0_0F21_290E_41A7_BE3A9B08BBEE",
  "this.overlay_1F53CD9C_0F21_2936_4181_6C9A4778FEFE",
  "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_tcap0",
  "this.overlay_01659385_116D_C311_4193_2E2E35DD19F3",
  "this.overlay_01ABC2EE_116C_7D12_4192_DB273E150088"
 ],
 "id": "panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 72.98,
   "class": "AdjacentPanorama",
   "yaw": 96.59,
   "panorama": "this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA",
   "distance": 1
  },
  {
   "backwardYaw": 158.27,
   "class": "AdjacentPanorama",
   "yaw": -125.11,
   "panorama": "this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 54.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06FC1680_11DC_C50E_41AC_186D6B3FF500",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -124.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_062126C1_11DC_C511_41AF_6280D2DE8F37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -62.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_069015D8_11DC_C73E_418C_EFED9BF8F07E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121350_00_557",
 "overlays": [
  "this.overlay_1C0DABC8_0F21_291E_4189_8DBEFF4CB70E",
  "this.overlay_1BBF5804_0F21_7716_4188_E09D832B9D15",
  "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_tcap0",
  "this.overlay_1E216C4F_1164_C512_418E_0DAD299EF79C",
  "this.overlay_015A9C5F_1164_4532_41AC_B9CF41FCB3EB"
 ],
 "id": "panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.39,
   "class": "AdjacentPanorama",
   "yaw": 55.02,
   "panorama": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A",
   "distance": 1
  },
  {
   "backwardYaw": 50.12,
   "class": "AdjacentPanorama",
   "yaw": -125.11,
   "panorama": "this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -45.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_075D8591_11DC_C731_4186_F870FC2433E7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "mouseControlMode": "drag_acceleration",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033FF9A4_0F91_1851_4198_4634D1720D94_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 158.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06C4560E_11DC_C512_41A2_176CB4C317D3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122403_00_569",
 "overlays": [
  "this.overlay_13519811_0F6F_D70E_41A4_8BA762E362E9",
  "this.panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_tcap0",
  "this.overlay_09013A2A_113C_4D13_418F_703E068973E0"
 ],
 "id": "panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.82,
   "class": "AdjacentPanorama",
   "yaw": -19.83,
   "panorama": "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 145.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_062C26D7_11DC_C531_419A_554B286E40C9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -147.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0743355F_11DC_C732_4190_1685F6435980",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 54.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_060A8697_11DC_C532_41AB_A6525AF698B2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -107.02,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06EA6652_11DC_C532_41A6_60C88430D943",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120816_00_550",
 "overlays": [
  "this.overlay_1F4CD321_0F3F_790E_41A1_6606D1CD5227",
  "this.overlay_1EE6A857_0F3F_F732_41AB_8023E5FEBE70",
  "this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_tcap0",
  "this.overlay_0142A5C6_116C_C712_4181_54D66904AAF0",
  "this.overlay_1E66C14B_116C_5F12_4134_70CC95C7DE36"
 ],
 "id": "panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.59,
   "class": "AdjacentPanorama",
   "yaw": 72.98,
   "panorama": "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA",
   "distance": 1
  },
  {
   "backwardYaw": 71.1,
   "class": "AdjacentPanorama",
   "yaw": -120.84,
   "panorama": "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122105_00_565",
 "overlays": [
  "this.overlay_17E8CB9F_0F21_6932_4138_30880320A91C",
  "this.overlay_150D6CFE_0F26_E8F2_41A2_4A20DC35A0EA",
  "this.overlay_16CC9B02_0F27_2912_419D_5E4347648D89",
  "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_tcap0",
  "this.overlay_09356367_1127_C312_41A7_EA6ADE025540",
  "this.overlay_087D4191_1124_3F0E_41AB_D41EC83EA07F",
  "this.overlay_082B5C3E_1124_4572_419F_05948C99CD49"
 ],
 "id": "panorama_03351E04_0F91_F850_41AD_19AC0FE7F071",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E"
  },
  {
   "backwardYaw": -87.17,
   "class": "AdjacentPanorama",
   "yaw": 107.27,
   "panorama": "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42",
   "distance": 1
  },
  {
   "backwardYaw": -29.42,
   "class": "AdjacentPanorama",
   "yaw": -94.82,
   "panorama": "this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -21.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06F0D669_11DC_C51E_416E_0F59955E52EE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 59.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0765C59B_11DC_C731_4134_16E31F3CFB10",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_camera",
   "media": "this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_031E581F_0E6F_3870_4186_D7269B1BB796_camera",
   "media": "this.panorama_031E581F_0E6F_3870_4186_D7269B1BB796",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_camera",
   "media": "this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_camera",
   "media": "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_camera",
   "media": "this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94_camera",
   "media": "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033FD39E_0F91_0870_41A9_729A540D8225_camera",
   "media": "this.panorama_033FD39E_0F91_0870_41A9_729A540D8225",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_camera",
   "media": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_camera",
   "media": "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_camera",
   "media": "this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033E7D6B_0F91_78D7_417A_090699B3911E_camera",
   "media": "this.panorama_033E7D6B_0F91_78D7_417A_090699B3911E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_camera",
   "media": "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_camera",
   "media": "this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_camera",
   "media": "this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_camera",
   "media": "this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_camera",
   "media": "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_camera",
   "media": "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_camera",
   "media": "this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_camera",
   "media": "this.panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_camera",
   "media": "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_camera",
   "media": "this.panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingBottom": 0,
 "id": "window_076A4A6E_1164_CD12_41AD_31F0AD0C1ADD",
 "footerHeight": 5,
 "width": 1280,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderRadius": 5,
 "paddingBottom": 0,
 "headerBackgroundOpacity": 1,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPaddingLeft": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "titlePaddingLeft": 5,
 "closeButtonBackgroundOpacity": 1,
 "minHeight": 20,
 "closeButtonBorderRadius": 11,
 "headerVerticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "modal": true,
 "bodyBorderSize": 0,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonIconWidth": 12,
 "minWidth": 20,
 "titleTextDecoration": "none",
 "height": 800,
 "scrollBarColor": "#000000",
 "bodyPaddingLeft": 5,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingBottom": 5,
 "title": "Welcome to Zemen Bank Headquarters!",
 "shadowVerticalLength": 0,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "closeButtonBackgroundColor": [],
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 1,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "2.5vmin",
 "titlePaddingTop": 5,
 "shadow": true,
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_076A6A6E_1164_CD12_41A6_C95F1A44DB4B",
  {
   "backgroundOpacity": 1,
   "insetBorder": false,
   "borderRadius": 0,
   "paddingBottom": 0,
   "width": "100%",
   "paddingRight": 0,
   "propagateClick": false,
   "paddingLeft": 0,
   "url": "https://www.zemenbank.com/",
   "minHeight": 0,
   "borderSize": 0,
   "backgroundColorRatios": [],
   "class": "WebFrame",
   "backgroundColor": [],
   "minWidth": 0,
   "height": "71%",
   "backgroundColorDirection": "vertical",
   "scrollEnabled": true,
   "paddingTop": 0,
   "data": {
    "name": "WebFrame18313"
   },
   "shadow": false
  }
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "titleFontWeight": "normal",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "closeButtonIconLineWidth": 2,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "footerBackgroundOpacity": 1,
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "class": "Window",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "titleFontFamily": "Poppins",
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingRight": 0,
 "layout": "vertical",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window13100"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBorderSize": 0
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121546_00_559",
 "overlays": [
  "this.overlay_1A36F9C1_0F22_E90E_4192_8C92E30478B3",
  "this.overlay_19754EFB_0F23_68F2_41AA_D8EF56CC0E56",
  "this.panorama_033E7D6B_0F91_78D7_417A_090699B3911E_tcap0",
  "this.overlay_05A202E7_1164_DD12_41AC_AEDBAAF54178",
  "this.overlay_05CD897B_1164_4FF1_4172_E47B6BA38FA3",
  "this.overlay_05AD406C_1164_5D16_41B0_35C7B127A855"
 ],
 "id": "panorama_033E7D6B_0F91_78D7_417A_090699B3911E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B"
  },
  {
   "backwardYaw": -83.53,
   "class": "AdjacentPanorama",
   "yaw": 117.07,
   "panorama": "this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -27.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_09B3C74B_11DC_C312_419E_B96C654605AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122254_00_567",
 "overlays": [
  "this.overlay_1540E270_0F23_3B0E_41A1_FAE257E7CDF4",
  "this.overlay_1585CF7E_0F23_69F2_419B_AB473451F214",
  "this.panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_tcap0",
  "this.overlay_09EEE542_1124_4712_4184_D5B6A8C7F87B",
  "this.overlay_086C8FA9_1123_C31E_4193_BBCC6F88F6E6"
 ],
 "id": "panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071"
  },
  {
   "backwardYaw": 103.13,
   "class": "AdjacentPanorama",
   "yaw": 86.17,
   "panorama": "this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121721_00_560",
 "overlays": [
  "this.overlay_1A4711D7_0F23_5932_4199_0132554EB32E",
  "this.overlay_1A8A04A2_0F23_5F0D_41A8_465C6140BDD2",
  "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_tcap0",
  "this.overlay_094E1615_112F_C536_41AC_B97E3CAB81AC",
  "this.overlay_09EB40F8_112C_5EFE_4178_4867790263EF"
 ],
 "id": "panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 89.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0777A5AF_11DC_C711_41AA_76751D922752",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122205_00_566",
 "overlays": [
  "this.overlay_16E9ABBC_0F21_2976_4181_40134E42E4B6",
  "this.overlay_15726640_0F21_FB0E_41A0_D2190296F5F2",
  "this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_tcap0",
  "this.overlay_0902C31A_1125_C332_419B_B6181FD8FAAD",
  "this.overlay_09924674_1124_45F6_4192_13F4DC070AD8"
 ],
 "id": "panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.82,
   "class": "AdjacentPanorama",
   "yaw": -29.42,
   "panorama": "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071",
   "distance": 1
  },
  {
   "backwardYaw": 86.17,
   "class": "AdjacentPanorama",
   "yaw": 103.13,
   "panorama": "this.panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 85.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_069F15E3_11DC_C712_4194_7F360C7345B7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_031E581F_0E6F_3870_4186_D7269B1BB796_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -108.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0985272A_11DC_C313_41AC_706D57B18992",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -93.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06B385F7_11DC_C6F2_41A0_71825A57231F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -93.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06A645EE_11DC_C712_41AA_33026BE39B66",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122333_00_568",
 "overlays": [
  "this.overlay_146ED778_0F23_59FE_41A7_0955808A7916",
  "this.overlay_14A38BC0_0F22_E90E_4197_E4818AD18216",
  "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_tcap0",
  "this.overlay_092A2FF2_113C_C2F3_419A_B02F13EC451E",
  "this.overlay_092FB728_113C_431F_41A8_16B7AB114400"
 ],
 "id": "panorama_03365D37_0F91_38BF_4198_563D5D1AD01E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.82,
   "class": "AdjacentPanorama",
   "yaw": 21.61,
   "panorama": "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42",
   "distance": 1
  },
  {
   "backwardYaw": -19.83,
   "class": "AdjacentPanorama",
   "yaw": -90.82,
   "panorama": "this.panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 60.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_06D1F627_11DC_C512_4192_7C47BC0414B7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_122028_00_564",
 "overlays": [
  "this.overlay_171FF4FF_0F23_F8F2_419B_FC29158B1DE5",
  "this.overlay_1616E141_0F23_590E_41A1_8350904F61D8",
  "this.overlay_161BDF23_0F21_2912_419B_4065FD5513AB",
  "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_tcap0",
  "this.overlay_092B1694_1125_C536_41A5_C015865DC8D1",
  "this.overlay_09A411F4_1125_DEF6_4183_0E9FB0D0048E",
  "this.overlay_08281A13_1124_4D32_4166_842E2E6D8130"
 ],
 "id": "panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.61,
   "class": "AdjacentPanorama",
   "yaw": 13.82,
   "panorama": "this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E",
   "distance": 1
  },
  {
   "backwardYaw": 107.27,
   "class": "AdjacentPanorama",
   "yaw": -87.17,
   "panorama": "this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071",
   "distance": 1
  },
  {
   "backwardYaw": 53.89,
   "class": "AdjacentPanorama",
   "yaw": 152.62,
   "panorama": "this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -49.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_061626AC_11DC_C517_4192_74CE339F8B88",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 125.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0778C5B9_11DC_C77E_41A2_DBCACE3EE9AC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121015_00_552",
 "overlays": [
  "this.overlay_1ECDA9F6_0F22_E8F2_4187_FE404ECA05D1",
  "this.panorama_033FD39E_0F91_0870_41A9_729A540D8225_tcap0",
  "this.overlay_01677BA3_1164_4312_4182_3B7D1DF08401"
 ],
 "id": "panorama_033FD39E_0F91_0870_41A9_729A540D8225",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.99,
   "class": "AdjacentPanorama",
   "yaw": 84.54,
   "panorama": "this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_t.jpg"
},
{
 "audio": {
  "mp3Url": "media/audio_1DA89177_1164_3FF2_41A1_5B6A936D8CCA.mp3",
  "oggUrl": "media/audio_1DA89177_1164_3FF2_41A1_5B6A936D8CCA.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_1DA89177_1164_3FF2_41A1_5B6A936D8CCA",
 "autoplay": true,
 "data": {
  "label": "The Homeless Wanderer - Emahoy Tsege Mariam Gebru (320)"
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -166.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0990B736_11DC_C372_41AC_EBED6D526FC2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121821_00_561",
 "overlays": [
  "this.overlay_1929314A_0F2F_5912_4195_ACAE4C85484A",
  "this.overlay_18A05479_0F2F_5FFE_418A_9BC4ADA432A9",
  "this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_tcap0",
  "this.overlay_09411B0B_112C_4312_41A6_429F3F1F5FD2",
  "this.overlay_060C1C2B_112C_4512_419D_646B7834504A"
 ],
 "id": "panorama_033DB68F_0F91_086F_416F_F642EDEDDD22",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.55,
   "class": "AdjacentPanorama",
   "yaw": -34.8,
   "panorama": "this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A",
   "distance": 1
  },
  {
   "backwardYaw": -108.42,
   "class": "AdjacentPanorama",
   "yaw": 86.48,
   "panorama": "this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -83.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0674371B_11DC_C332_41A5_2F3295E06AC1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -95.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_076E65A5_11DC_C711_4137_B4F76F828014",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 71.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07544587_11DC_C711_4157_1A3CE477C944",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 58.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_063D16EC_11DC_C516_4176_71F2F9C9D4E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -129.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0680D5C3_11DC_C712_41A0_B47B2372E549",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -46.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_073F7555_11DC_C736_4161_A2A45C109B24",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_120604_00_548",
 "overlays": [
  "this.overlay_017C03E6_0F21_3912_419C_1C7F44DBF7EF",
  "this.overlay_0151C121_0F23_390E_413D_B25575F85610",
  "this.overlay_1F727348_0F23_791E_4174_D35DDEBD9E69",
  "this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_tcap0",
  "this.overlay_01412688_116C_451F_41A4_33E9D707132A",
  "this.overlay_1E250F8E_116F_C312_4190_902B02283246"
 ],
 "id": "panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -125.11,
   "class": "AdjacentPanorama",
   "yaw": 158.27,
   "panorama": "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA",
   "distance": 1
  },
  {
   "backwardYaw": -125.11,
   "class": "AdjacentPanorama",
   "yaw": -147.36,
   "panorama": "this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA",
   "distance": 1
  },
  {
   "backwardYaw": 130.89,
   "class": "AdjacentPanorama",
   "yaw": 32.16,
   "panorama": "this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_t.jpg"
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121502_00_558",
 "overlays": [
  "this.overlay_1CE7447E_0F27_DFF2_4186_6ABA3A1B1732",
  "this.overlay_1A067481_0F26_DF0E_41AD_9F7F7463CACA",
  "this.overlay_1ADC9559_0F21_593E_41AE_58A8228C7EB2",
  "this.overlay_1A80758C_0F21_3916_419A_213D90AE52A1",
  "this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_tcap0",
  "this.overlay_017F978D_1165_C316_419B_65190A935022",
  "this.overlay_01AE2DA5_1164_4716_41A8_E0E470E40DB4",
  "this.overlay_00524B53_1164_4332_41A7_3E0652908C8A"
 ],
 "id": "panorama_033F2285_0F91_0853_41AD_9BC6235D48EE",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -125.11,
   "class": "AdjacentPanorama",
   "yaw": 50.12,
   "panorama": "this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9",
   "distance": 1
  },
  {
   "backwardYaw": 117.07,
   "class": "AdjacentPanorama",
   "yaw": -83.53,
   "panorama": "this.panorama_033E7D6B_0F91_78D7_417A_090699B3911E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033E7D6B_0F91_78D7_417A_090699B3911E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 92.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0745F569_11DC_C71E_41AF_ED2DF2FA6CD8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -76.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07343549_11DC_C71E_41A9_B3EA329ABABF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121903_00_562",
 "overlays": [
  "this.overlay_1943060A_0F2E_DB12_4187_EF4892646EDA",
  "this.overlay_18C5572B_0F21_D912_418F_936F2CF21081",
  "this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_tcap0",
  "this.overlay_0953770B_112C_C312_41B0_49E5348CD2C5",
  "this.overlay_09F4D074_112C_DDF6_4188_4A35E196BD45"
 ],
 "id": "panorama_0336306F_0F91_08AF_41A6_9D7D75E82938",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.48,
   "class": "AdjacentPanorama",
   "yaw": -108.42,
   "panorama": "this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22",
   "distance": 1
  },
  {
   "backwardYaw": -123.22,
   "class": "AdjacentPanorama",
   "yaw": 62.71,
   "panorama": "this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 150.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0748D573_11DC_C7F2_4175_46F1789426C9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -158.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_064886F9_11DC_C2FE_41AA_77775AD5CA7D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "hfovMin": "135%",
 "label": "IMG_20230509_121948_00_563",
 "overlays": [
  "this.overlay_186F8165_0F22_D917_419A_77F09F650523",
  "this.overlay_17BC0430_0F23_5F0E_41AD_2A4DEFFA6910",
  "this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_tcap0",
  "this.overlay_09055797_1124_4331_4193_101EAA386297",
  "this.overlay_0841A13F_1124_FF72_4176_C1AC2C3FBEFE"
 ],
 "id": "panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 152.62,
   "class": "AdjacentPanorama",
   "yaw": 53.89,
   "panorama": "this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42",
   "distance": 1
  },
  {
   "backwardYaw": 62.71,
   "class": "AdjacentPanorama",
   "yaw": -123.22,
   "panorama": "this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_t.jpg"
  }
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -117.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0752B57D_11DC_C7F1_41A3_564EABF96699",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 54.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_068F75CD_11DC_C716_4196_BAB5D877DA47",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "top": 0,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 55,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 10
},
{
 "backgroundOpacity": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "top": "0%",
 "class": "Container",
 "height": 641,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "24.125%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "minHeight": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "37.622%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "paddingTop": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingRight": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "bottom": "7.14%",
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "transitionMode": "blending",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "data": {
  "name": "Floor Plan"
 },
 "visible": false,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Entrance"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Living Room"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "12.364%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 1,
 "borderSize": 3,
 "top": "5.19%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "height": "6.811%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "data": {
  "name": "Bathroom"
 },
 "shadow": false,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C, this.camera_06D1F627_11DC_C512_4192_7C47BC0414B7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.18,
   "hfov": 99.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": 7.7
  }
 ],
 "id": "overlay_02A56C7F_0F27_6FF2_4191_EAD0736E1192",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_031E581F_0E6F_3870_4186_D7269B1BB796_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050E5546_117C_4712_41A6_58A1896AC5E0",
   "yaw": 144.9,
   "pitch": -1.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.9,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.92
  }
 ],
 "id": "overlay_1EBC6620_116D_C50E_41A9_46501F5BDA28",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22, this.camera_062C26D7_11DC_C531_419A_554B286E40C9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.55,
   "hfov": 56.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_0_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.22
  }
 ],
 "id": "overlay_1D720651_0F23_5B0E_419D_77CE732D9467",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94, this.camera_063D16EC_11DC_C516_4176_71F2F9C9D4E0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.4,
   "hfov": 93.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ]
   },
   "pitch": 9.52
  }
 ],
 "id": "overlay_1C8ED555_0F23_3936_418B_6F7D4620C63C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9, this.camera_062126C1_11DC_C511_41AF_6280D2DE8F37); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1A90E640_0F22_DB0E_4184_DAD2B92C4E2C",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0531554A_117C_4712_41AB_54632B0E3D4D",
   "yaw": -48.34,
   "pitch": -3.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.34,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.72
  }
 ],
 "id": "overlay_015737F4_1165_C2F6_41AD_DAF12F53A711",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0531854A_117C_4712_41A1_B6D4C93344AD",
   "yaw": 146.69,
   "pitch": -4.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.69,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.05
  }
 ],
 "id": "overlay_0125310E_1164_3F13_41A1_4E03C2436165",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0531D54A_117C_4712_41A6_61EAC3500ABE",
   "yaw": 50.64,
   "pitch": -0.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.64,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.46
  }
 ],
 "id": "overlay_0132336A_1164_4313_4190_B5C7E4BA5929",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_031E581F_0E6F_3870_4186_D7269B1BB796, this.camera_073F7555_11DC_C736_4161_A2A45C109B24); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.62,
   "hfov": 81.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_0_1_0_map.gif",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.22
  }
 ],
 "id": "overlay_025F2659_0F22_DB3E_414B_5E6F3FE5C50E",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210, this.camera_0743355F_11DC_C732_4190_1685F6435980); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.89,
   "hfov": 102.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_1_1_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.85
  }
 ],
 "id": "overlay_035364EF_0F21_FF12_417C_94FDAB81DE80",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05096546_117C_4712_41A3_0A5CCC5B2369",
   "yaw": 143.93,
   "pitch": 1.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.93,
   "hfov": 4.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.71
  }
 ],
 "id": "overlay_1F89E390_116C_430F_4191_04CE380666B2",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0509D546_117C_4712_4183_AAA94EB10003",
   "yaw": -114.13,
   "pitch": -1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.13,
   "hfov": 4.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1
  }
 ],
 "id": "overlay_011D04F3_116C_46F2_4198_9C5B1D25C3D1",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA, this.camera_0765C59B_11DC_C731_4134_16E31F3CFB10); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.1,
   "hfov": 105.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ]
   },
   "pitch": 8.58
  }
 ],
 "id": "overlay_1E12210C_0F3F_5916_4192_808F959F8D62",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033FD39E_0F91_0870_41A9_729A540D8225, this.camera_076E65A5_11DC_C711_4137_B4F76F828014); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.99,
   "hfov": 83.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_1_1_0_map.gif",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.27
  }
 ],
 "id": "overlay_1D493626_0F21_3B12_41A4_1088D0916139",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A, this.camera_075D8591_11DC_C731_4186_F870FC2433E7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.97,
   "hfov": 122.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": 7.29
  }
 ],
 "id": "overlay_1B0CB71C_0F21_D935_417E_6B6D709CACDC",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033FF9A4_0F91_1851_4198_4634D1720D94_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05331549_117C_471E_4180_E339D7DBC917",
   "yaw": 52.4,
   "pitch": -0.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.4,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ],
 "id": "overlay_01417FED_1163_C316_41AF_35EA90D5BE9D",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05334549_117C_471E_418A_B588A4F4FAC0",
   "yaw": -121.95,
   "pitch": -1.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.95,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "id": "overlay_01C109DA_1163_CF32_41A4_F644AA4A6A63",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05338549_117C_471E_41A4_55E7C31FFD07",
   "yaw": -29.77,
   "pitch": 4.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.77,
   "hfov": 5.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.26
  }
 ],
 "id": "overlay_017776DF_1164_C531_41A0_C47A52C176CA",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA, this.camera_06EA6652_11DC_C532_41A6_60C88430D943); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_00995FC0_0F21_290E_41A7_BE3A9B08BBEE",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210, this.camera_06F0D669_11DC_C51E_416E_0F59955E52EE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.11,
   "hfov": 108.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "id": "overlay_1F53CD9C_0F21_2936_4181_6C9A4778FEFE",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050C8547_117C_4712_4180_8513A9B7E5C6",
   "yaw": 96.61,
   "pitch": -0.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.61,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.21
  }
 ],
 "id": "overlay_01659385_116D_C311_4193_2E2E35DD19F3",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050CC547_117C_4711_41AD_653776E84583",
   "yaw": -120.44,
   "pitch": 0.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.44,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.05
  }
 ],
 "id": "overlay_01ABC2EE_116C_7D12_4192_DB273E150088",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A, this.camera_0778C5B9_11DC_C77E_41A2_DBCACE3EE9AC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.02,
   "hfov": 107.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 10.16
  }
 ],
 "id": "overlay_1C0DABC8_0F21_291E_4189_8DBEFF4CB70E",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE, this.camera_0680D5C3_11DC_C712_41A0_B47B2372E549); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1BBF5804_0F21_7716_4188_E09D832B9D15",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0536A54A_117C_4712_4164_7FE4F7A18EF2",
   "yaw": -142.05,
   "pitch": -5.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.05,
   "hfov": 3.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.73
  }
 ],
 "id": "overlay_1E216C4F_1164_C512_418E_0DAD299EF79C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0537054A_117C_4712_417D_B4770A9F41EB",
   "yaw": 57.67,
   "pitch": -4.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.67,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.23
  }
 ],
 "id": "overlay_015A9C5F_1164_4532_41AC_B9CF41FCB3EB",
 "enabledInCardboard": true
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E, this.camera_0777A5AF_11DC_C711_41AA_76751D922752); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.83,
   "hfov": 77.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0_HS_0_1_0_map.gif",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.09
  }
 ],
 "id": "overlay_13519811_0F6F_D70E_41A4_8BA762E362E9",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07CA7D3D_113C_4776_41A7_543EE06BE44A",
   "yaw": -4.79,
   "pitch": -0.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.79,
   "hfov": 5.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.82
  }
 ],
 "id": "overlay_09013A2A_113C_4D13_418F_703E068973E0",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA, this.camera_0674371B_11DC_C332_41A5_2F3295E06AC1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1F4CD321_0F3F_790E_41A1_6606D1CD5227",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94, this.camera_0985272A_11DC_C313_41AC_706D57B18992); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1EE6A857_0F3F_F732_41AB_8023E5FEBE70",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050DB548_117C_471E_41A9_BA76420D3AF6",
   "yaw": -108.89,
   "pitch": -0.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.89,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.46
  }
 ],
 "id": "overlay_0142A5C6_116C_C712_4181_54D66904AAF0",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05320548_117C_471E_4184_24DE87AD3114",
   "yaw": 51.14,
   "pitch": -2.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.14,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "id": "overlay_1E66C14B_116C_5F12_4134_70CC95C7DE36",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67, this.camera_0748D573_11DC_C7F2_4175_46F1789426C9); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_17E8CB9F_0F21_6932_4138_30880320A91C",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.3,
   "hfov": 64.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_1_1_6_map.gif",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.2
  }
 ],
 "id": "overlay_150D6CFE_0F26_E8F2_41A2_4A20DC35A0EA",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42, this.camera_0745F569_11DC_C71E_41AF_ED2DF2FA6CD8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "items": [
  {
   "yaw": 107.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_2_0.png",
      "width": 1420,
      "class": "ImageResourceLevel",
      "height": 1934
     }
    ]
   },
   "pitch": 5.15,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 72.56
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.27,
   "hfov": 72.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_2_1_6_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 5.15
  }
 ],
 "id": "overlay_16CC9B02_0F27_2912_419D_5E4347648D89",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C61D3A_113C_4772_41A6_577A71C5EB84",
   "yaw": -113.88,
   "pitch": 1.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.88,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.45
  }
 ],
 "id": "overlay_09356367_1127_C312_41A7_EA6ADE025540",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C65D3A_113C_4772_418B_80D411BAEB76",
   "yaw": 100.37,
   "pitch": 0.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.37,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.96
  }
 ],
 "id": "overlay_087D4191_1124_3F0E_41AB_D41EC83EA07F",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C59D3A_113C_4772_418C_D7F400EECCBB",
   "yaw": 36.16,
   "pitch": -1.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.16,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.49
  }
 ],
 "id": "overlay_082B5C3E_1124_4572_419F_05948C99CD49",
 "enabledInCardboard": true
},
{
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\">Zemen Bank S.C. is all about giving customers choices and convenience. For us, banking is not limited to just branches and we see it as \"something you do, not somewhere you go.</SPAN><SPAN STYLE=\"font-size:16px;\">\"</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "id": "htmlText_076A6A6E_1164_CD12_41A6_C95F1A44DB4B",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "paddingRight": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "minHeight": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "height": "28%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText13101"
 },
 "shadow": false,
 "paddingTop": 10
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033F2285_0F91_0853_41AD_9BC6235D48EE, this.camera_06DE263C_11DC_C576_41B1_18118DAD62A1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1A36F9C1_0F22_E90E_4192_8C92E30478B3",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.9,
   "hfov": 107.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_1_1_6_map.gif",
      "width": 135,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.65
  }
 ],
 "id": "overlay_19754EFB_0F23_68F2_41AA_D8EF56CC0E56",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033E7D6B_0F91_78D7_417A_090699B3911E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0A6053B6_116C_4372_41A1_FD26B50EBDD4",
   "yaw": -159.04,
   "pitch": -7.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.04,
   "hfov": 4.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "id": "overlay_05A202E7_1164_DD12_41AC_AEDBAAF54178",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0A60B3B6_116C_4372_41A2_A0BFBBA22520",
   "yaw": 151.88,
   "pitch": -2.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.88,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.47
  }
 ],
 "id": "overlay_05CD897B_1164_4FF1_4172_E47B6BA38FA3",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_076A4A6E_1164_CD12_41AD_31F0AD0C1ADD, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_0A60F3B6_116C_4372_414B_209664ED2116",
   "yaw": -71.97,
   "pitch": -7.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.97,
   "hfov": 7.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.47
  }
 ],
 "id": "overlay_05AD406C_1164_5D16_41B0_35C7B127A855",
 "data": {
  "label": "Info 02"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67, this.camera_07343549_11DC_C71E_41A9_B3EA329ABABF); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1540E270_0F23_3B0E_41A1_FAE257E7CDF4",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.16,
   "hfov": 87.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_1_1_6_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.79
  }
 ],
 "id": "overlay_1585CF7E_0F23_69F2_419B_AB473451F214",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07CB9D3B_113C_4772_41A0_9BA669348AF5",
   "yaw": 76.01,
   "pitch": 4.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.01,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.57
  }
 ],
 "id": "overlay_09EEE542_1124_4712_4184_D5B6A8C7F87B",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07CBDD3C_113C_4776_418A_6746F8DFEA0F",
   "yaw": -168.73,
   "pitch": 0.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.73,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.33
  }
 ],
 "id": "overlay_086C8FA9_1123_C31E_4193_BBCC6F88F6E6",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.81,
   "hfov": 109.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ]
   },
   "pitch": 4.29
  }
 ],
 "id": "overlay_1A4711D7_0F23_5932_4199_0132554EB32E",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.89,
   "hfov": 125.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ]
   },
   "pitch": 6.11
  }
 ],
 "id": "overlay_1A8A04A2_0F23_5F0D_41A8_465C6140BDD2",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07DCBD35_113C_4776_41A8_820F9AE6BB46",
   "yaw": -49.35,
   "pitch": -4.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.35,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.23
  }
 ],
 "id": "overlay_094E1615_112F_C536_41AC_B97E3CAB81AC",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07DCFD35_113C_4776_41A0_0E14D4114244",
   "yaw": 98.48,
   "pitch": -0.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.48,
   "hfov": 2.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "id": "overlay_09EB40F8_112C_5EFE_4178_4867790263EF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D, this.camera_06A645EE_11DC_C712_41AA_33026BE39B66); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_16E9ABBC_0F21_2976_4181_40134E42E4B6",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071, this.camera_069F15E3_11DC_C712_4194_7F360C7345B7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.42,
   "hfov": 111.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": 1.16
  }
 ],
 "id": "overlay_15726640_0F21_FB0E_41A0_D2190296F5F2",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C57D3B_113C_4772_419E_1060270283BA",
   "yaw": 52.71,
   "pitch": -9.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.67
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.71,
   "hfov": 4.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.41
  }
 ],
 "id": "overlay_0902C31A_1125_C332_419B_B6181FD8FAAD",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C49D3B_113C_4772_41AE_FB2B509A8A92",
   "yaw": -26.49,
   "pitch": -5.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.49,
   "hfov": 3.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.98
  }
 ],
 "id": "overlay_09924674_1124_45F6_4192_13F4DC070AD8",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42, this.camera_0990B736_11DC_C372_41AC_EBED6D526FC2); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.61,
   "hfov": 98.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ]
   },
   "pitch": 2.84
  }
 ],
 "id": "overlay_146ED778_0F23_59FE_41A7_0955808A7916",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B, this.camera_09A1A740_11DC_C30E_41A7_CEF28E3BCFA6); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.82,
   "hfov": 96.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_1_1_0_map.gif",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.21
  }
 ],
 "id": "overlay_14A38BC0_0F22_E90E_4197_E4818AD18216",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAAD3C_113C_4776_4173_16340255131E",
   "yaw": 25.52,
   "pitch": -1.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.52,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.46
  }
 ],
 "id": "overlay_092A2FF2_113C_C2F3_419A_B02F13EC451E",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAED3C_113C_4776_41A1_C82564B3B8A7",
   "yaw": -97.65,
   "pitch": 1.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.65,
   "hfov": 5.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.37
  }
 ],
 "id": "overlay_092FB728_113C_431F_41A8_16B7AB114400",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03365D37_0F91_38BF_4198_563D5D1AD01E, this.camera_064886F9_11DC_C2FE_41AA_77775AD5CA7D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.82,
   "hfov": 109.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_0_1_0_map.gif",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.29
  }
 ],
 "id": "overlay_171FF4FF_0F23_F8F2_419B_FC29158B1DE5",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798, this.camera_066B1710_11DC_C30E_418F_C0D003790E74); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.62,
   "hfov": 55.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_1_1_0_map.gif",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 7.48
  }
 ],
 "id": "overlay_1616E141_0F23_590E_41A1_8350904F61D8",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03351E04_0F91_F850_41AD_19AC0FE7F071, this.camera_0659E704_11DC_C316_41A0_0AD6FF014BC8); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.17,
   "hfov": 86.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ]
   },
   "pitch": 1.93
  }
 ],
 "id": "overlay_161BDF23_0F21_2912_419B_4065FD5513AB",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C05D38_113C_477E_4198_75C38F8028E0",
   "yaw": -82.01,
   "pitch": -0.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.01,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.21
  }
 ],
 "id": "overlay_092B1694_1125_C536_41A5_C015865DC8D1",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C7AD39_113C_477E_41A3_B3BF0E0E154C",
   "yaw": 18.98,
   "pitch": -2.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.98,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.47
  }
 ],
 "id": "overlay_09A411F4_1125_DEF6_4183_0E9FB0D0048E",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C7ED39_113C_477E_41AC_10E287131639",
   "yaw": 173.01,
   "pitch": -0.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.01,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.81
  }
 ],
 "id": "overlay_08281A13_1124_4D32_4166_842E2E6D8130",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033FF9A4_0F91_1851_4198_4634D1720D94, this.camera_06C4560E_11DC_C512_41A2_176CB4C317D3); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.54,
   "hfov": 80.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0_HS_0_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 6.48
  }
 ],
 "id": "overlay_1ECDA9F6_0F22_E8F2_4187_FE404ECA05D1",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033FD39E_0F91_0870_41A9_729A540D8225_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_05303549_117C_471E_41A8_761434122E36",
   "yaw": 93.98,
   "pitch": 5.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.31
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.98,
   "hfov": 5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.19
  }
 ],
 "id": "overlay_01677BA3_1164_4312_4182_3B7D1DF08401",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A, this.camera_0752B57D_11DC_C7F1_41A3_564EABF96699); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1929314A_0F2F_5912_4195_ACAE4C85484A",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938, this.camera_07544587_11DC_C711_4157_1A3CE477C944); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_1_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_1_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_1_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_18A05479_0F2F_5FFE_418A_9BC4ADA432A9",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C3DD36_113C_4772_414A_0E6C7B4E01DC",
   "yaw": -46.84,
   "pitch": -4.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.84,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.72
  }
 ],
 "id": "overlay_09411B0B_112C_4312_41A6_429F3F1F5FD2",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C31D36_113C_4772_41A8_52AEA70AF06E",
   "yaw": 47.37,
   "pitch": -2.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.37,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.26
  }
 ],
 "id": "overlay_060C1C2B_112C_4512_419D_646B7834504A",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C, this.camera_061626AC_11DC_C517_4192_74CE339F8B88); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_017C03E6_0F21_3912_419C_1C7F44DBF7EF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA, this.camera_06FC1680_11DC_C50E_41AC_186D6B3FF500); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.27,
   "hfov": 42.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_1_1_6_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.05
  }
 ],
 "id": "overlay_0151C121_0F23_390E_413D_B25575F85610",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA, this.camera_060A8697_11DC_C532_41AB_A6525AF698B2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.36,
   "hfov": 66.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_2_1_6_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.79
  }
 ],
 "id": "overlay_1F727348_0F23_791E_4174_D35DDEBD9E69",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050F5547_117C_4712_4172_D27073C35CBB",
   "yaw": 25.77,
   "pitch": -1.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.77,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.76
  }
 ],
 "id": "overlay_01412688_116C_451F_41A4_33E9D707132A",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_050F9547_117C_4712_41AD_28A3C42834AF",
   "yaw": 173.51,
   "pitch": -3.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.51,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.15
  }
 ],
 "id": "overlay_1E250F8E_116F_C312_4190_902B02283246",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9, this.camera_068F75CD_11DC_C716_4196_BAB5D877DA47); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.12,
   "hfov": 104.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ]
   },
   "pitch": 9.08
  }
 ],
 "id": "overlay_1CE7447E_0F27_DFF2_4186_6ABA3A1B1732",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033E7D6B_0F91_78D7_417A_090699B3911E, this.camera_069015D8_11DC_C73E_418C_EFED9BF8F07E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.53,
   "hfov": 84.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_1_1_0_map.gif",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.91
  }
 ],
 "id": "overlay_1A067481_0F26_DF0E_41AD_9F7F7463CACA",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1ADC9559_0F21_593E_41AE_58A8228C7EB2",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.86,
   "hfov": 53.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_3_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.56
  }
 ],
 "id": "overlay_1A80758C_0F21_3916_419A_213D90AE52A1",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0534654B_117C_4712_41A3_3439B07B55D6",
   "yaw": -98.04,
   "pitch": -3.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.04,
   "hfov": 4.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "id": "overlay_017F978D_1165_C316_419B_65190A935022",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0534B54B_117C_4712_419E_D8185E586697",
   "yaw": 67.52,
   "pitch": -4.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.52,
   "hfov": 4.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.77
  }
 ],
 "id": "overlay_01AE2DA5_1164_4716_41A8_E0E470E40DB4",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0534F54B_117C_4712_41AC_8217A8C0AA48",
   "yaw": -163.36,
   "pitch": -3.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.36,
   "hfov": 4.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.01
  }
 ],
 "id": "overlay_00524B53_1164_4332_41A7_3E0652908C8A",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_033DB68F_0F91_086F_416F_F642EDEDDD22, this.camera_06B385F7_11DC_C6F2_41A0_71825A57231F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_1943060A_0F2E_DB12_4187_EF4892646EDA",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798, this.camera_06B87603_11DC_C512_41A1_DDDB91F749FB); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_1_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_1_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_1_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_18C5572B_0F21_D912_418F_936F2CF21081",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C2FD37_113C_4772_41B0_91B3380297B1",
   "yaw": -117.59,
   "pitch": -5.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.59,
   "hfov": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.08
  }
 ],
 "id": "overlay_0953770B_112C_C312_41B0_49E5348CD2C5",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C22D37_113C_4772_4192_EF321D539D97",
   "yaw": 62.76,
   "pitch": -0.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.76,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.08
  }
 ],
 "id": "overlay_09F4D074_112C_DDF6_4188_4A35E196BD45",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42, this.camera_09B3C74B_11DC_C312_419E_B96C654605AA); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "id": "overlay_186F8165_0F22_D917_419A_77F09F650523",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0336306F_0F91_08AF_41A6_9D7D75E82938, this.camera_09BC3756_11DC_C332_4125_43EB7AA121B0); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.22,
   "hfov": 102.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": 9.03
  }
 ],
 "id": "overlay_17BC0430_0F23_5F0E_41AD_2A4DEFFA6910",
 "enabledInCardboard": true
},
{
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C12D37_113C_4772_41A0_311B5E3D013A",
   "yaw": -125.22,
   "pitch": -2.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.22,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.47
  }
 ],
 "id": "overlay_09055797_1124_4331_4193_101EAA386297",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_07C15D38_113C_477E_4194_DA7DBD6F17B0",
   "yaw": 54.16,
   "pitch": -1.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.16,
   "hfov": 3.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.21
  }
 ],
 "id": "overlay_0841A13F_1124_FF72_4176_C1AC2C3FBEFE",
 "enabledInCardboard": true
},
{
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderSize": 0,
 "top": "0%",
 "class": "Container",
 "height": 110,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "width": "91.304%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "85.959%",
 "horizontalAlign": "center",
 "bottom": "0%",
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050E5546_117C_4712_41A6_58A1896AC5E0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_031E581F_0E6F_3870_4186_D7269B1BB796_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0531554A_117C_4712_41AB_54632B0E3D4D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0531854A_117C_4712_41A1_B6D4C93344AD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0531D54A_117C_4712_41A6_61EAC3500ABE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0341DDD2_0F91_3BF0_41A1_2D3F87B2480A_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_05096546_117C_4712_41A3_0A5CCC5B2369",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0509D546_117C_4712_4183_AAA94EB10003",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02B421AF_0E6F_0BAF_41A1_63020B71718C_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_05331549_117C_471E_4180_E339D7DBC917",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_05334549_117C_471E_418A_B588A4F4FAC0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_05338549_117C_471E_41A4_55E7C31FFD07",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033FF9A4_0F91_1851_4198_4634D1720D94_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050C8547_117C_4712_4180_8513A9B7E5C6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050CC547_117C_4711_41AD_653776E84583",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02C024CF_0E6F_09EF_4198_A975559BBAAA_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0536A54A_117C_4712_4164_7FE4F7A18EF2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0537054A_117C_4712_417D_B4770A9F41EB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033DE8A2_0F91_1851_4195_6B84C8F041D9_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_07CA7D3D_113C_4776_41A7_543EE06BE44A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0335C711_0F91_0870_41A8_D37BBFEAD01B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050DB548_117C_471E_41A9_BA76420D3AF6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_05320548_117C_471E_4184_24DE87AD3114",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02BD9F8A_0E6E_F850_4199_01D1D79EFEAA_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C61D3A_113C_4772_41A6_577A71C5EB84",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C65D3A_113C_4772_418B_80D411BAEB76",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C59D3A_113C_4772_418C_D7F400EECCBB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_03351E04_0F91_F850_41AD_19AC0FE7F071_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0A6053B6_116C_4372_41A1_FD26B50EBDD4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0A60B3B6_116C_4372_41A2_A0BFBBA22520",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_0A60F3B6_116C_4372_414B_209664ED2116",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033E7D6B_0F91_78D7_417A_090699B3911E_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07CB9D3B_113C_4772_41A0_9BA669348AF5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07CBDD3C_113C_4776_418A_6746F8DFEA0F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0338534F_0F91_08EF_4185_E9A3A30DEC0D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07DCBD35_113C_4776_41A8_820F9AE6BB46",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07DCFD35_113C_4776_41A0_0E14D4114244",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033F1745_0F91_08D0_4198_6A07AF60BD8B_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C57D3B_113C_4772_419E_1060270283BA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C49D3B_113C_4772_41AE_FB2B509A8A92",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336689E_0F91_1871_41A8_6B97F1DE0C67_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07CAAD3C_113C_4776_4173_16340255131E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_07CAED3C_113C_4776_41A1_C82564B3B8A7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_03365D37_0F91_38BF_4198_563D5D1AD01E_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C05D38_113C_477E_4198_75C38F8028E0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C7AD39_113C_477E_41A3_B3BF0E0E154C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C7ED39_113C_477E_41AC_10E287131639",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0338443C_0F91_08B1_41A4_2E7DFAAEEB42_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_05303549_117C_471E_41A8_761434122E36",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033FD39E_0F91_0870_41A9_729A540D8225_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C3DD36_113C_4772_414A_0E6C7B4E01DC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C31D36_113C_4772_41A8_52AEA70AF06E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033DB68F_0F91_086F_416F_F642EDEDDD22_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050F5547_117C_4712_4172_D27073C35CBB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_050F9547_117C_4712_41AD_28A3C42834AF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_02B41A8C_0E6F_1850_41A5_AC8DD7151210_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0534654B_117C_4712_41A3_3439B07B55D6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0534B54B_117C_4712_419E_D8185E586697",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_0534F54B_117C_4712_41AC_8217A8C0AA48",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_033F2285_0F91_0853_41AD_9BC6235D48EE_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C2FD37_113C_4772_41B0_91B3380297B1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C22D37_113C_4772_4192_EF321D539D97",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336306F_0F91_08AF_41A6_9D7D75E82938_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C12D37_113C_4772_41A0_311B5E3D013A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_07C15D38_113C_477E_4194_DA7DBD6F17B0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0336CA5E_0F91_18F0_419E_6C9D1A685798_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.zemenbank.com/', '_blank')",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "gap": 10,
 "vrPolyfillScale": 1,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "height": "100%",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
