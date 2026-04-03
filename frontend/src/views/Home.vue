<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge animate-fade delay-100">
          <span class="badge-dot"></span>
          探索硬件世界
        </div>
        <h1 class="hero-title animate-slide-up delay-200">
          电脑硬件
          <span class="gradient-text">展示中心</span>
        </h1>
        <p class="hero-subtitle animate-slide-up delay-300">
          深入了解CPU、显卡、内存、硬盘的发展历程与技术参数
          <br>实时追踪最新硬件价格动态
        </p>
        <div class="hero-buttons animate-slide-up delay-400">
          <router-link to="/cpu" class="cyber-button primary">
            <i class="fas fa-rocket"></i>
            开始探索
          </router-link>
          <button class="cyber-button secondary" @click="scrollToFeatures">
            <i class="fas fa-info-circle"></i>
            了解更多
          </button>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="cpu-visual">
          <div class="cpu-core main-core animate-morph">
            <i class="fas fa-microchip"></i>
          </div>
          <div class="orbit orbit-1">
            <div class="orbit-item"><i class="fas fa-tv"></i></div>
          </div>
          <div class="orbit orbit-2">
            <div class="orbit-item"><i class="fas fa-memory"></i></div>
          </div>
          <div class="orbit orbit-3">
            <div class="orbit-item"><i class="fas fa-hdd"></i></div>
          </div>
        </div>
      </div>
      
      <div class="hero-stats">
        <div class="stat-item animate-slide-up delay-500">
          <div class="stat-value" ref="stat1">0</div>
          <div class="stat-label">硬件种类</div>
        </div>
        <div class="stat-item animate-slide-up delay-600">
          <div class="stat-value" ref="stat2">0</div>
          <div class="stat-label">实时价格</div>
        </div>
        <div class="stat-item animate-slide-up delay-700">
          <div class="stat-value" ref="stat3">0</div>
          <div class="stat-label">技术参数</div>
        </div>
      </div>
    </section>

    <section class="features" ref="featuresSection">
      <div class="section-header">
        <h2 class="section-title">硬件分类</h2>
        <p class="section-subtitle">选择你感兴趣的硬件类型，深入了解其技术细节</p>
      </div>
      
      <div class="features-grid">
        <router-link to="/cpu" class="feature-card" v-for="(feature, index) in features" :key="feature.title">
          <div class="card-glow"></div>
          <div class="card-icon" :style="{ background: feature.gradient }">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-description">{{ feature.description }}</p>
          <div class="card-stats">
            <div class="stat">
              <span class="stat-number">{{ feature.products }}</span>
              <span class="stat-text">产品</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ feature.brands }}</span>
              <span class="stat-text">品牌</span>
            </div>
          </div>
          <div class="card-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        </router-link>
      </div>
    </section>

    <section class="timeline-preview">
      <div class="section-header">
        <h2 class="section-title">发展历程</h2>
        <p class="section-subtitle">见证计算机硬件的演进之路</p>
      </div>
      
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-item" v-for="(item, index) in timelineItems" :key="item.year">
          <div class="timeline-dot" :style="{ animationDelay: index * 0.2 + 's' }"></div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h4 class="timeline-title">{{ item.title }}</h4>
            <p class="timeline-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="price-tracker">
      <div class="section-header">
        <h2 class="section-title">实时价格追踪</h2>
        <p class="section-subtitle">获取最新硬件价格信息</p>
      </div>
      
      <div class="price-cards">
        <div class="price-card" v-for="(price, index) in latestPrices" :key="price.name">
          <div class="price-header">
            <i :class="price.icon"></i>
            <span class="price-name">{{ price.name }}</span>
          </div>
          <div class="price-value">
            <span class="currency">¥</span>
            <span class="amount">{{ price.price.toLocaleString() }}</span>
          </div>
          <div class="price-change" :class="price.change > 0 ? 'up' : 'down'">
            <i :class="price.change > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
            {{ Math.abs(price.change) }}%
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    const featuresSection = ref(null)
    const stat1 = ref(null)
    const stat2 = ref(null)
    const stat3 = ref(null)

    const features = [
      {
        title: 'CPU 处理器',
        icon: 'fas fa-microchip',
        description: '中央处理器是计算机的大脑，负责执行指令和处理数据',
        gradient: 'linear-gradient(135deg, #00f0ff 0%, #0066ff 100%)',
        products: '200+',
        brands: '2'
      },
      {
        title: '显卡 GPU',
        icon: 'fas fa-tv',
        description: '图形处理器负责渲染图像，是游戏和创作的重要组件',
        gradient: 'linear-gradient(135deg, #ff00ff 0%, #8b00ff 100%)',
        products: '150+',
        brands: '3'
      },
      {
        title: '内存 RAM',
        icon: 'fas fa-memory',
        description: '随机存取存储器为系统提供高速临时数据存储空间',
        gradient: 'linear-gradient(135deg, #ffff00 0%, #ff6600 100%)',
        products: '180+',
        brands: '10+'
      },
      {
        title: '硬盘存储',
        icon: 'fas fa-hdd',
        description: '存储设备用于永久保存系统和用户数据',
        gradient: 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)',
        products: '250+',
        brands: '15+'
      }
    ]

    const timelineItems = [
      { year: '1971', title: 'Intel 4004', description: '第一款商用微处理器诞生' },
      { year: '1981', title: 'IBM PC', description: '个人电脑时代开启' },
      { year: '1999', title: 'NVIDIA GPU', description: 'GeForce 256 开启GPU时代' },
      { year: '2006', title: 'Core 架构', description: 'Intel Core 处理器发布' },
      { year: '2020', title: 'DDR5 发布', description: '新一代内存标准确立' }
    ]

    const latestPrices = [
      { name: 'Intel i9-14900K', price: 4599, change: -2.5, icon: 'fas fa-microchip' },
      { name: 'RTX 4090', price: 14999, change: 1.2, icon: 'fas fa-tv' },
      { name: 'DDR5 32GB', price: 899, change: -5.3, icon: 'fas fa-memory' },
      { name: 'SSD 2TB', price: 799, change: -3.8, icon: 'fas fa-hdd' }
    ]

    const scrollToFeatures = () => {
      featuresSection.value?.scrollIntoView({ behavior: 'smooth' })
    }

    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        element.textContent = value + '+'
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    onMounted(() => {
      setTimeout(() => {
        animateValue(stat1.value, 0, 500, 2000)
        animateValue(stat2.value, 0, 1000, 2000)
        animateValue(stat3.value, 0, 2000, 2000)
      }, 500)
    })

    return {
      featuresSection,
      stat1,
      stat2,
      stat3,
      features,
      timelineItems,
      latestPrices,
      scrollToFeatures
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 10;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 50px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  color: var(--primary-color);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 25px;
  line-height: 1.2;
}

