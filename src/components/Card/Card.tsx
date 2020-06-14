import Photo from '../Photo/Photo';
import { CardProps } from './types';

const Card:React.FunctionComponent<CardProps> = ({ period, title, photo, description }):React.ReactElement => {
    return (
        <div className="card">
            <h3 className="card__period heading-secondary-alt">{ period }</h3>
            <h3 className="card__header heading-tertiary-alt">{ title }</h3>
            <div className="card__photo">
                <Photo { ...photo } />
            </div> 
            <p className="card__description">{ description }</p>
       </div>
    );
};

Card.displayName = "Card";

export default Card;



