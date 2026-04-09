<template>
  <div class="hardware-page">
    <section class="page-hero">
      <div class="hero-bg">
        <div class="circuit-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="breadcrumb">
          <router-link to="/">首页</router-link>
          <i class="fas fa-chevron-right"></i>
          <span>主板</span>
        </div>
        <h1 class="page-title">
          <span class="icon"><i class="fas fa-th-large"></i></span>
          主板
        </h1>
        <p class="page-subtitle">Motherboard - 连接所有硬件的平台</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content animate-slide-left">
            <h2>什么是主板？</h2>
            <p>
              主板（Motherboard）是计算机的核心电路板，它连接并协调 CPU、内存、显卡、存储设备等所有硬件组件的工作。
              作为整个计算机系统的骨架，主板的质量和特性直接影响着整机的性能、稳定性和扩展能力。
            </p>
            <p>
              现代主板集成了丰富的接口和功能，包括 USB 接口、网络接口、音频芯片、WiFi 模块等。
              主板芯片组决定了支持的 CPU 类型、内存规格、扩展插槽数量等关键参数。
            </p>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="value">ATX</span>
                <span class="label">主流板型</span>
              </div>
              <div class="intro-stat">
                <span class="value">PCIe 5.0</span>
                <span class="label">最新标准</span>
              </div>
              <div class="intro-stat">
                <span class="value">DDR5</span>
                <span class="label">内存支持</span>
              </div>
            </div>
          </div>
          <div class="intro-visual animate-slide-right">
            <div class="motherboard-animation">
              <div class="motherboard-body">
                <div class="cpu-socket"></div>
                <div class="ram-slots">
                  <div class="ram-slot" v-for="i in 4" :key="i"></div>
                </div>
                <div class="pcie-slots">
                  <div class="pcie-slot" v-for="i in 3" :key="i"></div>
                </div>
                <div class="chipset"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2>主板发展历史</h2>
          <p>从简单电路板到高度集成的复杂系统</p>
        </div>
        
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(event, index) in motherboardHistory" 
            :key="event.year"
            :style="{ animationDelay: index * 0.15 + 's' }"
          >
            <div class="timeline-marker">
              <span class="year">{{ event.year }}</span>
            </div>
            <div 
              class="timeline-card clickable"
              @click="showDetail(event)"
            >
              <div class="card-header">
                <h3>{{ event.title }}</h3>
                <span class="view-detail">
                  <i class="fas fa-external-link-alt"></i>
                  详情
                </span>
              </div>
              <p>{{ event.description }}</p>
              <div class="specs" v-if="event.specs">
                <span v-for="spec in event.specs" :key="spec" class="spec-tag">{{ spec }}</span>
              </div>
            </div>
          </div>
        </div>

        <transition name="modal-fade">
          <div class="detail-modal-overlay" v-if="selectedEvent" @click.self="selectedEvent = null">
            <div class="detail-modal">
              <button class="close-btn" @click="selectedEvent = null">
                <i class="fas fa-times"></i>
              </button>
              <div class="modal-header">
                <div class="modal-year-badge">{{ selectedEvent.year }}</div>
                <h2>{{ selectedEvent.title }}</h2>
                <p class="modal-subtitle">{{ selectedEvent.description }}</p>
              </div>
              <div class="modal-body">
                <div class="detail-section" v-if="selectedEvent.details?.innovation">
                  <h3><i class="fas fa-lightbulb"></i> 技术创新</h3>
                  <p>{{ selectedEvent.details.innovation }}</p>
                </div>
                <div class="detail-section" v-if="selectedEvent.details?.impact">
                  <h3><i class="fas fa-chart-line"></i> 历史影响</h3>
                  <p>{{ selectedEvent.details.impact }}</p>
                </div>
                <div class="detail-grid" v-if="selectedEvent.details?.specs">
                  <div class="spec-card" v-for="(value, key) in selectedEvent.details.specs" :key="key">
                    <span class="spec-label">{{ key }}</span>
                    <span class="spec-value">{{ value }}</span>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="action-btn primary" @click="selectedEvent = null">
                  <i class="fas fa-check"></i> 了解了
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="params-section">
      <div class="container">
        <div class="section-header">
          <h2>核心参数解析</h2>
          <p>了解主板的关键技术指标</p>
        </div>
        <div class="params-grid">
          <div class="param-card" v-for="param in motherboardParams" :key="param.name">
            <div class="param-icon">
              <i :class="param.icon"></i>
            </div>
            <h3>{{ param.name }}</h3>
            <p>{{ param.description }}</p>
            <div class="param-visual">
              <div class="visual-bar" :style="{ width: param.importance + '%' }"></div>
            </div>
            <span class="importance">重要性：{{ param.importance }}%</span>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section">
      <div class="container">
        <div class="section-header">
          <h2>主流品牌</h2>
          <p>华硕、微星、技嘉 - 三大板厂</p>
        </div>
        <div class="brands-comparison">
          <div class="brand-card asus">
            <div class="brand-logo"><span class="logo-text">ASUS</span></div>
            <h3>华硕 ASUS</h3>
            <p class="brand-desc">全球最大的主板制造商，ROG 玩家国度享誉全球</p>
            <div class="brand-series">
              <div class="series-item"><span class="series-name">ROG MAXIMUS</span><span class="series-desc">旗舰超频</span></div>
              <div class="series-item"><span class="series-name">ROG STRIX</span><span class="series-desc">电竞游戏</span></div>
              <div class="series-item"><span class="series-name">TUF GAMING</span><span class="series-desc">耐用军规</span></div>
              <div class="series-item"><span class="series-name">PRIME</span><span class="series-desc">主流商务</span></div>
            </div>
          </div>
          <div class="vs-divider"><span>VS</span></div>
          <div class="brand-card msi">
            <div class="brand-logo"><span class="logo-text">MSI</span></div>
            <h3>微星 MSI</h3>
            <p class="brand-desc">电竞装备领先者，主板设计独具匠心</p>
            <div class="brand-series">
              <div class="series-item"><span class="series-name">MEG GODLIKE</span><span class="series-desc">顶级旗舰</span></div>
              <div class="series-item"><span class="series-name">MAG TOMAHAWK</span><span class="series-desc">中端热销</span></div>
              <div class="series-item"><span class="series-name">PRO</span><span class="series-desc">商务办公</span></div>
            </div>
          </div>
          <div class="vs-divider"><span>VS</span></div>
          <div class="brand-card gigabyte">
            <div class="brand-logo"><span class="logo-text">GIGABYTE</span></div>
            <h3>技嘉 GIGABYTE</h3>
            <p class="brand-desc">老牌板卡厂商，AORUS 电竞系列口碑良好</p>
            <div class="brand-series">
              <div class="series-item"><span class="series-name">AORUS XTREME</span><span class="series-desc">旗舰电竞</span></div>
              <div class="series-item"><span class="series-name">AORUS ELITE</span><span class="series-desc">主流电竞</span></div>
              <div class="series-item"><span class="series-name">UD</span><span class="series-desc">入门实用</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>热门产品</h2>
          <p>实时价格追踪</p>
        </div>
        <div class="products-filter">
          <button v-for="brand in ['全部', 'ASUS', 'MSI', 'GIGABYTE']" :key="brand"
            :class="['filter-btn', { active: activeFilter === brand }]"
            @click="activeFilter = brand">
            {{ brand }}
          </button>
        </div>
        <div class="products-grid">
          <div class="product-card" v-for="(product, index) in filteredProducts" :key="product.name"
            :class="[product.brand.toLowerCase(), 'animate-fade-up']"
            :style="{ animationDelay: index * 0.1 + 's' }">
            <div class="card-glow" :class="product.brand.toLowerCase()"></div>
            <div class="product-header">
              <div class="product-brand-badge" :class="product.brand.toLowerCase()">
                <span>{{ product.brand }}</span>
              </div>
              <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            </div>
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="product-specs">
              <div class="spec-item highlight">
                <div class="spec-icon"><i class="fas fa-microchip"></i></div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.socket }}</span>
                  <span class="spec-label">CPU 插槽</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon"><i class="fas fa-th-large"></i></div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.formFactor }}</span>
                  <span class="spec-label">板型</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon"><i class="fas fa-memory"></i></div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.memoryType }}</span>
                  <span class="spec-label">内存类型</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon"><i class="fas fa-bolt"></i></div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.chipset }}</span>
                  <span class="spec-label">芯片组</span>
                </div>
              </div>
            </div>
            <div class="product-price-section">
              <div class="price-wrapper">
                <span class="price-label">当前价格</span>
                <div class="price-current">
                  <span class="currency">¥</span>
                  <span class="amount">{{ product.price.toLocaleString() }}</span>
                </div>
              </div>
              <div class="price-change-badge" :class="product.priceChange > 0 ? 'up' : 'down'">
                <i :class="product.priceChange > 0 ? 'fas fa-arrow-trend-up' : 'fas fa-arrow-trend-down'"></i>
                <span>{{ Math.abs(product.priceChange) }}%</span>
                <span class="change-text">{{ product.priceChange > 0 ? '上涨' : '下跌' }}</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="action-btn primary pulse-glow" @click="openProductDetail(product)">
                <i class="fas fa-external-link-alt"></i><span>查看详情</span>
              </button>
              <button class="action-btn secondary" @click="openPriceChart(product)">
                <i class="fas fa-chart-line"></i><span>价格走势</span>
              </button>
            </div>
            <div class="card-bottom-line" :class="product.brand.toLowerCase()"></div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div class="product-modal-overlay" v-if="showProductDetail" @click.self="showProductDetail = false">
          <div class="product-detail-modal">
            <div class="modal-close-btn" @click="showProductDetail = false">
              <i class="fas fa-times"></i>
            </div>
            <div class="detail-header" :class="selectedProduct?.brand?.toLowerCase()">
              <div class="detail-brand-badge" :class="selectedProduct?.brand?.toLowerCase()">
                {{ selectedProduct?.brand }}
              </div>
              <h2>{{ selectedProduct?.name }}</h2>
              <p class="detail-subtitle">{{ selectedProduct?.badge || '高性能主板' }}</p>
            </div>
            <div class="detail-body">
              <div class="detail-specs-grid">
                <div class="detail-spec-card">
                  <i class="fas fa-microchip"></i>
                  <span class="spec-num">{{ selectedProduct?.socket }}</span>
                  <span class="spec-name">CPU 插槽</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-th-large"></i>
                  <span class="spec-num">{{ selectedProduct?.formFactor }}</span>
                  <span class="spec-name">板型</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-memory"></i>
                  <span class="spec-num">{{ selectedProduct?.memoryType }}</span>
                  <span class="spec-name">内存类型</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-bolt"></i>
                  <span class="spec-num">{{ selectedProduct?.chipset }}</span>
                  <span class="spec-name">芯片组</span>
                </div>
              </div>
              <div class="detail-info-section">
                <h3><i class="fas fa-star"></i> 产品亮点</h3>
                <ul class="feature-list">
                  <li v-for="(feat, idx) in getProductFeatures(selectedProduct)" :key="idx">
                    <i class="fas fa-check-circle"></i> {{ feat }}
                  </li>
                </ul>
              </div>
              <div class="detail-price-box">
                <div class="price-main">
                  <span class="price-label">参考售价</span>
                  <span class="price-value">¥{{ selectedProduct?.price?.toLocaleString() }}</span>
                </div>
                <div class="price-trend" :class="selectedProduct?.priceChange > 0 ? 'up' : 'down'">
                  <i :class="selectedProduct?.priceChange > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
                  较上月 {{ Math.abs(selectedProduct?.priceChange || 0) }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="modal-fade">
        <div class="product-modal-overlay" v-if="showPriceChart" @click.self="showPriceChart = false">
          <div class="price-chart-modal">
            <div class="modal-close-btn" @click="showPriceChart = false">
              <i class="fas fa-times"></i>
            </div>
            <div class="chart-header">
              <h2><i class="fas fa-chart-line"></i> 价格走势</h2>
              <p class="chart-subtitle">{{ selectedProduct?.name }} · 近 6 个月价格变化</p>
            </div>
            <div class="chart-body">
              <div class="chart-visual">
                <div class="chart-bars">
                  <div class="chart-bar-wrapper" v-for="(item, idx) in priceHistoryData" :key="idx">
                    <div class="chart-bar" :style="{ height: item.height + '%' }"></div>
                    <span class="bar-price">¥{{ item.price }}</span>
                    <span class="bar-month">{{ item.month }}</span>
                  </div>
                </div>
              </div>
              <div class="chart-stats">
                <div class="stat-item">
                  <span class="stat-label">最高价</span>
                  <span class="stat-val high">¥{{ priceStats.max }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">最低价</span>
                  <span class="stat-val low">¥{{ priceStats.min }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">平均价</span>
                  <span class="stat-val avg">¥{{ priceStats.avg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <section class="knowledge-section">
      <div class="container">
        <div class="section-header">
          <h2>选购指南</h2>
          <p>如何选择适合自己的主板</p>
        </div>
        <div class="knowledge-cards">
          <div class="knowledge-card" v-for="tip in buyingTips" :key="tip.title">
            <div class="card-icon"><i :class="tip.icon"></i></div>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Motherboard',
  setup() {
    const activeFilter = ref('全部')
    const selectedEvent = ref(null)
    const selectedProduct = ref(null)
    const showProductDetail = ref(false)
    const showPriceChart = ref(false)

    const motherboardHistory = [
      { year: '1981', title: 'IBM PC 主板', description: '第一块 PC 主板诞生，采用 ISA 总线', specs: ['ISA 总线', '5MHz'],
        details: { innovation: '开放式架构设计，允许第三方开发扩展卡', impact: '奠定了 PC 兼容机标准',
          specs: { '总线': 'ISA 8-bit', '频率': '4.77MHz', '内存': '64KB' } } },
      { year: '1987', title: 'PCI 总线诞生', description: 'Intel 推出 PCI 总线，取代 ISA', specs: ['PCI 总线', '33MHz'],
        details: { innovation: '更高的带宽和即插即用功能', impact: '成为 90 年代主流扩展总线',
          specs: { '总线': 'PCI 32-bit', '频率': '33MHz', '带宽': '133MB/s' } } },
      { year: '1997', title: 'AGP 插槽问世', description: '专为显卡设计的 AGP 接口', specs: ['AGP 1x/2x', '66MHz'],
        details: { innovation: '独立显卡专用高速接口', impact: '大幅提升 3D 图形性能',
          specs: { '接口': 'AGP', '频率': '66MHz', '带宽': '266MB/s' } } },
      { year: '2004', title: 'PCI Express 标准', description: 'PCIe 取代 PCI 和 AGP', specs: ['PCIe x16', '2.5GT/s'],
        details: { innovation: '串行点对点连接，更高带宽', impact: '统一显卡和扩展卡接口标准',
          specs: { '接口': 'PCIe x16', '带宽': '4GB/s', '版本': '1.0' } } },
      { year: '2010', title: 'USB 3.0 集成', description: '主板开始集成 USB 3.0 接口', specs: ['USB 3.0', '5Gbps'],
        details: { innovation: '十倍于 USB 2.0 的传输速度', impact: '高速外设普及',
          specs: { '接口': 'USB 3.0', '速度': '5Gbps', '电流': '900mA' } } },
      { year: '2020', title: 'PCIe 4.0/5.0 时代', description: '新一代高速扩展接口', specs: ['PCIe 5.0', '32GT/s'],
        details: { innovation: '带宽翻倍，支持 NVMe SSD 和 RTX 40 系显卡', impact: '为高性能存储和显卡铺路',
          specs: { '接口': 'PCIe 5.0 x16', '带宽': '64GB/s', '频率': '32GT/s' } } }
    ]

    const motherboardParams = [
      { name: 'CPU 插槽', icon: 'fas fa-microchip', description: '决定支持的 CPU 型号，如 LGA1700、AM5', importance: 100 },
      { name: '芯片组', icon: 'fas fa-bolt', description: '控制主板的扩展能力和功能', importance: 95 },
      { name: '内存支持', icon: 'fas fa-memory', description: '支持的内存类型和频率上限', importance: 90 },
      { name: '扩展插槽', icon: 'fas fa-plug', description: 'PCIe 插槽数量和规格', importance: 85 },
      { name: '供电设计', icon: 'fas fa-power-off', description: 'VRM 供电相数和散热', importance: 88 },
      { name: '接口丰富度', icon: 'fas fa-usb', description: 'USB、SATA 等接口数量', importance: 75 }
    ]

    const products = [
      { name: '华硕 ROG MAXIMUS Z790 HERO', brand: 'ASUS', socket: 'LGA1700', formFactor: 'ATX', memoryType: 'DDR5', chipset: 'Z790', price: 4999, priceChange: -2.1, badge: '旗舰' },
      { name: '华硕 TUF GAMING B760M-PLUS', brand: 'ASUS', socket: 'LGA1700', formFactor: 'M-ATX', memoryType: 'DDR5', chipset: 'B760', price: 1299, priceChange: -1.5, badge: '热销' },
      { name: '微星 MEG Z790 GODLIKE', brand: 'MSI', socket: 'LGA1700', formFactor: 'E-ATX', memoryType: 'DDR5', chipset: 'Z790', price: 8999, priceChange: 1.2, badge: '顶级' },
      { name: '微星 MAG B650M MORTAR', brand: 'MSI', socket: 'AM5', formFactor: 'M-ATX', memoryType: 'DDR5', chipset: 'B650', price: 1099, priceChange: -3.2, badge: '性价比' },
      { name: '技嘉 AORUS Z790 XTREME', brand: 'GIGABYTE', socket: 'LGA1700', formFactor: 'E-ATX', memoryType: 'DDR5', chipset: 'Z790', price: 6999, priceChange: -1.8, badge: '电竞旗舰' },
      { name: '技嘉 B760M AORUS ELITE', brand: 'GIGABYTE', socket: 'LGA1700', formFactor: 'M-ATX', memoryType: 'DDR4', chipset: 'B760', price: 899, priceChange: -4.5, badge: '入门优选' }
    ]

    const buyingTips = [
      { icon: 'fas fa-gamepad', title: '游戏玩家', content: '选择 Z790/X670E 芯片组，支持 CPU 超频，PCIe 插槽充足' },
      { icon: 'fas fa-video', title: '内容创作', content: '大板 ATX 或 E-ATX，多 M.2 插槽，高供电相数' },
      { icon: 'fas fa-desktop', title: '办公家用', content: 'B760/B650 芯片组，M-ATX 板型，性价比高' },
      { icon: 'fas fa-tachometer-alt', title: '超频爱好者', content: '旗舰 Z790/X670E，16+ 相供电，优秀散热设计' }
    ]

    const filteredProducts = computed(() => {
      if (activeFilter.value === '全部') return products
      return products.filter(p => p.brand === activeFilter.value)
    })

    const showDetail = (event) => { selectedEvent.value = event }

    const openProductDetail = (product) => {
      selectedProduct.value = product
      showProductDetail.value = true
      document.body.style.overflow = 'hidden'
    }

    const openPriceChart = (product) => {
      selectedProduct.value = product
      showPriceChart.value = true
      document.body.style.overflow = 'hidden'
    }

    const getProductFeatures = (product) => {
      if (!product) return []
      const features = []
      if (product.chipset.includes('Z790') || product.chipset.includes('X670')) features.push('旗舰芯片组，支持超频')
      if (product.memoryType === 'DDR5') features.push('支持 DDR5 内存，带宽更高')
      if (product.formFactor === 'E-ATX') features.push('加大板型，扩展性极强')
      if (product.formFactor === 'M-ATX') features.push('紧凑板型，兼容性好')
      if (product.price > 3000) features.push('旗舰定位，用料奢华')
      if (product.price < 1000) features.push('高性价比，入门优选')
      if (product.badge) features.push(`市场定位：${product.badge}`)
      features.push('配合对应 CPU 使用，性能释放更佳')
      return features.slice(0, 5)
    }

    const priceHistoryData = computed(() => {
      if (!selectedProduct.value) return []
      const basePrice = selectedProduct.value.price
      const months = ['9 月', '10 月', '11 月', '12 月', '1 月', '2 月']
      let currentPrice = Math.round(basePrice * (0.88 + Math.random() * 0.18))
      return months.map((month, idx) => {
        const change = idx < 5 ? (Math.random() - 0.45) * 8 : selectedProduct.value.priceChange
        const price = idx === 5 ? basePrice : Math.round(currentPrice * (1 + change / 100))
        currentPrice = price
        return { month, price, change, height: ((price - basePrice * 0.8) / (basePrice * 0.4)) * 75 + 20 }
      })
    })

    const priceStats = computed(() => {
      if (!priceHistoryData.value.length) return { max: 0, min: 0, avg: 0 }
      const prices = priceHistoryData.value.map(d => d.price)
      return {
        max: Math.max(...prices).toLocaleString(),
        min: Math.min(...prices).toLocaleString(),
        avg: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length).toLocaleString()
      }
    })

    return {
      activeFilter, selectedEvent, selectedProduct, showProductDetail, showPriceChart,
      motherboardHistory, motherboardParams, products, filteredProducts, buyingTips,
      showDetail, openProductDetail, openPriceChart, getProductFeatures,
      priceHistoryData, priceStats
    }
  }
}
</script>

<style scoped>
.hardware-page { min-height: 100vh; position: relative; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 50px); }
.page-hero { position: relative; min-height: 55vh; display: flex; align-items: center; padding: clamp(100px, 15vh, 140px) clamp(30px, 5vw, 60px) clamp(80px, 10vh, 120px); overflow: hidden; }
.hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at 20% 40%, rgba(0, 102, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(0, 240, 255, 0.08) 0%, transparent 50%); }
.circuit-pattern { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(circle at 25% 35%, rgba(0, 240, 255, 0.08) 0%, transparent 35%); animation: pulse 4s ease-in-out infinite; }
.hero-content { position: relative; z-index: 10; max-width: 800px; }
.breadcrumb { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; font-size: 0.9rem; font-weight: 500; }
.breadcrumb a { color: var(--text-secondary); text-decoration: none; }
.breadcrumb a:hover { color: var(--primary-color); }
.page-title { display: flex; align-items: center; gap: clamp(20px, 4vw, 32px); font-size: clamp(2.2rem, 6vw, 4rem); margin-bottom: 22px; }
.page-title .icon { width: clamp(70px, 8vw, 95px); height: clamp(70px, 8vw, 95px); min-width: clamp(70px, 8vw, 95px); background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%); border-radius: clamp(18px, 3vw, 28px); display: flex; align-items: center; justify-content: center; font-size: clamp(2.2rem, 4vw, 3rem); color: white; box-shadow: 0 0 50px rgba(0, 240, 255, 0.45); }
.page-subtitle { font-size: clamp(1.05rem, 2.2vw, 1.35rem); color: var(--text-secondary); }
.intro-section { padding: clamp(60px, 10vh, 100px) 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%); }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(50px, 8vw, 100px); align-items: center; }
@media (max-width: 900px) { .intro-grid { grid-template-columns: 1fr; } }
.intro-content h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: 28px; background: linear-gradient(135deg, #00f0ff 0%, #0066ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.intro-content p { font-size: clamp(1rem, 1.8vw, 1.15rem); line-height: 1.85; margin-bottom: 22px; color: rgba(255, 255, 255, 0.88); }
.intro-stats { display: flex; gap: clamp(28px, 5vw, 48px); margin-top: 44px; padding-top: 32px; border-top: 1px solid rgba(0, 240, 255, 0.15); }
.intro-stat { text-align: center; flex: 1; }
.intro-stat .value { display: block; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; background: linear-gradient(135deg, #00f0ff, #00ccff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.intro-stat .label { display: block; font-size: 0.82rem; color: var(--text-secondary); text-transform: uppercase; }
.motherboard-animation { position: relative; width: clamp(250px, 35vw, 350px); height: clamp(250px, 35vw, 350px); display: flex; justify-content: center; align-items: center; }
.motherboard-body { position: relative; width: 80%; height: 80%; background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f1729 100%); border-radius: 14px; box-shadow: 0 0 50px rgba(0, 240, 255, 0.25); animation: float 5s ease-in-out infinite; }
.cpu-socket { position: absolute; top: 20%; left: 30%; width: 25%; height: 25%; background: linear-gradient(145deg, #2a2a3a, #181825); border-radius: 8px; box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5); }
.ram-slots { position: absolute; top: 15%; right: 15%; width: 15%; height: 40%; display: flex; flex-direction: column; gap: 8px; }
.ram-slot { flex: 1; background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(0, 102, 255, 0.1)); border-radius: 4px; animation: pulse 2s ease-in-out infinite; }
.pcie-slots { position: absolute; bottom: 20%; left: 15%; right: 15%; height: 15%; display: flex; flex-direction: column; gap: 6px; }
.pcie-slot { flex: 1; background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 102, 255, 0.1)); border-radius: 4px; }
.chipset { position: absolute; bottom: 25%; right: 25%; width: 18%; height: 18%; background: linear-gradient(145deg, #2a2a3a, #181825); border-radius: 50%; box-shadow: 0 0 30px rgba(0, 240, 255, 0.2); }
.history-section, .params-section, .brands-section, .products-section, .knowledge-section { padding: clamp(60px, 10vh, 100px) 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.22) 100%); }
.section-header { text-align: center; margin-bottom: clamp(45px, 8vh, 70px); }
.section-header h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: 16px; background: var(--gradient-cyber); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.section-header p { font-size: clamp(1rem, 1.8vw, 1.15rem); color: var(--text-secondary); }
.timeline { position: relative; max-width: 1250px; margin: 0 auto; padding: 20px 0; }
.timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, transparent 0%, #00f0ff 10%, #0066ff 50%, #00f0ff 90%, transparent 100%); transform: translateX(-50%); }
.timeline-item { position: relative; margin-bottom: clamp(50px, 8vh, 70px); display: flex; align-items: center; }
.timeline-item:nth-child(even) { flex-direction: row-reverse; }
.timeline-marker { position: absolute; left: 50%; transform: translateX(-50%); z-index: 10; }
.year { display: inline-block; background: linear-gradient(135deg, #0066ff 0%, #00f0ff 100%); color: white; padding: 11px 26px; border-radius: 30px; font-weight: 700; box-shadow: 0 0 25px rgba(0, 240, 255, 0.4); }
.timeline-card { width: calc(50% - 65px); background: linear-gradient(145deg, rgba(20, 20, 35, 0.92), rgba(15, 15, 28, 0.95)); backdrop-filter: blur(25px); border: 1px solid rgba(0, 240, 255, 0.12); border-radius: 18px; padding: clamp(24px, 3vw, 34px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.timeline-card.clickable { cursor: pointer; }
.timeline-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 55px rgba(0, 240, 255, 0.2); border-color: rgba(0, 240, 255, 0.35); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.card-header h3 { font-size: clamp(1.15rem, 2.2vw, 1.5rem); color: var(--text-primary); }
.view-detail { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; color: var(--primary-color); }
.timeline-card p { color: var(--text-secondary); line-height: 1.72; margin-bottom: 20px; }
.specs { display: flex; flex-wrap: wrap; gap: 10px; }
.spec-tag { background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.08)); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 25px; padding: 6px 18px; font-size: 0.82rem; color: var(--primary-color); }
.detail-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.detail-modal { background: linear-gradient(165deg, rgba(22, 22, 38, 0.97), rgba(15, 15, 28, 0.99)); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 24px; max-width: 850px; max-height: 85vh; overflow-y: auto; padding: clamp(32px, 5vw, 48px); position: relative; }
.close-btn { position: absolute; top: 20px; right: 20px; background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.15); color: var(--text-secondary); font-size: 1.3rem; cursor: pointer; padding: 12px; border-radius: 50%; width: 46px; height: 46px; }
.close-btn:hover { color: var(--primary-color); transform: rotate(90deg); }
.modal-header { text-align: center; margin-bottom: 36px; padding-bottom: 28px; border-bottom: 1px solid rgba(0, 240, 255, 0.12); }
.modal-year-badge { display: inline-block; background: linear-gradient(135deg, #0066ff, #00f0ff); color: white; padding: 10px 26px; border-radius: 25px; font-weight: 700; margin-bottom: 18px; }
.modal-header h2 { font-size: clamp(1.6rem, 3.5vw, 2.2rem); margin-bottom: 12px; color: var(--text-primary); }
.modal-subtitle { font-size: clamp(0.95rem, 1.6vw, 1.08rem); color: var(--text-secondary); }
.modal-body { margin-bottom: 32px; }
.detail-section { margin-bottom: 32px; padding: 24px; background: rgba(0, 240, 255, 0.03); border-radius: 14px; border: 1px solid rgba(0, 240, 255, 0.08); }
.detail-section h3 { display: flex; align-items: center; gap: 12px; font-size: 1.15rem; margin-bottom: 16px; color: var(--primary-color); }
.detail-section p { color: var(--text-secondary); line-height: 1.75; }
.detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.spec-card { background: linear-gradient(135deg, rgba(0, 240, 255, 0.06), rgba(0, 102, 255, 0.04)); border: 1px solid rgba(0, 240, 255, 0.12); border-radius: 12px; padding: 18px; text-align: center; }
.spec-card:hover { border-color: rgba(0, 240, 255, 0.35); transform: translateY(-4px); }
.spec-label { display: block; font-size: 0.78rem; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px; }
.spec-value { display: block; font-size: 1.25rem; font-weight: 800; background: linear-gradient(135deg, #00f0ff, #00ccff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.modal-footer { text-align: center; padding-top: 24px; border-top: 1px solid rgba(0, 240, 255, 0.12); }
.params-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: clamp(24px, 4vw, 36px); }
.param-card { background: linear-gradient(155deg, rgba(20, 20, 35, 0.88), rgba(15, 15, 28, 0.95)); backdrop-filter: blur(25px); border: 1px solid rgba(0, 240, 255, 0.12); border-radius: 18px; padding: clamp(26px, 4vw, 36px); text-align: center; transition: all 0.4s; }
.param-card:hover { transform: translateY(-10px); box-shadow: 0 20px 55px rgba(0, 240, 255, 0.2); }
.param-icon { width: clamp(70px, 9vw, 90px); height: clamp(70px, 9vw, 90px); background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: clamp(1.6rem, 3vw, 2.2rem); color: white; margin: 0 auto 24px; }
.param-card h3 { font-size: clamp(1.15rem, 2vw, 1.4rem); margin-bottom: 16px; color: var(--text-primary); }
.param-card p { color: var(--text-secondary); line-height: 1.72; margin-bottom: 24px; }
.param-visual { height: 8px; background: rgba(0, 240, 255, 0.08); border-radius: 20px; overflow: hidden; position: relative; }
.visual-bar { height: 100%; background: linear-gradient(90deg, #0066ff, #00f0ff); border-radius: 20px; }
.importance { display: block; margin-top: 12px; font-size: 0.82rem; color: var(--text-secondary); }
.brands-comparison { display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap; }
.brand-card { background: linear-gradient(155deg, rgba(20, 20, 35, 0.96), rgba(15, 15, 26, 0.98)); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 26px; padding: clamp(26px, 4vw, 36px); text-align: center; transition: all 0.4s; min-width: 280px; flex: 1; max-width: 400px; }
.brand-card:hover { transform: translateY(-10px); box-shadow: 0 20px 55px rgba(0, 240, 255, 0.2); }
.brand-logo { margin-bottom: 20px; }
.logo-text { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; background: linear-gradient(135deg, #00f0ff 0%, #0066ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.brand-card h3 { font-size: clamp(1.3rem, 2.5vw, 1.6rem); margin-bottom: 12px; color: var(--text-primary); }
.brand-desc { color: var(--text-secondary); margin-bottom: 24px; }
.brand-series { display: flex; flex-direction: column; gap: 12px; }
.series-item { display: flex; justify-content: space-between; padding: 12px 16px; background: rgba(0, 240, 255, 0.05); border-radius: 12px; border-left: 3px solid var(--primary-color); }
.series-name { font-weight: 700; color: var(--text-primary); }
.series-desc { font-size: 0.82rem; color: var(--text-secondary); }
.vs-divider { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: linear-gradient(135deg, #0066ff, #00f0ff); border-radius: 50%; font-weight: 900; color: white; font-size: 1.2rem; box-shadow: 0 0 25px rgba(0, 240, 255, 0.4); }
.products-filter { display: flex; justify-content: center; gap: 12px; margin-bottom: 44px; flex-wrap: wrap; }
.filter-btn { padding: 11px 26px; background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.06)); border: 1px solid rgba(0, 240, 255, 0.18); border-radius: 24px; color: var(--text-secondary); font-weight: 600; cursor: pointer; transition: all 0.35s; }
.filter-btn:hover { background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 102, 255, 0.1)); }
.filter-btn.active { background: linear-gradient(135deg, #0066ff 0%, #00f0ff 100%); color: white; }
.products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
.product-card { position: relative; background: linear-gradient(155deg, rgba(20, 20, 35, 0.96) 0%, rgba(15, 15, 26, 0.98) 100%); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 26px; padding: 0; transition: all 0.45s; overflow: hidden; }
.product-card:hover { transform: translateY(-14px) scale(1.03); box-shadow: 0 35px 70px rgba(0, 240, 255, 0.2); }
.card-glow { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, var(--glow-color, rgba(0, 240, 255, 0.1)) 0%, transparent 60%); opacity: 0; transition: opacity 0.45s; pointer-events: none; }
.product-card:hover .card-glow { opacity: 1; }
.card-glow.asus { --glow-color: rgba(0, 102, 255, 0.14); }
.card-glow.msi { --glow-color: rgba(237, 20, 61, 0.14); }
.card-glow.gigabyte { --glow-color: rgba(160, 32, 240, 0.14); }
.product-header { display: flex; justify-content: space-between; align-items: center; padding: 26px 30px 17px; border-bottom: 1px solid rgba(255, 255, 255, 0.04); }
.product-brand-badge { display: flex; align-items: center; gap: 9px; padding: 9px 18px; border-radius: 22px; font-size: 0.82rem; font-weight: 800; text-transform: uppercase; }
.product-brand-badge.asus { background: linear-gradient(135deg, rgba(0, 102, 255, 0.28), rgba(0, 150, 255, 0.18)); color: #0066ff; }
.product-brand-badge.msi { background: linear-gradient(135deg, rgba(237, 20, 61, 0.28), rgba(255, 80, 80, 0.18)); color: #ed143d; }
.product-brand-badge.gigabyte { background: linear-gradient(135deg, rgba(160, 32, 240, 0.28), rgba(200, 80, 255, 0.18)); color: #a020f0; }
.product-badge { padding: 7px 16px; background: linear-gradient(135deg, #00f0ff 0%, #00ccff 100%); border-radius: 18px; font-size: 0.74rem; font-weight: 900; color: #0a0a0f; }
.product-name { font-size: clamp(1.2rem, 2.2vw, 1.35rem); font-weight: 850; margin: 16px 0 20px; padding: 0 30px; background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.product-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 0 30px 26px; padding: 22px; background: rgba(0, 0, 0, 0.22); border-radius: 18px; }
.spec-item { display: flex; align-items: center; gap: 13px; padding: 11px 14px; border-radius: 13px; background: rgba(255, 255, 255, 0.025); }
.spec-item.highlight { background: linear-gradient(135deg, rgba(0, 240, 255, 0.13), rgba(0, 102, 255, 0.07)); grid-column: span 2; }
.spec-icon { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(0, 102, 255, 0.12)); border-radius: 11px; }
.spec-icon i { color: #00f0ff; }
.spec-content { display: flex; flex-direction: column; gap: 3px; }
.spec-value { font-size: 0.94rem; font-weight: 700; color: #e4f8ff; }
.spec-label { font-size: 0.73rem; color: rgba(0, 240, 255, 0.52); text-transform: uppercase; }
.product-price-section { display: flex; justify-content: space-between; align-items: center; margin: 0 30px 26px; padding: 22px 24px; background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.04)); border-radius: 18px; border: 1px solid rgba(0, 240, 255, 0.16); }
.price-wrapper { display: flex; flex-direction: column; gap: 5px; }
.price-label { font-size: 0.73rem; color: var(--text-secondary); text-transform: uppercase; }
.price-current { display: flex; align-items: baseline; gap: 5px; }
.currency { font-size: 1.15rem; font-weight: 800; color: #00f0ff; }
.amount { font-family: 'Orbitron', monospace; font-size: clamp(1.8rem, 3.5vw, 2.2rem); font-weight: 950; background: linear-gradient(135deg, #00f0ff 0%, #00ccff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.price-change-badge { display: flex; align-items: center; gap: 7px; padding: 9px 18px; border-radius: 22px; font-size: 0.86rem; font-weight: 800; }
.price-change-badge.up { background: linear-gradient(135deg, rgba(0, 255, 136, 0.16), rgba(0, 200, 100, 0.1)); color: #00ff88; }
.price-change-badge.down { background: linear-gradient(135deg, rgba(255, 68, 68, 0.16), rgba(200, 50, 50, 0.1)); color: #ff4444; }
.product-actions { display: flex; gap: 12px; padding: 0 30px 28px; }
.action-btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 13px 20px; border-radius: 13px; font-size: 0.85rem; font-weight: 800; cursor: pointer; transition: all 0.4s; border: none; }
.action-btn.primary { background: linear-gradient(135deg, rgba(0, 240, 255, 0.22), rgba(0, 102, 255, 0.16)); color: #00f0ff; border: 1.6px solid rgba(0, 240, 255, 0.45); }
.action-btn.primary:hover { background: linear-gradient(135deg, rgba(0, 240, 255, 0.38), rgba(0, 102, 255, 0.28)); transform: translateY(-4px); }
.action-btn.secondary { background: rgba(0, 240, 255, 0.06); color: rgba(0, 240, 255, 0.62); border: 1.6px solid rgba(0, 240, 255, 0.18); }
.action-btn.secondary:hover { background: rgba(0, 240, 255, 0.14); color: #00f0ff; }
.card-bottom-line { position: absolute; bottom: 0; left: 0; right: 0; height: 3.5px; opacity: 0; transition: opacity 0.45s; }
.product-card:hover .card-bottom-line { opacity: 1; }
.card-bottom-line.asus { background: linear-gradient(90deg, #0066ff, #00ccff); }
.card-bottom-line.msi { background: linear-gradient(90deg, #ed143d, #ff6b6b); }
.card-bottom-line.gigabyte { background: linear-gradient(90deg, #a020f0, #c850ff); }
.product-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(2, 5, 15, 0.88); backdrop-filter: blur(14px); z-index: 9999; display: flex; align-items: center; justify-content: center; }
.product-detail-modal, .price-chart-modal { width: 600px; max-height: 87vh; background: linear-gradient(162deg, rgba(8, 15, 30, 0.978), rgba(3, 8, 18, 0.985)); border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 26px; overflow-y: auto; position: relative; }
.modal-close-btn { position: absolute; top: 18px; right: 18px; width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.12); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.35s; }
.modal-close-btn:hover { background: rgba(255, 68, 68, 0.22); transform: rotate(90deg); }
.detail-header { padding: 34px 30px 26px; text-align: center; }
.detail-brand-badge { display: inline-flex; padding: 7px 18px; border-radius: 22px; font-size: 0.8rem; font-weight: 850; margin-bottom: 15px; }
.detail-brand-badge.asus { background: rgba(0, 102, 255, 0.22); color: #0066ff; }
.detail-brand-badge.msi { background: rgba(237, 20, 61, 0.22); color: #ed143d; }
.detail-brand-badge.gigabyte { background: rgba(160, 32, 240, 0.22); color: #a020f0; }
.detail-header h2 { font-size: clamp(1.4rem, 2.8vw, 1.55rem); font-weight: 850; color: #fff; margin-bottom: 9px; }
.detail-subtitle { font-size: 0.87rem; color: rgba(0, 240, 255, 0.62); }
.detail-body { padding: 0 30px 30px; }
.detail-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 26px; }
.detail-spec-card { background: rgba(0, 240, 255, 0.045); border: 1px solid rgba(0, 240, 255, 0.09); border-radius: 17px; padding: 19px 14px; text-align: center; }
.detail-spec-card:hover { background: rgba(0, 240, 255, 0.09); transform: translateY(-4px); }
.detail-spec-card i { font-size: 1.4rem; color: #00f0ff; margin-bottom: 9px; display: block; }
.spec-num { display: block; font-size: 1.18rem; font-weight: 850; color: #fff; }
.spec-name { display: block; font-size: 0.73rem; color: rgba(0, 240, 255, 0.52); margin-top: 5px; text-transform: uppercase; }
.detail-info-section { margin-bottom: 26px; }
.detail-info-section h3 { font-size: 1.04rem; color: #00f0ff; margin-bottom: 15px; display: flex; align-items: center; gap: 9px; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li { padding: 11px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.035); font-size: 0.9rem; color: #e0f8ff; display: flex; align-items: flex-start; gap: 11px; }
.feature-list li:last-child { border-bottom: none; }
.feature-list li i { color: #00f0ff; margin-top: 4px; }
.detail-price-box { display: flex; justify-content: space-between; align-items: center; padding: 20px 22px; background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.04)); border: 1px solid rgba(0, 240, 255, 0.14); border-radius: 17px; }
.price-main .price-label { font-size: 0.73rem; color: rgba(0, 240, 255, 0.52); text-transform: uppercase; display: block; margin-bottom: 5px; }
.price-main .price-value { font-size: clamp(1.7rem, 3.5vw, 2rem); font-weight: 950; font-family: 'Orbitron', monospace; color: #00f0ff; }
.price-trend { padding: 9px 18px; border-radius: 22px; font-size: 0.87rem; font-weight: 800; }
.price-trend.up { background: rgba(0, 255, 136, 0.14); color: #00ff88; }
.price-trend.down { background: rgba(255, 68, 68, 0.14); color: #ff4466; }
.chart-header { padding: 30px 30px 18px; text-align: center; border-bottom: 1px solid rgba(0, 240, 255, 0.09); }
.chart-header h2 { font-size: 1.35rem; font-weight: 850; color: #fff; display: flex; align-items: center; justify-content: center; gap: 11px; }
.chart-subtitle { font-size: 0.85rem; color: rgba(0, 240, 255, 0.52); }
.chart-body { padding: 26px 30px 30px; }
.chart-visual { position: relative; height: 270px; margin-bottom: 26px; }
.chart-bars { display: flex; align-items: flex-end; justify-content: space-around; height: 230px; }
.chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 7px; flex: 1; }
.chart-bar { width: 100%; max-width: 46px; border-radius: 9px 9px 4px 4px; min-height: 22px; background: linear-gradient(180deg, #00f0ff, #0066ff); transition: all 0.4s; }
.chart-bar:hover { filter: brightness(1.25); transform: scaleX(1.06); }
.bar-price { font-size: 0.74rem; font-weight: 800; font-family: 'Orbitron', monospace; color: #00f0ff; }
.bar-month { font-size: 0.73rem; color: rgba(255, 255, 255, 0.42); }
.chart-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.stat-item { background: rgba(0, 240, 255, 0.045); border: 1px solid rgba(0, 240, 255, 0.09); border-radius: 15px; padding: 16px 12px; text-align: center; }
.stat-label { display: block; font-size: 0.71rem; color: rgba(0, 240, 255, 0.46); text-transform: uppercase; margin-bottom: 7px; }
.stat-val { display: block; font-size: 1.08rem; font-weight: 850; font-family: 'Orbitron', monospace; color: #e0f8ff; }
.stat-val.high { color: #ff4466; }
.stat-val.low { color: #00ff88; }
.stat-val.avg { color: #00f0ff; }
.knowledge-section { padding: clamp(60px, 10vh, 100px) 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.2) 100%); }
.knowledge-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
.knowledge-card { background: linear-gradient(155deg, rgba(20, 20, 35, 0.88), rgba(15, 15, 28, 0.95)); backdrop-filter: blur(25px); border: 1px solid rgba(0, 240, 255, 0.12); border-radius: 20px; padding: clamp(28px, 4vw, 36px); text-align: center; transition: all 0.4s; }
.knowledge-card:hover { transform: translateY(-10px); box-shadow: 0 20px 55px rgba(0, 240, 255, 0.2); }
.card-icon { width: clamp(70px, 9vw, 90px); height: clamp(70px, 9vw, 90px); background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: clamp(1.8rem, 3vw, 2.2rem); color: white; margin: 0 auto 24px; }
.knowledge-card h3 { font-size: clamp(1.15rem, 2vw, 1.4rem); margin-bottom: 16px; color: var(--text-primary); }
.knowledge-card p { color: var(--text-secondary); line-height: 1.72; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.45s; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.91) translateY(24px); }
@keyframes pulse { 0%, 100% { opacity: 0.75; } 50% { opacity: 1; } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
</style>
