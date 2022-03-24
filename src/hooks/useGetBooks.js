import {useEffect, useState } from 'react';
import { GetBooks9 } from '../api/apiBook';
import { CancelToken } from 'apisauce';

export const useGetBooks2 = ()=>{
    
    const [book, setBook]=useState();
    const source = CancelToken.source();
        
    useEffect(()=>{
        (async()=>{
            const {book} = await GetBooks9(source.token);
            setBook(book)
            // console.log(response) 
        })()
        return ()=>{source.cancel()}
    },[],
    
    )
    console.log(book);
    return book;
};