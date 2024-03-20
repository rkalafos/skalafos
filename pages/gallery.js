import { Center, Heading, GridItem, Image, Wrap, VStack } from '@chakra-ui/react';


export default function Gallery() {
  const images = [
    '/gallery/IMG_0226.jpeg',
    '/gallery/IMG_0309.JPEG',
    '/gallery/h_mom.jpg',
    '/gallery/v_head.jpg',
    '/gallery/IMG_0251.JPEG',	
    '/gallery/IMG_0310.JPEG',	
    '/gallery/h_pier.jpg',	
    '/gallery/v_pink.jpg',
    '/gallery/IMG_0284.JPEG',	
    '/gallery/bu_shot.png',	
    '/gallery/sq_head.jpg',	
    '/gallery/v_tub.jpg',
  ]
  return (
    <VStack>
      <Heading color="white">Gallery</Heading>
      <Center>
        <Wrap justify="center" spacing="20px">
          {images.map((image, i) => {
            return (
              <GridItem>
                <Image key={i} src={image} height={{sm: '100%', md: 300}} width={{sm: '100%'}}/>
              </GridItem>
            )
          })}
        </Wrap>
      </Center>
    </VStack>
  )
}