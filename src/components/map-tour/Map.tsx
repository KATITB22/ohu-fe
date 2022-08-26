import { Box, useMediaQuery } from '@chakra-ui/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';

import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';
import { TourPopup } from './Popup';

interface Props {
  data: TourData;
  // eslint-disable-next-line no-unused-vars
  setMap: (map: Map) => void | null;
}

export const TourMap = ({ data, setMap }: Props) => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const southWest = L.latLng(-60, 100);
  const northEast = L.latLng(70, -100);
  const bounds = L.latLngBounds(southWest, northEast);

  return (
    <motion.div {...getTransition('bottom', { delay: 0.1 })}>
      <Box
        h={isMobile[0] ? '260px' : '560px'}
        w={isMobile[0] ? '100%' : '92%'}
        m="auto"
      >
        <MapContainer
          center={data.centerPosition}
          zoom={data.zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
          ref={setMap}
          minZoom={2}
          maxZoom={5}
          maxBounds={bounds}
        >
          <TileLayer url="../Tiles/{z}/{x}/{y}.png" />
          {data.markers.map((marker) => (
            <Marker
              key={marker.name}
              icon={L.icon({ iconUrl: marker.url })}
              position={marker.position}
            >
              <Popup>
                <TourPopup>{marker.name}</TourPopup>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </motion.div>
  );
};
