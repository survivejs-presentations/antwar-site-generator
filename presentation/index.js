// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    survivejs: require("../images/survivejs.png")
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Antwar
          </Heading>
          <Heading size={2} fit lineHeight={1} textColor="primary">
            Site Generator with Webpack and React
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Agenda</Heading>
          <List>
            <Appear>
              <ListItem>Background</ListItem>
            </Appear>
            <Appear>
              <ListItem>Configuration Model</ListItem>
            </Appear>
            <Appear>
              <ListItem>Layout</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>Interactive</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Demo time!</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Background</Heading>
          <List>
            <Appear>
              <ListItem>
                2015 February - Andreas Eldh (@eldh) began to develop Antwar
                based on Brad {"Denver's"}{" "}
                <Link href="http://braddenver.com/blog/2015/react-static-site.html">
                  React Static Site
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2015 July - Realized{" "}
                <Link href="https://survivejs.com/">my book</Link> needs a site
                and found Antwar
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Since then I rewrote the project in JavaScript, ported to a
                monorepo, added and removed tons of features based on my own
                requirements and knowledge
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="black">
            The problem: how to map content and structure to a site
          </Heading>
          <Appear>
            <Heading size={5} caps textColor="tertiary">
              Settled with a configuration based approach
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} caps fit textColor="black">
              Obviously inspired by webpack
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Configuration
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="black">
            The solution: minimal configuration
          </Heading>
          <Appear>
            <Heading size={5} caps textColor="tertiary">
              Complemented with Webpack
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>antwar.bootstrap.js</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/antwar-bootstrap.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>package.json</Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/package.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>antwar.config.js</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/antwar-configuration.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Layouts
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="black">
            The solution: EJS and React
          </Heading>
          <Appear>
            <Heading size={5} caps textColor="tertiary">
              Base template through EJS
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} caps fit textColor="black">
              Rest through React with a minimal API surface
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            <code>Interactive</code>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Layout with <code>Interactive</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/standalone.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Component</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/clickme.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Demo time!
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>SurviveJS</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="424px" />
          <Link href="https://twitter.com/bebraw">
            <Heading size={4}>Juho Vepsäläinen</Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
