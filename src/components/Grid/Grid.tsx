const Grid = ({ children }):React.ReactElement => {
    return (
        <div className="grid-layout">
            { children }
        </div>
    );
};

Grid.displayName = "Grid";

export default Grid;

