import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginationIcon from '@components/leaderboards/PaginationIcon';
import { PageLayout } from 'src/layout';
import { Heading, Flex, Image, Show, Center, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Card from '@components/leaderboards/Card';

import Search from '@components/leaderboards/Search';
import Image1 from '@assets/leaderboard_blue.svg';
import Image2 from '@assets/leaderboard_yellow.svg';
import { getDataAPI } from 'src/util/api';
import {
  cardAnimation,
  nyemangatinAnimation,
  pageButtonAnimation
} from 'src/util/transition';
import { LoadingOnly } from '@components/common/Loading';

interface ScoreProps {
  rank: number;
  name: string;
  username: string;
  fakultas: string;
  score: number | null;
}

interface MetaProps {
  page: number;
  pageCount: number;
}

export const Leaderboards = () => {
  const [params, setParams] = useSearchParams();
  const [scores, setScores]: any = useState([]);
  const [meta, setMeta]: any = useState({ total: 1, pageCount: 1 });
  const [toggle, setToggle] = useState(false);
  const curParams = Object.fromEntries([...params]);
  const currentPage = parseInt(params.get('page') ?? '1', 10);
  const search = params.get('query') ?? '';
  const filter = params.get('filter') ?? '';

  const handleSearch = () => {
    if (currentPage === 1) {
      setToggle(!toggle);
    } else {
      setParams({ ...curParams, page: '1' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fakultas = filter.length > 0 ? `&fakultas=${filter}` : '';
        const { data, metadata }: { data: ScoreProps[]; metadata: MetaProps } =
          await getDataAPI(
            `/units/score?search=${search}${fakultas}&page=${currentPage}`
          );
        setScores(data);
        setMeta(metadata);
      } catch (err: any) {
        //
      }
    };

    fetchData();
  }, [currentPage, toggle, filter]);

  return (
    <PageLayout title="Leaderboard">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={5}
      >
        <Heading
          py={6}
          fontSize={{ base: '4xl', lg: '5xl' }}
          textAlign="center"
        >
          Laerboad
        </Heading>
        <Search handleSubmit={handleSearch} />
        {meta.total > 0 && currentPage > 0 && currentPage <= meta.pageCount ? (
          <>
            <Flex flexDirection="row" justifyContent="space-evenly" w="100%">
              <Show above="lg">
                <Box
                  objectFit="contain"
                  alignSelf="flex-end"
                  mb={5}
                  w="20%"
                  h="20%"
                  maxW="50ch"
                  maxH="50ch"
                >
                  <motion.section
                    variants={nyemangatinAnimation}
                    initial="initialBottom"
                    whileInView="view"
                  >
                    <Image src={Image2} alt="Nyemangatin2" />
                  </motion.section>
                </Box>
              </Show>
              <Flex
                flexDirection="column"
                gap={2}
                w="100%"
                alignContent="center"
                maxW="80ch"
              >
                {scores.map((item: ScoreProps, idx: number) => (
                  <motion.div
                    key={item.username}
                    variants={cardAnimation}
                    initial={idx % 2 === 0 ? 'initialLeft' : 'initialRight'}
                    animate="animate"
                    exit={idx % 2 === 0 ? 'exitLeft' : 'exitRight'}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.12
                    }}
                  >
                    <Card key={item.username} {...item} />
                  </motion.div>
                ))}
              </Flex>
              <Show above="lg">
                <Box
                  objectFit="contain"
                  alignSelf="flex-start"
                  mb={5}
                  w="20%"
                  h="20%"
                  maxW="50ch"
                  maxH="50ch"
                >
                  <motion.section
                    variants={nyemangatinAnimation}
                    initial="initialTop"
                    whileInView="view"
                  >
                    <Image src={Image1} alt="Nyemangatin1" />
                  </motion.section>
                </Box>
              </Show>
            </Flex>
            <motion.section
              variants={pageButtonAnimation}
              initial="initial"
              animate="animate"
            >
              <Center mt={6} mb={5}>
                <PaginationIcon pageSize={meta.pageCount} />
              </Center>
            </motion.section>
          </>
        ) : meta.total <= 0 ? (
          // TODO: ganti ke vistock
          <LoadingOnly />
        ) : (
          // TODO: ganti ke vistock
          <LoadingOnly />
        )}
      </Flex>
    </PageLayout>
  );
};
