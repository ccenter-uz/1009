import { useLang } from '@/@core/shared/hooks/useLang'
import { Button, List, ListItem, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Link, usePathname } from '@/navigation'
import { FC } from 'react'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useSearchParams } from 'next/navigation'

// styles
const listItemStyle = {
  h: { base: '30px', sm: '30px', md: '35px', xl: '35px' },
  justifyContent: 'center',
  alignItems: 'center',
  _hover: { background: `${scssVariables.blockBgColor}` },
  role: 'listitem',
  as: Link,
  display: 'flex',
  fontSize: scssVariables.fonts.paragraph
}
const buttonStyle = {
  fontWeight: 500,
  variant: 'link',
  bg: 'transparent',
  color: 'teal',
  cursor: 'pointer',
  fontSize: scssVariables.fonts.paragraph
}

const SwitchLang: FC = () => {
  const { locale } = useLang()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger>
        <Button {...buttonStyle} userSelect={'none'}>
          {locale === 'ru' ? 'Ру' : 'Uz'}
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'90px'} _focus={{ border: '1px solid lightgrey', boxShadow: 'none' }}>
        <List role='list'>
          <ListItem {...listItemStyle} href={{ pathname, query: searchParams.toString() }} locale='ru'>
            Ру
          </ListItem>
          <ListItem {...listItemStyle} href={{ pathname, query: searchParams.toString() }} locale='uz'>
            Uz
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  )
}

export default SwitchLang
