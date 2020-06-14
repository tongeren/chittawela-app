const Statement =  ({ children }):React.ReactElement => {
    return (
        <div className="statement">
            <div className="statement__container">
                { children }
            </div>
        </div>
    );
};

Statement.displayName = "Statement";

export default Statement;