
const FlexColItem= ({ heading, children }) => {
    return (
        <div className="flex-col-item-layout">
            <h3 className="heading-tertiary-emphasis u-margin-bottom-small">
                { heading }
            </h3>
            { children }
        </div>
    );
};

export default FlexColItem;