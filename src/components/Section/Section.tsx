import { SectionProps } from './types';

const Section: React.FunctionComponent<SectionProps> = ({ id, children }):React.ReactElement => {
    return (        
        <section id={ id } className="section" >
            { children }
        </section>
    );
};

Section.displayName = "Section";

export default Section;