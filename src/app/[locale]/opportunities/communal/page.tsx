import { FC } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import TableGen from '@/@core/components/reusable/Table'

type Props = {}

const Communal: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 1, title: 'Коммунальные услуги' },
    { id: 2, title: 'Общие' }
  ]

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name',align:'center'},
    { title: 'Age', dataIndex: 'age', key: 'age',align:'center'},
    { title: 'Address', dataIndex: 'address', key: 'address',align:'center'}
  ]
  const data = [
    { key: '1', name: 'Mike', age: 32, address: '10 Downing Street' },
    { key: '2', name: 'Like', age: 322, address: '101 Downing Street' }
  ]

  return (
    <main id='communal' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />

      <TableGen ColBg='teal.300' variant='striped' columns={columns} dataSource={data} />
    </main>
  )
}
export default Communal
