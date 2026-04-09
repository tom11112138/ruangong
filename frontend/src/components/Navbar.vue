<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <i class="fas fa-microchip"></i>
        </div>
        <span class="logo-text">HARDWARE HUB</span>
      </router-link>
      
      <div class="nav-links">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          class="nav-link"
          :class="{ active: $route.path === link.path }"
        >
          <i :class="link.icon"></i>
          <span>{{ link.name }}</span>
          <div class="link-glow"></div>
        </router-link>
      </div>

      <div class="nav-indicator">
        <div class="indicator-dot"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const isScrolled = ref(false)
    
    const navLinks = [
      { name: '首页', path: '/', icon: 'fas fa-home' },
      { name: 'CPU', path: '/cpu', icon: 'fas fa-microchip' },
      { name: '显卡', path: '/gpu', icon: 'fas fa-tv' },
      { name: '内存', path: '/memory', icon: 'fas fa-memory' },
      { name: '硬盘', path: '/storage', icon: 'fas fa-hdd' },
      { name: '主板', path: '/motherboard', icon: 'fas fa-th-large' }
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { isScrolled, navLinks }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 15px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 5px 30px rgba(0, 240, 255, 0.1);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  position: relative;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: var(--gradient-cyber);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--bg-dark);
  animation: pulse 2s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
  animation: shimmer 3s infinite;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 3px;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-link {
  position: relative;
  padding: 12px 25px;
  text-decoration: none;
  color: var(--text-secondary);
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
}

.nav-link i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(0, 240, 255, 0.1);
}

.nav-link:hover i {
  transform: scale(1.2);
}

.nav-link.active {
  color: var(--primary-color);
  background: rgba(0, 240, 255, 0.15);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.nav-link.active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-cyber);
}

.link-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  border-radius: 50%;
}

.nav-link:hover .link-glow {
  width: 200%;
  height: 200%;
}

.nav-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
  box-shadow: 0 0 10px var(--primary-color);
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 20px;
  }
  
  .nav-link span {
    display: none;
  }
  
  .nav-link {
    padding: 12px 15px;
  }
}

@media (max-width: 768px) {
  .logo-text {
    display: none;
  }
}
</style>
