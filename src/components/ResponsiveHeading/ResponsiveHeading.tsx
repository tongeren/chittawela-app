import { useStore } from '../StoreProvider/StoreProvider';
import SectionHeading from '../SectionHeading/SectionHeading';

const ResponsiveHeading = (props):React.ReactElement => {
    const store = useStore();
    const { align, ...others } = props;  
    const isPortrait = (store.client.orientation === "portrait");
    const resAlign = ((align === null || align === undefined) && isPortrait) ? "center" : align;

    return <SectionHeading align={ resAlign } { ...others } />;
};

ResponsiveHeading.displayName = "ResponsiveHeading";

export default ResponsiveHeading;
