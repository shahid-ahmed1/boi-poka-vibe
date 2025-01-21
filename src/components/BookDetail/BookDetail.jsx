import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId}=useParams();
    const id = parseInt(bookId)
    const data = useLoaderData()
   const book = data.find(book => book.bookId === id)
   const {bookId:currentBookId,image,bookName}=book

    return (
        <div className='my-12'>
            <h2 >book details : {bookId}</h2>
            <h3 className='text-xl font-bold'>{bookName}</h3>
            <img className='w-36 rounded-lg' src={image} alt="Book name" />
             <br />
             <button className='btn btn-outline'>Read</button>
             <button className='btn btn-accent ml-4'>Wishlest</button>
        </div>
    );
};

export default BookDetail;