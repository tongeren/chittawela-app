import renderRefHOC from '../../../hoc/renderRefHOC/renderRefHOC';
import Picture, { IPicture } from './Picture/Picture';

const RefPicture: React.FunctionComponent<IPicture> = ({ classes, sources, image }):React.ReactElement => {
    return <Picture classes={ classes } sources={ sources } image={ image } />
};

export default renderRefHOC(RefPicture);