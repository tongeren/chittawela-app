import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../StoreProvider/StoreProvider';
// import usePlayer from '../../../hooks/usePlayer';

interface Props {
    cta: string;
}

const onClickHandler = () => {
    console.log("About to play the video");
};


const CTAButton: React.FunctionComponent<Props> = ({ cta }) => {
    const store = useStore();
    // const player = usePlayer();

    console.log("CTAButton: store", store);
    // player.on('play', () => console.log("Succes!"));
    
    return useObserver( () => (
        <button id="cta-button"
            onClick={ onClickHandler } 
            onAnimationEnd={ () => store.animations.setCTAButtonAnimationEnd() }
            className="button button--white-orange button--animated"
        >
            { cta }
        </button>
    ));
};


export default CTAButton;

