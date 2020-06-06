const NO_OF_SLIDES = 6;
const PIXEL_WIDTH=600;

const CLOUDINARY_CHITTAWELA = "https://res.cloudinary.com/chittawela/image/upload/";
const CLOUDINARY_QUALITY_SETTINGS = "f_auto,q_70";
const CLOUDINARY_WIDTH_SETTING = `w_${ PIXEL_WIDTH }`;

const CLOUDINARY_SUBFOLDER = ["v1585154518/", "v1585227307/"];
const CLOUDINARY_FOLDER = [ "program-play/", "banburee/" ];
const PICTURE_PREFIX = [ "catamaran-lagoon-400_", "banburee_" ];

const WIDTH_SETTING = `${PIXEL_WIDTH}w`;
const SIZES = "100vw";
const EXTENSION = ".jpg";

const ALT = "Lagoon 400 in Ang Thong National Marine Park";

const SECTION_NAME = [ "program-play", "banburee" ];

const slides = (id:number):Record<string, unknown>[] => {
    const FULL_FILENAME_EX_NUMBER = CLOUDINARY_CHITTAWELA
    .concat("", CLOUDINARY_QUALITY_SETTINGS)
    .concat(",", CLOUDINARY_WIDTH_SETTING)
    .concat("/", CLOUDINARY_SUBFOLDER[ id ])
    .concat("", CLOUDINARY_FOLDER[ id ])
    .concat("", PICTURE_PREFIX[ id ]);

    /* eslint prefer-const: 0 */
    let slides:Record<string, unknown>[] = [];
    let filename;

    for (let i = 1; i<= NO_OF_SLIDES; i++) {
        filename = FULL_FILENAME_EX_NUMBER.concat("0", i.toString()).concat("", EXTENSION);
        slides.push({
            "photo": {
                "media": "",
                "srcSet": filename.concat(" ", WIDTH_SETTING),
                "sizes": SIZES,
                "src": filename,
                "alt": ALT,
                "sectionName": SECTION_NAME[ id ]
            },
            "thumbnail": {
                "media": "",
                "srcSet": filename.concat(" ", WIDTH_SETTING),
                "sizes": SIZES,
                "src": filename,
                "alt": ALT,
                "sectionName": SECTION_NAME[ id ]
            }
        });
    }

    return slides;
};

export default slides;

