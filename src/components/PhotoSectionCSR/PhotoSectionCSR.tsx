import { Fragment } from 'react';
import Loading from '../Loading/Loading';
import PhotoSection, { IPhotoSection } from '../PhotoSection/PhotoSection';
import { useMounted } from '../../hooks/useMounted/useMounted';

/* eslint-disable-next-line */
export interface IPhotoSectionCSR extends IPhotoSection { }

// Note that as soon as we want more than one PhotoSection we have to rewrite this component and the store
const PhotoSectionCSR:React.FunctionComponent<IPhotoSectionCSR> = ({ id, children }):React.ReactElement => {
    const mounted = useMounted();
    
    return (
        <Fragment>{ 
            mounted ? <PhotoSection id={ id }>{ children }</PhotoSection>: <Loading /> }
        </Fragment>
    );
};

PhotoSectionCSR.displayName = "PhotoSectionCSR";

export default PhotoSectionCSR;