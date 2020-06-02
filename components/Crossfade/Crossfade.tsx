import React from 'react';
import dynamic from 'next/dynamic';
//const Picture = dynamic(() => import('../Picture/Picture'), { ssr: false });
import Picture from '../Picture/Picture';
import { CrossfadeProps } from './types';

const Crossfade: React.FunctionComponent<CrossfadeProps> = ({ crossfade }): React.ReactElement => {
    return (
        <div className="crossfade">
            { crossfade.map((picture, key) => {
                const { sources, image } = picture;
                return <Picture key={ key } classes="crossfade__img" sources={ sources } image={ image } />;
            })}
        </div>
    );
};

export default Crossfade;

