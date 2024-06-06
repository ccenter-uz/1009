import { Box, Img, Text } from '@chakra-ui/react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useLang } from '../../hooks/useLang'
import { useState } from 'react'
import { scssVariables } from '@/@core/apps/utils/scss-variables'

const defaultMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [13, 0]
})

export const Maps = () => {
  const { t } = useLang()
  const [size, setSize] = useState({ width: '400px', height: '200px' })
  const position = [51.505, -0.09]

  return (
    <Box position={'relative'}>
      <Text fontWeight={500} mb={{ base: '8px', sm: '8px', md: '10px', xl: '10px' }}>
        {t('add-location')}
      </Text>
      <MapContainer
        scrollWheelZoom={false}
        zoom={13}
        center={position}
        style={{ height: size.height, maxWidth: size.width, width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position} icon={defaultMarker}></Marker>
      </MapContainer>
      <Box
        _hover={{ cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}
        transition={'0.3s ease'}
        color={'transparent'}
        w={{ base: '100%', sm: '100%', md: '400px', xl: '400px' }}
        h={'200px'}
        onClick={() => {
          setSize(prev => ({ ...prev, width: '100%', height: '100%' }))
        }}
        zIndex={99999}
        position={'absolute'}
        top={8}
        left={0}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {t('change')}
      </Box>
    </Box>
  )
}
