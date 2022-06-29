import lightGallery from 'feature/lightgallery/lightgallery.umd.js'
import lgThumbnail from 'feature/lightgallery/plugins/lg-thumbnail.min.js'
import lgZoom from 'feature/lightgallery/plugins/lg-zoom.min.js'
import 'feature/instant.page.js'
import clipboard from 'feature/clipboard.js'

lightGallery(document.getElementById('lightgallery'), {

        selector: '.photo-item',
        mode: 'lg-zoom-in-big',
        slideEndAnimatoin: 'false',
    });