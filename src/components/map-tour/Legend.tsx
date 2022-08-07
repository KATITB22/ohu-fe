import { SimpleGrid,
    Box,
    Text,
    Flex,
    Heading,
    Image,
    Spinner,
    useMediaQuery
} from "@chakra-ui/react";
import { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';

export const TourLegend = ({ data, map, isLoading } : { data: TourData, map: Map | null, isLoading: boolean }) => {
    const isMobile = useMediaQuery('(max-width: 640px)');

    const Legend = ({ logo, title, position } : { logo: string, title: string, position: [number, number]}) => {
        return (
            <Flex>
                <Image
                    borderRadius='full'
                    boxSize='67px'
                    src={logo}
                    onClick={() => map?.setView(position)}
                />
                <Text textAlign="center" fontSize="30px"  m="auto 27px" mr="0">{title}</Text>
            </Flex>
        );
    }
    
    return (
        <>
            { isLoading ? <Spinner height="10%" width="10%" color="white" fontWeight={800} /> : 
                <Flex p={'5%'}  >
                    <Box mr={isMobile[0] ? '10px' : '100px'} p="10px" m="auto">
                        <Heading fontSize="67px" m="auto">Legends</Heading>
                        <SimpleGrid columns={isMobile[0] ? 1 : 2} spacingY="5" spacingX="100px" mt="53px" >
                            { data.markers.map((marker) => <Legend {...marker} /> )}
                        </SimpleGrid>
                    </Box>
                </Flex> 
            }
        </>
    );
};