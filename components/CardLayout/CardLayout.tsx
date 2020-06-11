import Card from '../Card/Card';
import { CardLayoutProps } from './types';

const CardLayout:React.FunctionComponent<CardLayoutProps> = ({ cards }):React.ReactElement => {
    return (
        <div className="card-layout">
             { cards.map((card, key) => <Card key={ key } { ...card } /> )}
        </div>
    );
};

export default CardLayout;