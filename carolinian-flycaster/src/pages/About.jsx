import './css/About.css';

function About() {
    return (
      <>
        <div class="page-paragraph-content">
          <section class="f-container">
            <div class="aboutme-img">
              <img src="images/headshot.jpg" alt="image of me" />
            </div>
            <div class="page-paragraph-box aboutme">
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

        <div id="contact-icons" class="page-paragraph-box">
          <section class="f-container">
            <div class="contact-box1">
              <section class="f-container">
                <img src="images/emailpin.png" alt="icon of mail" />
                <h3>Email:</h3>
                <p>nk@nkinard.com</p>
              </section>
              <section class="f-container">
                <img src="images/phonepin.png" alt="icon of phone" />
                <h3>Phone:</h3>
                <p>(864) - 555 - 5989</p>
              </section>
            </div>
            <div class="contact-box2">
              <section class="f-container">
                <img src="images/linkedinpin.png" alt="icon of linkedin" />
                <h3>LinkedIn:</h3>
                <p>www.linkedin.com/in/nicholaskinard/</p>
              </section>
              <section class="f-container">
                <img src="images/instapin.png" alt="icon of instagram" />
                <h3>Instagram:</h3>
                <p>www.instagram.com/nick75sc/</p>
              </section>
            </div>
          </section>
        </div>
      </>
    );
};

export default About;