import { Container, Box, Image } from '@chakra-ui/react';
import { PageLayoutNoFooter } from 'src/layout';
import { motion } from 'framer-motion';

import GIF from '@assets/loading_run.gif';

const textAnimation = (text: string) => {
  const splitted = text.split('');
  return splitted.map((letter, index) => (
    <motion.div
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      animate={{
        color: ['#000000', '#FFA06E', '#000000']
      }}
      transition={{
        duration: 2.5,
        delay: index * 0.15,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {letter === '.' ? '\xa0.' : letter}
    </motion.div>
  ));
};

export const LoadingOnly = () => (
  <Container
    display="flex"
    minH="75vh"
    mb={20}
    alignItems="center"
    justifyContent="center"
    mt={-20}
    flexDirection="column"
    userSelect="none"
  >
    <Image
      src={GIF}
      objectFit="contain"
      w="md"
      zIndex={-99}
      ml={-20}
      draggable="false"
    />
    <Box
      display="flex"
      flexDirection="row"
      fontSize="3xl"
      fontFamily="Heading"
      mt={-14}
    >
      {textAnimation('Lodin.....')}
    </Box>
  </Container>
);

export const Loading = () => (
  <PageLayoutNoFooter title="Loading">
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="85vh"
      flexDirection="column"
      userSelect="none"
    >
      <Image src={GIF} objectFit="contain" w="md" zIndex={-99} ml={-20} />
      <Box
        display="flex"
        flexDirection="row"
        fontSize="3xl"
        fontFamily="Heading"
        mt={-14}
      >
        {textAnimation('Lodin.....')}
      </Box>
    </Container>
  </PageLayoutNoFooter>
);
