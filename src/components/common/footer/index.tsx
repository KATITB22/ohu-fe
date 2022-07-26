import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  VStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Logo from '@assets/logo.png';
import { sponsorObject, medparObject } from 'src/util/sponsorMedpar';
import { getTransition } from 'src/util/transition';
import Partner from '../sponsorMedpar/partner';

const socials = [
  {
    to: 'https://twitter.com/oskmitb',
    icon: <FaTwitter size={27} />,
    hover: '#1DA1F2'
  },
  {
    to: 'https://www.instagram.com/oskm.itb/',
    icon: <FaInstagram size={27} />,
    hover: '#FD5949'
  },
  {
    to: 'https://www.youtube.com/channel/UCmkkBEqwMZ1SEZN937pdpgA',
    icon: <FaYoutube size={27} />,
    hover: '#FF0000'
  }
];

const Footer = () => (
  <>
    <Flex
      bg="#ffa06e"
      alignItems="center"
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      py={5}
      px={{ base: 5, md: 16 }}
      flexDirection={{ base: 'column', md: 'row' }}
      overflowX="hidden"
    >
      <Box display="flex" flexDirection="column" alignSelf="center">
        <Link to="/">
          <Flex
            alignItems="center"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Image
              src={Logo}
              draggable="false"
              w="50px"
              objectFit="contain"
              mr={{ base: 0, md: 2 }}
              mb={{ base: 2, md: 0 }}
              borderRadius="50%"
              transition="all 0.15s ease-in-out"
              _hover={{
                transform: 'scale(1.25)'
              }}
            />
            <Text
              fontSize="3xl"
              fontFamily="Heading"
              transition="all 0.15s ease-in-out"
              textShadow="-1px -2px 0px #FFEBB0"
              textAlign="center"
              _hover={{
                transform: 'scale(1.05)',
                color: '#FFEBB0',
                textShadow: '-1px -2px 0px #000000'
              }}
            >
              OHU 2022
            </Text>
          </Flex>
        </Link>
        <Text mt={1} fontSize="xl" fontFamily="Caption" textAlign="center">
          &copy; DEVA 2022 - Event & Attendance
        </Text>
      </Box>
      <Flex flexDirection="column" alignSelf="center" mt={{ base: 5, md: 0 }}>
        <Text
          fontFamily="Subheading"
          fontSize="2xl"
          textAlign={{ base: 'center', md: 'right' }}
          mb={2}
        >
          Find us on
        </Text>
        <Box>
          <Stack direction="row" spacing={{ base: 3, md: 6 }}>
            {socials.map(({ to, icon, hover }) => (
              <a key={to} href={to} target="_blank" rel="noopener noreferrer">
                <Box
                  transition="all 0.15s ease-in-out"
                  _hover={{ color: hover, transform: 'scale(1.2)' }}
                >
                  {icon}
                </Box>
              </a>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Flex>
    <Flex alignItems="center" alignSelf="center" bg="#ffa06e">
      <VStack width="full">
        <motion.div {...getTransition('bottom', { duration: 2 })}>
          <Heading
            fontFamily="Heading"
            fontSize={{ base: '4xl', lg: '5xl' }}
            color="gray.900"
            text-align="center"
          >
            Sponsors
          </Heading>
        </motion.div>
        <motion.div {...getTransition('left', { duration: 2 })}>
          <Partner partners={sponsorObject} />
        </motion.div>
        <motion.div {...getTransition('bottom', { duration: 2 })}>
          <Heading
            fontFamily="Heading"
            fontSize={{ base: '4xl', lg: '5xl' }}
            color="gray.900"
            text-align="center"
          >
            Media Partners
          </Heading>
        </motion.div>
        <motion.div {...getTransition('right', { duration: 2 })}>
          <Partner partners={medparObject} />
        </motion.div>
      </VStack>
    </Flex>
  </>
);

export default Footer;
