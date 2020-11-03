(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -151.53,
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_877ECE69_8B11_EDFF_41D7_C5FFCD8F1923",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115419_5",
 "id": "panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D",
 "thumbnailUrl": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F366425_81E6_C60B_41C3_929FE2BCF011",
  "this.overlay_8E452BA2_81E2_C208_41C7_ED8ED0F0BA26"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -59.69,
  "pitch": 0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_86CD8EDA_8B11_EADD_41DF_BA22D1C09563",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -63.37,
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_870BEE7C_8B11_EDD5_41C7_28D47E648E1A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -65.2,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_873E6EC7_8B11_ED33_41D3_0808138C618F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 14.69,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87578E43_8B11_ED33_41C3_C320A1D91CF1",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115305_3",
 "id": "panorama_8A733D30_8126_4609_41CF_687963FCD64A",
 "thumbnailUrl": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F300E7F_81E7_C2F7_418C_8C54812189CF",
  "this.overlay_8F4E3958_81E7_CE39_41C1_A8B05E3E4C6A"
 ]
},
{
 "class": "PlayList",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "items": [
  {
   "media": "this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A733D30_8126_4609_41CF_687963FCD64A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -154.29,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_8707AE8F_8B11_ED33_41D1_A6579C331BC7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115504_6",
 "id": "panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857",
 "thumbnailUrl": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F3AA492_81E2_4609_41DC_3E933000E275",
  "this.overlay_8F727325_81E2_420B_41BB_F126B46E09E4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_120321_10",
 "id": "panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD",
 "thumbnailUrl": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F55E548_81E2_C619_41C0_47A6DA3874AD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -157.96,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_8742BE1D_8B11_ED57_41BE_6DE593A3872E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A786338_8126_C278_41C6_5D71913B71FF_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115235_2",
 "id": "panorama_8A786338_8126_C278_41C6_5D71913B71FF",
 "thumbnailUrl": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F0A67EF_81E6_4217_41CE_0AD28014491B",
  "this.overlay_8F496D6F_81E7_C617_4171_EBD0EFAC87F2",
  "this.overlay_904FD527_8F66_B6F4_41E0_5641660069B3"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A786338_8126_C278_41C6_5D71913B71FF"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_113914_1",
 "id": "panorama_8A16FC96_8126_4608_41D7_D3F290785976",
 "thumbnailUrl": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F5107DF_81E6_4237_41CC_36CC04E81C86",
  "this.overlay_8E623D0E_81EE_4619_41D3_287692CEC4D5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115627_8",
 "id": "panorama_8A2C5DB2_8122_4608_4185_8904FC40F956",
 "thumbnailUrl": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F2A34D2_81E2_4609_41C6_E83F71576B72",
  "this.overlay_8F627382_81E2_4209_41D5_C62C09EB86CB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_120202_9",
 "id": "panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4",
 "thumbnailUrl": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F5691C7_81E2_BE17_41E0_27D823DE12A7",
  "this.overlay_8F68B31F_81E2_C237_41DC_2B6A45ADA1B4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_camera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 125,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_8A16FC96_8126_4608_41D7_D3F290785976_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -9.18,
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_879E5DBE_8B11_EF52_41D0_5D515A56D6D6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 153.37,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_875E1E30_8B11_ED6D_41CB_5FC5B29AD63B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -147.86,
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_8721FEB4_8B11_ED55_41D2_D2DDF667A59A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 50.51,
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87BDEDF7_8B11_EED3_41DC_6056F442B1D4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -68.88,
  "pitch": 6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87A91DD1_8B11_EF2F_41E0_2DB0F3354330",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 95.51,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87B74E0A_8B11_ED3D_41CC_43765F4B8CF5",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115336_4",
 "id": "panorama_8A09DB75_8166_420A_41CD_554F8501C3D6",
 "thumbnailUrl": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F3616C6_81E6_4208_41BC_02BA285B7F50",
  "this.overlay_8F4E96FF_81E6_43F7_41D8_223AE40EB3B3",
  "this.overlay_90D8B28D_8F62_B3B4_41C3_1FD82FDEFDE3"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 144.18,
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87639E56_8B11_EDD5_41B7_F5C7CD7268BC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A16FC96_8126_4608_41D7_D3F290785976"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_113731_0",
 "id": "panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4",
 "thumbnailUrl": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8E803FBC_81E6_C279_41CE_AC502AD4A1B4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 116.63,
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87853DAB_8B11_EF73_41D7_5571AA978BE6",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A733D30_8126_4609_41CF_687963FCD64A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20190703_115549_7",
 "id": "panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D",
 "thumbnailUrl": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F2E93AD_81E2_4218_41A0_92C3FECF430F",
  "this.overlay_8F6136F3_81E3_C20F_41C4_D18BCCF6C23A",
  "this.overlay_8EF06389_81E3_C21B_41CC_60010B07CBFC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -90.92,
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_8714FEA1_8B11_ED6F_41A5_EB86D4403D0B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 146.94,
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_87A2DDE4_8B11_EEF5_41CA_118C361546CB",
 "automaticZoomSpeed": 10
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "left": "0%",
 "width": 330,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 641,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A786338_8126_C278_41C6_5D71913B71FF, this.camera_873E6EC7_8B11_ED33_41D3_0808138C618F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.06,
   "image": "this.AnimatedImageResource_92F5C45C_812E_7754_41D1_8EDDBD4601F5",
   "pitch": -43.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.34,
   "distance": 100
  }
 ],
 "id": "overlay_8F366425_81E6_C60B_41C3_929FE2BCF011",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857, this.camera_86CD8EDA_8B11_EADD_41DF_BA22D1C09563); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.06,
   "image": "this.AnimatedImageResource_92F5B45D_812E_7754_41DB_554C5068D6F4",
   "pitch": -43.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.52,
   "distance": 100
  }
 ],
 "id": "overlay_8E452BA2_81E2_C208_41C7_ED8ED0F0BA26",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.48,
   "image": "this.AnimatedImageResource_92F54457_812E_7754_41E0_1126084F75E9",
   "pitch": -40.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.34,
   "distance": 100
  }
 ],
 "id": "overlay_8F300E7F_81E7_C2F7_418C_8C54812189CF",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A786338_8126_C278_41C6_5D71913B71FF, this.camera_8721FEB4_8B11_ED55_41D2_D2DDF667A59A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.58,
   "image": "this.AnimatedImageResource_936C18D1_8722_CE08_41C5_3D6625E98F9D",
   "pitch": -34.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.02,
   "distance": 100
  }
 ],
 "id": "overlay_8F4E3958_81E7_CE39_41C1_A8B05E3E4C6A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D, this.camera_87578E43_8B11_ED33_41C3_C320A1D91CF1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.51,
   "image": "this.AnimatedImageResource_92F4645E_812E_7754_41A8_33AAE5F1B3C5",
   "pitch": -44.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -59.93,
   "distance": 100
  }
 ],
 "id": "overlay_8F3AA492_81E2_4609_41DC_3E933000E275",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D, this.camera_87639E56_8B11_EDD5_41B7_F5C7CD7268BC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.31,
   "image": "this.AnimatedImageResource_935218D4_8722_CE08_41DC_D1CEBDE0C827",
   "pitch": -40.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.8,
   "distance": 100
  }
 ],
 "id": "overlay_8F727325_81E2_420B_41BB_F126B46E09E4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4, this.camera_875E1E30_8B11_ED6D_41CB_5FC5B29AD63B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.82,
   "image": "this.AnimatedImageResource_9357C8D8_8722_CE38_41BC_44EB8945E692",
   "pitch": -39.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 100.02,
   "distance": 100
  }
 ],
 "id": "overlay_8F55E548_81E2_C619_41C0_47A6DA3874AD",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.65,
   "image": "this.AnimatedImageResource_92F2B454_812E_7754_41CD_D598D1C8A182",
   "pitch": -39.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.3,
   "distance": 100
  }
 ],
 "id": "overlay_8F0A67EF_81E6_4217_41CE_0AD28014491B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A16FC96_8126_4608_41D7_D3F290785976, this.camera_87BDEDF7_8B11_EED3_41DC_6056F442B1D4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.73,
   "image": "this.AnimatedImageResource_936C88D0_8722_CE08_41C4_97CD6B6CB148",
   "pitch": -34.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.8,
   "distance": 100
  }
 ],
 "id": "overlay_8F496D6F_81E7_C617_4171_EBD0EFAC87F2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.44,
   "image": "this.AnimatedImageResource_93783207_8EDD_D2B4_41C6_768A1F247BB0",
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 142.98,
   "distance": 50
  }
 ],
 "id": "overlay_904FD527_8F66_B6F4_41E0_5641660069B3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4, this.camera_87A2DDE4_8B11_EEF5_41CA_118C361546CB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.43,
   "image": "this.AnimatedImageResource_936DA8CD_8722_CE18_41DF_5154BD034597",
   "pitch": -35.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.84,
   "distance": 100
  }
 ],
 "id": "overlay_8F5107DF_81E6_4237_41CC_36CC04E81C86",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.96,
   "image": "this.AnimatedImageResource_936DE8CE_8722_CE18_41DB_A0EFBA5C317D",
   "pitch": -36.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -135.61,
   "distance": 100
  }
 ],
 "id": "overlay_8E623D0E_81EE_4619_41D3_287692CEC4D5",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D, this.camera_877ECE69_8B11_EDFF_41D7_C5FFCD8F1923); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.88,
   "image": "this.AnimatedImageResource_935158D6_8722_CE08_419D_7BEBA5F5126C",
   "pitch": -31.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.75,
   "distance": 100
  }
 ],
 "id": "overlay_8F2A34D2_81E2_4609_41C6_E83F71576B72",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6, this.camera_870BEE7C_8B11_EDD5_41C7_28D47E648E1A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.67,
   "image": "this.AnimatedImageResource_9350C8D6_8722_CE08_41DB_78BBB6B20B1E",
   "pitch": -28.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -59.11,
   "distance": 100
  }
 ],
 "id": "overlay_8F627382_81E2_4209_41D5_C62C09EB86CB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 32.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A09DB75_8166_420A_41CD_554F8501C3D6, this.camera_8707AE8F_8B11_ED33_41D1_A6579C331BC7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.38,
   "image": "this.AnimatedImageResource_935008D7_8722_CE08_41BD_D7BD596AE8ED",
   "pitch": -49.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 167.11,
   "distance": 100
  }
 ],
 "id": "overlay_8F5691C7_81E2_BE17_41E0_27D823DE12A7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.17,
   "image": "this.AnimatedImageResource_935068D7_8722_CE08_41BE_7CC82D6E8BA6",
   "pitch": -47.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.2,
   "distance": 100
  }
 ],
 "id": "overlay_8F68B31F_81E2_C237_41DC_2B6A45ADA1B4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.45
  }
 ]
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.48,
   "image": "this.AnimatedImageResource_936C78D1_8722_CE08_41E0_136963DC223D",
   "pitch": -40.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.52,
   "distance": 100
  }
 ],
 "id": "overlay_8F3616C6_81E6_4208_41BC_02BA285B7F50",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A733D30_8126_4609_41CF_687963FCD64A, this.camera_8742BE1D_8B11_ED57_41BE_6DE593A3872E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.64,
   "image": "this.AnimatedImageResource_9353C8D2_8722_CE08_41C3_0C6836FF23F6",
   "pitch": -37.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.11,
   "distance": 100
  }
 ],
 "id": "overlay_8F4E96FF_81E6_43F7_41D8_223AE40EB3B3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956, this.camera_87B74E0A_8B11_ED3D_41CC_43765F4B8CF5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.11,
   "image": "this.AnimatedImageResource_93795209_8EDD_D2BC_41A5_9301BC966245",
   "pitch": -10.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.86,
   "distance": 50
  }
 ],
 "id": "overlay_90D8B28D_8F62_B3B4_41C3_1FD82FDEFDE3",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A16FC96_8126_4608_41D7_D3F290785976, this.camera_8714FEA1_8B11_ED6F_41A5_EB86D4403D0B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.08,
   "image": "this.AnimatedImageResource_92F3B451_812E_76AC_41BB_CDA85D84CBE5",
   "pitch": -23.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.02,
   "distance": 100
  }
 ],
 "id": "overlay_8E803FBC_81E6_C279_41CE_AC502AD4A1B4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857, this.camera_87853DAB_8B11_EF73_41D7_5571AA978BE6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.32,
   "image": "this.AnimatedImageResource_935278D4_8722_CE08_41DF_00630B164C8E",
   "pitch": -38.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.7,
   "distance": 100
  }
 ],
 "id": "overlay_8F2E93AD_81E2_4218_41A0_92C3FECF430F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A2C5DB2_8122_4608_4185_8904FC40F956, this.camera_879E5DBE_8B11_EF52_41D0_5D515A56D6D6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.32,
   "image": "this.AnimatedImageResource_9351D8D5_8722_CE08_41D3_2725110771D8",
   "pitch": -38.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27.61,
   "distance": 100
  }
 ],
 "id": "overlay_8F6136F3_81E3_C20F_41C4_D18BCCF6C23A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8A733D30_8126_4609_41CF_687963FCD64A, this.camera_87A91DD1_8B11_EF2F_41E0_2DB0F3354330); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.82,
   "image": "this.AnimatedImageResource_935128D6_8722_CE08_41D3_07D3DF648DA8",
   "pitch": -39.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -69.34,
   "distance": 100
  }
 ],
 "id": "overlay_8EF06389_81E3_C21B_41CC_60010B07CBFC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.27
  }
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "left": 0,
 "width": 330,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "horizontal",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 110,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "center"
},
{
 "layout": "absolute",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "minHeight": 1,
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "15%",
 "right": "15%",
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "layout": "absolute",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "minHeight": 1,
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "15%",
 "right": "15%",
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F5C45C_812E_7754_41D1_8EDDBD4601F5",
 "levels": [
  {
   "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F5B45D_812E_7754_41DB_554C5068D6F4",
 "levels": [
  {
   "url": "media/panorama_8A02C502_8165_C609_41D9_F83BCBCF1C7D_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F54457_812E_7754_41E0_1126084F75E9",
 "levels": [
  {
   "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_936C18D1_8722_CE08_41C5_3D6625E98F9D",
 "levels": [
  {
   "url": "media/panorama_8A733D30_8126_4609_41CF_687963FCD64A_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F4645E_812E_7754_41A8_33AAE5F1B3C5",
 "levels": [
  {
   "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935218D4_8722_CE08_41DC_D1CEBDE0C827",
 "levels": [
  {
   "url": "media/panorama_8A1DCBF3_8162_420F_41CA_F10703ED5857_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9357C8D8_8722_CE38_41BC_44EB8945E692",
 "levels": [
  {
   "url": "media/panorama_8A3D0AFC_813D_C3F9_41B9_37F93C4981BD_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F2B454_812E_7754_41CD_D598D1C8A182",
 "levels": [
  {
   "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_936C88D0_8722_CE08_41C4_97CD6B6CB148",
 "levels": [
  {
   "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93783207_8EDD_D2B4_41C6_768A1F247BB0",
 "levels": [
  {
   "url": "media/panorama_8A786338_8126_C278_41C6_5D71913B71FF_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_936DA8CD_8722_CE18_41DF_5154BD034597",
 "levels": [
  {
   "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_936DE8CE_8722_CE18_41DB_A0EFBA5C317D",
 "levels": [
  {
   "url": "media/panorama_8A16FC96_8126_4608_41D7_D3F290785976_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935158D6_8722_CE08_419D_7BEBA5F5126C",
 "levels": [
  {
   "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9350C8D6_8722_CE08_41DB_78BBB6B20B1E",
 "levels": [
  {
   "url": "media/panorama_8A2C5DB2_8122_4608_4185_8904FC40F956_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935008D7_8722_CE08_41BD_D7BD596AE8ED",
 "levels": [
  {
   "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935068D7_8722_CE08_41BE_7CC82D6E8BA6",
 "levels": [
  {
   "url": "media/panorama_8A38323B_8123_C27F_41DE_9802B13DA8C4_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_936C78D1_8722_CE08_41E0_136963DC223D",
 "levels": [
  {
   "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9353C8D2_8722_CE08_41C3_0C6836FF23F6",
 "levels": [
  {
   "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_93795209_8EDD_D2BC_41A5_9301BC966245",
 "levels": [
  {
   "url": "media/panorama_8A09DB75_8166_420A_41CD_554F8501C3D6_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_92F3B451_812E_76AC_41BB_CDA85D84CBE5",
 "levels": [
  {
   "url": "media/panorama_8D252A1D_8126_423B_41BA_E72A9E0DE2E4_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935278D4_8722_CE08_41DF_00630B164C8E",
 "levels": [
  {
   "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9351D8D5_8722_CE08_41D3_2725110771D8",
 "levels": [
  {
   "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_935128D6_8722_CE08_41D3_07D3DF648DA8",
 "levels": [
  {
   "url": "media/panorama_8A149560_8162_C608_41C2_4DDB76DA6F6D_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 30,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Container blue"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "maxHeight": 80,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 80,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": 300,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Image_91E300FD_8F63_EF54_41C0_F5C5FCB0E358",
  "this.Image_9032BFBD_8F62_51D4_41BB_1944A8C789DC",
  "this.Image_90D9CB66_8F65_B174_41DE_504E41C66E0B",
  "this.Image_9F05D17F_8F66_D154_41DA_E5D39A8564E6"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingTop": 40,
 "paddingBottom": 40,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "- Buttons set"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 40,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "left": 280,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "maxHeight": 40,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 40,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "left": 0,
 "scrollBarVisible": "rollOver",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minWidth": 1,
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Oswald",
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "itemOpacity": 1,
 "width": "100%",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "paddingLeft": 70,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "minHeight": 1,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "itemThumbnailShadow": false,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "horizontalAlign": "center",
 "class": "ThumbnailGrid"
},
{
 "minHeight": 1,
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.815425550376!2d-47.94457170737991!3d-18.17241465541321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86b5d362f7363873!2sCasa%20Bella%20Magazine!5e0!3m2!1spt-BR!2sbr!4v1604318297262!5m2!1spt-BR!2sbr",
 "shadow": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "maxHeight": 50,
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": "0%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "width": "55%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "45%",
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "paddingBottom": 20,
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg",
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "vertical",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.3,
 "right": "0%",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
  "this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "top": "26%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "26%",
 "scrollBarMargin": 2,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 6
},
{
 "layout": "vertical",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "bottom",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 130,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_91E300FD_8F63_EF54_41C0_F5C5FCB0E358",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "skin/Image_91E300FD_8F63_EF54_41C0_F5C5FCB0E358.JPG",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0.17%",
 "paddingRight": 0,
 "height": "22.753%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 210,
 "propagateClick": false,
 "data": {
  "name": "Image16923"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 390,
 "class": "Image",
 "borderRadius": 0
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_9032BFBD_8F62_51D4_41BB_1944A8C789DC",
 "left": "33.64%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_9032BFBD_8F62_51D4_41BB_1944A8C789DC.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "27.72%",
 "width": "32.273%",
 "paddingRight": 0,
 "height": "14.532%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://www.facebook.com/Casa-Bella-Magazine-145786159091306/', '_blank')",
 "maxHeight": 225,
 "propagateClick": false,
 "data": {
  "name": "Image17258"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 225,
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_90D9CB66_8F65_B174_41DE_504E41C66E0B",
 "left": "31.36%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_90D9CB66_8F65_B174_41DE_504E41C66E0B.png",
 "verticalAlign": "middle",
 "shadow": false,
 "width": "37.273%",
 "paddingRight": 0,
 "bottom": "37.28%",
 "height": "13.958%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://www.instagram.com/casabellamagazine/', '_blank')",
 "maxHeight": 1095,
 "propagateClick": false,
 "data": {
  "name": "Image17339"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 1095,
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_9F05D17F_8F66_D154_41DA_E5D39A8564E6",
 "left": "10.67%",
 "right": "10.55%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_9F05D17F_8F66_D154_41DA_E5D39A8564E6.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "bottom": "16.89%",
 "height": "15.496%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://wa.me/5564996244557', '_blank')",
 "maxHeight": 1099,
 "propagateClick": false,
 "data": {
  "name": "Image17384"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 1091,
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "minHeight": 50,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "right": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "minWidth": 50,
 "borderSize": 0,
 "width": "14.22%",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "right": 10,
 "minWidth": 50,
 "borderSize": 0,
 "width": "14.22%",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "minHeight": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "right": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "10%",
 "verticalAlign": "top",
 "shadow": false,
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "minHeight": 50,
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "right": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "scaleMode": "fit_outside",
 "minHeight": 1,
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "shadow": false,
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 1000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 2000,
 "class": "Image",
 "borderRadius": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 30,
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "scrollBarColor": "#000000",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 1 - Reception"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "RECEPTION >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); if(!this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F.get('visible')){ this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false) }"
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
  "this.Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
  "this.Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
  "this.Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
  "this.Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
  "this.Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
  "this.Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
  "this.Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
  "this.Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
  "this.Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 1-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "ROOMS >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "if(!this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359.get('visible')){ this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)"
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
  "this.Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
  "this.Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
  "this.Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
  "this.Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
  "this.Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
  "this.Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
  "this.Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
  "this.Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
  "this.Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "AMENITIES >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "if(!this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359.get('visible')){ this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false) }; if(!this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3.get('visible')){ this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)"
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
  "this.Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
  "this.Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
  "this.Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
  "this.Button_5C463B13_4F38_5701_41D3_7F808639BD58",
  "this.Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
  "this.Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
  "this.Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
  "this.Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
  "this.Button_5C470B15_4F38_5701_41C8_8315EAA43F47"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 3-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "SPORTS AREA >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "if(!this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F.get('visible')){ this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
  "this.Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
  "this.Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
  "this.Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
  "this.Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
  "this.Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
  "this.Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
  "this.Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
  "this.Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
  "this.Button_5CBFA517_4F38_7300_41CC_D4157FF5A756"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 4-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "SWIMMING POOL >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "if(!this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F.get('visible')){ this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)"
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
  "this.Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
  "this.Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
  "this.Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
  "this.Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
  "this.Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
  "this.Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
  "this.Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
  "this.Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
  "this.Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 5-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "pressedBackgroundOpacity": 0.2,
 "iconHeight": 32,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0.2,
 "width": "100%",
 "paddingTop": 0,
 "label": "RESTAURANTS >",
 "paddingBottom": 0,
 "class": "Button",
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "if(!this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062.get('visible')){ this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false)"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "scrollBarWidth": 7,
 "minHeight": 1,
 "id": "Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
  "this.Container_5CDE817F_4F38_5301_41CB_1573369D710F",
  "this.Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
  "this.Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
  "this.Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
  "this.Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
  "this.Button_5CDF2181_4F38_5301_419E_50D4A975C358",
  "this.Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
  "this.Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
  "this.Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 0,
 "data": {
  "name": "-Level 6-1"
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 2,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "minHeight": 1,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "height": 78,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "bottom",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 56,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 44,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "minHeight": 1,
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "height": "46%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Main Entrance",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lobby",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Reception",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Meeting Area 1",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Meeting Area 2",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Bar",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Chill Out",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Terrace",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C463B13_4F38_5701_41D3_7F808639BD58",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5C470B15_4F38_5701_41C8_8315EAA43F47",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CBFA517_4F38_7300_41CC_D4157FF5A756",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_5CDE817F_4F38_5301_41CB_1573369D710F",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDF2181_4F38_5301_419E_50D4A975C358",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Info"
 },
 "visible": false,
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "visible": false,
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Realtor"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Video"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
 "minWidth": 1,
 "borderSize": 0,
 "width": "25%",
 "url": "skin/Image_17529AC5_57D1_805F_41BD_C64BF1F259C6.jpg",
 "shadow": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left",
 "class": "Image",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 200,
 "borderRadius": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "height": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.98vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10
}],
 "scrollBarWidth": 10,
 "minHeight": 20,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.7,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
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
