import "./css/Library.css";
import Fishes from "../components/Fishes";
import Flies from "../components/Flies";
import FishModals from "../components/FishModals";
import FlyModals from "../components/FlyModals";
import { useState } from "react";

function Library() {
  const [selectedModalIdfish, setSelectedModalIdfish] = useState(null);
  const [selectedModalIdfly, setSelectedModalIdfly] = useState(null);


    const openModalfish = (id) => {
        setSelectedModalIdfish(id);
    };

    const closeModalfish = () => {
        setSelectedModalIdfish(null);
    };

    const openModalfly = (id) => {
      setSelectedModalIdfly(id);
  };

  const closeModalfly = () => {
      setSelectedModalIdfly(null);
  };
    
  return (
    <>
      <main id="main-content">
        <div className="page-paragraph-content">
          <section className="f-container">
            <div>
              <h2>The Complete Fish and Fly Library of the Carolinas</h2>
              <p>
                Welcome to the Fish and Fly Library, a comprehensive resource
                giving quick information on fishes and flies to see and use in
                the Carolinas.
              </p>
              <p>
                This library is sectioned off into the Fly Library and the Fish
                Library. In the Fish Library, there is information on the fish
                itself, its best flies to be used, and where to find them. In
                the Fly Library, there is information on the fly itself, its
                main purpose, and what fish really love them. It is important to
                know that this guide is meant for the Carolinas, so species
                around the world may act different to this information.
              </p>
            </div>
          </section>
        </div>

        <div id="fishlib" className="page-buttons-stack">
          <h2>Fish Library</h2>
          <div id="galleryfish" className="page-buttons-stack">
           <Fishes onSpotClickfish={openModalfish}/>
          </div>
        </div>

        <div id="flylib" className="page-buttons-stack">
          <h2>Fly Library</h2>
          <div id="galleryfly" className="page-buttons-stack">
            <Flies onSpotClickfly={openModalfly}/>
          </div>
        </div>

        <FishModals selectedModalIdfish={selectedModalIdfish} closeModalfish={closeModalfish}/>

        <FlyModals selectedModalIdfly={selectedModalIdfly} closeModalfly={closeModalfly}/>

      </main>
    </>
  );
}

export default Library;
