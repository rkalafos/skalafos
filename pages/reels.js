import { AspectRatio, HStack } from '@chakra-ui/react';


export default function Reels() {
    return(
        <HStack>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/FklxspQ3OKI?si=DOq909DegiP4oMM5&playlist=FklxspQ3OKI&loop=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            />
            <iframe 
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/Ev0jzG85F5c?si=UVwYh9wc8YjR8Zxv&playlist=Ev0jzG85F5c&loop=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            />
        </HStack>

    )
}