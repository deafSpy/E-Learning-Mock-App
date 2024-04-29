import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CarouselComponent() {
    return (
      <>
              <img
        //   src='https://res.cloudinary.com/dzeil57n4/image/upload/v1713655216/a_ucaxq8.png'
          src='https://res.cloudinary.com/dzeil57n4/image/upload/v1713723834/p2mpfyk2trnjy9aks306.png'
          alt='image 2'
          className='absolute h-full w-full object-cover'
        />
      <div className='relative h-full w-full flex'>
        
        <div className='relative inset-0 grid h-screen w-full items-center'>
            <div className='w-3/4 pl-12 md:w-2/5 md:pl-20 lg:pl-15'>
                <div className='mb-4 text-3xl md:text-4xl lg:text-5xl font-serif'>
                    <div className="font-serifB">E-Learning</div> Mock App
                </div>        


            <div className='mb-12 opacity-80 font-sans'
              >
              Expand your knowledge and skills with our thorough courses, instructed by experienced professionals.
            </div>
            <div className='flex gap-2 font-sans'>
              <Link to='/courses'>
                <Button size='lg' color='white' className="font-['Lato']">
                    <div className="font-['Lato']" >
                        Explore Courses
                    </div>
                </Button>
              </Link>
              <Link to='/about'>
                <Button size='lg' color='white' className="font-['Lato']">
                    <div className="font-['Lato']">
                        About Us
                    </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
                </>
  );
}
