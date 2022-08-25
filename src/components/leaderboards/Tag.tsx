import { Tag, TagLabel, TagCloseButton, Wrap } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

export const TagList = () => {
  const [params, setParams] = useSearchParams();
  const curParams = Object.fromEntries([...params]);
  const fakultas: any = params.get('filter')?.split(',') ?? [];

  return (
    <Wrap spacing={2} mt={3} mb={2} overflow="visible">
      {fakultas.map((item: string, idx: number) => (
        <motion.div
          // eslint-disable-next-line
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Tag
            key={item}
            size="lg"
            borderRadius="full"
            bg="#FFA06F"
            color="white"
          >
            <TagLabel>{item}</TagLabel>
            <TagCloseButton
              onClick={() => {
                const filterAfterClosed: string = fakultas
                  .filter((x: string) => x !== item)
                  .toString();
                setParams({
                  ...curParams,
                  page: '1',
                  filter: filterAfterClosed === '' ? [] : filterAfterClosed
                });
              }}
            />
          </Tag>
        </motion.div>
      ))}
    </Wrap>
  );
};
