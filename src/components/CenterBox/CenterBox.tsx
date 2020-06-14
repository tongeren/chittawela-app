import { CenterBoxProps } from "./types";

const CenterBox:React.FunctionComponent<CenterBoxProps> = ({ children, fill }):React.ReactElement => {
    const classes = "center-box".concat(" ", fill && "center-box--fill");
    return (
        <div className={ classes }>
            { children }
        </div>
    );
};

CenterBox.displayName = "CenterBox";

export default CenterBox;

