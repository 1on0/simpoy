import lightGallery from 'feature/lightgallery/lightgallery.umd.js'
import 'feature/instant.page.js'
import clipboard from 'feature/clipboard.js'


lightGallery(document.getElementById('lightgallery'), {

        selector: '.photo-item',
        slideEndAnimatoin: 'false',
    });
