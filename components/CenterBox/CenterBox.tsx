const CenterBox = ({ children }):React.ReactElement => {
    return (
        <div className="center-box">
            { children }
        </div>
    );
};

CenterBox.displayName = "CenterBox";

export default CenterBox;

