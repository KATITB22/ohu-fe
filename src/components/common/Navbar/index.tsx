import { useRef, useState } from 'react';
import Logo from '@assets/logo_sementara.png';
import DashboardLogo from '@assets/dashboard_menu.svg';
import LogoutLogo from '@assets/logout_menu.svg';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Show,
  Text,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link, matchPath } from 'react-router-dom';

const Navbar = () => {
  // TODO: handle login (BE)
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Tour', link: '/tour' },
    { label: 'Leaderboard', link: '/leaderboard' }
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef<HTMLButtonElement>(null);

  const UtilNav = () =>
    isLogin ? (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="transparent"
          textColor="black"
          fontSize="lg"
          px={0}
          fontFamily="Subheading"
          _hover={{ bg: 'transparent', textColor: '#F4A641' }}
        >
          {/* TODO: Ganti sama user yang login? */}
          Lorem Ipsum
        </MenuButton>
        <MenuList borderColor="#FFA06E">
          <MenuItem fontFamily="Subheading">
            <Image
              src={DashboardLogo}
              mr="4"
              alt="dashboard_logo"
              draggable="false"
            />
            <Text>Dashboard</Text>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setIsLogin(false)} fontFamily="Subheading">
            <Image
              src={LogoutLogo}
              mr="4"
              alt="logout_logo"
              draggable="false"
            />
            <Text>Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    ) : (
      <Button
        boxShadow="0px 1px 7px 2px rgba(244, 166, 65, 0.62)"
        fontSize="md"
        px={8}
        color="white"
        bgColor="#F4A641"
        onClick={() => { window.location.href = '/login'} }
        fontFamily="Subheading"
      >
        Log In
      </Button>
    );

  return (
    <Flex
      w="100%"
      px={{ base: 6, md: 16 }}
      py={2}
      bg="#FFEBB0"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Box alignItems="center">
        <Link to="/">
          <HStack>
            {/* TODO: ganti logo */}
            <Image
              src={Logo}
              draggable="false"
              w="50px"
              objectFit="contain"
              mr={{ base: 0, md: 2 }}
              mb={{ base: 2, md: 0 }}
              transition="all 0.15s ease-in-out"
              _hover={{
                transform: 'scale(1.25)'
              }}
            />
            <Text
              fontSize="3xl"
              fontFamily="Heading"
              color="#F4A641"
              transition="all 0.15s ease-in-out"
              textShadow="-1px -2px 0px #000000"
              _hover={{
                transform: 'scale(1.1)',
                color: '#000000',
                textShadow: '-1px -2px 0px #F4A641'
              }}
            >
              OHU 2022
            </Text>
          </HStack>
        </Link>
      </Box>
      <Flex
        gap={20}
        fontSize="xl"
        alignItems="center"
        fontWeight={400}
        fontFamily="Subheading"
        display={{ base: 'none', lg: 'flex' }}
      >
        {links.map((item) => {
          const match = matchPath(
            { path: item.link },
            window.location.pathname
          );
          return (
            <Link key={item.label} to={item.link}>
              <Text
                textUnderlineOffset={5}
                color={match ? '#F4A641' : '#000000'}
                textDecoration={match ? 'underline' : 'none'}
                textDecorationColor="#FF7D4B"
                _hover={{
                  color: '#F4A641',
                  textDecoration: 'underline',
                  textDecorationColor: '#FF7D4B'
                }}
              >
                {item.label}
              </Text>
            </Link>
          );
        })}
        <UtilNav />
      </Flex>
      <Show below="lg">
        <IconButton
          bg="transparent"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon w={6} h={6} color="black" />}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={drawerRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bg="#FFEBB0">
              <Flex
                alignItems="flex-start"
                justifyContent="center"
                minH="90vh"
                flexDirection="column"
                gap={4}
              >
                {links.map((item) => {
                  const match = matchPath(
                    { path: item.link },
                    window.location.pathname
                  );
                  return (
                    <Link key={item.label} to={item.link}>
                      <Text
                        textUnderlineOffset={5}
                        color={match ? '#F4A641' : '#000000'}
                        textDecoration={match ? 'underline' : 'none'}
                        textDecorationColor="#FF7D4B"
                        transition="all 0.15s ease-in-out"
                        _hover={{
                          color: '#F4A641',
                          textDecoration: 'underline',
                          textDecorationColor: '#FF7D4B'
                        }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  );
                })}
                <UtilNav />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};

export default Navbar;
