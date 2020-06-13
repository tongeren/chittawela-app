const CLOUDINARY_CHITTAWELA = "https://res.cloudinary.com/chittawela/image/upload/";
const CLOUDINARY_QUALITY_SETTINGS = "f_auto,q_70";

const DEVICES = [
    { "name": "iPhone4", "range" : "iPhone 4, 4S, 5, 5S in portrait mode" },
    { "name": "GalaxyS5", "range" : "Samsung Galaxy S5 up to and including S20 Ultra in portrait mode" },
    { "name": "iPhone6", "range" : "iPhone 6, 6S, 7, 8, X, Xs, 11 Pro in portrait mode" },
    { "name": "iPhone6Plus", "range" : "iPhone 6 Plus, 7 Plus, 8 Plus, 6S Plus, 7S Plus, 8S Plus, XS Max, 11 Pro Max" },
    { "name": "iPad", "range" : "iPad" },
    { "name": "Landscape", "range" : "Landscape" }
];

const CUTOUTS = {
    "portrait": { "cutout": "c_crop,h_2592,w_1944,x_0" },
    "landscape": { "cutout": "c_crop,x_0,y_352,w_3888,h_2187" }
};

const CLOUDINARY_SUBFOLDER = "v1584329960";
const CLOUDINARY_FOLDER = "hero";
const PICTURE_PREFIX = "hero-big_";
const PICTURE_EXTENSION = "jpg";
const ALT_PREFIX = "Wiphatthra film image";

const WIDTHS = {
    "iPhone4": 320 ,
    "GalaxyS5": 360 ,
    "iPhone6": 375 ,
    "iPhone6Plus": 414 ,
    "iPad": 768 ,
    "Landscape": 1336 
};

const cutoutForDevice = device => {
    return device==="Landscape" ? "landscape" : "portrait";
};

const mediaQuery = (cutout, width) => {
    return (cutout === "landscape") ? `(orientation: landscape) and (min-width: ${ width }px)`
                                    : `(orientation: portrait) and (width: ${ width }px)`; 
};

const MODIFIERS = {
    "iPhone4": [ 
        { "width": 640, "modifier": "2x" } 
    ],
    "GalaxyS5": [ 
        { "width": 1080, "modifier": "3x" }, 
        { "width": 1440, "modifier": "4x" } 
    ], 
    "iPhone6": [ 
        { "width": 750, "modifier": "2x" }, 
        { "width": 1125, "modifier": "3x" } 
    ], 
    "iPhone6Plus": [ 
        { "width": 828, "modifier": "828w"}, 
        { "width": 1080, "modifier": "1080w"}, 
        { "width": 1242, "modifier": "1242w" } 
    ],
    "iPad": [ { "width": 768, "modifier": "2x" } ],
    "Landscape": [ 
        { "width": 1336, "modifier": "1336w" }, 
        { "width": 1336, "modifier": "1440w" },
        { "width": 1336, "modifier": "2560w" } 
    ]
};

const filename = (cutout, width, no, modifier) => {
    return CLOUDINARY_CHITTAWELA
    .concat("", CLOUDINARY_QUALITY_SETTINGS)
    .concat(",", cutout)
    .concat("/", width ? `w_${width}` : "")
    .concat("/", CLOUDINARY_SUBFOLDER)
    .concat("/", CLOUDINARY_FOLDER)
    .concat("/", PICTURE_PREFIX)
    .concat("", no)
    .concat(".", PICTURE_EXTENSION)
    .concat(" ", modifier);
};

const arr =[];
for (let i=0; i<=4; i++) {
    const sources = DEVICES.map(device => {
        const deviceName = device.name;
        const name = cutoutForDevice(device);
        const mediaWidth = WIDTHS[deviceName];
        const media = mediaQuery(name, mediaWidth);
        const cutout = CUTOUTS[name].cutout;

        const sourcePerDevice = MODIFIERS[deviceName].map( item => {     
            const { width, modifier } = item;  
            const filenamePlusModifier = filename(cutout, width, i, modifier);
            
            return modifier.endsWith("w") ? {
                "media": media,
                "srcSet": filenamePlusModifier,
                "sizes": "100vw"
            } :
            {
                "media": media,
                "srcSet": filenamePlusModifier
            };
        }).reduce((acc, val) => {
            const srcSet = !(acc==="") ? acc.srcSet.concat(",", val.srcSet) : val.srcSet;
            return val.sizes ? {
                "media": val.media,
                "srcSet": srcSet, 
                "sizes": val.sizes
            } : {
                "media": val.media,
                "srcSet": srcSet
            };
        });

        return { "device": deviceName, "source": sourcePerDevice };  
        
    });

    const image = {
        "className": "hero-img",
        "src": filename(CUTOUTS["landscape"].cutout, null, i, ""),
        "alt": ALT_PREFIX.concat(" ", i.toString())
    };

    arr.push({
        sources: sources,
        image: image
    });
}

export const CROSSFADE = { crossfade: arr.reverse() };