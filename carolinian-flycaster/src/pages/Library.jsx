import "./css/Library.css";
import Fish from "../components/Fish";
import Fly from "../components/Fly";

function Library() {
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
            <Fish
              id="1"
              name="Redfish"
              summary="The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28."
              outerimage="images/redfish.jpg"
              innertopimage="images/redfishdrawn.jpg"
              innerbottomimage="images/redfishbig.jpg"
              useflies="Since Redfish are saltwater, you are going to need to use saltwater fly patterns. These fish are going to bite completely different from the normal freshwater fish and be a little more aggressive. The best flies include the Clouser Deep Minnow, Deep Baitfish Shad, or even a Squimp."
              topspots="The best places to find these fish are in saltwater regions where bank or boat fishing is accessible. It is not reccommended to go wading for thein these fish. Top areas include the flats of Charleston and Beufort as well as the bays and lagoons in the Outer Banks."
            />
            <Fish
              id="1"
              name="Redfish"
              summary="The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28."
              outerimage="images/redfish.jpg"
              innertopimage="images/redfishdrawn.jpg"
              innerbottomimage="images/redfishbig.jpg"
              useflies="Since Redfish are saltwater, you are going to need to use saltwater fly patterns. These fish are going to bite completely different from the normal freshwater fish and be a little more aggressive. The best flies include the Clouser Deep Minnow, Deep Baitfish Shad, or even a Squimp."
              topspots="The best places to find these fish are in saltwater regions where bank or boat fishing is accessible. It is not reccommended to go wading for thein these fish. Top areas include the flats of Charleston and Beufort as well as the bays and lagoons in the Outer Banks."
            />
            <Fish
              id="1"
              name="Redfish"
              summary="The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28."
              outerimage="images/redfish.jpg"
              innertopimage="images/redfishdrawn.jpg"
              innerbottomimage="images/redfishbig.jpg"
              useflies="Since Redfish are saltwater, you are going to need to use saltwater fly patterns. These fish are going to bite completely different from the normal freshwater fish and be a little more aggressive. The best flies include the Clouser Deep Minnow, Deep Baitfish Shad, or even a Squimp."
              topspots="The best places to find these fish are in saltwater regions where bank or boat fishing is accessible. It is not reccommended to go wading for thein these fish. Top areas include the flats of Charleston and Beufort as well as the bays and lagoons in the Outer Banks."
            />
            <Fish
              id="1"
              name="Redfish"
              summary="The Chattooga River is one of the southeast's longest rivers and cuts through Georgia, South Carolina, and North Carolina. This spectacular river is home to hundreds of different species of wildlife. The good thing about this river is that there is easy access at almost any point. There are times where the rapids pick up, but there are definitely spots for wading, kayaking, or bank casting. The best, and most popular, access to the river is off of State Highway 28."
              outerimage="images/redfish.jpg"
              innertopimage="images/redfishdrawn.jpg"
              innerbottomimage="images/redfishbig.jpg"
              useflies="Since Redfish are saltwater, you are going to need to use saltwater fly patterns. These fish are going to bite completely different from the normal freshwater fish and be a little more aggressive. The best flies include the Clouser Deep Minnow, Deep Baitfish Shad, or even a Squimp."
              topspots="The best places to find these fish are in saltwater regions where bank or boat fishing is accessible. It is not reccommended to go wading for thein these fish. Top areas include the flats of Charleston and Beufort as well as the bays and lagoons in the Outer Banks."
            />
          </div>
        </div>

        <div id="flylib" className="page-buttons-stack">
          <h2>Fly Library</h2>
          <div id="galleryfly" className="page-buttons-stack">
            <Fly
              id="1"
              name="Dry Fly"
              summary="Dry flies are a fly that imitate an adult insect. This technique of fly fishing is best during seasons of insect hatches, when the fish are actively feeding on adult flies. Selecting the right fly pattern based on the water and ecosystem is key to making them effective. To cast, simply cast the fly out and make sure it sits carefully on the water, just as an adult fly would."
              outerimage="images/dryfly.jpg"
              innertopimage="images/dryflytypes.jpg"
              innerbottomimage="images/dryflyspec.jpg"
              purpose="Dry flies are best used to imitate the adult stage of an aquatic insect. Some common flies in the Carolinas include mayflies, toneflies, and caddisflies. These flies are meant to drift on top of the water to feed, and then attract fish that like to feed on the surface. Make sure to choose the right fly based on your local environment. Some variables that can attribute to choosing the right fly include the season, the color of the water, the color of the environment, and what fish might lurk."
              topfish="Top fish in the Carolinas that eat dry flies are fish like brown and rainbow trout. These fish love to surface feed on hatching insects. The best seasons are often in the Spring and Fall times. Another common fish to get are smallmouth bass, however they are not as unique."
            />
            <Fly
              id="1"
              name="Dry Fly"
              summary="Dry flies are a fly that imitate an adult insect. This technique of fly fishing is best during seasons of insect hatches, when the fish are actively feeding on adult flies. Selecting the right fly pattern based on the water and ecosystem is key to making them effective. To cast, simply cast the fly out and make sure it sits carefully on the water, just as an adult fly would."
              outerimage="images/dryfly.jpg"
              innertopimage="images/dryflytypes.jpg"
              innerbottomimage="images/dryflyspec.jpg"
              purpose="Dry flies are best used to imitate the adult stage of an aquatic insect. Some common flies in the Carolinas include mayflies, toneflies, and caddisflies. These flies are meant to drift on top of the water to feed, and then attract fish that like to feed on the surface. Make sure to choose the right fly based on your local environment. Some variables that can attribute to choosing the right fly include the season, the color of the water, the color of the environment, and what fish might lurk."
              topfish="Top fish in the Carolinas that eat dry flies are fish like brown and rainbow trout. These fish love to surface feed on hatching insects. The best seasons are often in the Spring and Fall times. Another common fish to get are smallmouth bass, however they are not as unique."
            />
            <Fly
              id="1"
              name="Dry Fly"
              summary="Dry flies are a fly that imitate an adult insect. This technique of fly fishing is best during seasons of insect hatches, when the fish are actively feeding on adult flies. Selecting the right fly pattern based on the water and ecosystem is key to making them effective. To cast, simply cast the fly out and make sure it sits carefully on the water, just as an adult fly would."
              outerimage="images/dryfly.jpg"
              innertopimage="images/dryflytypes.jpg"
              innerbottomimage="images/dryflyspec.jpg"
              purpose="Dry flies are best used to imitate the adult stage of an aquatic insect. Some common flies in the Carolinas include mayflies, toneflies, and caddisflies. These flies are meant to drift on top of the water to feed, and then attract fish that like to feed on the surface. Make sure to choose the right fly based on your local environment. Some variables that can attribute to choosing the right fly include the season, the color of the water, the color of the environment, and what fish might lurk."
              topfish="Top fish in the Carolinas that eat dry flies are fish like brown and rainbow trout. These fish love to surface feed on hatching insects. The best seasons are often in the Spring and Fall times. Another common fish to get are smallmouth bass, however they are not as unique."
            />
            <Fly
              id="1"
              name="Dry Fly"
              summary="Dry flies are a fly that imitate an adult insect. This technique of fly fishing is best during seasons of insect hatches, when the fish are actively feeding on adult flies. Selecting the right fly pattern based on the water and ecosystem is key to making them effective. To cast, simply cast the fly out and make sure it sits carefully on the water, just as an adult fly would."
              outerimage="images/dryfly.jpg"
              innertopimage="images/dryflytypes.jpg"
              innerbottomimage="images/dryflyspec.jpg"
              purpose="Dry flies are best used to imitate the adult stage of an aquatic insect. Some common flies in the Carolinas include mayflies, toneflies, and caddisflies. These flies are meant to drift on top of the water to feed, and then attract fish that like to feed on the surface. Make sure to choose the right fly based on your local environment. Some variables that can attribute to choosing the right fly include the season, the color of the water, the color of the environment, and what fish might lurk."
              topfish="Top fish in the Carolinas that eat dry flies are fish like brown and rainbow trout. These fish love to surface feed on hatching insects. The best seasons are often in the Spring and Fall times. Another common fish to get are smallmouth bass, however they are not as unique."
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Library;
