import { useStore } from '../StoreProvider/StoreProvider';
import { useDimensions } from '../../hooks/useDimensions/useDimensions';
import addClasses from '../../helpers/classes/addClasses';

export interface ISectionLayout {
    id?: string 
    heading?: React.ReactElement
    children: React.ReactNode
    color?: boolean
    bottomMargin?: boolean
    topMargin?: boolean
    // ref?: React.Ref<HTMLDivElement>
}

const SectionLayout: React.FunctionComponent<ISectionLayout> = ({ id, heading, children, color, bottomMargin, topMargin }):React.ReactElement => { 
    const store = useStore();

    // Measure dimensions of this section
    const [ ref, dimensions ] = useDimensions({ liveMeasure: true });
    const { width, height } = !(dimensions === undefined) ? dimensions : { width: 0, height: 0 };
    store.ui.setBookSectionHeight(height);

    const portrait = (store.client.orientation === "portrait");

    const colorClass = color ? "section-layout--color": "";
    const bottomClass = (!portrait && bottomMargin) ? "u-margin-bottom-section": "";
    const topClass = (!portrait && topMargin) ? "u-margin-top-section" : "";

    const arr = [colorClass, bottomClass, topClass].filter(str => !(str === undefined));
    const classes = addClasses("section-layout", arr);
        
    return (
        <div ref={ ref } id={ id } className={ classes }>
            { heading }
            { children }
        </div>
    );
};

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;