import { useStore } from '../StoreProvider/StoreProvider';

export interface IPhotoSection {
    id?: string
    children: React.ReactNode
}

// Note that as soon as we want more than one PhotoSection we have to rewrite this component and the store
const PhotoSection:React.FunctionComponent<IPhotoSection> = ({ id, children }):React.ReactElement => {   
    const store = useStore();

    return (        
        <section id={ id } className="photo-section" style={ store.getPhotoSectionStyles() }>
            { children }
        </section>
    );
};

PhotoSection.displayName = "PhotoSection";

export default PhotoSection;