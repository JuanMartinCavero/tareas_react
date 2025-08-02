import React from 'react'
import Title from './Title'
import testimonial from "../assets/testimonial.png"
import {TbLocation} from 'react-icons/tb'
import { RiAdminLine,RiSecurePaymentLine,RiSoundModuleLine } from 'react-icons/ri'
import { FaQuoteLeft,FaUsersLine } from 'react-icons/fa6'
import about from "../assets/about.png"

const About = () => {
  return (
 <section className='max-padd-container py-16'>
  {/*CONTAINER*/}
  <div className='flex flex-col md:flex-row gap-5 gap-y-10'>
    {/**TESTIMONIAL */}
    <div className='flex-1 flexCenter flex-col'>
      <Title title1={"People"} title2={"Says"} title1Styles={"h3"}/>
      <img src={testimonial} alt="" height={55} width={55} className='rounded-full'/>
      <h4 className='h4 mt-6'>John Doe</h4>
      <p className='relative bottom-2'>CEO at TechStack</p>
      <FaQuoteLeft className='text-3xl' />
      <p className='max-w-[222px] mt-5 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit repellat veniam sequi aut modi, quos fuga iure. Dolore incidunt quo quia animi voluptatibus laborum officia culpa. Saepe nobis cum quas.</p>
    </div>
    {/*BANNER*/}
<div className='flex-[2] relative rounded-2xl overflow-hidden'>
  <img
    src={about}
    alt=""
    className='w-full h-full object-cover rounded-2xl'
  />

  {/* Fondo blanco translúcido con blur detrás del texto */}
  <div className='absolute inset-0 z-10 flex justify-center items-center'>
    <div className='bg-white/60 backdrop-blur-md p-6 rounded-xl text-center'>
      <h4 className='bold-18'>Top view in this<br /> week</h4>
      <h2 className='h2 uppercase'>Trending</h2>
    </div>
  </div>
</div>

    {/*ABOUT */}
    <div className='flex-[1] flexCenter flex-col'>
      <Title title1={'About'} title2={"Us"} title1Styles={'h3'} titleStyles={'!pb-2'} /> 
      <div className='flex flex-col items-start'>
        <div className='flexCenter gap-3 mb-3'>
          <RiSecurePaymentLine className='text-xl'/>
          <div>
            <h5 className='h5'>Fast & Secure</h5>
            <p>Optimized performance</p>
          </div>
        </div>

               <div className='flexCenter gap-3 mb-3'>
          <RiSoundModuleLine className='text-xl'/>
          <div>
            <h5 className='h5'>Advanced Filtering</h5>
            <p>Find items quickly</p>
          </div>
        </div>

               <div className='flexCenter gap-3 mb-3'>
          <FaUsersLine className='text-xl'/>
          <div>
            <h5 className='h5'>User Reviews</h5>
            <p>Ratings & feedback</p>
          </div>
        </div>

               <div className='flexCenter gap-3 mb-3'>
          <TbLocation className='text-xl'/>
          <div>
            <h5 className='h5'>Order Tracking</h5>
            <p>Live order status</p>
          </div>
        </div>

               <div className='flexCenter gap-3 mb-3'>
          <RiAdminLine className='text-xl'/>
          <div>
            <h5 className='h5'>Admin Dashboard</h5>
            <p>Manage store easily</p>
          </div>
        </div>
        </div> 
    </div>
  </div>
 </section>
  )
}

export default About
