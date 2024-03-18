'use client'
import InputGen from '@/@core/components/reusable/Input'
import { Box, useColorMode } from '@chakra-ui/react'
import { ChangeEvent, FC, useDeferredValue, useState } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import ButtonGen from '@/@core/components/reusable/Button'
import SearchModal from './modal'
import { api } from '@/@core/utils/api'
import { debounce } from '@/@core/utils/fn'

const fetchData = debounce(async (text: string) => {
  try {
    console.log(text, 'value')
  } catch (err) {
    console.log(err, 'err')
  }
})

const SearchPanel: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchVal, setSearchVal] = useState<string>()
  const deferredValue = useDeferredValue(searchVal)

  // search-modal
  const handleOpenSearch = async () => {
    setIsOpen(true)
  }

  // handleSearchChange
  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setSearchVal(e.target.value as string)

    fetchData(text)
  }

  // handleSearchClick
  const handleSearchClick = async () => {
    console.log(searchVal, 'searchValue')
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
          onClick={handleOpenSearch}
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
              onClick={handleOpenSearch}
              display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
              width='90%'
              height='80%'
            >
              {t('search-btn')}
            </ButtonGen>
          }
        />
      </Box>
      <SearchModal
        open={isOpen}
        close={setIsOpen}
        onChange={handleSearchChange}
        onClick={handleSearchClick}
        value={deferredValue}
      />
    </Box>
  )
}

export default SearchPanel
