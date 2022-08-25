import { QuestionIcon } from '@chakra-ui/icons';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  Button,
  Text
} from '@chakra-ui/react';

export const Help = () => (
  <Popover placement="bottom" closeOnBlur>
    <PopoverTrigger>
      <Button
        w={{ base: '100%', lg: 'inherit' }}
        bg="#FFA06F"
        color="white"
        leftIcon={<QuestionIcon />}
        _hover={{ backgroundColor: '#FFB08D' }}
      >
        Help
      </Button>
    </PopoverTrigger>
    <PopoverContent bg="#FFA06F" color="white">
      <PopoverHeader pt={3} fontFamily="Heading" fontSize="xl" border="0">
        Search Help
      </PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody fontFamily="Body">
        <b>Halo!!</b>
        <br />
        Sulit menemukan teman atau dirimu? Yuk cari di sini!! Dengan search ini
        kamu bisa mencari data kamu atau temanmu berdasarkan <b>
          NIM
        </b> atau <b>Nama</b>
        <br /> <br />
        Kamu juga bisa mem-<i>filter</i> data berdasarkan <b>Fakultas</b> lho!
        Caranya dengan mengetik query
        <Text bg="gray" w="fit-content">
          |<b>&lt;fakultas&gt;</b>|
        </Text>
        Contoh: <b>|FITB|</b>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
