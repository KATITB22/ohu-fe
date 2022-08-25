import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';
import { TourPopup } from '@components/map-tour/Popup';
import { getUnits } from 'src/service/unit';

const UnitShowcase = () => {
  const [showcase, setShowcase]: any = useState([]);

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
          duration: 1
        }
      });
    }
    if (!isInView) {
      animation.start({
        opacity: 0,
        visibility: 'hidden',
        y: -10,
        transition: {
          duration: 0.5
        }
      });
    }
  }, [isInView]);

  useEffect(() => {
    const fetchUnitShowcase = async () => {
      try {
        const data = await getUnits('/units/showcase?populate=*');
        setShowcase(data);
      } catch (err) {
        //
      }
    };

    fetchUnitShowcase();
  }, []);

  return (
    <Box h="100%" w="100%" overflowX="hidden" overflowY="hidden">
      <motion.section
        {...getTransition('right', { delay: 0.5, duration: 2.25 })}
      >
        <Box
          pt={{
            base: 10,
            lg: 24
          }}
          px={{
            md: 8,
            lg: 20
          }}
          overflowY="hidden"
        >
          <Heading
            size={{
              base: '2xl'
            }}
            textAlign={{
              base: 'center',
              md: 'left'
            }}
            ref={ref}
          >
            ni Soca
          </Heading>
          <Flex
            flexDir={{
              base: 'column',
              md: 'row'
            }}
            justifyContent="space-between"
            alignItems={{
              base: 'center'
            }}
            gap={{
              base: 10
            }}
            mt={{
              base: 10
            }}
            pb={20}
          >
            {showcase.map((unit: any) => (
              <TourPopup
                isShowcase
                img={`${import.meta.env.VITE_API_BASE_URL}${unit.image.url}`}
                label={unit.name}
              />
            ))}
          </Flex>
        </Box>
      </motion.section>
    </Box>
  );
};

export default UnitShowcase;
