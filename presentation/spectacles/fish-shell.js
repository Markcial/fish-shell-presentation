import React from "react";

import fish from 'url-loader?mimetype=image/png!./media/blinky.png';
import fisherman from 'url-loader?mimetype=image/png!./media/Horatio_McCallister.png';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("assets/corporative/patch.css");

const theme = createTheme({
  primary: "#ffffff",
  secondary: "#545454",
  tertiary: "#EC276D"
});

import {Header, Asciinema, Footer} from 'corporative/ui';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Slide,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Spectacle,
  Text
} from "spectacle";

export default class FishShellSpectacle extends React.Component {
  render () {
    let width = screen.width || 1024;
    let height = screen.height || 768;
    return <Spectacle theme={theme}>
        <Deck transition={["zoom", "spin"]} transitionDuration={500} progress={"bar"}>
          <Slide className="primary" transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>1</Header>
            <Heading size={.3} textColor="primary">
                <Appear fid="1"><span>Some people says that the sea is plenty of fish</span></Appear>
                <Appear fid="2"><span>, but none as this!</span></Appear>
            </Heading>
            <Appear fid="3">
              <img src={fish} />
            </Appear>
            <Appear fid="4">
              <span>Sorry, i mean this one</span>
            </Appear>
            <Appear fid="5">
              <img src="https://fishshell.com/assets/img/screenshots/scripting.png" />
            </Appear>
            <Footer>1</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>2</Header>
            <b>Why do i should use fish, instead of another shells?</b>
            <List>
              <ListItem>Full fledged autosuggestion support, (you can even roll your own)</ListItem>
              <ListItem>Sane scripting, stop feeling like writting perl, shell scripts now makes sense.</ListItem>
              <ListItem>Web based configuration, check your settings via a browser.</ListItem>
              <ListItem>True 24 bit color support, review logs easily with the coloring.</ListItem>
            </List>
            <Footer>2</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>3</Header>
            <b>Full fledged autosuggestion support, (you can even roll your own)</b>


            <Asciinema id={"1c5dab7zpb9crvlu0u0j59lwt"} />

            <Footer>3</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>4</Header>
            <b>Sane scripting, stop feeling like writting perl, shell scripts now makes sense.</b>
            <iframe src="http://asciinema.org/a/1c5dab7zpb9crvlu0u0j59lwt" />
            <Footer>4</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>5</Header>
            <b>Web based configuration, check your settings via a browser.</b>
            <iframe src="http://asciinema.org/a/1c5dab7zpb9crvlu0u0j59lwt" />
            <Footer>5</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>3</Header>
            que tal estamos?
            <img src={fisherman} />
            <Footer>3</Footer>
          </Slide>
        </Deck>
      </Spectacle>
  }
}
