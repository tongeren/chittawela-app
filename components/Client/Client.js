import { observer } from 'mobx-react';
import restrictToClient from '../../hoc/restrictToClient';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollPositions from '../../hooks/useScrollPositions';

const Client = observer(() => {
    const { windowWidth, windowHeight } = useWindowDimensions();
    const { scrollX, scrollY } = useScrollPositions();

    // const hookProps = {
    //     windowWidth: windowWidth,
    //     windowHeight: windowHeight,
    //     scrollX: scrollX,
    //     scrollY: scrollY
    // };

    return null;
});

export default restrictToClient(Client);