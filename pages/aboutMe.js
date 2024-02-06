import { Flex, Text, Card } from '@chakra-ui/react'


export default function AboutMe() {
    return(
        <Flex>
            <Card m={3} p={3}>
              <Text>
                Sarah is a Maryland native based in Boston, Massachusetts. She believes growing up in a small town has given her a gritty, 
                creative edge, as she has seen what creating art in unlikely places can do for communities. Sarah currently attends The 
                Boston Conservatory at Berklee College of Music, where she is pursuing a B.F.A. in musical theater with an emphasis 
                in directing. While she has extensive training in acting, dance, and vocal technique, she is most interested in how art can 
                inform greater parts of society.
              </Text>
            </Card>
            <Card m={3} p={3}>
              <Text>
                Her passion for this principle is what drives her efforts in humanitarian non-profit work, as well as her belief that 
                responsible directing goes hand in hand with historical dramaturgy. At the age of 16, Sarah founded Marley Music Mentors, 
                an after school program designed to introduce Anne Arundel county public school children to the arts. She has since then 
                taught music, drama, and dance at Cambridge Friends School and Boston Children's Chorus. The curriculum she developed was 
                built to encourage empathy, expression, and autonomy in her students.
              </Text>
            </Card>
            <Card m={3} p={3}>
              <Text>
                In addition to performance and education, Sarah has modeled for Strike Magazine, Palmarosa Jewelry, and several 
                photographers looking to build their portfolios. While she mainly specializes in lifestyle and commercial work, 
                she has dipped her toes in more editorial photography. A highlight for her is appearing in Sarah Katherine Lawless's 
                first music video, Five Feet Under, which allowed her to marry her dance and modeling experience. Sarah has also 
                choreographed for people with ranges of experience from elementary schoolers, to professional actors. Her favorite styles 
                are commercial jazz and contemporary. 
              </Text>
            </Card>
        </Flex>
    )
}