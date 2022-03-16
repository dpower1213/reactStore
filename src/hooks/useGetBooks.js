import {useEffect, useState, useContext } from 'react';
import {getBooks} from '../api/apiBook';
import { CancelToken } from 'apisauce';

export default function useBook() {
    const [book, setBook]=useState({});
    const source = CancelToken.source();

    useEffect(()=>{
        (async()=>{
            const response = await getBooks(book, source.token);
            setBook(response);
        })()
        return ()=>{source.cancel()}
    }

    )
  return book
}