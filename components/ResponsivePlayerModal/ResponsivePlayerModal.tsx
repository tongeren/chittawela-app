import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import Modal from '../Modal/Modal';
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer';
import CenterBox from '../CenterBox/CenterBox';

const ResponsivePlayerModal = ():React.ReactElement => {
    const store = useStore();

    // Change the playHeroVideo state to close the modal, this is a prerequisite for a Modal closeHandler
    const closeModal = () => {
        store.ui.setPlayHeroVideo(false);
    };

    return useObserver( () => (
        <Modal show={ store.ui.playHeroVideo } closeHandler={ closeModal }>
            <CenterBox>
                <ResponsivePlayer 
                    url="https://vimeo.com/395625673"
                    show={ store.ui.playHeroVideo }
                    playing={ store.ui.playHeroVideo }
                    height={ 0.8 * store.client.windowHeight + "px" }
                    width={ 0.8 * store.client.windowWidth + "px" }
                    style={ { width: '100vw' } }
                    onEnded={ () => store.ui.setPlayHeroVideo(false)}
                />
            </CenterBox>
        </Modal> 
    ));
};

export default ResponsivePlayerModal;