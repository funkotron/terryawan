import React from "react";
import { config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox } from "../elements";
import SEO from "../components/SEO";

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO
        title="About | Terry Awan Photography"
        desc="Terry Awan is a leading landscape and wildlife photographer."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Terry Awan Photography</h1>
        <p>Terry grew up with access to one of nature's most precious beauties, the game reserves of Kenya.
        It was here he developed his passion for capturing the marvels of wildlife on film.</p>
        <p>Over the years his work has evolved to leverage the latest advances in digital post processing, and
        as his passport stamps have multiplied, so too has the range of subject matter, with a growing focus upon landscape.
          </p>

        <p>
          To purchase Terry's prints and license his photos please contact by email.
        </p>
        <p>
          <a href="mailto:terry@terryawan.com">Contact Terry</a> - <a href="https://www.instagram.com/terryawan77">Follow Terry's Instagram</a>
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
