import React from 'react';
import { render, screen } from 'test-utils';
import Picture from "../PictureCSR/PictureCSR";

const testProps = {
    sources: [{ "source": 
        { 
            "media": "(orientation: portrait) and (width: 320px)", 
            "srcSet":"https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,c_crop,h_2592,w_1944,x_0/w_640/v1584329960/hero/hero-big_4.jpg 2x" 
        }
    }],
    image: {
        "classes": "hero-img", 
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,x_0,y_352,w_3888,h_2187,c_crop/v1584329960/hero/hero-big_4.jpg", 
        "alt": ""
    }
};

describe("<Picture />", () => {
    test("Renders an image that has attributes classes, src and alt.", () => {
        const { container } = render(<Picture { ...testProps } />)
        const img = screen.getByRole("img");
        expect(container).toContainElement(img);
        expect(img).toHaveAttribute("classes");
        expect(img).toHaveAttribute("src");
        expect(img).toHaveAttribute("alt");
    });   
});

// TO DO 