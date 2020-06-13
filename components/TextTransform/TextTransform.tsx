import { TextTransformProps } from './types';

const TextTransform:React.FunctionComponent<TextTransformProps> = ({ transform, children }):React.ReactElement => {
    return (
        <span className={ (transform === "none") ? "" : `text-${ transform }` }>{ children }</span>
    );
};

TextTransform.displayName = "TextTransform";

export default TextTransform;