import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { FC } from 'react'

type Iitem = {
  id: number | string
  title: string
  href?: string
}

type Ibreadcrumb = {
  item: Iitem[] | []
}

const BreadCrumb: FC<Ibreadcrumb> = ({ item }) => {
  return (
    <Breadcrumb
      mt={{ base: '32px', sm: '32px', md: '32px', xl: '32px' }}
      mb={{ base: '48px', sm: '48px', md: '48px', xl: '48px' }}
    >
      {item?.map((value: Iitem) => (
        <BreadcrumbItem key={value.id}>
          {value.href ? (
            <BreadcrumbLink
              href={value.href ? value.href : ''}
              fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
            >
              {value.title}
            </BreadcrumbLink>
          ) : (
            <Text fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}>{value.title}</Text>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default BreadCrumb
