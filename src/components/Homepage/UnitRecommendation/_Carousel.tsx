import { useState, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactSVG from '@assets/react.svg';
import 'swiper/css';

import { TourPopup } from '@components/map-tour/Popup';
import SwiperButton from './_SwiperButton';

const slide = [
  {
    id: 1,
    img: ReactSVG,
    label: 'Unit A'
  },
  {
    id: 2,
    img: ReactSVG,
    label: 'Unit B'
  },
  {
    id: 3,
    img: ReactSVG,
    label: 'Unit C'
  },
  {
    id: 4,
    img: ReactSVG,
    label: 'Unit D'
  },
  {
    id: 5,
    img: ReactSVG,
    label: 'Unit E'
  }
];

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Box pt={8}>
      <Swiper slidesPerView={5} centeredSlides>
        {slide.map((s, index) => (
          <SwiperSlide key={s.id}>
            {({ isActive }) => {
              if (isActive) {
                setPosition(index);
              }
              return (
                <TourPopup
                  isRec
                  img={s.img}
                  label={s.label}
                  isActive={isActive}
                  isInView={isInView}
                />
              );
            }}
          </SwiperSlide>
        ))}
        <Flex
          justifyContent="center"
          pt={14}
          pb={8}
          gap={20}
          display={{
            base: 'none',
            lg: 'flex'
          }}
          ref={ref}
        >
          {slide.map((s, index) => (
            <SwiperButton
              index={index}
              label={s.label}
              position={position}
              setPosition={setPosition}
              key={s.id}
            />
          ))}
        </Flex>
      </Swiper>
    </Box>
  );
};

export default Carousel;
