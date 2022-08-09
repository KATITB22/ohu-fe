import { useEffect, useRef } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useAnimation, useInView } from 'framer-motion';
import Card from './_Card';
import ReactSVG from '../../../assets/react.svg';

const UnitShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        visibility: 'visible',
        transition: {
          type: 'spring',
          duration: 1,
        },
      });
    }
    if (!isInView) {
      animation.start({
        opacity: 0,
        visibility: 'hidden',
        y: -10,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [isInView]);

  return (
    <Box h="100%" w="100%" overflowX="hidden" overflowY="hidden">
      <Box
        pt={{
          base: 10,
          lg: 24,
        }}
        px={{
          md: 8,
          lg: 20,
        }}
        overflowY="hidden"
      >
        <Heading
          size={{
            base: 'xl',
          }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
          ref={ref}
        >
          Unit Showcase
        </Heading>
        <Flex
          flexDir={{
            base: 'column',
            md: 'row',
          }}
          justifyContent="space-between"
          alignItems={{
            base: 'center',
          }}
          gap={{
            base: 10,
          }}
          mt={{
            base: 10,
          }}
          pb={20}
        >
          <Card img={ReactSVG} label={'Unit A'} />
          <Card img={ReactSVG} label={'Unit B'} />
          <Card img={ReactSVG} label={'Unit C'} />
        </Flex>
      </Box>
    </Box>
  );
};

export default UnitShowcase;