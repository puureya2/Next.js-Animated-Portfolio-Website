// Particles
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import { color, distance } from 'framer-motion';


const ParticlesContainer = () => {
  
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    
    <Particles 
      className='w-full h-full absolute translate-z-0'

      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      
      options={{

        fullScreen: {enable: false},
        background: {
          color: {
            value: '',
          },
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            
            /* --------------------------------------------------------------
            TODO: Note that the original onHover: {} contains the following:

              push: { quantity: 90 }
              repulse: { speed: *no parameter included }

            FIXME: I made the changes included in the code
            -----------------------------------------------------------------*/
            onHover: {
              enable: true,
              mode: 'repulse',
            },

            resize: true,

          },

          modes: {
            push: {
              quantity: 60
            },

            repulse: {
              distance: 200,
              duration: 0.8,
              speed: 0.1
            }

          }

        },

        particles: {
          color: {
            value: '#e68e2e',
          },

          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },

          collisions: {
            enable: true,
          },

          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },

            random: false,
            speed: 1,
            straight: false

          },

          number: {
            density: {
              enable: true,
              area: 800
            },

            value: 80

          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: 'circle'
          },

          size: {
            value: {min: 1, max: 5}
          },
          
        },

        detectRetina: true,
        
      }}
    />

  );

};

export default ParticlesContainer;
