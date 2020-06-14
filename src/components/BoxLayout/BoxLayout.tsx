import { BoxLayoutProps } from "./types";

const BoxLayout:React.FunctionComponent<BoxLayoutProps> = ({ firstText, text, other }):React.ReactElement => {
    const textJSX = <div className="box-layout__text">{ text }</div>;
    const otherJSX = <div className="box-layout__other">{ other }</div>;

    return (
        <div className="box-layout">
            { firstText ? textJSX : otherJSX }
            { firstText ? otherJSX : textJSX }
        </div>
    );
};

BoxLayout.displayName = "BoxLayout";

export default BoxLayout;
