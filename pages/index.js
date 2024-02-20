import Head from 'next/head';
import AboutMe from './aboutMe.js';
import Gallery from './gallery.js';
import Reels from './reels.js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import { VStack, Image, Center, Heading, Stack, Box } from '@chakra-ui/react';

export default function Home() {

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Sarah Kalafos</title>
        <link rel="icon" href="butterfly.jpeg" />
      </Head>
      <main>
        <VStack spacing={0} background={"black"} >
          <Box background={"black"} width={"100%"} alignItems={{ base: "left", md: "center" }}>
            <Heading color="white" p={3} alignItems={{ base: "left", md: "center" }}>Sarah Kalafos</Heading>
          </Box>
          <Stack direction={{ base: "column", lg: "row" }} spacing={0}>
            <Image width={{ base: '100%', lg: '60%' }} src='headshot2.jpg' />
            <Center width={{ base: '100%', lg: '40%' }} background={"black"}>
              <AboutMe />
            </Center>
          </Stack>
          <Reels />
          <Gallery />
        </VStack>
      </main>
    </ChakraProvider >
  );
}
