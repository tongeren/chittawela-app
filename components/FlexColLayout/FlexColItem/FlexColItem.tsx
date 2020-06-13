import { FlexColItemProps } from './types';

const FlexColItem: React.FunctionComponent<FlexColItemProps> = ({ heading, children }):React.ReactElement => {
    return (
        <div className="flex-col-item-layout">
            <h3 className="heading-tertiary-emphasis u-margin-bottom-small">
                { heading }
            </h3>
            { children }
        </div>
    );
};

FlexColItem.displayName = "FlexColItem";

export default FlexColItem;