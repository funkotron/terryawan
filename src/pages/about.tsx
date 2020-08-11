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
        title="About | Terry"
        desc="Terry Awan is a leading landscape and wildlife photographer."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Terry Awan</h1>
        <p>
          Born in Kenya, Terry grew up with direct access to natures beauty.
        </p>
        <p>
          <a href="">Website</a> - <a href="">More projects</a>
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
