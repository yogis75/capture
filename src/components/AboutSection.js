import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";

//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </Title>
        <Paragraph variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </Paragraph>
        <Button variants={fade}>Contact Us</Button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

const Button = styled(motion.button)`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    margin-left: 8%;
  }
`;

const Title = styled.div`
  @media (max-width: 768px) {
    padding-left: 8%;
  }
`;

const Paragraph = styled(motion.p)`
  @media (max-width: 768px) {
    padding-left: 8%;
  }
`;

export default AboutSection;
