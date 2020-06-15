import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import StatementLayout from '../components/StatementLayout/StatementLayout';

const SectionDescription = ():React.ReactElement => 
    <Section id="section-statements">
        <SectionLayout 
            color
            heading={
                <SectionHeading title="Does any of the following sound familiar to you?" color="black" align="center"/>
            }
        >
            <StatementLayout />    
        </SectionLayout>
    </Section>;

SectionDescription.displayName = "SectionDescription";

export default SectionDescription;