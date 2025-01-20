import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {yearOfPublishing,publisher,tags,category,image,author,bookName,bookId}=book;
    return (
        <div>
            <Link to={`/books/${bookId}`}>
            <div className="card my-10 border p-6 bg-base-100 shadow-xl">
  <figure className='bg-blue-200 rounded-xl py-8'>
    <img className='h-[144px] rounded-xl '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex justify-center gap-5'>
    {
        tags.map(tag=> <button className="btn btn-xs bg-green-50 text-green-500 font-medium">{tag}</button>)
    }
  </div>
    <h2 className="card-title">
      {bookName}
 
    </h2>
    <p>By : {author}
    </p>
    <div class="border-t-2 border-dashed"></div>
    <div className="card-actions justify-center gap-4">
      <div className="badge badge-outline">{category}</div>
      <div class="rating">
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked="checked" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-100" />
</div>
    </div>
  </div>
</div>
</Link>
        </div>
    );
};

export default Book;