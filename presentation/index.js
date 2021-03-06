// Import React
import React from "react";

import FishShellSpectacle from "./spectacles/fish-shell";


export default class Presentation extends React.Component {
  render() {
    return <FishShellSpectacle />
  }
}

/**
<Slide transition={["zoom"]} bgColor="primary">
  <Heading size={1} fit caps lineHeight={1} textColor="black">
    Spectacle
  </Heading>
  <Heading size={1} fit caps>
    A ReactJS Presentation Library
  </Heading>
  <Heading size={1} fit caps textColor="black">
    Where You Can Write Your Decks In JSX
  </Heading>
  <Link href="https://github.com/FormidableLabs/spectacle">
    <Text bold caps textColor="tertiary">View on Github</Text>
  </Link>
  <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
</Slide>
<Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
  <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
  <Heading size={2} caps fit textColor="primary" textFont="primary">
    Wait what?
  </Heading>
</Slide>
<Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
  <CodePane
    lang="jsx"
    source={require("raw!../assets/deck.example")}
    margin="20px auto"
  />
</Slide>
<Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
  <Appear fid="1">
    <Heading size={1} caps fit textColor="primary">
      Full Width
    </Heading>
  </Appear>
  <Appear fid="2">
    <Heading size={1} caps fit textColor="tertiary">
      Adjustable Darkness
    </Heading>
  </Appear>
  <Appear fid="3">
    <Heading size={1} caps fit textColor="primary">
      Background Imagery
    </Heading>
  </Appear>
</Slide>
<Slide transition={["zoom", "fade"]} bgColor="primary">
  <Heading caps fit>Flexible Layouts</Heading>
  <Layout>
    <Fill>
      <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        Left
      </Heading>
    </Fill>
    <Fill>
      <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        Right
      </Heading>
    </Fill>
  </Layout>
</Slide>
<Slide transition={["slide"]} bgColor="black">
  <BlockQuote>
    <Quote>Wonderfully formatted quotes</Quote>
    <Cite>Ken Wheeler</Cite>
  </BlockQuote>
</Slide>
<Slide transition={["spin", "zoom"]} bgColor="tertiary">
  <Heading caps fit size={1} textColor="primary">
    Inline Markdown
  </Heading>
  <Markdown>
    {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
    `}
  </Markdown>
</Slide>
<Slide transition={["slide", "spin"]} bgColor="primary">
  <Heading caps fit size={1} textColor="tertiary">
    Smooth
  </Heading>
  <Heading caps fit size={1} textColor="secondary">
    Combinable Transitions
  </Heading>
</Slide>
<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
  <List>
    <Appear><ListItem>Inline style based theme system</ListItem></Appear>
    <Appear><ListItem>Autofit text</ListItem></Appear>
    <Appear><ListItem>Flexbox layout system</ListItem></Appear>
    <Appear><ListItem>React-Router navigation</ListItem></Appear>
    <Appear><ListItem>PDF export</ListItem></Appear>
    <Appear><ListItem>And...</ListItem></Appear>
  </List>
</Slide>
**/
