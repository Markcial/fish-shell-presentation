import React from "react";

import fish from 'url-loader?mimetype=image/png!./media/blinky.png';
import fisherman from 'url-loader?mimetype=image/png!./media/Horatio_McCallister.png';
import fisherman_website from 'url-loader?mimetype=image/png!./media/fisherman_website.png';
import fish_config_screenshot from 'url-loader?mimetype=image/png!./media/fish_config.png';
import bart_hand_testing from 'url-loader?mimetype=image/gif!./media/stop_testing_by_hand.gif';
import hackerman from 'url-loader?mimetype=image/gif!./media/hackerman.gif';
import throwing_up_rainbows from 'url-loader?mimetype=image/gif!./media/throwing_up_rainbows.gif';
import nerdy_lisa from 'url-loader?mimetype=image/gif!./media/nerdy_lisa.gif';
import fish_themes from 'url-loader?mimetype=image/png!./media/fisher_themes.png';
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
              <h2>
                <Appear fid="1"><span>Some people says that the sea is plenty of fish</span></Appear>
                <Appear fid="2"><span>, but none as this!</span></Appear>
              </h2>
              <Appear fid="3">
                <Image src={fish} height="120px" />
              </Appear>
            </Heading>
            <Appear fid="4">
              <h2>Sorry, i mean this one</h2>
            </Appear>
            <Appear fid="5">
              <Image src="https://fishshell.com/assets/img/screenshots/scripting.png"  />
            </Appear>
            <Footer>1</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>2</Header>
            <h2>Why do i should use fish, instead of another shells?</h2>
            <List>
              <ListItem textSize={"1.6rem"}>Great autosuggestion support, (you can even roll your own)</ListItem>
              <ListItem textSize={"1.6rem"}>Sane scripting, stop feeling like writting perl, shell scripts now make sense.</ListItem>
              <ListItem textSize={"1.6rem"}>Web based configuration, check your settings via a browser.</ListItem>
              <ListItem textSize={"1.6rem"}>True 24 bit color support, review logs easily with the coloring.</ListItem>
              <Appear fid="1"><ListItem textSize={"2rem"}>You can add abbreviations so you can do more typing less</ListItem></Appear>
            </List>
            <Footer>2</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>3</Header>
            <h2>Great autosuggestion support, (you can even roll your own)</h2>

            <Asciinema id={"1c5dab7zpb9crvlu0u0j59lwt"} />

            <Footer>3</Footer>
          </Slide>
          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>4</Header>
            <h2>Sane scripting, stop feeling like writting perl, shell scripts now make sense.</h2>

            <Asciinema id={"0icu6s9q5e0wcywcoxqitmkto"} />

            <Footer>4</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>5</Header>
            <h2>Web based configuration, check your settings via a browser.</h2>
            <p>Just write in your shell <code>fish_config</code> and voila!</p>

            <Image src={fish_config_screenshot} />

            <Footer>5</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>6</Header>
            <h2>True 24 bit color support, review logs easily with the coloring.</h2>

            <Asciinema id={"4ss7azfft9gzyo7z8apjth9kg"} />

            <Footer>6</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>7</Header>
            <h2>You can add abbreviations so you can do more typing less</h2>

            <Asciinema id={"cwpux7hsagvi4fpf4mdnz0hpo"} />

            <Footer>7</Footer>
          </Slide>

          <Slide transition={["fade"]} maxWidth={width} maxHeight={height}>
            <Header>8</Header>
            <Image src={hackerman} width="70%" />
            <Footer>8</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>9</Header>
            <h2>But wait, we have a package manager!</h2>
            <h2>
              <Appear fid="1"><span>Introducing... </span></Appear>
              <Appear fid="2"><span>Fisherman!</span></Appear>
            </h2>
            <Appear fid="3"><Image src={fisherman} /></Appear>
            <Footer>9</Footer>
          </Slide>

          <Slide transition={["fade", "zoom"]} maxWidth={width} maxHeight={height}>
            <Header>10</Header>
            <Image src={fisherman_website} />
            <Footer>10</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>11</Header>
            <h2>How to install fisherman?</h2>

            <CodePane
              lang="fish"
              style={{
                minWidth: null,
                maxWidth: null,
                margin: '20px 80px'
              }}
              source={"curl -Lo ~/.config/fish/functions/fisher.fish --create-dirs git.io/fisher"}
              margin="20px auto"
            />

            <h2>How to install a plugin?</h2>

            <CodePane
              lang="fish"
              style={{
                minWidth: null,
                maxWidth: null,
                margin: '20px 80px'
              }}
              source={require("raw!./samples/install.fish")}
              margin="20px auto"
            />

            <Footer>11</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>12</Header>
            <h2>The same goes for powerline themes</h2>

            <Image src={fish_themes} width="60%" />

            <Footer>12</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>13</Header>
            <h2>Do you test your code?</h2>
            <Appear fid="1"><h2>Then why don&#8216;t you test your shell scripts?</h2></Appear>
            <Appear fid="2"><h2>Do you like to behave like this on your scripts?</h2></Appear>
            <Appear fid="3"><img src={bart_hand_testing} /></Appear>
            <Footer>13</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>14</Header>
            <h2>With fisherman SysOps can check their tools work fine, without writing new code</h2>

            <Asciinema id={"7iohu0oogiete1e31m6a6gf4f"} />

            <Footer>14</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>15</Header>
            <h2>Le me, the first time i saw i can test my shell scripts.</h2>

            <img src={throwing_up_rainbows} width="760px" />

            <Footer>15</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>16</Header>
            <h2>Ey, it can get nerdier.</h2>

            <Heading style={{
              position:'relative',
              textShadow: "1px 0px 0px black, 0px 1px 0px black, -1px 0px 0px black, 0px -1px 0px black",
              top: '70px',
              margin: '20px'
            }} textSize="1.4rem" textColor="white">Oh great! I can create my own shell interfaces!</Heading>
            <img src={nerdy_lisa} width="850px" />

            <Footer>16</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>17</Header>
            <h2>Let me introduce to you. The get, choices, and menu plugins</h2>

            <Asciinema id={"1trnl9mehhg1nrgamcjyesqp2"} />

            <Footer>17</Footer>
          </Slide>

          <Slide transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>18</Header>

            <h2>Bibliography</h2>

            <List>
              <ListItem textSize={"1.6rem"}>
                <Link href="https://fishshell.com/">Fish shell website</Link>
              </ListItem>
              <ListItem textSize={"1.6rem"}>
                <Link href="https://fishshell.com/docs/current/index.html">Fish shell docs page</Link>
              </ListItem>
              <ListItem textSize={"1.6rem"}>
                <Link href="http://fisherman.sh">Fisherman website</Link>
              </ListItem>
              <ListItem textSize={"1.6rem"}>
                <Link href="https://github.com/fisherman">Fisherman github group</Link>
              </ListItem>
              <ListItem textSize={"1.6rem"}>
                <Link href="https://github.com/fisherman/awesome-fish">Awesome fish shell, curated list of resources for fish shell users</Link>
              </ListItem>
            </List>

            <Footer>18</Footer>
          </Slide>

          <Slide bgImage={fsociety} bgDarken={.3} transition={["slide"]} maxWidth={width} maxHeight={height}>
            <Header>19</Header>
            <Heading fit>Questions?</Heading>
            <Footer>19</Footer>
          </Slide>
        </Deck>
      </Spectacle>
  }
}
