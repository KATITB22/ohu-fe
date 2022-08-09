import { Box, Flex, Image, Text, Center } from '@chakra-ui/react';

interface ICard {
  img: string;
  label: string;
}

const Card = ({ img, label }: ICard) => {
  return (
    <Box
      borderRadius="10px"
      bg="#FFFFFF"
      boxShadow="4px 9px 28px rgba(0, 0, 0, 0.25);"
      h={{
        base: '18em',
        md: '18em',
        lg: '23em',
      }}
      w={{
        base: '15em',
        md: '13em',
        lg: '20em',
      }}
      _hover={{
        boxShadow: '4px 9px 28px rgba(0, 0, 0, 0.5);',
        transform: 'scale(1.05)',
        transition: '200ms linear',
      }}
      cursor="pointer"
    >
      <Center h="70%">
        <Image
          src={img}
          w={{
            base: '8em',
            lg: '11em',
          }}
          borderTopRadius="10px"
        />
      </Center>
      <Flex h="30%" justifyContent="center" alignItems="center">
        <Text fontFamily="Subheading" fontSize="4xl">
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
