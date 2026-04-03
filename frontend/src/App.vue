<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-glow"></div>
        <p>&copy; 2024 电脑硬件展示中心 | 探索硬件的无限可能</p>
      </div>
    </footer>
    <div class="background-effects">
      <div class="grid-overlay"></div>
      <div class="floating-particles" ref="particles"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  setup() {
    const particles = ref(null)

    onMounted(() => {
      createParticles()
    })

    const createParticles = () => {
      if (!particles.value) return
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 5 + 's'
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
        particles.value.appendChild(particle)
      }
    }

    return { particles }
  }
}
</script>
