import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className=' p-12'>
      <h1 className='text-3xl ml-5 font-semibold mb-4'>About E-Learning</h1>
      <div className='flex flex-col md:flex-row space-x-0 md:space-x-8'>
        <div className='md:w-1/2 ml-5 '>
          <img
            src='https://res.cloudinary.com/dwucedjmy/image/upload/v1691134082/photo-1524178232363-1fb2b075b655_enawoh.avif'
            alt='About E-Learning'
            className='rounded-lg  w-10/12 shadow-md'
          />
        </div>
        <div className='md:w-1/2 mt-5 md:mt-0'>
          <p className='text-gray-600 mb-4'>
            Welcome to E-Learning, your ultimate destination for online learning
            and growth. We're on a mission to bring education to your
            fingertips, connecting passionate teachers with eager learners from
            around the world.
          </p>
          <p className='text-gray-600 mb-4'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mi neque. Nullam mi risus, cursus sed pharetra quis, varius quis est. Curabitur blandit, ante quis congue consequat, nulla orci tincidunt nibh, eget faucibus enim ligula in elit. Nunc malesuada quis risus ac consequat. 
          </p>
          <p className='text-gray-600'>
Quisque iaculis nec ligula vitae ullamcorper. Aenean cursus, eros eget vestibulum viverra, lorem metus pharetra ante, non sodales neque augue quis quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
