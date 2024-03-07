import { useLang } from '@/@core/service/hooks/useLang'
import { Button, List, ListItem, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { Link, usePathname } from '@/navigation'
import { FC } from 'react'
import { scssVariables } from '@/@core/utils/scss-variables'

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

  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger>
        <Button {...buttonStyle} userSelect={'none'}>
          {locale === 'ru' ? 'Ру' : 'Uz'}
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'90px'} _focus={{ border: '1px solid lightgrey', boxShadow: 'none' }}>
        <List role='list'>
          <ListItem {...listItemStyle} href={pathname} locale='ru'>
            Ру
          </ListItem>
          <ListItem {...listItemStyle} href={pathname} locale='uz'>
            Uz
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  )
}

export default SwitchLang
