import React from "react";
import ReactDOM from "react-dom";

class home extends React.Component {
  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        var xScrollPosition = window.scrollY;
        var teste = document.querySelector(".backgroundWithTitle");
        var seg = document.querySelector("#segundaFoto");

        if (seg == null) {
          return;
        }
        //terceiraFoto.style.transform = "translateY(" + xScrollPosition * - 0.5 + "px)";

        seg.style.transform = "translateY(" + xScrollPosition * -0.5 + "px)";

        teste.style.transform = "translateY(" + xScrollPosition * -0.1 + "px)";
        //content.style.transform = "translateY(" + xScrollPosition * - 0.5 + "px)";
      },
      false
    );
  }

  render() {
    return (
      <div>
        <div className="backgroundWithTitle">
          <div className="fullscreen-video-wrapper">
            <video
              src="assets/videos/bgpaint.mp4"
              autoplay="true"
              loop="true"
            />
          </div>
        </div>
        <div className="titleForBgWithTitle"> Para você, criador.</div>

        <div className="tituloDaSegundaFoto"> Compartilhe seus momentos.</div>
        <div id="segundaFoto" />

        <div className="tituloDaTerceiraFoto"> Exponha sua arte.</div>
        <div id="terceiraFoto" />
      </div>
    );
  }
}

export default home;
