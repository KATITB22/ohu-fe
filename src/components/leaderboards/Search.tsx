import { Container, Flex, Input, IconButton } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Help } from '@components/leaderboards/Help';
import { useSearchParams } from 'react-router-dom';
import { TagList } from './Tag';

interface Props {
  handleSubmit: any;
}

export const TAG: string = '|';

const Search = ({ handleSubmit }: Props) => {
  const [params, setParams] = useSearchParams();
  const filter = params.get('filter') ?? '';
  const curParams = Object.fromEntries([...params]);
  const search = params.get('query') ?? '';

  const onChange = (e: any) => {
    if (
      e.target.value[0] === TAG &&
      e.target.value[e.target.value.length - 1] === TAG &&
      e.target.value.length > 1
    ) {
      const addedFilter = e.target.value.slice(1, -1);
      setParams({
        page: '1',
        filter:
          filter.length === 0
            ? addedFilter
            : filter.includes(addedFilter)
              ? filter
              : filter.concat(`,${addedFilter}`),
        query: ''
      });
    } else {
      setParams({ ...curParams, query: e.target.value });
    }
  };

  return (
    <Container maxW="80ch" mb={4} px={0}>
      <Flex
        alignItems="center"
        gap={2}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Flex w="100%" alignItems="center" flexDirection="row">
          <Input
            type="search"
            placeholder="Search..."
            bg="white"
            borderWidth="2px"
            borderColor="#FFA06F"
            focusBorderColor="#FFA06F"
            onKeyUp={(e) => {
              if (e.key === 'Enter' && search) {
                handleSubmit();
              }
            }}
            _hover={{ borderColor: '#FFA06F' }}
            value={search}
            onChange={onChange}
          />
          <IconButton
            ml={2}
            icon={<Search2Icon />}
            aria-label="Search button"
            onClick={handleSubmit}
            _hover={{ backgroundColor: '#FFB08D' }}
          />
        </Flex>
        <Help />
      </Flex>
      <TagList />
    </Container>
  );
};

export default Search;
