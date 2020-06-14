import { CommitmentProps } from './types';

const Commitment:React.FunctionComponent<CommitmentProps> = ({ icon, heading, text }):React.ReactElement => {
    return (
        <div className="commitment-layout">
            <div className="commitment-layout__icon">{ icon }</div>
            <div className="commitment-layout__text">
                <h3 className="commitment-layout__header heading-secondary-alt">
                    <span>{ heading }</span>
                </h3>
                <p className="commitment-layout__paragraph">- { text }</p>
            </div>
        </div>
    );
};

Commitment.displayName = "Commitment";

export default Commitment;