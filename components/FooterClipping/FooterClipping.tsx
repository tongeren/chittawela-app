import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';

const FooterClipping = ():React.ReactElement => {
    const store = useStore();

    return useObserver( () => (
        <div 
            id="footer-clipping" 
            className="footer-clipping" 
            style={ store.client.getFooterClippingStyles() }
        />
    ));
};

FooterClipping.displayName = "FooterClipping";

export default FooterClipping;

