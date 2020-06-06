import { useStore } from '../StoreProvider/StoreProvider';
import { useObserver } from 'mobx-react-lite';
import { PictureDividerProps } from './types';

const PictureDivider:React.FunctionComponent<PictureDividerProps> = ({ src, aspectRatio, shift, scroll }):React.ReactElement => {
    const store = useStore();
    
    return useObserver( () => (
        <div className="picture-divider" style={ store.getPictureDividerStyle(src, aspectRatio, shift, scroll) } />
    ));
};

export default PictureDivider;

