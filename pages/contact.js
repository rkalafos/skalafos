import { HStack, Button, Spacer } from '@chakra-ui/react'


export default function Contact() {
    return(
        <HStack m={6} p={6}>
            <Button>
                <a href='mailto:skalafos@yahoo.com' target='_blank'>
                    Email
                </a>
            </Button>
            <Spacer/>
            <Button>
                <a href='https://www.instagram.com/skalafos/' target='_blank'>
                    Instagram
                </a>
            </Button>
            <Spacer/>
            <Button>
                <a href='https://www.facebook.com/sarah.kalafos' target='_blank'>
                    Facebook
                </a>
            </Button>
            <Spacer/>
            <Button>
                <a href='https://www.linkedin.com/in/sarah-kalafos-b8599b26b/' target='_blank'>
                    LinkedIn
                </a>
            </Button>
        </HStack>
    )
}