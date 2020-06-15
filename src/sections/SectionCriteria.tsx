import { Fragment } from 'react';
import Commitment from '../components/Commitment/Commitment';
import Grid from '../components/Grid/Grid';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';
import SVGIcon from '../components/SVGIcon/SVGIcon';

const CRITERIA = [
    {
        "sprite": "eye-regular",
        "heading": "Keep an open mind",
        "text": "to the new and powerful knowledge and wisdom that we will introduce to you in order to create a balanced life style. Be willing to change your mindset and commit fully to the program by taking part in all meetings."
    },
    {
        "sprite": "shield",
        "heading": "Persevere in face of difficulties",
        "text": "by keeping your ambitions and goals continually in mind. You must truly want to create the best life possible for yourself and your community."
    },
    {
        "sprite": "sun",
        "heading": "Remain honest to your true self",
        "text": "especially to all feelings and emotions. In order to do the necessary inner work you will have to stay with yourself. Escaping or abandoning your emotions during your transformation is not helpful. If instead you spend time and commit to the inner work necessary, then its effect will be maximized."
        
    },
    {
        "sprite": "heart",
        "heading": "Let your heart stay open",
        "text": "and trust the process. Be grateful, focused and positive about everything that is going to happen along the journey to your new you. Expressing gratitude is an integral part of an effective life transformation."

    }   
];

const SectionCriteria= ():React.ReactElement => 
    <Section id="section-criteria">
        <SectionLayout
            color
            heading={
                        <SectionHeading 
                            title="To be considered for this opportunity, you must meet the following 4 commitments:"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <Fragment>
                <Grid>
                    { CRITERIA.map((criterium, key) => 
                        <Commitment 
                            key={ key }
                            icon={ <SVGIcon sprite={ criterium.sprite } /> }
                            heading={ criterium.heading }
                            text={ criterium.text }
                        />
                    )}
                </Grid>
                <div className="u-margin-top-small">
                    <span>If you qualify to attend and agree to diligently dedicate yourself to the process that awaits you, I would love to welcome you to the</span>
                </div>
                <div className="u-text-center important">
                    Affirming Self-Transformational Retreat
                </div>
            </Fragment>
        </SectionLayout>
    </Section>

SectionCriteria.displayName = "SectionCriteria";

export default SectionCriteria;