.gradient-text {
  display: block;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cyber-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.cyber-button:hover::before {
  left: 100%;
}

.cyber-button:hover {
  background: var(--primary-color);
  color: var(--bg-dark);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
}

.cyber-button.secondary {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.cyber-button.secondary:hover {
  background: var(--secondary-color);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

.hero-visual {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  pointer-events: none;
  opacity: 0.3;
}

.cpu-visual {
  position: relative;
  width: 100%;
  height: 100%;
}

.cpu-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: var(--gradient-cyber);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--bg-dark);
  box-shadow: 0 0 60px rgba(0, 240, 255, 0.5);
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.orbit-1 { width: 250px; height: 250px; animation-duration: 15s; }
.orbit-2 { width: 350px; height: 350px; animation-duration: 20s; animation-direction: reverse; }
.orbit-3 { width: 450px; height: 450px; animation-duration: 25s; }

.orbit-item {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1rem;
}

.hero-stats {
  display: flex;
  gap: 60px;
  margin-top: 80px;
  z-index: 10;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 5px;
}

.features {
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.4s ease;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover .card-glow {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-color);
  box-shadow: 0 20px 60px rgba(0, 240, 255, 0.2);
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--bg-dark);
  margin-bottom: 25px;
  transition: transform 0.3s ease;
}

.feature-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

.card-stats {
  display: flex;
  gap: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  color: var(--primary-color);
}

.stat-text {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.card-arrow {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: rgba(0, 240, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.feature-card:hover .card-arrow {
  background: var(--primary-color);
  color: var(--bg-dark);
  transform: translateX(5px);
}

.timeline-preview {
  padding: 100px 40px;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.02) 50%, transparent 100%);
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent 0%, var(--primary-color) 10%, var(--primary-color) 90%, transparent 100%);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-item:nth-child(odd) .timeline-content {
  text-align: right;
  padding-right: 60px;
  padding-left: 0;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--primary-color);
  animation: pulse 2s ease-in-out infinite;
}

.timeline-content {
  flex: 1;
  padding-left: 60px;
}

.timeline-year {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: var(--primary-color);
  background: rgba(0, 240, 255, 0.1);
  padding: 5px 15px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.timeline-title {
  font-size: 1.3rem;
  margin-bottom: 8px;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.timeline-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.price-tracker {
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.price-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.price-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
}

.price-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 10px 40px rgba(0, 240, 255, 0.2);
  transform: translateY(-5px);
}

.price-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.price-header i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.price-name {
  font-size: 1rem;
  color: var(--text-primary);
}

.price-value {
  margin-bottom: 15px;
}

.currency {
  font-size: 1.2rem;
  color: var(--primary-color);
}

.amount {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-change {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.price-change.up {
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
}

.price-change.down {
  background: rgba(255, 0, 0, 0.1);
  color: #ff4444;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 30px;
  }
  
  .hero-visual {
    display: none;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .timeline-item,
  .timeline-item:nth-child(odd) {
    flex-direction: row;
  }
  
  .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content {
    padding-left: 50px;
    padding-right: 0;
    text-align: left;
  }
  
  .timeline-dot {
    left: 20px;
  }
}
</style>
