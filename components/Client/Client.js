import { observer } from 'mobx-react-lite';
import restrictToClient from '../../hoc/restrictToClient';
import { useStore } from '../StoreProvider/StoreProvider';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollPositions from '../../hooks/useScrollPositions';
import { useResponsive } from '../../hooks/useResponsive/useResponsive';

const Client = observer(() => {
    const store = useStore();

    const { windowWidth, windowHeight } = useWindowDimensions();
    const { scrollX, scrollY } = useScrollPositions();
    const responsive = useResponsive();
    
    store.client.setResponsiveState(responsive);
    store.client.setScrollX(scrollX);
    store.client.setScrollY(scrollY);
    store.client.setWindowHeight(windowHeight);
    store.client.setWindowWidth(windowWidth);

    return null;
});

export default restrictToClient(Client);