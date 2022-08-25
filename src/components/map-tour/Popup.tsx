import {
  Circle,
  Box,
  Flex,
  Text,
  Button,
  AspectRatio,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  Modal,
  Link,
  Icon
} from '@chakra-ui/react';
import RecCard from '@components/Homepage/UnitRecommendation/_Card';
import ShowcaseCard from '@components/Homepage/UnitShowcase/_Card';
import { FaTimes } from 'react-icons/fa';

interface IPopup {
  children?: React.ReactNode;
  isRec?: boolean;
  isShowcase?: boolean;
  label?: string;
  isActive?: boolean;
  isInView?: boolean;
  img?: string;
}

export const TourPopup = ({
  children,
  isRec,
  isShowcase,
  label,
  isActive,
  isInView,
  img
}: IPopup) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO: handle onair
  // TODO: handle data fix
  const onAir = true; // dummy data
  return (
    <>
      {isRec ? (
        <RecCard
          label={label}
          isActive={isActive}
          isInView={isInView}
          img={img}
          onClick={onOpen}
        />
      ) : isShowcase ? (
        <ShowcaseCard img={img} label={label} onClick={onOpen} />
      ) : (
        <Text
          color="#278DB5"
          textAlign="center"
          cursor="pointer"
          onClick={onOpen}
          _hover={{ textDecoration: 'underline' }}
        >
          {children}
        </Text>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <Box
            position="relative"
            py="10"
            px="10"
            w="100%"
            height="100%"
            borderWidth="none"
            borderRadius="10px"
            bgColor="#fffbf2"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <Text fontFamily="Heading" fontSize="32pt">
                  Unit A
                </Text>
                <Flex
                  background="#79C7D4"
                  boxShadow="0px 1px 7px 2px rgba(121, 199, 212, 0.62)"
                  borderRadius="8.5px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  w="4em"
                  h="1.5em"
                  ml="1em"
                >
                  <Circle size="0.6em" bg={onAir ? '#CB3946' : '#363636'} />
                  <Text
                    fontWeight="500"
                    fontSize="0.7em"
                    color="#FFFFFF"
                    fontFamily="Subheading"
                    fontStyle="normal"
                  >
                    {onAir ? 'On Air' : 'Off Air'}
                  </Text>
                </Flex>
              </Flex>
              <Icon
                as={FaTimes}
                h={7}
                w={7}
                cursor="pointer"
                onClick={onClose}
              />
            </Flex>
            <Box
              borderRadius="5px"
              bgColor="#ff7d4c"
              borderColor="#ff7d4c"
              borderWidth="3px"
              mt="-2"
              mb="3"
            />
            <AspectRatio maxW="560px" ratio={16 / 9}>
              <Box
                as="iframe"
                title="liveStream"
                src="https://www.youtube.com/embed/L5oAdk4x7a0"
                allowFullScreen
              />
            </AspectRatio>
            <Text fontFamily="Heading" fontSize="32pt" mt={6}>
              unow
            </Text>
            <Box
              borderRadius="5px"
              bgColor="#ff7d4c"
              borderColor="#ff7d4c"
              borderWidth="3px"
              mt="-2"
              mb="3"
            />
            <Text
              mt={2}
              fontFamily="Body"
              fontSize="12pt"
              lineHeight="short"
              align="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              tellus, sodales non mauris id, placerat fringilla elit. In non sem
              porta, tristique velit in, vestibulum turpis. Nulla quis elit
              ipsum. Nunc non mi id diam accumsan posuere tincidunt in lectus.
              Vivamus tempus purus dui, in luctus nisi commodo eget. Fusce
              imperdiet metus arcu, ullamcorper vehicula nulla tempus sit amet.
              In tortor purus, malesuada ac tempus sed, pharetra ut leo. Ut sit
              amet turpis ut turpis iaculis elementum. Quisque convallis auctor
              turpis eget pulvinar. Vestibulum blandit massa eu ipsum lobortis,
              ac malesuada turpis pharetra.
            </Text>
            <Text fontFamily="Heading" fontSize="32pt" mt={6}>
              iio
            </Text>
            <Box
              borderRadius="5px"
              bgColor="#ff7d4c"
              borderColor="#ff7d4c"
              borderWidth="3px"
              mt="-2"
              mb="3"
            />
            <Text
              mt={2}
              fontFamily="Body"
              fontSize="12pt"
              lineHeight="short"
              align="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              tellus, sodales non mauris id, placerat fringilla elit. In non sem
              porta, tristique velit in, vestibulum turpis. Nulla quis elit
              ipsum. Nunc non mi id diam accumsan posuere tincidunt in lectus.
              Vivamus tempus purus dui, in luctus nisi commodo eget. Fusce
              imperdiet metus arcu, ullamcorper vehicula nulla tempus sit amet.
              In tortor purus, malesuada ac tempus sed, pharetra ut leo. Ut sit
              amet turpis ut turpis iaculis elementum. Quisque convallis auctor
              turpis eget pulvinar. Vestibulum blandit massa eu ipsum lobortis,
              ac malesuada turpis pharetra.
            </Text>
            <Text fontFamily="Heading" fontSize="24pt" mt={4} align="center">
              ntresed?
            </Text>
            <Link href="https://google.com" isExternal>
              <Button
                type="button"
                fontSize="18pt"
                height="32pt"
                width="100%"
                alignItems="center"
                bg="#ff7d4c"
                borderRadius="150px"
                fontWeight="semibold"
                transition="all 0.15s ease-in-out"
                _hover={{
                  bg: '#d85526'
                }}
                _active={{
                  bg: '#ba431b'
                }}
              >
                Click Here
              </Button>
            </Link>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
