import "./css/Spotlight.css";
import Spot from "../components/Spot";
import SpotModal from "../components/SpotModal";
import { useState } from "react";

//react button help was from W3, stackform, and youtube
function Spotlight() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const spotsData = [
    {
      id: "1",
      name: "Chattooga",
      summary:
        "The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28.",
      latitude: "34.9267293",
      longitude: "-83.3724446",
      fishes: "Rainbow and Brown Trout",
      flies:
        "Dry Flies: Yellow Sally, Elk Hair Caddis, Griffith's Gnat Nymph Flies: Zebra Midge, Golden Stonefly, Rainbow Warrior",
      watertype: "Freshwater River",
      typeofentry: "Public",
      rating: "5",
      innerimage: "images/flyfishchat.jpg",
      seasons: "Best is Summer, Fall is acceptable",
    },
    {
      id: "2",
      name: "Chattooga2",
      summary:
        "The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28.",
      latitude: "34.9267293",
      longitude: "-83.3724446",
      fishes: "Rainbow and Brown Trout",
      flies:
        "Dry Flies: Yellow Sally, Elk Hair Caddis, Griffith's Gnat Nymph Flies: Zebra Midge, Golden Stonefly, Rainbow Warrior",
      watertype: "Freshwater River",
      typeofentry: "Public",
      rating: "5",
      innerimage: "images/flyfishchat.jpg",
      seasons: "Best is Summer, Fall is acceptable",
    },
  ];

  const openModal = (id) => {
    let foundSpot = null;
    for (let i = 0; i < spotsData.length; i++) {
      if (spotsData[i].id === id) {
        foundSpot = spotsData[i];
        break;
      }
    }
    setSelectedSpot(foundSpot);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSpot(null);
  };

  return (
    <>
      <main id="main-content">
        <div id="modalSpotlight"></div>
        <div className="page-buttons-stack">
          <h2>Fisherman's Spotlight</h2>
        </div>
        <div id="gallery" className="page-buttons-stack">
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="2"
            name="Chattooga2"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("2")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
          <Spot
            id="1"
            name="Chattooga"
            outerimage="images/chattooga.jpg"
            onClick={() => openModal("1")}
          />
        </div>

        {selectedSpot && (
          <SpotModal
            {...selectedSpot}
            closeModal={closeModal}
            modalVisible={modalVisible}
          />
        )}

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
