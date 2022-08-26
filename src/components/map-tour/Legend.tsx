import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  Heading,
  Image,
  useMediaQuery
} from '@chakra-ui/react';
import { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';
import { motion } from 'framer-motion';

export const TourLegend = ({
  data,
  map
}: {
  data: TourData;
  map: Map | null;
}) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const Legend = ({
    logo,
    title,
    position
  }: {
    logo: string;
    title: string;
    position: [number, number];
  }) => (
    <Flex>
      <Image
        borderRadius="full"
        boxSize="67px"
        src={logo}
        draggable="false"
        onClick={() => map?.setView(position)}
      />
      <Text textAlign="center" fontSize="30px" m="auto 27px" mr="0">
        {title}
      </Text>
    </Flex>
  );

  const animations = {
    initialTitle: {
      opacity: 0,
      transform: 'translateY(-20px)'
    },
    viewTitle: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: {
        duration: 0.4,
        delay: 0.1
      }
    },
    viewLegend: {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: {
        duration: 0.5,
        delay: 0.1
      }
    },
    initialLeft: {
      opacity: 0,
      transform: 'translateX(-40px)'
    },
    initialRight: {
      opacity: 0,
      transform: 'translateX(40px)'
    }
  };

  return (
    <Flex p="5%">
      <Box mr={isMobile[0] ? '10px' : '100px'} p="10px" m="auto">
        <motion.section
          variants={animations}
          initial="initialTitle"
          whileInView="viewTitle"
          viewport={{ once: true }}
        >
          <Heading fontSize={{ base: '3xl', lg: '5xl' }} m="auto">
            Leen
          </Heading>
        </motion.section>
        <SimpleGrid
          columns={isMobile[0] ? 1 : 2}
          spacingY="5"
          spacingX="100px"
          mt="53px"
        >
          {data.markers.map((marker, idx) => (
            <motion.section
              variants={animations}
              initial={idx % 2 === 0 ? 'initialLeft' : 'initialRight'}
              whileInView="viewLegend"
              viewport={{ once: true }}
            >
              <Legend {...marker} />
            </motion.section>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
