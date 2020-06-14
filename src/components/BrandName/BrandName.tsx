import { BrandNameProps } from './types';

const BrandName:React.FunctionComponent<BrandNameProps> = ({ flex, name }):React.ReactElement => { 
    return (
        <span className={ `brand-name brand-name--${ flex }` }>{ name }</span>
    );
};

BrandName.displayName = "BrandName";

export default BrandName;


