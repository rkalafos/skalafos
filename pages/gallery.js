import { Center, Heading, GridItem, Image, Wrap, VStack } from '@chakra-ui/react';

export default function Gallery() {
  const images = [
    '/gallery/headshot1.jpeg',
    '/gallery/headshot2.jpeg',
    '/gallery/choreo_showcase.jpeg',
    '/gallery/v_tub.jpg',
    '/gallery/RNR_pic.jpeg',
    '/gallery/IMG_0284.JPEG',	
    '/gallery/IMG_0251.JPEG',	
    '/gallery/IMG_7243.jpeg',
    '/gallery/IMG_7966.JPEG',
    '/gallery/IMG_0226.jpeg',
    '/gallery/bu_shot.png',	
    '/gallery/IMG_0267.JPG',
    '/gallery/v_pink.jpg',    
    '/gallery/headshot3.jpeg',
    '/gallery/sq_head.jpg',	
    '/gallery/h_mom.jpg',
    '/gallery/IMG_0309.JPEG',
    '/gallery/IMG_0310.JPEG',
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