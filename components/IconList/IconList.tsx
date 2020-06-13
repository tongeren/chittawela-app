import IconListItem from './IconListItem/IconListItem';
import { IconListProps } from './types';

const IconList:React.FunctionComponent<IconListProps> = ({ items }):React.ReactElement => {
    return (
        <ul className="icon-list">
            { items.map((item, key) => <IconListItem key={ key } { ...item } />) }
        </ul>
    );
};

IconList.displayName = "IconList";

export default IconList;