import './css/About.css';
import ContactBox from '../components/ContactBox';
import ContactMe from '../components/ContactMe';

function About() {
    return (
      <>
      <main id="main-content">
        <div className="page-paragraph-content">
          <section className="f-container">
            <div className="aboutme-img">
              <img src="images/headshot.jpg" alt="creator portrait" />
            </div>
            <div className="page-paragraph-box aboutme">
              <h2>About Me</h2>
              <p>
                Hello, my name is Nicholas Kinard! I am the creator and
                administrator of The Carolinian Flycaster. I am also your number
                one guide on getting started fly fishing in the Carolinas. I
                will walk you through the basics and get you to be running on
                your own! I have been fishing all of my life, only recently
                doing fly fishing once getting into college of 2021.
              </p>
              <p>
                Whether you are a seasoned veteran or not, I hope this page
                finds you well and you can get as much information as possible.
                More so, my mission is to make sure I get another person into
                fly fishing in the Carolinas, and possibly give some advice to a
                new angler. I want to be able to give you the power to get
                started, and eventually help another generation. If you want to
                keep connected, or know see what I am doing currently, you can
                find any of my socials down below!
              </p>
            </div>
          </section>
        </div>

        <h2>Contact Me</h2>

        <ContactMe />

        <div id="contact-icons" className="page-paragraph-box">
          <section className="f-container">
            <div className="contact-box1">
              <ContactBox
                image="images/emailpin.png"
                title="Email:"
                input="nk@nkinard.com"
              />
              <ContactBox
                image="images/phonepin.png"
                title="Phone:"
                input="(864) - 555 - 5989"
              />
            </div>
            <div className="contact-box2">
              <ContactBox
                image="images/linkedinpin.png"
                title="LinkedIn:"
                input="www.linkedin.com/in/nicholaskinard/"
              />
              <ContactBox
                image="images/instapin.png"
                title="Instagram:"
                input="www.instagram.com/nick75sc/"
              />
            </div>
          </section>
        </div>
        </main>
      </>
    );
};

export default About;