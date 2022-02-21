import React, { ReactNode, FC } from 'react'
import { ColumnConfig, Styles } from '../Table/Table'
import ReactJson from 'react-json-view'

interface TableCellProps {
  column: string | ColumnConfig
  columnIndex: number
  styles: Styles
  data: { [key: string]: unknown }
  callback?: Function
}

const TableCell: FC<TableCellProps> = ({
  column,
  columnIndex,
  styles,
  data,
  callback,
}) => {
  const getNodeValue: string | ReactNode | any = (
    column: string | ColumnConfig,
    data: any,
  ) => {
    // if (typeof column === 'string') return
    // if customColumn then ignore search for data
    if (typeof column !== 'string' && column.customColumn) {
      // component is required when customColumn true
      if (!column.component) {
        throw new Error(
          'When customColumn true, component property must be provided!',
        )
      }
      return column.component(data)
    }

    let value = data // will hold the final return value
    const keys =
      typeof column === 'string' ? column.split('.') : column.id.split('.')

    keys.forEach((key: string | number) => {
      // TODO check here might be just string
      value = value[key]
    })

    if (typeof column !== 'string' && column.component) {
      return column.component(value)
    } else {
      if (Array.isArray(value) || typeof value === 'object') {
        return (
          <ReactJson
            src={JSON.parse(JSON.stringify(value))}
            collapsed={true}
            theme={'monokai'}
          />
        )
      } else {
        return (
          <span onClick={() => (callback ? callback() : undefined)}>
            {value}
          </span>
        )
      }
    }
  }

  // when nodeStyle is a function that is selective styling as function decides should and which css class will be returned.
  const getNodeStyle = (column: string | ColumnConfig, data: any) => {
    if (!column || typeof column === 'string') {
      return ''
    }

    const { nodeStyle } = column

    if (!nodeStyle) return ''

    if (typeof nodeStyle === 'function') return nodeStyle(data)

    return nodeStyle
  }

  return (
    <td
      className={`
        ${styles.tbodyTd || 'TableQL-td'}
        ${getNodeStyle(column, data)}
      `}
      key={`TableQLNode${
        (typeof column === 'string' ? column : column.id) + columnIndex
      }`}
    >
      {getNodeValue(column, data)}
    </td>
  )
}

export default TableCell
