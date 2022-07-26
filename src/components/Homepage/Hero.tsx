import {
  Box,
  Flex,
  Heading,
  Center,
  Image,
  Spacer,
  AspectRatio,
  Link,
  Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';

import gedungKiri from '@assets/gedung_2.svg';
import gedungKanan from '@assets/gedung_1.svg';

const Hero = () => (
  <Box
    h="100%"
    w="100%"
    borderRadius="0% 0% 50% 50% / 0% 0% 10% 10% "
    pt={3}
    pb={{
      base: 10,
      lg: 28
    }}
    bg="#FFEBB0"
    position="relative"
  >
    <Flex flexDir="column" alignItems="center" gap={10} mt={7}>
      <Heading
        fontSize={{ base: '4xl', lg: '6xl' }}
        mb={{ base: 4, md: 10, lg: 16 }}
        text-align="center"
      >
        pn oue ni
      </Heading>
    </Flex>
    <Flex w="100%">
      <Spacer />
      <motion.section {...getTransition('bottom', { delay: 0.5 })}>
        <Center>
          <Flex flexDir="column" alignItems="center" gap="5">
            <AspectRatio
              w={{
                base: '15em',
                md: '25em',
                lg: '40em'
              }}
              ratio={16 / 9}
            >
              <iframe
                src="https://www.youtube.com/embed/Z00muhe17jM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
            <motion.section {...getTransition('bottom', { delay: 0.5 })}>
              <Link
                href="https://s.id/ohuitb2022"
                target="_blank"
                _hover={{ textStyle: 'none' }}
              >
                <Button
                  backgroundColor="#FFA06F"
                  w={{ base: '250px', lg: '20vw' }}
                  borderRadius="full"
                  fontSize={{ base: 'md', lg: '2xl' }}
                  color="white"
                  transition="all 0.15s ease-in-out"
                  _hover={{ backgroundColor: '#FFB08D' }}
                >
                  Panduan OHU
                </Button>
              </Link>
            </motion.section>
          </Flex>
        </Center>
      </motion.section>
      <Spacer />
    </Flex>
    <Image
      src={gedungKiri}
      alt="Gedung Kiri"
      draggable="false"
      position="absolute"
      top="20px"
      left={{
        base: '-30px',
        sm: '0'
      }}
      w={{
        base: '6.3em',
        md: '11em',
        lg: '14.5em',
        xl: '18.5em'
      }}
    />
    <Image
      src={gedungKanan}
      alt="Gedung Kanan"
      draggable="false"
      position="absolute"
      top="20px"
      right={{
        base: '-30px',
        sm: '0'
      }}
      w={{
        base: '5.3em',
        md: '9.1em',
        lg: '12em',
        xl: '15em'
      }}
    />
  </Box>
);

export default Hero;
