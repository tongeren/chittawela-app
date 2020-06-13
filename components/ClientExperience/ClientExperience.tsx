import { ClientExperienceProps } from './types';

const ClientExperience:React.FunctionComponent<ClientExperienceProps> = ({ text, name, job, city, country }):React.ReactElement => {
    return (
        <div className="client-experience">
            <div className="client-experience__text paragraph">
                <p>{ text }</p>
            </div>
            <span><strong>{ name }</strong></span><br />
            <span>{ job }, { city } - { country }</span>
        </div>
    );
};

ClientExperience.displayName = "ClientExperience";

export default ClientExperience;