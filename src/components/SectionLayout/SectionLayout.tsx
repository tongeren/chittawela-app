import { useStore } from '../StoreProvider/StoreProvider';
import addClasses from '../../helpers/classes/addClasses';

export interface ISectionLayout {
    id?: string 
    heading?: React.ReactElement
    children: React.ReactNode
    color?: boolean
    bottomMargin?: boolean
    topMargin?: boolean
}

const SectionLayout: React.FunctionComponent<ISectionLayout> = ({ id, heading, children, color, bottomMargin, topMargin }):React.ReactElement => { 
    const store = useStore();
    const portrait = (store.client.orientation === "portrait");

    const colorClass = color ? "section-layout--color": "";
    const bottomClass = (!portrait && bottomMargin) ? "u-margin-bottom-section": "";
    const topClass = (!portrait && topMargin) ? "u-margin-top-section" : "";

    const arr = [colorClass, bottomClass, topClass].filter(str => !(str === undefined));
    const classes = addClasses("section-layout", arr);
        
    return (
        <div id={ id } className={ classes }>
            { heading }
            { children }
        </div>
    );
};

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;