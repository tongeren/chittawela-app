import Combination from '../components/Combination/Combination';
import ResultLayout from '../components/ResultLayout/ResultLayout';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionTransformation = ():React.ReactElement => 
    <Section id="section-transformation">
        <SectionLayout
            color
            heading={
                        <SectionHeading 
                            title="This is what you will have achieved after our time together"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <ResultLayout 
                results= {[ 
                    <Combination 
                        sprite="drop"
                        text="Be calmer, humbler, and have good stress management skills"
                    />,
                    <Combination
                        sprite="bolt"
                        text="Able to make quicker decisions"
                    />,
                    <Combination
                        sprite="tree"
                        text="Have greater confidence"
                    />,
                    <Combination
                        sprite="mountain"
                        text="Able to reach your true potential"
                    />,
                    <Combination
                        sprite="spa"
                        text="Able to create a fulfilling lifestyle"
                    />,
                    <Combination
                        sprite="gem-solid"
                        text="Have greater inner strength and courage"
                    />,
                    <Combination
                        sprite="eye-regular"
                        text="Able to set goals based on knowing yourself from within"
                    />,
                    <Combination
                        sprite="seedling"
                        text="Able to know and nurture your soul"
                    />
                ]}
            />
        </SectionLayout>
    </Section>;

SectionTransformation.displayName = "SectionTransformation";

export default SectionTransformation;
