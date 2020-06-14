import { PhotoQuoteProps } from './types';

const PhotoQuote:React.FunctionComponent<PhotoQuoteProps> = ({ photo, quote }):React.ReactElement => {
    return (
        <div className="photo-quote-layout">
            <div className="photo-quote-layout__photo u-margin-bottom-small">{ photo }</div>
            <div className="photo-quote-layout__quote u-text-center">{ quote }</div>
        </div>
    );
};

PhotoQuote.displayName = "PhotoQuote";

export default PhotoQuote;





