'use client'
import InputGen from '@/@core/shared/UI/Input'
import { Box, useColorMode } from '@chakra-ui/react'
import { ChangeEvent, Dispatch, FC, SetStateAction, useDeferredValue, useState } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import ButtonGen from '@/@core/shared/UI/Button'
import { debounce } from '@/@core/apps/utils/fn'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { SearchModal } from '@/@core/feature/SearchPanelModal'
import { getAllOrganizations } from '@/@core/shared/api'
import { useSearchPanelSlicer } from './model/Slicer'

const fetchData = debounce(async (text: string, setSearchedData: Dispatch<SetStateAction<any>>) => {
  try {
    const res = await getAllOrganizations({ search: text, isTopTenList: 1, page: 1, pageSize: 10 })
    const data = res?.data?.result?.top_tent_list

    setSearchedData(data)
  } catch (err) {
    console.log(err, 'err')
  }
})

const SearchPanel: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [searchVal, setSearchVal] = useState<string>('')
  const deferredValue = useDeferredValue(searchVal)
  const { searchedData, setSearchedData } = useSearchPanelSlicer()

  // handleSearchChange
  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setSearchVal(e.target.value as string)
    if (text.length > 2) {
      fetchData(text, setSearchedData)
    }
  }

  return (
    <Box
      className='wrapper'
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minH={{ base: 'max-content', sm: 'max-content', md: '250px', xl: '250px' }}
      bg={colorMode === 'dark' ? scssVariables.gradientColor : scssVariables.blockBgColor}
    >
      <Box w={'100%'} m={'15px 0'} display={'flex'} alignItems={'center'} justifyContent={'center'} className='wrapper'>
        <InputGen
          isReadOnly
          defaultValue={deferredValue}
          onClick={onOpen}
          style={{ border: '0.5px solid lightgrey' }}
          boxShadow={scssVariables.boxShadowPartnerBox}
          fontSize={{ base: '12px', sm: '12px', md: '18px', xl: '24px' }}
          p={{ base: '4px 10px', sm: '4px 10px', md: '25px', xl: '30px' }}
          placeholder={t('search-placeholder')}
          width={{ base: '387px', sm: '100%', md: '1164px', xl: '1164px' }}
          h={{ base: '32px', sm: '32px', md: '85px', xl: '92px' }}
          rightWidth={{ base: '0', sm: '0', md: '234px', xl: '234px' }}
          borderRadius={'51px'}
          bg={'#fff'}
          alignItems={'center'}
          button={
            <ButtonGen
              onClick={onOpen}
              display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
              width='90%'
              height='80%'
            >
              {t('search-btn')}
            </ButtonGen>
          }
        />
      </Box>
      <SearchModal open={isOpen} close={onClose} onChange={handleSearchChange} value={searchVal} data={searchedData} />
    </Box>
  )
}

export default SearchPanel
