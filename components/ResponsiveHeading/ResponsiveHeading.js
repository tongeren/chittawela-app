import SectionHeading from '../SectionHeading/SectionHeading';
import restrictToClient from '../../hoc/restrictToClient';
import withPortrait from '../../hoc/withPortrait';
import isPortrait from '../../hooks/isPortrait';


const ResponsiveHeading = props => {
    const { align, ...others } = props;  
    const resAlign = ((align===null || align===undefined) && isPortrait()) ? "center" : align;

    return <SectionHeading align={ resAlign } { ...others } />;
};

export default withPortrait(restrictToClient(ResponsiveHeading));
