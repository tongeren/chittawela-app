import Star from './Star/Star';
import { StarsProps } from './types';

const Stars: React.FunctionComponent<StarsProps> = ({ number }):React.ReactElement => {
    const stars = [];
    for (let i = 0; i < number; i++) {
        stars.push(<Star key={ i } />);
    }

    return (
        <span>{ stars }</span>
    );
};

Stars.displayName = "Stars";

export default Stars;

