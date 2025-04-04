import "./css/IframeVideo.css";

function IframeVideo(props) {
  return (
    <div class="page-paragraph-content paragraph-color">
          <section class="f-container">
            <div id="video" class="page-paragraph-box">
              <h2>Helpful Introductory Video</h2>
              <iframe src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </section>
    </div>
  );
}

export default IframeVideo;
