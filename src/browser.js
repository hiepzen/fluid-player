/**
 * Build entry point for CDN builds.
 * You SHOULD NOT import this file except if you plan to build browser distribution of Fluid Player.
 */

import fluidPlayerInitializer from './index';

// Import CSS automatically in browser builds.
import './css/fluidplayer.css';

if (window) {
    /**
     * Register public interface.
     */
    if (!window.fluidPlayer) {
        window.fluidPlayer = fluidPlayerInitializer;
    }
}


<script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>
<video id="video-id"><source src="video.mp4" type="video/mp4" />
<script>
    var myFP = fluidPlayer(
        'video-id',	{
	"layoutControls": {
		"controlBar": {
			"autoHideTimeout": 3,
			"animated": true,
			"autoHide": true
		},
		"htmlOnPauseBlock": {
			"html": null,
			"height": null,
			"width": null
		},
		"autoPlay": false,
		"mute": true,
		"allowTheatre": true,
		"playPauseAnimation": true,
		"playbackRateEnabled": true,
		"allowDownload": true,
		"playButtonShowing": true,
		"fillToContainer": false,
		"posterImage": ""
	},
	"vastOptions": {
		"adList": [],
		"adCTAText": false,
		"adCTATextPosition": ""
	}
}
</script>
