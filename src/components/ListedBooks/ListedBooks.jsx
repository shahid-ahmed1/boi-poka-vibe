import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/AddtoDb';
import Book from '../Books/Book/Book';
const ListedBooks = () => {
const [readList ,setReadList]=useState([])
    const allbooks = useLoaderData();
    useEffect(()=>{
        const stordRedList = getStoreReadList();
        const stordRedListInt=stordRedList.map((id)=>parseInt(id));
        const readBookList = allbooks.filter(book => stordRedListInt.includes(book.bookId));
        setReadList(readBookList)
    },[])
    return (
        <div>
            <h2 className='my-8'>Listed Books</h2>
            
  <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel className='mt-4'>
      <h2 className='text-2xl '>Book I read : {readList.length}</h2>
      {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
        // readList.map(book=> <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My wish list</h2>
     
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBooks;