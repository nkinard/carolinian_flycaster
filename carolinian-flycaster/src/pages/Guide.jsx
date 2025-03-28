import "./css/Guide.css";
import ParagraphBox from "../components/ParagraphBox";
import AltParagraphBox from "../components/AltParagraphBox";

function Guide() {
  return (
    <>
      <main id="main-content">
        <div className="page-paragraph-content">
          <section className="f-container">
            <div className="page-list-box">
              <h3>Necessary Steps to Get Started</h3>
              <ul>
                <li>Step 1: What gear?</li>
                <li>Step 2: Where to go?</li>
                <li>Step 3: What to catch?</li>
                <li>Step 4: How to cast</li>
                <li>Step 5: How to attract and catch</li>
                <li>Step 6: How to handle fish</li>
                <li>Step 7: Have fun!</li>
              </ul>
            </div>

            <div className="page-paragraph-box">
              <h2>The Beginner's Guide To Fly Fishing</h2>
              <p>
                Fly fishing is more than just a recreational activity, it is a
                unique way to connect with nature. In this fishing guide, we
                will break down the essential gear, basic locations, what fish
                to look for, how to cast, how to attract fish, how to handle
                fish, and then end with a little encouragement. Whether you
                choose to wade in a mountain stream, or test your luck in
                coastal waters, we are going to start you off right.
              </p>
              <p>
                Beyond just the basics, fly fishing is about reading the water,
                recognizing fish behavior, understanding the ecosystem, and
                playing with the environment. Below we have outlined seven
                general steps to get you started in the right direction. Note
                that these are very generic steps with basic guidelines as every
                location, fish, and fly is going to be unique. This guide is
                just to get you in the water!
              </p>
            </div>
            </section>
        </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <ParagraphBox
                  image="images/gear.jpg"
                  title="Step 1: What Gear?"
                  topparagraph="One thing you should not do is spend tons of money on gear.
                                        Getting into this sport does not require you to break the bank.
                                        However, you will notice that as you want to catch more
                                        lucrative fish, your gear will have to be based on what that
                                        fish likes. To get started, all you need is a fly rod, a reel
                                        with some line, a few flies, and a good pair of wading boots or
                                        waders if you plan to get in."
                  bottomparagraph="As for a fly rod, the most generic one to start off with is a
                                        5-weight rod. It is a good all-around choice for beginners and
                                        will catch anything from small to medium-sized fish. Easily
                                        enough, you are going to get a reel with its corresponding
                                        5-weight line. To make your life easier, I suggest grabbing a
                                        decent pair of polarized sunglasses so that the sun glare is not
                                        an issue. Finally, your flies. This, in my opinion, is the most important
                                        piece of gear. At first, choosing a fly is going to be extremely
                                        overwhelming, but you need to know what you are catching. Head on
                                        over to the Fish and Fly Library page to get a look at what flies
                                        might suit you the best. However, if you want to save time,
                                        grabbing a handful of dry flies, nymphs, and streamers will cover
                                        most situations. If you are feeling generous with cash, I would
                                        also suggest buying a Gerber multi-tool for cutting line and
                                        dehooking your fish. Congratulations, you are now fully geared to
                                        hit the water!"
                />
                </section>
            </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <AltParagraphBox 
                    image="images/wheretogo.jpg" 
                    title="Step 2: Where to Go?"
                    topparagraph="You got your gear, now where to go? The Carolinas are rich in a
                                    variety of ecosystems to be able to visit. For specific
                                    locations and up-to-date information on the best-reviewed spots,
                                    check out the Fisherman's Spotlight page. For now, lets talk
                                    about the basics of fishing in the Carolinas, from the
                                    mountains, to the streams, to the rivers, and finally the
                                    beaches." 
                    bottomparagraph="Firstly, the Carolinas offer the Appalachian Mountains,
                                    providing cool, clear streams stocked with trout. Going east you
                                    will find yourself in the Piedmont region where there are
                                    warm-water rivers and lakes full of bass, bream, and other
                                    panfish. Finally, for those wanting saltwater adventures, check
                                    out the salt marshes and tidal flats for redfish and speckled
                                    trout." 
                />
              </section>
            </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <ParagraphBox
                    image="images/whattocatch.jpg"
                    title="Step 3: What to Catch?"
                    topparagraph="For the freshwater anglers out there, there are going to be
                three main species to catch in the Carolinas. In the mountains,
                you are going to find mainly trout of the brown, rainbow, and
                brook varieties. Moving to the Piedmont, you will find more
                smallmouth bass. Finally, going further east into warmer rivers,
                lakes, and small ponds, largemouth bass take center stage."
                    bottomparagraph="For the saltwater anglers out there, there are going to be three
                main ones to find. In the coastal flats, redfish are easily
                found eating shrimp in shallow water. Next, commonly found in
                the tidal creeks, are the beautiful speckled trout. Finally,
                schooling in mid to low waters off the coast is flounder ready
                to eat a weighted streamer."
                />
              </section>
            </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <AltParagraphBox
                    image="images/cast.jpg"
                    title="Step 4: How to Cast"
                    topparagraph="Fly casting is all about technique and timing. Unlike regular
                spin-casting, fly fishing relies on the weight of the line to
                carry to weightless fly to the target. The key to getting a good
                cast is a smooth whipping motion followed by a crisp flick of
                the wrist. The goal is to create loops in the air very similar
                to a cowboy getting ready to rope a calf."
                    bottomparagraph="Once you get the hang of doing the very basic casts down you can
                begin to experiment. We are not going to go over all the kinds
                of different casts that exist out there, however, just for
                curisoity, the other kinds are the roll cost and double haul."
                />
              </section>
            </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <ParagraphBox
                    image="images/attract.jpg"
                    title="Step 5: How to Attract and Catch"
                    topparagraph="Attracting fish with your flies isn't just about getting the
                perfect cast, it's more about making your fly look as natural as
                possible. Fish are used to seeing real insects or crustaceans
                drifting and swimming, so the presentation is extremely key.
                Each fly you use is going to have a unique method for mimicking
                the movement of the insect the fly is copying."
                    bottomparagraph="First, dry flies are best done with a dead drift, where the fly
                will float naturally across the current. For nymphs, subtle
                twitches or lifts imitate a rising insect. When using streamers,
                try to do short, rapid strips to mimic wounded bait that could
                be an easy meal. Knowing how the fish behave and what they
                respond to will make it easier for you to get catches."
                />
              </section>
            </div>

            <div className="page-paragraph-content paragraph-color">
              <section className="f-container">
                <AltParagraphBox
                    image="images/handle.jpg"
                    title="Step 6: How to Handle"
                    topparagraph="Great, you caught a fish, now what? Proper handling is essential
                for the survival of the fish. You want to make this process as
                easy as possible for both parties involved as panicking will
                cause stress on both ends. Having a net to grab the fish and a
                pair of pliers to grab the hook will certainly make the entire
                process much easier."
                    bottomparagraph="For a safe and smooth release, first, grab the fish with a net.
                Firmly, but not hard, grab the fish with one hand and use pliers
                in your other to dehook the fish. Once you get the pictures you
                want, slowly guide the fish back into the water and watch it
                swim away for a safe release. Enjoy, you just caught and
                released a fish fly casting!"
                />
              </section>
            </div>

            <div className="guidepage-ending paragraph-color">
              <h2>Step 7: Have Fun!</h2>
            </div>
      </main>
    </>
  );
}

export default Guide;
