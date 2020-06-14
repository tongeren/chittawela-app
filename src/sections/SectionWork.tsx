import CardLayout from '../components/CardLayout/CardLayout';
import Section from '../components/Section/Section';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const cards = [
    {
        "period": "Preparation",
        "title": "Uncover your true self & discover its talents",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/preparation.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/preparation.jpg",
            "alt": "Preparation",
            "name": "program-work"
        },
        "description": "As soon as you are invited to our transformational retreat, your journey to your new you starts! Apply our methods and get a first view of the values that unconsciously drive you. Start the assessment of the talents that will help you accelerate your progress towards your goals later on."
    },
    {
        "period": "Retreat Day 1",
        "title": "Get yourself grounded, clear, and relaxed",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day1.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day1.jpg",
            "alt": "Day 1",
            "name": "program-work"
        },
        "description": "Disengage from the business of modern life. Learn to fully slow down and get grounded in the moment, so you can release whatever that has holding you back, and keeping you attached. Then let true relaxation open you up to deeper insights and clarity."
    },
    {
        "period": "Retreat Day 2",
        "title": "Learn the how of your happiness",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day2.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day2.jpg",
            "alt": "Day 2",
            "name": "program-work"
        },
        "description": "Be privy to the curiously not well-known wisdom on how to achieve happiness and determine which activities fit you personally. Finally learn how to make your happiness last."
    },
    {
        "period": "Retreat Day 3",
        "title": "Get clarity on your ambitions",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day3.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day3.jpg",
            "alt": "Day 3",
            "name": "program-work"
        },
        "description": "Discover which goals are the ones of which committed pursuit will bring you happiness. Combine imagination, ruthless self-honesty, and the wisdom and enthusiasm of others to elucidate the contours and true extent of your ambitions."
    },
    {
        "period": "Retreat Day 4",
        "title": "Create a winning strategy",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day4.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day4.jpg",
            "alt": "Day 4",
            "name": "program-work"
        },
        "description": "Reconsider your talents and other advantages, stack the deck against failure, and access the combined wisdom of the group, to design a strategy that will guarantee success, and translate that strategy into an action plan that will propel you towards your goals."
    },
    {
        "period": "Retreat Day 5",
        "title": "Visualize your future self",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day5.jpg 1920w",
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day5.jpg",
            "alt": "Day 5",
            "name": "program-work"
        },
        "description": "Unleash the unlimited power of your unconscious mind to automatically align your entire being and behaviour to your future self. Create a gripping, riveting, and positive success film of the journey you are embarking on."
    },
    {
        "period": "Retreat Day 6",
        "title": "Become a master of yourself",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day6.jpg 1920w", 
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day6.jpg",
            "alt": "Day 6",
            "name": "program-work"
        },
        "description": "Adopt a winning mindset and gradually become unstoppable. Get acquainted with effective techniques to deal with your inner saboteur, allowing you to start conquering any internal pressures against obtaining what you want. Receive guidance on how to get and keep, your body energized and soul nurtured, so you are always primed for optimum performance. Finally, align your emotions with your beliefs in order to mobilize them to keep you motivated."
    },
    {
        "period": "Retreat Day 7",
        "title": "Take action effectively",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/day7.jpg 1920w", 
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/day7.jpg",
            "alt": "Day 7",
            "name": "program-work"
        },
        "description": "Optimize how you are managing your time. Adopt an action mindset and learn how to conquer any challenge you might encounter on your path to victory. Learn how to move through fear and execute your mission."
    },
    {
        "period": "Follow-up",
        "title": "Develop new habits & get appropriate support",
        "photo": {
            "media": "",
            "srcSet": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_1920/v1584329960/program-work/follow-up.jpg 1920w", 
            "sizes": "100vw",
            "src": "https://res.cloudinary.com/chittawela/image/upload/f_auto,q_70,w_450/v1584329960/program-work/follow-up.jpg",
            "alt": "Follow-up",
            "name": "program-work"
        },
        "description": "Keep receiving information and guidance to continually improve yourself en route. Get three two-monthly mentoring sessions to address any residual road-blocks on your way, and keep you on track long enough to ingrain the patterns of success you adopted during the retreat."
    }
];

const SectionWork = ():React.ReactElement => {
    return (
        <Section id="section-work">
            <SectionLayout>
                <CardLayout cards={ cards } />
            </SectionLayout>
        </Section>
    );
}

SectionWork.displayName = "SectionWork";

export default SectionWork;
