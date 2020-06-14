import { Fragment } from 'react';
import BoxLayout from '../components/BoxLayout/BoxLayout';
import Photo from '../components/Photo/Photo';
import Section from '../components/Section/Section';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const PHOTO = {
    "wiphatthra": {
        "media": "(orientation: portrait)",
        "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584528564/guides/your_host_400x600.jpg 29w", 
        "sizes": "(max-width: 768px) 100vw, 12vw", 
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584528564/guides/your_host_400x600.jpg", 
        "alt": "Your host", 
        "name": "your-host"
    },
    "duncan": {
        "media": "(orientation: portrait)",
        "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584528564/guides/guides_together_600x450.jpg 29w", 
        "sizes": "(max-width: 768px) 100vw, 12vw", 
        "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584528564/guides/guides_together_600x450.jpg", 
        "alt": "Guides together", 
        "name": "guides-together"
    }
};

const SectionGuides = ():React.ReactElement => 
    <Section id="section-guides">
        <SectionLayout 
            marginTop
        >
            <BoxLayout 
                firstText={ false }
                text={
                    <div className="u-margin-bottom-medium">
                        <h3 className="heading-secondary-alt">
                            WIPHATTHRA TANGCHIT
                        </h3>
                        <h3 className="heading-tertiary-alt u-margin-bottom-small">
                            Your private mentor, coach and spiritual guide
                        </h3>
                        <p className="paragraph">
                            Adventure and challenge have always played influential roles in my life journey. Growing up as a little girl in poor conditions and with two parents who needed to work multiple jobs, I was alone long and often and needed to grow up quickly and take on
                            responsibility. That's why I created a big sister for myself that was able to take care of me, and be my internal support. The fact that my mother had to leave for Dubai at my 9 years old, and left my dad, and later that I even had
                            to start living semi-indepently from 12 years old, since my father only could come back weekends from work, taught me many things about how to live life grateful and humble, and set my heart in the right place that I can go through
                            fear.
                        </p>
                        <p className="paragraph">
                            The foundations of my skills as a therapist were laid at the preeminent luxury spa training program at
                            <strong>Spa Plus</strong>, Bangkok, owned and operated by a then board member of the
                            <strong>Thai Spa Association</strong>. After that I worked as a holistic spa therapist at 5 star spas <strong>JW Marriot Hotel & Spa</strong>, Bangkok and <strong>Oasis Spa</strong>, Chiang Mai. During my time in The Netherlands when
                            I surpassed the magical 10000 treatment hours, I also graduated with a degree in Spa Management from <strong>Chiva-Som International Academy</strong>, Bangkok - the world's best spa academy - where alumni go on to work for the finest
                            wellness spas in the world.
                        </p>
                        <p className="paragraph">
                            In the Netherlands I founded my own spa in the government city of The Hague: <strong>Isara Studio</strong>. Isara being the Thai word for 'freedom', with the goal of bringing clients back to their true selves and reexperience the personal inner and outer freedom that goes along with it.
                        </p>
                        <p className="paragraph">
                            As owner and founder of Isara Studio, I coached a widely diverse and cosmopolitan mix of clients on the level of politicians, famous musicians, entrepreneurs, lawyers for the <strong>International Court of Justice</strong>, ceo's and
                            high-level managers of international companies, scientific leaders and advisors at international agencies, and other professionals. Guiding them along their life journeys, I helped them to develop solid foundations for personal growth,
                            fix their road blocks to success, and live their dreams. Meanwhile giving and conveying the power of unconditional love towards themselves and others in creating a spiritual ambience conducive to superlative results and happiness.
                        </p>
                        <p className="paragraph">
                            This company I ran for 10 years until I moved back to Thailand in 2016, where I conceived and realized my current adventure <strong>Chittawela</strong>. With Chittawela, meaning time for the heart, I am combining spiritual wisdom with
                            the latest psychological research techniques to offer a unique program that focuses on each important aspect of the client's journey to true self-actualisation, and accompany them on their road to personal success, and balanced, fulfilling
                            and happy lives.
                        </p>
                        <span><strong>And I would love to do the same to you!</strong></span>
                    </div>
                }
                other={
                    <Photo { ...PHOTO.wiphatthra } />
                }
            />
            <BoxLayout
                firstText={ true }
                text={ 
                    <Fragment>
                        <h3 className="heading-secondary-alt">
                            Meet DUNCAN VAN TONGEREN
                        </h3>
                        <h3 className="heading-tertiary-alt u-margin-bottom-small">
                            The secret business wizard, high performance expert, and strategic guide behind my success
                        </h3>
                        <p className="paragraph">
                            I have something to share to you: I have been very succesful in helping my clients in balancing their body and mind, I love to master new elements of wisdom about the nature and essence of life, and share what I realized in the process to others, I am an intuitive person that impassioned believer in personal growth, because I love to challenge myself and just do it. But, when it comes to the real depth of understanding of my knowledge, and to overcome my own blind spots and blocks, besides running a business, there are some things I can learn still.
                        </p>
                        <p className="paragraph">
                            That's why I was really fortunate to meet Duncan van Tongeren...
                        </p>
                        <p className="paragraph">
                            Seven years ago two different people, from totally different worlds and professional environments, met each other and helped each other reach their true potential, when he was in the middle of an emotional health crisis that was effecting both his life as his career. After that he has been helping to develop and set-up my businesses.
                        </p>
                        <p className="paragraph">
                            And did I mention that he is an eclectic, passionate and creative visionary, a professional with a broad range of expertise, and a wise and grounded person, entrepreneur who lives for challenges, genius financial mind, dad of two healthy kids, and a well-traveled
                            fellow global citizen?
                        </p>
                        <p className="paragraph">
                            Duncan is a keen student of the science of human performance and actualization, and hab been exceptionally adept at integrating the latest research on all its aspects into a invaluable toolbox of unique insights, techniques, and shortcuts which will enable
                            you to transform your life as effectively and as easy as possible to a life in which you are expressing yourself fully.
                        </p>
                        <p>
                            I am grateful for Duncan's part in bringing my businesses to new levels of success and I know that you will say something similar once you sit down and get to discuss with him your plans to make your ambitions for your personal and professional life a
                            reality.
                        </p>
                    </Fragment>
                }  
                other={
                    <Photo { ...PHOTO.duncan } />
                } 
            />
        </SectionLayout>
    </Section>

SectionGuides.displayName = "SectionGuides";

export default SectionGuides;