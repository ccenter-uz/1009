import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useLang } from '../../hooks/useLang'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useAddorgSlicer } from '@/@core/pages/AddOrg'

const defaultMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [17, 46]
})

const LocationFinderDummy = props => {
  const { setPosition } = props
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng, map.getZoom())
      setPosition([e.latlng.lat, e.latlng.lng])
    }
  })

  return null
}

export const Maps = () => {
  const { t } = useLang()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { coordinates, setCoordinates } = useAddorgSlicer()

  // CHOOSE-COORDS
  const chooseCoords = () => {
    onClose()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Box position={'relative'}>
      <Text fontWeight={500} mb={{ base: '8px', sm: '8px', md: '10px', xl: '10px' }}>
        {t('add-location')}
      </Text>

      <MapContainer scrollWheelZoom={true} zoom={13} center={coordinates} style={{ height: '220px', width: '100%' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={coordinates} icon={defaultMarker}></Marker>
      </MapContainer>
      <Box
        _hover={{ cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}
        transition={'0.3s ease'}
        color={'transparent'}
        w={{ base: '100%', sm: '100%', md: '100%', xl: '100%' }}
        h={'220px'}
        zIndex={99999}
        position={'absolute'}
        top={8}
        left={0}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        onClick={onOpen}
      >
        {t('change')}
      </Box>
      <Modal size={'5xl'} isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>{t('choose-location')}</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody p={0} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <MapContainer
              scrollWheelZoom={true}
              zoom={13}
              center={coordinates}
              style={{ height: '80dvh', width: '95%' }}
            >
              <LocationFinderDummy setPosition={setCoordinates} />
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={coordinates} icon={defaultMarker}></Marker>
            </MapContainer>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={chooseCoords}
              colorScheme='teal'
              h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
            >
              {t('save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
