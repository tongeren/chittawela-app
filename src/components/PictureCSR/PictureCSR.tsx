import { Fragment } from 'react';
import Loading from '../Loading/Loading';
import { useMounted } from '../../hooks/useMounted/useMounted';
import Picture, { IPicture } from '../Picture/Picture';

/* eslint-disable-next-line */
export interface IPictureCSR extends IPicture { }

const PictureCSR: React.FunctionComponent<IPictureCSR> = ({ classes, sources, image }):React.ReactElement => {    
    const mounted = useMounted();

    return (
        <Fragment>{ mounted 
            ? <Picture classes={ classes } sources={ sources } image={ image } /> 
            : <Loading /> }
        </Fragment>
    );
};

PictureCSR.displayName = "PictureCSR";

export default PictureCSR;