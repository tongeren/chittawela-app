const CLOUDINARY_CHITTAWELA = "https://res.cloudinary.com/chittawela/image/upload/";
const CLOUDINARY_QUALITY_SETTINGS = "f_auto,q_70";

const COMMENTS = [
    { "iPhone4": "iPhone 4, 4S, 5, 5S in portrait mode" },
    { "GalaxyS5": "Samsung Galaxy S5 up to and including S20 Ultra in portrait mode" },
    { "iPhone6": "iPhone 6, 6S, 7, 8, X, Xs, 11 Pro in portrait mode" },
    { "iPhone6Plus": "iPhone 6 Plus, 7 Plus, 8 Plus, 6S Plus, 7S Plus, 8S Plus, XS Max, 11 Pro Max" },
    { "iPad": "iPad" },
    { "Landscape": "Landscape" }
];

const CUT_OUTS = {
    "portrait": "c_crop,h_2592,w_1944,x_0",
    "landscape": "c_crop,x_0,y_352,w_3888,h_2187"
};

const CLOUDINARY_SUBFOLDER = "v1584329960/";
const CLOUDINARY_FOLDER = "hero/";
const PICTURE_PREFIX = "hero-big_";

const WIDTHS = [
    { "iPhone4": 320 },
    { "GalaxyS5": 360 },
    { "iPhone6": 375 },
    { "iPhone6Plus": 414 },
    { "iPad": 768 },
    { "Landscape": 1336 }
];

const mediaQuery = (cutout, width) => {
    return (cutout === "portrait") ? `(orientation: portrait) and (width: ${ width }px)` 
                                   : `(orientation: landscape) and (min-width: ${ width }px)`;
};

const MODIFIERS = [
    { "iPhone4": [ 
        { "width": 640, "modifier": "2x" } ] 
    },
    { "GalaxyS5": [ 
        { "width": 1080, "modifier": "3x" }, 
        { "width": 1440, "modifier": "4x" } ] 
    },
    { "iPhone6": [ 
        { "width": 750, "modifier": "2x" }, 
        { "width": 1125, "modifier": "3x" } ] 
    },
    { "iPhone6Plus": [ 
        { "width": 828, "modifier": "828w"}, 
        { "width": 1080, "modifier": "1080w"}, 
        { "width": 1242, "modifier": "1242w" } ]
    },
    { "iPad": [ { "width": 768, "modifier": "2x" } ] },
    { "Landscape": [ 
        { "width": 1336, "modifier": "1336w" }, 
        { "width": 1336, "modifier": "1440w" },
        { "width": 1336, "modifier": "2560w" } ]
    }
];

const crossfade = [ 
    {
        "sources": [
            {
                "media": 
                "srcset": 
            }
        ]
        image: 
    }
];



<!-- iPhone 4, 4S, 5, 5S in portrait mode -->
<source 
    media="(orientation: portrait) and (width: 320px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_4.jpg 2x" 
/>
<!-- Samsung Galaxy S5 up to and including S20 Ultra in portrait mode-->
<source 
    media="(orientation: portrait) and (width: 360px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_4.jpg 3x,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1440/v1584329960/hero/hero-big_4.jpg 4x" 
/>
<!-- iPhone 6, 6S, 7, 8, X, Xs, 11 Pro in portrait mode -->
<source 
    media="(orientation: portrait) and (width: 375px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_750/v1584329960/hero/hero-big_4.jpg 2x,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1125/v1584329960/hero/hero-big_4.jpg 3x" 
/>
<!-- iPhone 6 Plus, 7 Plus, 8 Plus, 6S Plus, 7S Plus, 8S Plus, XS Max, 11 Pro Max -->
<source 
    media="(orientation: portrait) and (width: 414px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_828/v1584329960/hero/hero-big_4.jpg 828w,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1080/v1584329960/hero/hero-big_4.jpg 1080w,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_1242/v1584329960/hero/hero-big_4.jpg 1242w" 
    sizes="100vw" 
/>
<!-- iPad -->
<source 
    media="(orientation: portrait) and (width: 768px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_768/v1584329960/hero/hero-big_4.jpg 1x"
/>
<!-- Landscape -->
<source 
    media="(orientation: landscape) and (min-width: 1336px)" 
    srcset="
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2732/v1584329960/hero/hero-big_4.jpg 1366w,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2880/v1584329960/hero/hero-big_4.jpg 1440w,
            https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/w_2560/v1584329960/hero/hero-big_4.jpg 2560w" 
    sizes="100vw" 
/>
<!-- Fallback -->
<img 
    class="hero-img" 
    src="
        https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_4.jpg" 
    alt="Wiphatthra film image 4"
/>
</picture>