import {Center, Grid, GridItem, Image } from '@chakra-ui/react'


export default function Gallery() {
    return(
        <Center>
              <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(1, 1fr)' gap={4}>
                <GridItem>
                  <Image src='v_tub.jpg'/>
                </GridItem>
                <GridItem>
                  <Image src='h_mom.jpg'/>
                </GridItem>
                <GridItem>
                  <Image src='v_head.jpg'/>
                </GridItem>
                <GridItem>
                  <Image src='v_pink.jpg'/>
                </GridItem>
                <GridItem>
                  <Image src='h_pier.jpg'/>
                </GridItem>
              </Grid>
        </Center>
    )
}