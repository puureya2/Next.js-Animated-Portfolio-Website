import React, { useState } from "react";


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp, { useCountUp } from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  // duration for counters
  const duration = 6;

  return (
  
    <div
      className='h-full bg-primary/30 py-32 text-center xl:text-left'
    >

      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >

        <Avatar />
      
      </motion.div>

      <div
        className='container max-w-[85%] mx-auto h-full flex flex-col
        item-center xl:flex-row gap-x-6'
      >

        {/* text */}
        <div className='relative flex-1 flex flex-col justify-center'>

          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >

            Captivating  <span className='text-accent'>stories  </span>birth  magnificent  designs.

          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >

            10 years ago, I began developing as a freelancer blah blah...
            10 years ago, I began developing as a freelancer blah blah...
            10 years ago, blah...

          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:max-w-none mx-auto xl:mx-0 mb-8'
          >

            <div className='hidden xl:flex xl:gap-x-6 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0'>

              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:-left-6'>
                
                <div className='xl:flex text-4xl font-extrabold text-accent'>
                  <CountUp start={0} end={10} duration={duration} /> +
                </div>
                
                <div className='xl:flex uppercase tracking-[1px] 
                leading-1.4 max-w-100px'>
                  Years Experience
                </div>
                
              </div>

              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:-left-6'>
                
                <div className='xl:flex text-4xl font-extrabold text-accent'>
                  <CountUp start={0} end={25} duration={duration} /> +
                </div>

                <div className='xl:flex uppercase tracking-[1px] 
                leading-1.4 max-w-100px'>
                  Satisfied Clients
                </div>

              </div>

              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:-left-6'>
                
                <div className='xl:flex text-4xl font-extrabold text-accent'>
                  <CountUp start={0} end={65} duration={duration} /> +
                </div>

                <div className='xl:flex uppercase tracking-[1px] 
                leading-1.4 max-w-100px'>
                  Finished projects
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[46%] h-[480px]'
        >

          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-10'>

            {aboutData.map((item, itemIndex) => {
              return (

                <div

                  key={itemIndex}

                  className={

                    /* -----------------------------------------------------------------
                    #1
                    TODO: The original <div> className did NOT contain the following:

                      ${after:bg-opacity-60}

                    FIXME: I made the change, to add opacity to the underlines

                    #2
                    TODO: The original <div> className DID contain the following:

                      ${after:bg-white}
                      *resulted in underlines always staying white

                    FIXME: I made the change, to include red underlines on selection
                    --------------------------------------------------------------------*/
                    
                    `${
                      index === itemIndex && 
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 after:bg-opacity-60'
                    }
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                    after:absolute after:-bottom-1 after:left-0`
                  
                  }

                  onClick={() => setIndex(itemIndex)}

                >
                  
                  {item.title}

                </div>

              );
            })}

          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start'>

            {aboutData[index].info.map((item, itemIndex) => {
              
              return (

                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60'>

                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>
                    {item.title}
                  </div>

                  <div className='hidden md:flex'>-</div>

                  {/* stage */}
                  <div>{item.stage}</div>

                  <div className='flex gap-x-4'>

                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      
                      return (
                      <div key={iconIndex} className='text-2xl text-white'>
                        {icon}
                      </div>
                    );

                    })}

                  </div>

                </div>

              );

            })}

          </div>

        </motion.div>

      </div>

    </div>
    
  );

};

export default About;
