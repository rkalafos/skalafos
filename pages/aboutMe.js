import { Stack, Button, Card, Box } from '@chakra-ui/react'


export default function AboutMe() {
  return (
    <Stack align="column">
      <Box >
        <Card p={6} m={6} backgroundColor={"gray.200"} color="black">
        Hello, my name is Sarah! I am a proud multi-hyphenate artist and Maryland native. 
        I credit a lot of my grittiness to growing up in a small town, as I’ve had the privilege 
        of creating art in unlikely places, and have seen what it can do for communities. 
        Recent graduate from The Boston Conservatory at Berklee College of Music, where I earned my 
        B.F.A. in musical theater with an emphasis in directing. While I love to kick face and belt 
        to the gods every now and then, I am most interested in how art can inform greater parts of society.
        </Card>
      </Box>
      <Stack align="column" mx={4}>
        <Button as={'a'} backgroundColor='white' color="black" href='Sarah_Kalafos_Resume.pdf' size={'lg'} mx={12} my={1} download>
          Download Resume
        </Button>
        <Button as={'a'} backgroundColor='teal.100' color="black" href='Sarah_Kalafos_Headshot.jpg' size={'lg'} mx={12} my={1} download>
          Download Headshot
        </Button>
        <Button as={'a'} backgroundColor='teal.300' color="black" href='mailto:skalafos@yahoo.com' target='_blank' size={'lg'} mx={12} my={1} >
          Email
        </Button>
        <Button as={'a'} backgroundColor='teal.500' color="white" href='https://www.instagram.com/skalafos/' target='_blank' size={'lg'} mx={12} my={1} >
          Instagram
        </Button>
        <Button as={'a'} backgroundColor='teal.700' color="white" href='https://www.facebook.com/sarah.kalafos' target='_blank' size={'lg'} mx={12} my={1} >
          Facebook
        </Button>
        <Button as={'a'} backgroundColor='teal.900' color="white" href='https://www.linkedin.com/in/sarah-kalafos-b8599b26b/' target='_blank' size={'lg'} mx={12} my={1} >
          LinkedIn
        </Button>
      </Stack>
    </Stack>
  )
}