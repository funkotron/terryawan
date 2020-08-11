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
        <h1>Terry Awan</h1>
        <p>
          I was born in Kenya and grew up with direct access to natures beauty and a passion for capturing it on film. Over the years my work has progressed into digital and more landscape photography. You can purchase prints and license my photos.
        </p>
        <p>
          <a href="mailto:terry@terryawan.com">Contact Me</a> - <a href="https://www.instagram.com/terryawan77">Follow my Instagram</a>
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
