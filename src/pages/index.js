import {
  Flex, Fade, ScaleFade, Slide, SlideFade,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/logo.png';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [animation, setAnimation] = useState(true);

  return (

    <Flex
      w="100vw"
      h="100vh"
      bgGradient="linear(to-tl, orange.400, orange.500)"
      align="center"
      justify="center"
    >
      <Flex direction="column" align="center">
        <ScaleFade initialScale={0} in={setAnimation}>
          <Image src={logo} width="270" height="270" />
        </ScaleFade>
      </Flex>
    </Flex>
  );
}
