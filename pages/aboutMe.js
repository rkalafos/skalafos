import { Stack, Button, Card, Box } from '@chakra-ui/react'


export default function AboutMe() {
  return (
    <Stack align="column">
      <Box >
        <Card p={6} m={6}>
          Hello! My name is Sarah Kalafos, and I am a creative artist based in NYC, Boston, and DC.
          This website highlights me as a performer. For more details on my teaching, directing, and
          restaurant/retail experience, check me out on Linkedin. For less packaged performance material,
          check me out on youtube!
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