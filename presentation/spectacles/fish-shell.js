import React from "react";

import fish from 'url-loader?mimetype=image/png!./media/blinky.png';
import fisherman from 'url-loader?mimetype=image/png!./media/Horatio_McCallister.png';
import fisherman_website from 'url-loader?mimetype=image/png!./media/fisherman_website.png';
import fish_config_screenshot from 'url-loader?mimetype=image/png!./media/fish_config.png';
import bart_hand_testing from 'url-loader?mimetype=image/gif!./media/stop_testing_by_hand.gif';
import hackerman from 'url-loader?mimetype=image/gif!./media/hackerman.gif';
import fsociety from 'url-loader?mimetype=image/gif!./media/fsociety.gif';

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

import {Header, Asciinema, RemoteContent, Footer} from 'corporative/ui';

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
                <Appear fid="3">
                  <img src={fish} height="150px" />
                </Appear>
            </Heading>
            <br /><br /><br />
            <Appear fid="4">
              <span>Sorry, i meant this one</span>
            </Appear>
            <br />
            <Appear fid="5">
              <img src="https://fishshell.com/assets/img/screenshots/scripting.png" height="350px" />
            </Appear>
            <Footer>1</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>2</Header>
            <b>Why do i should use fish, instead of another shells?</b>
            <List>
              <ListItem textSize={"1.8rem"}>Full fledged autosuggestion support, (you can even roll your own)</ListItem>
              <ListItem textSize={"1.8rem"}>Sane scripting, stop feeling like writting perl, shell scripts now makes sense.</ListItem>
              <ListItem textSize={"1.8rem"}>Web based configuration, check your settings via a browser.</ListItem>
              <ListItem textSize={"1.8rem"}>True 24 bit color support, review logs easily with the coloring.</ListItem>
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

            <Asciinema id={"0icu6s9q5e0wcywcoxqitmkto"} />

            <Footer>4</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>5</Header>
            <b>Web based configuration, check your settings via a browser.</b>
            <p>Just write in your shell <code>fish_config</code> and voila!</p>

            <img src={fish_config_screenshot} />

            <Footer>5</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>6</Header>
            <b>True 24 bit color support, review logs easily with the coloring.</b>

            <Footer>6</Footer>
          </Slide>

          <Slide transition={["slide", "zoom"]} maxWidth={width} maxHeight={height}>
            <Header>7</Header>
            <b>Bonus track! You can add abbreviattions so you can type less</b>

            <Asciinema id={"cwpux7hsagvi4fpf4mdnz0hpo"} />

            <Footer>7</Footer>
          </Slide>

          <Slide transition={["zoom", "fade"]} maxWidth={width} maxHeight={height}>
            <Header>8</Header>
            <img src={hackerman} />
            <Footer>8</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>9</Header>
            <h2>But wait, we have a package manager!.</h2>
            <Appear fid="1"><span>Introducing...</span></Appear>
            <Appear fid="2"><span>Fisherman!</span></Appear>
            <br />
            <Appear fid="3"><img src={fisherman} /></Appear>
            <Appear fid="4"><img src="http://fisherman.sh/images/fisherman-logo.svg" /></Appear>
            <Footer>9</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>10</Header>
            <img src={fisherman_website} />
            <Footer>10</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>11</Header>
            <img src={bart_hand_testing} />
            <Footer>11</Footer>
          </Slide>

          <Slide bgImage={fsociety} transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>12</Header>
            <Heading fit>Questions?</Heading>
            <Footer>12</Footer>
          </Slide>
        </Deck>
      </Spectacle>
  }
}
