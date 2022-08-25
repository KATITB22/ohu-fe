import { Box, Heading, Flex, Image } from '@chakra-ui/react';

interface CardProps {
  label?: string;
  isActive?: boolean;
  isInView?: boolean;
  img?: string;
  onClick: () => void;
}

const Card = ({ label, isActive, isInView, img, onClick }: CardProps) => (
  <Box
    h={{
      base: '20em',
      lg: '28em'
    }}
    w={{
      base: '12em',
      lg: '17em'
    }}
    bg="#37662F"
    m="0 auto"
    transition="250ms ease-in"
    transform={{
      base: isActive ? 'scale(1)' : 'scale(0.8)',
      lg: !isInView ? 'scale(0.8)' : isActive ? 'scale(1)' : 'scale(0.7)'
    }}
    position="relative"
    borderRadius="30px"
    cursor={isActive ? 'pointer' : 'default'}
    onClick={onClick}
    pointerEvents={isActive ? 'all' : 'none'}
    _hover={{
      boxShadow: 'dark-lg'
    }}
  >
    <Box
      bg="#588E50"
      position="absolute"
      w="100%"
      h={{
        base: isActive ? '75%' : '100%',
        lg: isActive && isInView ? '75%' : '100%'
      }}
      borderRadius="30px"
      transition="200ms"
    >
      <Flex h="full" justifyContent="center" alignItems="center">
        <Image
          draggable="false"
          w={{
            base: '7em',
            lg: '10em'
          }}
          src={img}
          zIndex="10"
          userSelect="none"
        />
      </Flex>
    </Box>
    <Flex
      position="absolute"
      bottom="0"
      w="100%"
      h="25%"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        opacity={{
          base: isActive ? '1' : '0',
          lg: isActive && isInView ? '1' : '0'
        }}
        transitionDelay="200ms"
        transition="200ms ease-out"
        color="#eeeeee"
        fontWeight="400"
      >
        {label}
      </Heading>
    </Flex>
  </Box>
);

export default Card;
