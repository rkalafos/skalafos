import Head from 'next/head';
import AboutMe from './aboutMe.js';
import Gallery from './gallery.js';
import Reels from './reels.js';
import Contact from './contact.js';
import { ChakraProvider } from '@chakra-ui/react';
import { VStack, HStack, Image, Center, Text, Button, Heading, StackDivider } from '@chakra-ui/react';

export default function Home() {

  return (
    <ChakraProvider>
        <Head>
          <title>Sarah Kalafos</title>
          <link rel="icon" href="butterfly.jpeg" />
        </Head>
        <main>
          <VStack divider={<StackDivider borderColor='gray.200' />}>
            <HStack>
              <Center width={'50%'}>
                <VStack>
                  <Heading fontSize='5xl'>Sarah Kalafos</Heading>
                  <Text fontSize='2xl'>Singer / Actor / Dancer</Text>
                  <Text fontSize='xl'>Director / Choreographer / Model</Text>
                  <a href='Sarah_Kalafos_Resume.pdf' download>
                    <Button colorScheme='teal'>
                      Download Resume
                    </Button>
                  </a>
                </VStack>
              </Center>
              <Image width={'50%'} src='sq_head.jpg'/>
            </HStack>
            <Heading>About Me</Heading>
            <AboutMe/>
            <Heading>Reels</Heading>
            <Reels/>
            <Heading>Gallery</Heading>
            <Gallery/>
            <Heading>Contact Info</Heading>
            <Contact/>
          </VStack>
        </main>
    </ChakraProvider>
  );
}
