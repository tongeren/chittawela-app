import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../StoreProvider/StoreProvider';
import { CTAButtonProps } from './types';

const CTAButton: React.FunctionComponent<CTAButtonProps> = ({ cta }) => {
    const store = useStore();

    return useObserver( () => (
        <button
            id="cta-button"
            onClick={ () => store.ui.setPlayHeroVideo(true) }
            onTouchStart={ () => store.ui.setPlayHeroVideo(true) }
            onAnimationEnd={ () => store.animations.setCTAButtonAnimationEnd() }
            className="button button--white-orange button--animated"
        >
            { cta }
        </button>
    ));
};

CTAButton.displayName = "CTAButton";

export default CTAButton;

