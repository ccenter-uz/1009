'use client'
import { FC, useState } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import ExcelTable from '@/@core/components/reusable/ExcelTable'
import EditableTable from '@/@core/components/reusable/ExcelTable'

type Props = {}

const Communal: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 1, title: 'Коммунальные услуги' },
    { id: 2, title: 'Общие' }
  ]
  const initialColumns = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'email', title: 'Email' }
  ]

  const initialRows = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Doe', age: 30, email: 'jane@example.com' }
  ]

  const [savedData, setSavedData] = useState([])

  const handleSaveChanges = (updatedData: any) => {
    // Handle saving changes to the backend or perform any other logic
    // For this example, we'll just log the updated data
    console.log('Updated Data:', updatedData)

    // You may want to update the state or perform other actions as needed
    setSavedData(updatedData)
  }

  return (
    <main id='communal' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
      <div>
        <EditableTable initialColumns={initialColumns} initialRows={initialRows} onSaveChanges={handleSaveChanges} />
      </div>
    </main>
  )
}
export default Communal
