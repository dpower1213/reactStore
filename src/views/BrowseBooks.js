import React, {useContext} from 'react'
import BasicTable from '../components/TableReadingList';
import {useGetBooks2} from '../hooks/useGetBooks';

export default function BrowseBooks() {
  const book = useGetBooks2()
  // console.log(book)
  
      return (
      <>    
      <BasicTable rows={book}/>
      </>
      )
}
