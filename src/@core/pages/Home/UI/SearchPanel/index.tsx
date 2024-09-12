'use client'
import InputGen from '@/@core/shared/UI/Input'
import {
  Box,
  Flex,
  Grid,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import { ChangeEvent, Dispatch, FC, memo, SetStateAction, useDeferredValue, useState } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import ButtonGen from '@/@core/shared/UI/Button'
import { debounce } from '@/@core/apps/utils/fn'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { SearchModal } from '@/@core/feature/SearchPanelModal'
import { getAllOrganizations } from '@/@core/shared/api'
import { useSearchPanelSlicer } from './model/Slicer'
import { useRouter } from 'next/navigation'
import { Link } from '@/navigation'

const fetchData = debounce(
  async (
    text: string,
    setSearchedData: Dispatch<SetStateAction<any>>,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      const res = await getAllOrganizations({ search: text, isTopTenList: 1, page: 1, pageSize: 10 })
      const data = res?.data?.result?.top_tent_list

      if (!data) return

      data && (setSearchedData(data), setLoading(false))
    } catch (err) {
      console.log(err, 'err')
    }
  }
)

const SearchPanel: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [searchVal, setSearchVal] = useState<string>('')
  const [showList, setShowList] = useState<boolean>(false)
  const deferredValue = useDeferredValue(searchVal)
  const { searchedData, setSearchedData, loading, setLoading } = useSearchPanelSlicer()
  const size = useBreakpointValue({
    base: 'mobile',
    md: 'tablet',
    lg: 'desktop'
  })

  // handleSearchChange
  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setSearchVal(e.target.value as string)
    if (text.length > 2) {
      setShowList(true)
      setLoading(true)
      fetchData(text, setSearchedData, setLoading)
    } else {
      setShowList(false)
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
        {size === 'desktop' ? (
          <Box position={'relative'}>
            <InputGen
              defaultValue={deferredValue}
              onKeyDown={e => e.key === 'Enter' && router.push(`/results?name=${searchVal}`)}
              onChange={handleSearchChange}
              style={{ border: '0.5px solid lightgrey' }}
              boxShadow={scssVariables.boxShadowPartnerBox}
              fontSize={{ base: '12px', sm: '12px', md: '18px', xl: '24px' }}
              p={{ base: '4px 10px', sm: '4px 10px', md: '25px', xl: '30px' }}
              placeholder={t('min-3-char')}
              width={{ base: '387px', sm: '100%', md: '1000px', xl: '1164px' }}
              h={{ base: '32px', sm: '32px', md: '85px', xl: '92px' }}
              rightWidth={{ base: '0', sm: '0', md: '234px', xl: '234px' }}
              borderRadius={'51px'}
              bg={'#fff'}
              alignItems={'center'}
              button={
                <ButtonGen
                  onClick={() => router.push(`/results?name=${searchVal}`)}
                  display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
                  width='90%'
                  height='80%'
                >
                  {t('search-btn')}
                </ButtonGen>
              }
            />
            <Box
              display={showList ? 'block' : 'none'}
              position={'absolute'}
              top={'100%'}
              width={{ base: '100%', sm: '100%', md: '100%', xl: '100%' }}
              h={'300px'}
              bg={'white'}
              border={'1px solid rgba(0,0,0,0.08)'}
              boxShadow={scssVariables.boxShadowPartnerBox}
              borderRadius={'31px 31px 51px 51px'}
              overflowY={'scroll'}
              sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
              p={'8px 16px'}
            >
              {searchVal.length > 2 && loading && (
                <Grid placeItems={'center'} h='100%'>
                  <Spinner color='teal' w={'40px'} h={'40px'} />
                </Grid>
              )}
              {!loading && searchVal.length > 2 && searchedData?.length > 0 && (
                <List display={'flex'} flexDirection={'column'} h={'100%'}>
                  {searchedData?.map((item: { id: string; address: string; organization_name: string }) => (
                    <ListItem
                      key={item.id}
                      color={'rgba(100, 116, 139, 1)'}
                      _hover={{ background: 'teal.400', color: '#fff' }}
                      p={{ base: '5px 10px', sm: '5px 10px', md: '8px 16px', xl: '8px 16px' }}
                      borderBottom={'1px solid lightgrey'}
                      as={Link}
                      href={`/results/${item?.id}`}
                    >
                      <Text as={'span'} display={'block'} fontSize={scssVariables.fonts.span}>
                        {item.address}
                      </Text>
                      <Text fontSize={scssVariables.fonts.paragraph}>{item.organization_name}</Text>
                    </ListItem>
                  ))}
                </List>
              )}
              {!loading && searchVal.length > 2 && searchedData?.length === 0 && (
                <Flex justifyContent={'center'} flexDirection={'column'} gap={'10px'} alignItems={'center'} h={'100%'}>
                  <Image src={'/empty-file.webp'} alt='no-results' w={'70px'} h={'70px'} />
                  <Text fontSize={scssVariables.fonts.paragraph}>{t('no-results')}</Text>
                </Flex>
              )}
            </Box>
          </Box>
        ) : (
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
        )}
      </Box>
      <SearchModal
        open={isOpen}
        close={onClose}
        onChange={handleSearchChange}
        value={searchVal}
        data={searchedData}
        loading={loading}
      />
    </Box>
  )
}

export default memo(SearchPanel)
