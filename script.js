jwplayer("jwplayerDiv").setup({    
     file: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/bsaaetko8v/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd", 
         position: 'bottom',  
        "autostart": true,
        "Volume": "100",
        "mute": false,
        "stretching": "exactfit",
        "width": "100%", 
      type: "dash",    
      drm: { "clearkey": {    
               "keyId": "5deb190b1dac28e46c0bdada7668b7de",    
              "key": "ddd2b372702e42b0d2708a70b91dec8d" 
            }   
             }               
    
});   
