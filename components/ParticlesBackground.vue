<script lang="ts" setup>

import { loadFull } from "tsparticles";

const particlesInit = async (engine: any) => {
  await loadFull(engine);
}

</script>

<template>
  <client-only>
    <Particles id="particles" class="absolute left-0 right-0 bottom-0 top-0" :particlesInit="particlesInit" :options="{
      background: {
        color: {
          value: 'transparent'
        },
      },
      duration: 0,
      fpsLimit: 120,
      fullScreen: {
        enable: false
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#0F766E',
        },
        links: {
          color: '#959CB1',
          distance: 150,
          enable: true,
          opacity: 0.3,
        },
    
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200
            }
          },
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out'
          }
        },
        number: {
          density: {
            enable: true,
            area: 900
          },
          value: 80
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.3
          }
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: {
            enable: true
          },
          value: { min: 0.1, max: 5 },
          animation: {
            enable: true,
            speed: 20,
            minimumValue: 0.1
          }
        }
      },
      detectRetina: true
    }" />
  </client-only>
</template>