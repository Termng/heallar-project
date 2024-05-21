import React from 'react'
import Image from 'next/image'
import image1 from './../../public/images/nutrition.jpg'
import image2 from './../../public/images/telemed.jpg'
import image3 from './../../public/images/cancer.jpg'
import image4 from './../../public/images/vac.jpg'

const Blog = () => {
  return (
    <div>
      <h2 className='px-28 py-2 text-heallar-primary font-medium'>SPECIAL SECTION</h2>
      <hr  className='max-w-[80rem] px-10  mx-auto'/>
      <div className="max-w-[80rem] px-10 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={image1}
                  alt="Image Description"
                  width={300}
                  height={300}
                />
              </div>
              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                The Role of Nutrition in Chronic Disease Prevention
                </h3>
                <p className="mt-3 text-gray-600">
                Explore the connection between nutrition and cardiovascular health.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-heallar-primary decoration-2 hover:underline font-medium">
                  Read more
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={image2}
                  alt="djdjd"
                  width={300}
                  height={300}
                />
              </div>
              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                The Future of Telemedicine: Revolutionizing Healthcare
                </h3>
                <p className="mt-3 text-gray-600">
                Find out what the future holds for remote healthcare services.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-heallar-primary decoration-2 hover:underline font-medium">
                  Read more
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={image3}
                  alt="Image Description"
                  width={300}
                  height={300}
                />
              </div>
              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Advances in Cancer Treatment: Hope on the Horizon
                </h3>
                <p className="mt-3 text-gray-600">
                Find out how lifestyle changes can support cancer prevention and recovery.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-heallar-primary decoration-2 hover:underline font-medium">
                  Read more
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
              </div>
            </div>
          </a>

          <a className="group rounded-xl overflow-hidden" href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={image4}
                  alt="djje"
                  width={300}
                  height={300}
                />
              </div>
              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Vaccinations: Protecting Public Health
                </h3>
                <p className="mt-3 text-gray-600">
                Discover the latest updates on vaccine research and development.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-heallar-primary decoration-2 hover:underline font-medium">
                  Read more
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <hr  className='max-w-[80rem] px-10  mx-auto'/>

    </div>
  )
}

export default Blog
