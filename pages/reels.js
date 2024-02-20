import { Stack, Card, Heading } from '@chakra-ui/react';


export default function Reels() {
    return (
        <Stack direction={{ base: "column", lg: "row" }} spacing={0}>
            <Card m={6} p={6} backgroundColor={"gray.200"}>
                <Heading align="center">Vocal Reel</Heading>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FklxspQ3OKI?si=DOq909DegiP4oMM5&playlist=FklxspQ3OKI&loop=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Card>
            <Card m={6} p={6} backgroundColor={"gray.200"}>
                <Heading align="center">Dance Reel</Heading>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ev0jzG85F5c?si=UVwYh9wc8YjR8Zxv&playlist=Ev0jzG85F5c&loop=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Card>

        </Stack>

    )
}