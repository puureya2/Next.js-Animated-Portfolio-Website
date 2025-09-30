// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {

  return (

  <div
    className='mx-auto xl:mx-0'
  >

    <Link 
      href={'/work'}
      className='relative w-[185px] h-[185px] 
      flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group'
    >

      <Image 
        src={'/rounded-text.png'}
        width={141}
        height={148}
        alt=''

        /* --------------------------------------------------------------------------------------
        TODO:

        #1 Original values in tailwindcss.animation module:

          animation: {
            'spin-slow': 'spin 6s linear infinite',
          },

        #2 Original <Image> did not contain classes for enabling an opacity effect upon hovering

        FIXME:
        
        #1 Modified the spin speed -> 'spin 10s linear infinite'

        #2 Modified <Image> to include 'group-hover:opacity-65 transition-opacity'
        ------------------------------------------------------------------------------------------*/

        className='animate-spin-slow w-full h-full 
        max-w-[141px] max-h-[148px] group-hover:opacity-65 transition-opacity'
      />

      {/* --------------------------------------------------
        TODO: Original values of <HiArrowRight> classes:

          group-hover:translate-x-2
          duration-300

        FIXME: Modified values to 1.5 & 450ms respectively
        ----------------------------------------------------*/}

      <HiArrowRight 
        className='absolute text-4xl group-hover:translate-x-1.5
        group-hover:scale-110 transition-all duration-450' 
      />
      
    </Link>

  </div>

  );

};

export default ProjectsBtn;
