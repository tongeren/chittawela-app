import React from 'react';
import { useObserver } from 'mobx-react-lite';
import CTA from '../../components/CTA/CTA';
import SVG from '../../components/SVG/SVG';
import Crossfade from '../../components/Crossfade/Crossfade';
import { useStore } from '../../components/StoreProvider/StoreProvider';
import { HeroProps } from './types';

const Hero: React.FunctionComponent<HeroProps> = ({ sprite, crossfade, cta }): React.ReactElement =>{
    const store = useStore();
    store.addClipPathBeforeAnimation();

    return useObserver( () => (
        <div id="hero" className={ store.addHeroAnimation() } style={ store.ui.getHeroHeightStyle() }>
            <div className="hero__svg-container">
                <SVG classes="hero__svg" sprite={ sprite } />
            </div>
            <div id="background" className="hero__crossfade">
                <Crossfade { ...crossfade } />
            </div>        
            <div className="hero__cta">
                <CTA { ...cta } />
            </div>
        </div>
    ));

};

Hero.displayName = "Hero";

export default Hero;