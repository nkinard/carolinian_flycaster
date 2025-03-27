import './css/Home.css';
import PageButton from '../components/PageButton';
import ListItems from '../components/ListItems';

function App() {
  return (
    <>
      <main id="main-content">
        <div className="image-slider">
          <img src={process.env.PUBLIC_URL + "/images/mainpage.jpg"} alt="main showcase" />
        </div>

        <div className="page-paragraph-content f-container">
          <div className="page-paragraph-box home-paragraph-box">
            <h2>Why Be a Carolinian Flycaster?</h2>
            <p>
              Welcome to the Carolinian Flycaster - Your complete guide to fly
              fishing in the Carolinas!
            </p>
            <p>
              Whether you have been fly fishing all your life or just
              starting, we are here to be your go-to resource for flycasting
              in the Carolinas. We aim to educate, guide, and inspire anglers
              like yourself with the tools we provide specially. Explore the
              fish and fly library and fishing guide to get started today!
            </p>
          </div>
          <div className="page-list-box">
            <h3>What we do for you</h3>
            <ul>
              <ListItems
                image="images/infopin.png"
                paragraph="Compile all the fly fishing guide info"
              />
              <ListItems
                image="images/regionpin.png"
                paragraph="Help understand the Carolinas"
              />
              <ListItems
                image="images/journeypin.png"
                paragraph="Curate the journey you want"
              />
            </ul>
          </div>
        </div>

        <div className="page-buttons-stack">
          <section className="f-container four-img-stack">
            <PageButton
              name="Fly Fishing Guide"
              image="images/guide.jpg"
            />
            <PageButton
              name="Fish and Fly Library"
              image="images/library.jpg"
            />
            <PageButton
              name="Fisherman's Spotlight"
              image="images/spotlight.jpg"
            />
            <PageButton
              name="About Me"
              image="images/aboutme.jpg"
            />
          </section>
        </div>
            
      </main>
    </>
  );
}

export default App;