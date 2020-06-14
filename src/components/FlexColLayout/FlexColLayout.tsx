const FlexColLayout = ({ children }):React.ReactElement => {
    return (
        <div className="flex-col-layout">
            { children }
        </div>
    );
};

FlexColLayout.displayName = "FlexColLayout";

export default FlexColLayout;

