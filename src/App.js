import React from "react";
import { Parallax } from "react-spring";
import Header from "./components/Header";
import Slide1 from "./components/Slide1/index";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3/index";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5/index";

const url = (name) => `url(img/${name})`;

class App extends React.Component {
  parallaxScrollTo = (id) => {
    this.parallax.scrollTo(id);
  };

  render() {
    return (
      <>
        <Header scrollTo={this.parallaxScrollTo} />
        <Parallax ref={(ref) => (this.parallax = ref)} pages={5}>
          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              background: `${url("bg.webp")} repeat`,
              zIndex: 1,
              opacity: 0.5,
            }}
          />

          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
        </Parallax>
      </>
    );
  }
}

export default App;
