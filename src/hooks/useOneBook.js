import { CancelToken } from 'apisauce';
import {useEffect, useState} from 'react'
import {GetOneBook} from '../api/apiBook'

export default function useOneBook(onebookId) {
    const[onebook, setOneBook] = useState([])

    useEffect(
        ()=>{
            let source;
            (async()=>{
                source = CancelToken.source()
                const response = await GetOneBook(onebookId, source.token)
                setOneBook(response)
            })()
            return ()=>{source.cancel()}
        },[onebookId]
    )
  return onebook
}