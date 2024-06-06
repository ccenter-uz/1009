import { AddOrgSlicer } from '../Slicer'

export const useAddorgSlicer = () => {
  const phones = AddOrgSlicer((state: any) => state.phones)
  const photos = AddOrgSlicer((state: any) => state.photos)
  const setPhones = AddOrgSlicer((state: any) => state.setPhones)
  const setPhotos = AddOrgSlicer((state: any) => state.setPhotos)

  return {
    phones,
    photos,
    setPhones,
    setPhotos
  }
}
