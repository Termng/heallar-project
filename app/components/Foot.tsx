
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import heallar from '../../public/images/heallar.png'
import '../globals.css'


const Foot = () => {
  return (
    <div style={{fontFamily: 'Sora', fontWeight: 300}}>
        <Image src = {heallar} alt = 'Heallar Logo' width={200} className='ml-16'></Image>
        <div className='flex justify-center gap-16 flex-wrap text-sm'>
            <div className=' w-1/5'>
                <h2 className='font-bold '>Our Offices</h2>

                <div className='text-gray-600 font-light flex flex-col gap-4 py-2'>
                    <div>
                        <p className='font-medium'>Toronto, Canada</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, natus?</p>
                    </div>
                    <div>
                        <p className='font-medium'>Birmingham, UK</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, suscipit?</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='font-bold'>Product</p>
                <div className='flex flex-col gap-4 text-gray-600 font-light'>
                    <Link href={"/"}>Hospitals</Link>
                    <Link href={"/"}>Pharmacies</Link>
                    <Link href={"/"}>Diagnostic Centers</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold'>Resources</p>
                <div className='flex flex-col gap-4 text-gray-600 font-light'>
                    <Link href={"/"}>Community</Link>
                    <Link href={"/"}>Careers</Link>
                    <Link href={"/"}>Quick Help</Link>
                    <Link href={"/"}>Contact us</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>Press & Media Resources</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold'>Privacy</p>
                <div className='flex flex-col gap-4 text-gray-600 font-light'>
                    <Link href={"/"}>Privacy Notice</Link>
                    <Link href={"/"}>Cookies Policy</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-bold'>Legal</p>
                <div className='flex flex-col gap-4 text-gray-600 font-light'>
                    <Link href={"/"}> Terms and Conditions</Link>
                    <Link href={"/"}>Customer Protection Policy</Link>
                </div>
            </div>

            <div>

            </div>
        </div>
        <div className='py-20'>
            <hr className='mx-36' />
            <p className='mx-36 text-sm py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti blanditiis sunt ex.</p>
        </div>
    </div>
  )
}

export default Foot