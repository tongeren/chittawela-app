import Avatar from '../components/Avatar/Avatar';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionLayout from '../components/SectionLayout/SectionLayout';

const SectionLeap = () => 
    <Section id="section-leap">
        <SectionLayout
            heading={
                        <SectionHeading 
                            title="It's the biggest leap you can take toward the life you've always dreamed of!"
                            color="gold"
                            align="center"
                            margin="medium"
                        />
                    }
        >
            <Container>
                <Avatar 
                    src="/img/temp_leap.jpg"
                    alt="client avatar"
                    margin="small"
                />
            </Container>
            <SectionHeading
                alt
                title="Wiphatthra profoundly changed my life."
                align="center"
                margin="medium"
            />
            <em>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur in impedit ipsam. Suscipit eum libero fuga blanditiis excepturi quidem totam ea vitae. Deleniti eius quia commodi veniam explicabo. Pariatur, saepe.
            </em>
        </SectionLayout>
    </Section>;

export default SectionLeap;