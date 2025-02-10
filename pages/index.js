import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, VStack, Card, Image } from '@chakra-ui/react';

export default function Home() {

  return (
    <ChakraProvider>
      <Head>
        <title>Sarah Kalafos</title>
        <link rel="icon" href="butterfly.jpeg" />
      </Head>
      <main>
        <VStack spacing={100} height={'100%'}>
          <Button as={'a'} backgroundColor='teal.500' color="white" href='https://skalafos.wixsite.com/sarahkalafos' size={'lg'} mx={12} my={12} >
            Go to Sarah's Site!
          </Button>
        </VStack>
      </main>
    </ChakraProvider >
  );
}
