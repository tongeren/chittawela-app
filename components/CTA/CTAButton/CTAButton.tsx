import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../StoreProvider/StoreProvider';
import { CTAButtonProps } from './types';

const CTAButton: React.FunctionComponent<CTAButtonProps> = ({ cta }) => {
    const store = useStore();

    return useObserver( () => (
        <button
            id="cta-button"
            onClick={ () => { 
                console.log("CTAButton - before: store.ui.playHeroVideo", store.ui.playHeroVideo); 

                store.ui.setPlayHeroVideo(true);
                console.log("CTAButton - after: store.ui.playHeroVideo", store.ui.playHeroVideo); 
            }}
            onAnimationEnd={ () => store.animations.setCTAButtonAnimationEnd() }
            className="button button--white-orange button--animated"
        >
            { cta }
        </button>
    ));
};


export default CTAButton;

