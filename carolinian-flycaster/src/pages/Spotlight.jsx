import "./css/Spotlight.css";
import Spots from "../components/Spots";

//react button help was from W3, stackform, and youtube
function Spotlight() {
  return (
    <>
      <main id="main-content">
        <div id="modalSpotlight"></div>
        <div className="page-buttons-stack">
          <h2>Fisherman's Spotlight</h2>
        </div>
        <Spots/>

        <div className="page-paragraph-content paragraph-color">
          <section className="f-container">
            <div className="page-paragraph-box">
              <h2>What is Fisherman's Spotlight</h2>
              <p>
                This page is dedicated to showcasing the best fishing locations
                across the Carolinas, offering a detailed look at where to find
                the most rewarding waters, whether you are a young or seasoned
                fisherman. Whether you want to find the next stream of the Blue
                Ridge Mountains, the bass rivers of the Piedmont, or the flats
                on the coast, this page provides expert insights on each
                location. We highlight not only the accessibility of these
                fishing spots but also the specific conditions that make them
                prime destinations for anglers of all skill levels.
              </p>
              <h2>How to Find New Spots</h2>
              <p>
                To help you on your journey, we provide the top spotlight's
                reviewed by our team. We aim to try provide information to find
                the best flies to use, the fish to catch, the type of water that
                is there, and the times of the year to go. With our expert
                analysis, we will give the best quick run down to find a
                location and just get in the water.
              </p>
              <p>
                Finding new spots is the most challenging part of getting into
                fly-fishing. To make this process quick, simply click on a place
                that seems interesting and read up on it. We will give the best
                and most up to date information on how to get there and what to
                do. We will also give you information on how locate places
                similar to this. Well, start getting in!
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Spotlight;
