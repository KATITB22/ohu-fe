import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { PageLayout } from 'src/layout';
import { TourMap } from '@components/map-tour/Map';
import { TourLegend } from '@components/map-tour/Legend';
import { LoadingOnly } from '@components/common/Loading';
import { getUnits } from 'src/service/unit';

export interface TourData {
  centerPosition: [number, number];
  zoom: number;
  markers: {
    id: string;
    name: string;
    url: string;
    position: [number, number];
  }[];
}

const initTourData: TourData = {
  centerPosition: [0, 0],
  zoom: 0,
  markers: []
};

export const Tour = () => {
  const [data, setData] = useState<TourData>(initTourData);
  const [map, setMap] = useState<Map | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const markers: {
      id: string;
      name: string;
      url: string;
      position: [number, number];
    }[] = await getUnits('/units/map');

    const data: TourData = {
      centerPosition: [0, 0],
      zoom: 3,
      markers
    };

    setData(data);
  };

  useEffect(() => {
    fetchData()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <PageLayout title="Map Tour">
      <Heading py={6} fontSize={{ base: '4xl', lg: '6xl' }} textAlign="center">
        H ap our
      </Heading>
      {isLoading ? (
        <LoadingOnly />
      ) : (
        <>
          <TourMap data={data} setMap={setMap} />
          <TourLegend data={data} map={map} />
        </>
      )}
    </PageLayout>
  );
};
