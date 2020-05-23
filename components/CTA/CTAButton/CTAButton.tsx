import { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { action } from 'mobx';

// hoc
import restrictToClient from '../../../hoc/restrictToClient';

// hooks
import usePlayer from '../../../hooks/usePlayer';
// import { useStores } from '../../../hooks/useStores';

interface Props {
    cta: string;
};

const onClickHandler = () => {
   
    console.log("About to play the video");
    
};


const CTAButton: React.FunctionComponent<Props> = ({ cta }) => {
    const player = usePlayer();
    const { store } = useContext(MobXProviderContext);
    console.log("CTAButton: store", store);
    // player.on('play', () => console.log("Succes!"));

    const onAnimationEndHandler = () => {  
        console.log("CTAButton: animation ended");
        store.setCTAButtonAnimationEnd();
    };
    
    return (
        <button id="cta-button"
            onClick={ onClickHandler } 
            onAnimationEnd={ onAnimationEndHandler }
            className="button button--white-orange button--animated"
        >
            { cta }
        </button>
    );
};


export default observer(restrictToClient(CTAButton));
// uiStore.setCTAButtonAnimationEnd(true)
