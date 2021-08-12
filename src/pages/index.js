import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bgGradient="linear(to-tl, orange.400, orange.500)"
      align="center"
      justify="center"
    >
      <Flex direction="column" align="center">
        <Image src={logo} width="270" height="270" />
      </Flex>
    </Flex>
  );
}
