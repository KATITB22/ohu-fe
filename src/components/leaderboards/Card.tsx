import { Avatar, Flex, Text } from '@chakra-ui/react';

interface Props {
  rank: number;
  name: string;
  username: string;
  fakultas: string;
  score: number | null;
}

export const Card = ({ username, name, score, rank, fakultas }: Props) => {
  const colors = ['#C9B037', '#B4B4B4', '#AD8A56'];
  return (
    <Flex
      direction="row"
      boxSizing="border-box"
      border="2px solid #FFA06F"
      borderRadius="10px"
      background="#FFFFFF"
      paddingLeft={{ md: '20px', base: '9px' }}
      paddingRight={{ md: '27px', base: '8px' }}
      py={2}
      alignItems="center"
    >
      <Text
        fontFamily="Subheading"
        fontSize="2xl"
        color={colors[rank - 1] ?? '#000000'}
        mr={3}
      >
        #{rank}
      </Text>
      <Avatar name={name} size="md" mx={1} />
      <Flex justifyContent="center" direction="column" ml={2}>
        <Text fontFamily="Subheading" fontSize="xl" color="#000000" mb={-2}>
          {name}
        </Text>
        <Text fontFamily="Caption" fontSize="xl" mb={-1}>
          {username}
        </Text>
        <Text fontFamily="Caption" fontSize="xl">
          {fakultas}
        </Text>
      </Flex>
      <Text marginLeft="auto" fontFamily="Subheading" fontSize="3xl">
        {score ?? 0}
      </Text>
    </Flex>
  );
};

export default Card;
