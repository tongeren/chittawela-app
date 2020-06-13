import { useStore } from '../StoreProvider/StoreProvider';
import { SectionLayoutProps } from './types';

const SectionLayout: React.FunctionComponent<SectionLayoutProps> = ({ id, heading, children, blue, marginBottom, marginTop }):React.ReactElement => { 
    const store = useStore();

    const portrait = (store.client.responsiveState() === "portrait");
    const color = `section-layout ${blue ? "section-layout--blue" : ""}`;
    const classes = portrait ? color : (color 
        .concat(" ", marginBottom ? "u-margin-bottom-section" : "")
        .concat(" ", marginTop ? "u-margin-top-section" : "")
    );
        
    return (
        <div id={ id } className={ classes }>
            { heading }
            { children }
        </div>
    );
};

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;