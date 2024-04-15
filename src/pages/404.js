import React from 'react';
import Navbar from '../components/Navbar';
import notfound from '../images/404.png';

const NotFoundPage = () => {
    return (
        <section className="max-w-8xl mx-auto w-full h-[fit-content] flex flex-col items-center justify-center bg-gray-50">
            <Navbar />
            <div className='w-full h-[fit-content] flex flex-col items-center justify-center'>
                <img src={notfound} alt='page not found' className='w-[60%] h-full object-contain'/>
                <p className="mt-2 text-center text-sm text-gray-600">Oops! The page you are looking for has been removed or relocated.</p>
                <p className="mt-2 text-center text-sm text-gray-600">Please go back!!</p>
            </div>
        </section>
    );
};

export default NotFoundPage;
