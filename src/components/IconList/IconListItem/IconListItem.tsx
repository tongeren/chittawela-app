import { IconListItemProps } from './types';

const IconListItem:React.FunctionComponent<IconListItemProps> = ({ title, description }):React.ReactElement => {
    return (
        <li className="icon-list__item">
            <div className="icon-list__container">
                <h2 className="icon-list__header heading-seconday-alt">{ title }</h2>
                <p>{ description }</p>
            </div>
        </li>
    );
};

IconListItem.displayName = "IconListItem";

export default IconListItem;

