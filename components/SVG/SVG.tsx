import React from 'react';
import { SVGProps } from './types';

const SVG_SPRITE_SHEET_LOCATION = "img/svg/icon-defs.svg";

const SVG: React.FunctionComponent<SVGProps> = ({ classes, sprite }):React.ReactElement => {
    return (
        <svg className={ classes } aria-label={ sprite } > 
            <use href={ SVG_SPRITE_SHEET_LOCATION.concat("#", sprite) } />      
        </svg>
    );
};

export default SVG;