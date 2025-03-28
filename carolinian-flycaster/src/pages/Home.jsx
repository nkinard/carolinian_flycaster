import './css/Home.css';
import PageButton from '../components/PageButton';
import ListItemsIcon from '../components/ListItemsIcon';

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
          <ListItemsIcon 
            title="What we do for you"
            image1="images/infopin.png"
            paragraph1="Compile all the fly fishing guide info"
            image2="images/regionpin.png"
            paragraph2="Help understand the Carolinas"
            image3="images/journeypin.png"
            paragraph3="Curate the journey you want"
          />
        </div>

        <PageButton 
          name1="Fly Fishing Guide"
          image1="images/guide.jpg"
          name2="Fish and Fly Library"
          image2="images/library.jpg"
          name3="Fisherman's Spotlight"
          image3="images/spotlight.jpg"
          name4="About Me"
          image4="images/aboutme.jpg"
        />
      </main>
    </>
  );
}

export default App;