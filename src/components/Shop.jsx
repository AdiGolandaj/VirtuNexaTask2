import React from 'react';
import '../Shop.css';

const Shop = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-wrap gap-6 justify-center items-center w-full max-w-7xl p-10'>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes2.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes3.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes4.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card group bg-gray-900 p-7 rounded-tl-4xl rounded-b-4xl hover:bg-gray-800 transition duration-300 ease-in-out">
          <div className="company text-4xl transition duration-300 ease-in-out">
            <p>Adidas</p>
          </div>
          <div className="image group-hover:scale-105 group-hover:-rotate-10 transform transition duration-300 ease-in-out">
            <img src="./src/assets/shoes.jpg" alt="shoes" />
          </div>
          <div className="info">
            <div className="prodName text-3xl">Varsity</div>
            <div className="price text-gray-500">$1100</div>
          </div>
          <div className="more flex w-full justify-between pt-5">
            <div className="butns flex gap-4">
              <button className='relative h-12 w-12 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>🛒</button>
              <button className='relative h-12 w-16 border hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 rounded-3xl'>View</button>
            </div>
            <div className="opts flex flex-col">
              <label htmlFor="" className='pl-15'>Options</label>
              <ul className="flex gap-4 pt-3">
                <li className='border-8 rounded-4xl text-blue-800 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-red-400 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-gray-500 hover:scale-125 transition-all duration-300'></li>
                <li className='border-8 rounded-4xl text-teal-700 hover:scale-125 transition-all duration-300'></li>
              </ul>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Shop;