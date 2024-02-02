import React, { useState, useEffect } from 'react';
import {Table} from '@chakra-ui/react'

const EditableTable = ({ initialColumns, initialRows, onSaveChanges }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [tableData, setTableData] = useState(initialRows);

  const handleCellEdit = (newValue, rowIndex, columnIndex) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][columns[columnIndex].key] = newValue;
    setTableData(updatedData);
  };

  const addColumn = () => {
    const newColumn = { key: `newColumn${columns.length + 1}`, title: `New Column ${columns.length + 1}` };
    setColumns([...columns, newColumn]);

    // Initialize new column values for existing rows
    const updatedData = tableData.map(row => ({ ...row, [newColumn.key]: '' }));
    setTableData(updatedData);
  };

  const removeColumn = (columnIndex) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(columnIndex, 1);
    setColumns(updatedColumns);

    // Remove the corresponding values in each row for the removed column
    const updatedData = tableData.map(row => {
      const { [columns[columnIndex].key]: omit, ...rest } = row;

      return rest;
    });
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = {};
    columns.forEach(column => {
      newRow[column.key] = '';
    });
    setTableData([...tableData, newRow]);
  };

  const removeRow = (rowIndex) => {
    const updatedData = [...tableData];
    updatedData.splice(rowIndex, 1);
    setTableData(updatedData);
  };

  const handleSaveChanges = () => {
    // Pass the updated data to the parent component
    onSaveChanges(tableData);
  };

  useEffect(() => {
    // You can perform any initial data fetching here
    // For example, fetch data from your backend API
    // axios.get('your-backend-api-endpoint')
    //   .then(response => {
    //     setTableData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div>
      <button onClick={addColumn}>Add Column</button>
      <button onClick={addRow}>Add Row</button>
      <Table>
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>
                {column.title}
                <button onClick={() => removeColumn(columnIndex)}>Remove</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="text"
                    value={row[column.key]}
                    onChange={(e) => handleCellEdit(e.target.value, rowIndex, columnIndex)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => removeRow(rowIndex)}>Remove Row</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditableTable;
