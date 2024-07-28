"use client";
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';
import Paragraph from '../component/Paragraph';

const page = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className="text-center text-2xl mt-4">this is the contact page</h1>
            <button type='button' onClick={() => router.push('/deshboard/profile')} className='px-4 py-2 bg-lime-500 font-bold block text-center mt-3'>go to the profile page</button>

            <div>
                <Suspense fallbacb='paragraph loading....'>
                    <Paragraph />
                </Suspense>
            </div>
        </div>
    );
};

export default page;