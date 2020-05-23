import { Fragment } from 'react';
import IconList from '../components/IconList/IconList';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const items = [
    {
        "title": "Continued guidance & support",
        "description": "Three two-monthly Skype follow-up sessions to help you resolve new road-blocks that you might encounter and keep you accountable."
    },
    {
        "title": "Habit formation",
        "description": "Specially designed follow-up material to assist you in turning your new life skills into habits, making ultimate success inevitable."
    },
    {
        "title": "Lifelong learning",
        "description": "Lifetime access to our - continually updated and expanding - materials, so at all times you have our entire base of knowledge, wisdom and tools at your fingertips."
    },
    {
        "title": "Inspiring community",
        "description": "Membership to our supportive community that can inspire you and where you can share your journey to happiness."
    }
];

const SectionFollowUp = () => 
    <Section id="section-follow-up">
        <SectionLayout
            blue
            heading={
                        <SectionHeading 
                            title="You will be well on your way to achieving your ultimate goals"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <Fragment>
                <p className="paragraph">
                    <strong>
                        In our view most programs underestimate the effects that a change in environment has on your personal functioning, especially when you want to transform yourself. It is all too easy to get caught up in your old habits again.
                    </strong>
                </p>
                <p className="paragraph">
                    That is why we put special emphasis on your follow-up phase after the retreat, considering you are returning to your original environment which your original self was attuned to. Therefore we need to make sure we change your home environment to be conducive
                    to your new reality as well, otherwise we cannot expect a transformation to succeed.
                </p>
                <p className="paragraph">
                    <strong>
                        We would love for everyone to live truly happy and fulfilled lives, and make their transformation a success.
                    </strong>
                </p>
                <p>
                    That's why we offer you a specially designed follow-up program to support you in your transition after the retreat too. This program consists of:
                </p>
                <IconList items={ items }/>
                <div className="u-text-center important">
                    We are looking forward seeing you making your impact on the world!
                </div>
            </Fragment>
        </SectionLayout>
    </Section>

export default SectionFollowUp