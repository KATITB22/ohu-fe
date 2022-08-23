import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { TourMap } from '@components/map-tour/Map';
import { TourLegend } from '@components/map-tour/Legend';
import 'leaflet/dist/leaflet.css';
import { PageLayout } from 'src/layout';
import { LoadingOnly } from '@components/common/Loading';

export interface TourData {
  centerPosition: [number, number];
  zoom: number;
  markers: {
    title: string;
    logo: string;
    position: [number, number];
    linkTo: string;
  }[];
}

const initTourData: TourData = {
  centerPosition: [0, 0],
  zoom: 0,
  markers: []
};

const DUMMY_DATA: TourData = {
  centerPosition: [0,0],
  zoom: 3,
  markers: [
    {
      title: 'Gerbang Utama',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [70, -100],
      linkTo: '/'
    },
    {
      title: 'Gerbang Kiri',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [-60, 107.60846698935434],
      linkTo: '/'
    },
    {
      title: 'Gerbang Kanan',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [-6.888641905321302, 107.6120546576714],
      linkTo: '/'
    }
  ]
};

export const Tour = () => {
  const [data, setData] = useState<TourData>(initTourData);
  const [map, setMap] = useState<Map | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setData(DUMMY_DATA);
      setIsLoading(false);
    }, 1000);
  }, [data]);

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
