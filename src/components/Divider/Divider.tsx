import { useObserver } from 'mobx-react-lite';
import { useStore } from '../StoreProvider/StoreProvider';
import { DividerProps } from './types';

const Divider:React.FunctionComponent<DividerProps> = ({ id, title, subtitle, large, shiftTop, shiftBottom }):React.ReactElement => {
    const store = useStore();

    // calculate the height of the divider
    const height = (2 + ((large) ? 4 : 0) +  ((subtitle) ? 2 : 0)) + "rem";

    const subtitleJSX = <div className="divider__subtitle">
                            <em>{ subtitle }</em>
                        </div>;

    return useObserver( () => (
        <div className="divider" style={ store.getDividerStyles(height, shiftTop, shiftBottom) } id={ id }>
            <div className="divider__title">
                <h2 className="heading-secondary" >{ title }</h2>
                { (subtitle) && subtitleJSX }
            </div>
        </div>
    ));
};

Divider.displayName = "Divider";

export default Divider;

 
