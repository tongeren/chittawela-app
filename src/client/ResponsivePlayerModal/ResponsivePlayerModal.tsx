import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../components/StoreProvider/StoreProvider';
import Modal from '../../components/Modal/Modal';
import ResponsivePlayer from '../../components/ResponsivePlayer/ResponsivePlayer';
import CenterBox from '../../components/CenterBox/CenterBox';

const ResponsivePlayerModal = ():React.ReactElement => {
    const store = useStore();

    // Change the playHeroVideo state to close the modal, this is a prerequisite for a Modal closeHandler
    const closeModal = () => {
        store.ui.setPlayHeroVideo(false);
    };

    return useObserver( () => (
        <Modal show={ store.ui.playHeroVideo } closeHandler={ closeModal }>
            <CenterBox fill>
                <ResponsivePlayer 
                    url="https://vimeo.com/395625673"
                    show={ store.ui.playHeroVideo }
                    playing={ store.ui.playHeroVideo }
                    height={ 0.8 * store.client.windowHeight + "px" }
                    width={ 0.8 * store.client.windowWidth + "px" }
                    style={ {} } // { width: '100vw', height: '100vh' }
                    onEnded={ () => store.ui.setPlayHeroVideo(false)}
                />
            </CenterBox>
        </Modal> 
    ));
};

ResponsivePlayerModal.displayName = "ResponsivePlayerModal";

export default ResponsivePlayerModal;