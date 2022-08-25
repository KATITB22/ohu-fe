import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Stack,
  Button,
  Show
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ImageBalloon from '@assets/events_balloon.svg';
import ImageJoget from '@assets/events_joget.svg';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';

const Event: () => JSX.Element = () => {
  // TODO: link mission where
  const links = [
    { label: 'OHU Map Tour', to: '/tour' },
    { label: 'Mission', to: '/' },
    { label: 'Leaderboard', to: '/leaderboard' }
  ];

  return (
    <Box backgroundColor="#FFEBB0" py={5} overflow="hidden">
      <Flex
        justifyContent={{ base: 'center', lg: 'space-around' }}
        alignItems="center"
        ml={{ base: '14ch', lg: 0 }}
        mb={{ base: '-5ch', lg: 0 }}
      >
        <motion.div {...getTransition('bottom', { delay: 0.5 })}>
          <Show above="lg">
            <Text fontSize="3xl" fontFamily="Subheading">
              Apa saja yang dapat kita lakukan di OHU Event?
            </Text>
          </Show>
        </motion.div>
        <motion.div {...getTransition('bottom', { delay: 0.5 })}>
          <Heading fontSize={{ base: '5xl', lg: '6xl' }} fontFamily="Heading">
            vens
          </Heading>
        </motion.div>
      </Flex>

      <Flex
        justifyContent={{ base: 'center', lg: 'space-evenly' }}
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        alignItems="center"
      >
        <motion.div
          style={{ width: '30%', maxWidth: '50ch' }}
          {...getTransition('left', { delay: 0.5 })}
        >
          <Image
            display={{ base: 'none', lg: 'block' }}
            draggable="false"
            src={ImageBalloon}
            objectFit="contain"
          />
        </motion.div>
        <motion.div {...getTransition('bottom', { delay: 0.5 })}>
          <Stack
            direction="column"
            spacing={{ base: 5, lg: 8 }}
            justify="center"
          >
            {links.map((item) => (
              <Link to={item.to} key={item.label}>
                <Button
                  backgroundColor="#FFA06F"
                  w={{ base: '250px', lg: '20vw' }}
                  borderRadius="full"
                  fontSize={{ base: 'lg', lg: '2xl' }}
                  color="white"
                  transition="all 0.15s ease-in-out"
                  _hover={{ backgroundColor: '#FFB08D' }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </motion.div>

        <motion.div
          style={{ width: 'max(220px,20%)', maxWidth: '40ch' }}
          {...getTransition('right', { delay: 0.5 })}
        >
          <Image
            src={ImageJoget}
            draggable="false"
            objectFit="contain"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Event;
