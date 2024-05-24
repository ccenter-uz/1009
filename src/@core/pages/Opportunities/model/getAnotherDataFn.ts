import { getUrl } from '@/@core/apps/utils/fn'
import { getData } from '../api/actions'
import { Dispatch, SetStateAction } from 'react'
import { IdataInfoFromApi } from '../types'

// GET
export const getDataAnother = async (lastLink: string, locale: string, setData: Dispatch<SetStateAction<any>>) => {
  if (lastLink !== 'entertainment') {
    const params = { language: locale }
    const res = await getData(`${getUrl(lastLink)}`, params)
    res &&
      setData(
        res?.map((item: IdataInfoFromApi) => {
          return {
            ...item,
            id: item.id,
            mention: item.mention,
            warning: item.warning,
            title: item?.title,
            content: item.text.content,
            table_arr: item.table_arr
          }
        })
      )
  }
}
