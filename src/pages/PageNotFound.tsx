import { Box, Button, Image, Heading, Flex } from '@chakra-ui/react';
import pageNotFoundImage from '@assets/page-not-found-image.svg';
import { PageAnimate } from 'src/layout';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <PageAnimate title="Not Found">
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      position="relative"
    >
      <Image
        objectFit="cover"
        src={pageNotFoundImage}
        w="100%"
        maxW="70ch"
        draggable="false"
      />
      <Box pt={10}>
        <Heading
          fontWeight="400"
          fontSize={{
            base: '2em',
            md: '4em'
          }}
          color="#231A51"
          lineHeight="92%"
          textAlign="center"
          pr="50px"
          pl="50px"
        >
          alamn idak itemuan
        </Heading>
      </Box>
      <Link to="/">
        <Button
          background="#FFA06F"
          borderRadius="50px"
          fontFamily="Subheading"
          mt={{
            base: 5,
            md: 8
          }}
          p={{
            md: '1em'
          }}
          fontSize={{
            base: '1em',
            md: '1.5em'
          }}
        >
          Kembali ke halaman utama
        </Button>
      </Link>
    </Flex>
  </PageAnimate>
);
