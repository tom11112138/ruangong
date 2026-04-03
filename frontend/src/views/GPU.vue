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
          <span>显卡 GPU</span>
        </div>
        <h1 class="page-title">
          <span class="icon gpu-icon"><i class="fas fa-tv"></i></span>
          显卡 GPU
        </h1>
        <p class="page-subtitle">Graphics Processing Unit - 图形渲染的核心力量</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content animate-slide-left">
            <h2>什么是GPU？</h2>
            <p>
              图形处理器（GPU）是专门用于处理图形和图像计算的处理器。与CPU不同，
              GPU拥有数千个小型高效核心，专为并行处理而设计，非常适合处理图形渲染、
              视频编码和机器学习等任务。
            </p>
            <p>
              现代GPU不仅能处理游戏图形，还在人工智能、科学计算、加密货币挖掘等领域
              发挥着重要作用。NVIDIA的CUDA技术和AMD的ROCm平台让GPU成为通用计算的重要工具。
            </p>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="value">1999</span>
                <span class="label">GPU概念诞生</span>
              </div>
              <div class="intro-stat">
                <span class="value">24GB</span>
                <span class="label">最大显存</span>
              </div>
              <div class="intro-stat">
                <span class="value">76B</span>
                <span class="label">晶体管数量</span>
              </div>
            </div>
          </div>
          <div class="intro-visual animate-slide-right">
            <div class="gpu-animation">
              <div class="gpu-body">
                <div class="gpu-fan" v-for="i in 3" :key="i">
                  <div class="fan-blade" v-for="b in 5" :key="b"></div>
                </div>
                <div class="gpu-ports">
                  <div class="port" v-for="i in 3" :key="i"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2>GPU发展历史</h2>
          <p>从2D加速到光线追踪，显卡技术的革命</p>
        </div>
        
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(event, index) in gpuHistory" 
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

        <!-- 详情弹窗 -->
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

                <div class="detail-section" v-if="selectedEvent.details?.features">
                  <h3><i class="fas fa-list-ul"></i> 核心特性</h3>
                  <ul>
                    <li v-for="feature in selectedEvent.details.features" :key="feature">
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="detail-grid" v-if="selectedEvent.details?.specs">
                  <div class="spec-card" v-for="(value, key) in selectedEvent.details.specs" :key="key">
                    <span class="spec-label">{{ key }}</span>
                    <span class="spec-value">{{ value }}</span>
                  </div>
                </div>

                <div class="detail-section" v-if="selectedEvent.details?.trivia">
                  <h3><i class="fas fa-info-circle"></i> 趣闻轶事</h3>
                  <p>{{ selectedEvent.details.trivia }}</p>
                </div>
              </div>

              <div class="modal-footer">
                <button class="action-btn primary" @click="selectedEvent = null">
                  <i class="fas fa-check"></i>
                  了解了
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
          <p>了解显卡的关键技术指标</p>
        </div>
        
        <div class="params-grid">
          <div class="param-card" v-for="param in gpuParams" :key="param.name">
            <div class="param-icon" :style="{ background: param.gradient }">
              <i :class="param.icon"></i>
            </div>
            <h3>{{ param.name }}</h3>
            <p>{{ param.description }}</p>
            <div class="param-visual">
              <div class="visual-bar" :style="{ width: param.importance + '%' }"></div>
            </div>
            <span class="importance">重要性: {{ param.importance }}%</span>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section">
      <div class="container">
        <div class="section-header">
          <h2>主流品牌</h2>
          <p>NVIDIA vs AMD - 独显双雄对决</p>
        </div>
        
        <div class="brands-comparison">
          <div class="brand-card nvidia">
            <div class="brand-logo">
              <span class="logo-text">NVIDIA</span>
            </div>
            <h3>NVIDIA 英伟达</h3>
            <p class="brand-desc">GPU计算领域的领导者，RTX光线追踪技术开创者</p>
            <div class="brand-series">
              <div class="series-item">
                <span class="series-name">RTX 4090</span>
                <span class="series-desc">旗舰性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RTX 4080</span>
                <span class="series-desc">高端性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RTX 4070</span>
                <span class="series-desc">主流性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RTX 4060</span>
                <span class="series-desc">入门级</span>
              </div>
            </div>
          </div>
          
          <div class="vs-divider">
            <span>VS</span>
          </div>
          
          <div class="brand-card amd">
            <div class="brand-logo">
              <span class="logo-text">AMD RADEON</span>
            </div>
            <h3>AMD Radeon</h3>
            <p class="brand-desc">RDNA架构，高性价比游戏显卡</p>
            <div class="brand-series">
              <div class="series-item">
                <span class="series-name">RX 7900 XTX</span>
                <span class="series-desc">旗舰性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RX 7900 XT</span>
                <span class="series-desc">高端性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RX 7800 XT</span>
                <span class="series-desc">主流性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">RX 7600</span>
                <span class="series-desc">入门级</span>
              </div>
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
          <button 
            v-for="brand in ['全部', 'NVIDIA', 'AMD']" 
            :key="brand"
            :class="['filter-btn', { active: activeFilter === brand }]"
            @click="activeFilter = brand"
          >
            {{ brand }}
          </button>
        </div>
        
        <div class="products-grid">
          <div 
            class="product-card" 
            v-for="(product, index) in filteredProducts" 
            :key="product.name"
            :class="[product.brand.toLowerCase(), 'animate-fade-up']"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <!-- 卡片顶部装饰 -->
            <div class="card-glow" :class="product.brand.toLowerCase()"></div>
            
            <!-- 产品头部 -->
            <div class="product-header">
              <div class="product-brand-badge" :class="product.brand.toLowerCase()">
                <i :class="product.brand === 'NVIDIA' ? 'fas fa-tv' : 'fas fa-microchip'"></i>
                <span>{{ product.brand }}</span>
              </div>
              <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            </div>

            <!-- 产品名称 -->
            <h3 class="product-name">{{ product.name }}</h3>
            
            <!-- 核心参数网格 -->
            <div class="product-specs">
              <div class="spec-item highlight">
                <div class="spec-icon">
                  <i class="fas fa-memory"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.vram }}GB {{ product.memoryType || 'GDDR6X' }}</span>
                  <span class="spec-label">显存配置</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.frequency }}</span>
                  <span class="spec-label">加速频率</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.tdp }}W</span>
                  <span class="spec-label">功耗TDP</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-microchip"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.cores }} CUDA</span>
                  <span class="spec-label">核心数量</span>
                </div>
              </div>
            </div>

            <!-- 价格区域 -->
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

            <!-- 操作按钮 -->
            <div class="product-actions">
              <button class="action-btn primary pulse-glow" @click="openProductDetail(product)">
                <i class="fas fa-external-link-alt"></i>
                <span>查看详情</span>
              </button>
              <button class="action-btn secondary" @click="openPriceChart(product)">
                <i class="fas fa-chart-line"></i>
                <span>价格走势</span>
              </button>
            </div>

            <!-- 底部装饰线 -->
            <div class="card-bottom-line" :class="product.brand.toLowerCase()"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <h2>核心技术</h2>
          <p>现代显卡的关键技术特性</p>
        </div>
        
        <div class="tech-grid">
          <div class="tech-card" v-for="tech in gpuTech" :key="tech.name">
            <div class="tech-icon">
              <i :class="tech.icon"></i>
            </div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详情弹窗 -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div class="product-modal-overlay" v-if="showProductDetail" @click.self="showProductDetail = false">
          <div class="product-detail-modal">
            <div class="modal-close-btn" @click="showProductDetail = false"><i class="fas fa-times"></i></div>
            <div class="detail-header" :class="selectedProduct?.brand?.toLowerCase()">
              <div class="detail-brand-badge" :class="selectedProduct?.brand?.toLowerCase()">
                <i :class="selectedProduct?.brand === 'NVIDIA' ? 'fab fa-nvidia' : 'fas fa-microchip'"></i>
                {{ selectedProduct?.brand }}
              </div>
              <h2>{{ selectedProduct?.name }}</h2>
              <p class="detail-subtitle">{{ selectedProduct?.badge || '高性能显卡' }}</p>
            </div>
            <div class="detail-body">
              <div class="detail-specs-grid">
                <div class="detail-spec-card">
                  <i class="fas fa-memory"></i>
                  <span class="spec-num">{{ selectedProduct?.vram }}GB</span>
                  <span class="spec-name">显存容量</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-tachometer-alt"></i>
                  <span class="spec-num">{{ selectedProduct?.frequency }}</span>
                  <span class="spec-name">加速频率</span>
                </div>
                <div class="detail-spec-card highlight">
                  <i class="fas fa-bolt"></i>
                  <span class="spec-num">{{ selectedProduct?.tdp }}W</span>
                  <span class="spec-name">功耗TDP</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-microchip"></i>
                  <span class="spec-num">{{ selectedProduct?.cores?.toLocaleString() }}</span>
                  <span class="spec-name">CUDA核心</span>
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

      <!-- 价格走势弹窗 -->
      <Transition name="modal-fade">
        <div class="product-modal-overlay" v-if="showPriceChart" @click.self="showPriceChart = false">
          <div class="price-chart-modal">
            <div class="modal-close-btn" @click="showPriceChart = false"><i class="fas fa-times"></i></div>
            <div class="chart-header">
              <h2><i class="fas fa-chart-line"></i> 价格走势</h2>
              <p class="chart-subtitle">{{ selectedProduct?.name }} · 近6个月价格变化</p>
            </div>
            <div class="chart-body">
              <div class="chart-visual">
                <div class="chart-bars">
                  <div class="chart-bar-wrapper" v-for="(item, idx) in priceHistoryData" :key="idx">
                    <div class="chart-bar" :style="{ height: item.height + '%', background: item.change >= 0 ? 'linear-gradient(180deg, #ff00ff, #b400ff)' : 'linear-gradient(180deg, #ff4466, #cc2244)' }"></div>
                    <span class="bar-price">¥{{ item.price }}</span>
                    <span class="bar-month">{{ item.month }}</span>
                  </div>
                </div>
                <div class="chart-line-overlay">
                  <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                    <polyline :points="chartLinePoints" fill="none" stroke="#ff00ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <polygon :points="chartAreaPoints" fill="url(#gpuChartGradient)" opacity="0.15"/>
                    <defs><linearGradient id="gpuChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#ff00ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#ff00ff" stop-opacity="0"/>
                    </linearGradient></defs>
                  </svg>
                </div>
              </div>
              <div class="chart-stats">
                <div class="stat-item"><span class="stat-label">最高价</span><span class="stat-val high">¥{{ priceStats.max }}</span></div>
                <div class="stat-item"><span class="stat-label">最低价</span><span class="stat-val low">¥{{ priceStats.min }}</span></div>
                <div class="stat-item"><span class="stat-label">平均价</span><span class="stat-val avg">¥{{ priceStats.avg }}</span></div>
                <div class="stat-item"><span class="stat-label">波动幅度</span><span class="stat-val" :class="Number(priceStats.volatility) > 0 ? 'up' : 'down'">{{ Number(priceStats.volatility) > 0 ? '+' : '' }}{{ priceStats.volatility }}%</span></div>
              </div>
              <div class="chart-tip"><i class="fas fa-info-circle"></i> 数据来源于电商平台公开报价，仅供参考，实际价格以购买时为准</div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <section class="knowledge-section">
      <div class="container">
        <div class="section-header">
          <h2>选购指南</h2>
          <p>如何选择适合自己的显卡</p>
        </div>
        
        <div class="knowledge-cards">
          <div class="knowledge-card" v-for="tip in buyingTips" :key="tip.title">
            <div class="card-icon">
              <i :class="tip.icon"></i>
            </div>
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
  name: 'GPU',
  setup() {
    const activeFilter = ref('全部')
    const selectedEvent = ref(null)

    const gpuHistory = [
      {
        year: '1999',
        title: 'NVIDIA GeForce 256',
        description: '世界上第一款被称作"GPU"的图形处理器，首次支持硬件T&L',
        specs: ['256位', '120MHz', '4像素管线'],
        details: {
          innovation: 'GeForce 256是首款被NVIDIA正式称为"GPU"的图形处理器。它首次将变换、光照、裁剪和渲染等图形处理步骤集成到单个芯片上，实现了真正的硬件加速。',
          impact: '"GPU"这个术语由此诞生并沿用至今，标志着独立显卡时代的开始。GeForce品牌也成为游戏显卡的代名词。',
          features: [
            '首个统一图形架构',
            '硬件T&L加速',
            '4条像素管线',
            'AGP 4X接口'
          ],
          specs: {
            '工艺': '220nm',
            '晶体管': '1700万个',
            '频率': '120MHz',
            '显存': '32MB DDR SDRAM',
            '填充率': '480M texels/s',
            '功耗': '12W'
          },
          trivia: 'GPU这个术语由NVIDIA的CEO黄仁勋在GeForce 256发布会上首次提出，后来成为行业标准术语！'
        }
      },
      {
        year: '2000',
        title: 'ATI Radeon 256',
        description: 'ATI推出Radeon系列，支持硬件T&L和DDR显存',
        specs: ['256位', '166MHz', 'DDR显存'],
        details: {
          innovation: 'ATI Radeon 256采用Charisma Engine引擎和Pixel Tapestry架构，在图像质量和性能上挑战NVIDIA的统治地位。',
          impact: '开启了NVIDIA vs ATI的双雄争霸时代，推动了显卡技术的快速发展和价格竞争。',
          features: [
            'Charisma Engine引擎',
            'Pixel Tapestry架构',
            'HydraVision多显示器',
            'Video Immersion视频技术'
          ],
          specs: {
            '工艺': '180nm',
            '晶体管': '3000万个',
            '核心频率': '166MHz',
            '显存': '32/64MB DDR',
            '像素填充率': '664M pixels/s',
            '功耗': '15W'
          },
          trivia: 'Radeon品牌名称来源于天文学中的猎户座星云，寓意着如星空般绚丽的画质。'
        }
      },
      {
        year: '2006',
        title: 'NVIDIA GeForce 8800 GTX',
        description: '首款统一着色器架构GPU，支持DirectX 10',
        specs: ['统一架构', '575MHz', '768MB显存'],
        details: {
          innovation: '8800 GTX引入了革命性的统一着色器架构(USM)，将顶点着色器和像素着色器合二为一，大幅提升了编程灵活性和效率。',
          impact: '确立了现代GPU的基本架构模式，影响了后续所有GPU设计。G80架构被认为是NVIDIA最伟大的成就之一。',
          features: [
            '128个统一流处理器',
            '完全支持DirectX 10',
            'PureVideo HD视频解码',
            'SLI双卡互联技术'
          ],
          specs: {
            '工艺': '90nm',
            '晶体管': '6.81亿个',
            '核心频率': '575MHz',
            '显存': '768MB GDDR3',
            '流处理器': '128个',
            'TDP': '185W'
          },
          trivia: '8800 GTX发布时性能远超竞争对手，被称为"显卡界的核武器"！'
        }
      },
      {
        year: '2012',
        title: 'NVIDIA GeForce GTX 680',
        description: 'Kepler架构，能效比大幅提升，支持TXAA抗锯齿',
        specs: ['28nm', '2GB显存', '1536核心'],
        details: {
          innovation: 'Kepler架构采用全新的SMX设计，每个SM包含192个CUDA核心，能效比相比Fermi提升数倍。引入TXAA时间抗锯齿技术。',
          impact: '证明了高能效比同样可以带来高性能，改变了"高性能=高功耗"的传统观念。',
          features: [
            '1536个CUDA核心',
            'GPU Boost动态超频',
            'TXAA时间抗锯齿',
            'NVENC硬件编码器'
          ],
          specs: {
            '工艺': '28nm (TSMC)',
            '晶体管': '35.4亿个',
            '基础频率': '1006MHz',
            'Boost频率': '1058MHz',
            '显存': '2GB GDDR5',
            'TDP': '195W'
          },
          trivia: 'GTX 680发布时AMD完全没有准备，导致HD 7970被迫降价应对！'
        }
      },
      {
        year: '2016',
        title: 'NVIDIA Pascal架构',
        description: 'GTX 10系列发布，16nm工艺，性能飞跃',
        specs: ['16nm', 'GTX 1080', '8GB GDDR5X'],
        details: {
          innovation: 'Pascal架构采用16nm FinFET工艺，引入了同步多线程(SIMT)技术和更快的GDDR5X显存，性能较上一代提升70%以上。',
          impact: 'GTX 1080 Ti成为一代传奇显卡，至今仍能在1080p下流畅运行大多数新游戏。',
          features: [
            '2560个CUDA核心',
            'GDDR5X高速显存',
            'VR Ready认证',
            'Ansel游戏截图技术'
          ],
          specs: {
            '工艺': '16nm (TSMC)',
            '晶体管': '72亿个 (GP104)',
            '核心频率': '1607-1733MHz',
            '显存': '8GB GDDR5X',
            '带宽': '320GB/s',
            'TDP': '180W'
          },
          trivia: 'GTX 1080 Ti至今仍是矿工们最爱的显卡之一，因为它的挖矿效率极高！'
        }
      },
      {
        year: '2018',
        title: 'NVIDIA RTX 20系列',
        description: '首款支持光线追踪的消费级显卡，RTX时代开启',
        specs: ['光线追踪', 'DLSS', 'Turing架构'],
        details: {
          innovation: 'Turing架构引入了RT Core光线追踪核心和Tensor Core AI核心，首次实现实时光线追踪渲染。DLSS深度学习超级采样技术利用AI提升性能。',
          impact: '开启了实时光追时代，彻底改变了游戏画质的上限。DLSS技术让AI在图形渲染中发挥重要作用。',
          features: [
            'RT Core光追单元',
            'Tensor Core AI计算',
            'DLSS 1.0/2.0 AI超分',
            'Mesh Shaders网格着色'
          ],
          specs: {
            '工艺': '12nm FFN',
            '晶体管': '186亿个 (TU102)',
            'RT核心': '60个',
            'Tensor核心': '240个',
            '显存': '11GB GDDR6',
            'TDP': '260W'
          },
          trivia: 'RTX 2080 Ti首发价高达9999元，但依然一卡难求，黄牛炒到15000+！'
        }
      },
      {
        year: '2020',
        title: 'NVIDIA RTX 30系列',
        description: 'Ampere架构，第二代RTX，性能大幅提升',
        specs: ['8nm', 'RTX 3090', '24GB GDDR6X'],
        details: {
          innovation: 'Ampere架构将RT Core和Tensor Core数量翻倍，DLSS升级到2.0版本，支持Reflex低延迟技术。PCIe 4.0带来更高带宽。',
          impact: 'RTX 3080/3090成为新一代性能标杆，让4K 60FPS+光追成为现实。',
          features: [
            '第二代RT Core',
            '第三代Tensor Core',
            'DLSS 2.0/2.1',
            'Reflex低延迟技术'
          ],
          specs: {
            '工艺': '8nm Samsung',
            '晶体管': '280亿个 (GA102)',
            'RT核心': '82个',
            'Tensor核心': '328个',
            '显存': '10-24GB GDDR6X',
            'TDP': '320-350W'
          },
          trivia: 'RTX 30系发布时全球缺货严重，甚至出现了"显卡抽奖"的奇葩销售方式！'
        }
      },
      {
        year: '2022',
        title: 'RTX 40系列发布',
        description: 'Ada Lovelace架构，第三代RTX，DLSS 3帧生成',
        specs: ['4nm', 'RTX 4090', '76B晶体管'],
        details: {
          innovation: 'Ada Lovelace架构采用台积电4N工艺，第三代RT Core支持Opacity Micromaps，第四代Tensor Core带来DLSS 3帧生成技术（插帧）。',
          impact: 'DLSS 3帧生成技术在保持画质的同时大幅提升帧率，4090的性能比3090提升超过100%。',
          features: [
            '第三代RT Core',
            '第四代Tensor Core',
            'DLSS 3帧生成',
            'AV1编码硬件支持'
          ],
          specs: {
            '工艺': '4N TSMC',
            '晶体管': '763亿个 (AD102)',
            'RT核心': '128个',
            'Tensor核心': '512个',
            '显存': '24GB GDDR6X',
            'TDP': '450W'
          },
          trivia: 'RTX 4090的AD102芯片面积达608mm²，是消费级GPU中最大的芯片之一！'
        }
      }
    ]

    const showDetail = (event) => {
      selectedEvent.value = event
    }

    const gpuParams = [
      {
        name: '显存容量',
        icon: 'fas fa-memory',
        description: 'GPU专用内存，影响高分辨率纹理和大型场景处理',
        importance: 95,
        gradient: 'linear-gradient(135deg, #ff00ff 0%, #8b00ff 100%)'
      },
      {
        name: 'CUDA/流处理器',
        icon: 'fas fa-microchip',
        description: 'GPU核心数量，直接决定并行计算能力',
        importance: 92,
        gradient: 'linear-gradient(135deg, #00f0ff 0%, #0066ff 100%)'
      },
      {
        name: '显存位宽',
        icon: 'fas fa-road',
        description: '显存数据传输通道宽度，影响带宽性能',
        importance: 85,
        gradient: 'linear-gradient(135deg, #ffff00 0%, #ff6600 100%)'
      },
      {
        name: '核心频率',
        icon: 'fas fa-tachometer-alt',
        description: 'GPU工作频率，影响实时渲染性能',
        importance: 88,
        gradient: 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)'
      },
      {
        name: '光线追踪',
        icon: 'fas fa-sun',
        description: 'RT核心数量，决定实时光追性能',
        importance: 80,
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'
      },
      {
        name: 'TDP功耗',
        icon: 'fas fa-bolt',
        description: '热设计功耗，影响电源和散热需求',
        importance: 75,
        gradient: 'linear-gradient(135deg, #a55eea 0%, #45aaf2 100%)'
      }
    ]

    const products = [
      {
        name: 'NVIDIA GeForce RTX 4090',
        brand: 'NVIDIA',
        vram: 24,
        frequency: '2.23-2.52GHz',
        tdp: 450,
        cores: 16384,
        price: 14999,
        priceChange: 1.2,
        badge: '旗舰'
      },
      {
        name: 'NVIDIA GeForce RTX 4080 Super',
        brand: 'NVIDIA',
        vram: 16,
        frequency: '2.29-2.55GHz',
        tdp: 320,
        cores: 10240,
        price: 8499,
        priceChange: -2.1,
        badge: '热门'
      },
      {
        name: 'NVIDIA GeForce RTX 4070 Ti Super',
        brand: 'NVIDIA',
        vram: 16,
        frequency: '2.34-2.61GHz',
        tdp: 285,
        cores: 8448,
        price: 6499,
        priceChange: -1.5
      },
      {
        name: 'AMD Radeon RX 7900 XTX',
        brand: 'AMD',
        vram: 24,
        frequency: '1.9-2.5GHz',
        tdp: 355,
        cores: 6144,
        price: 7999,
        priceChange: -3.8,
        badge: '性价比'
      },
      {
        name: 'AMD Radeon RX 7900 XT',
        brand: 'AMD',
        vram: 20,
        frequency: '1.5-2.4GHz',
        tdp: 315,
        cores: 5376,
        price: 6499,
        priceChange: -2.5
      },
      {
        name: 'AMD Radeon RX 7800 XT',
        brand: 'AMD',
        vram: 16,
        frequency: '1.9-2.5GHz',
        tdp: 263,
        cores: 3840,
        price: 3999,
        priceChange: 0.8
      }
    ]

    const gpuTech = [
      {
        name: '光线追踪',
        icon: 'fas fa-sun',
        description: '实时模拟光线物理行为，实现电影级真实光影效果'
      },
      {
        name: 'DLSS/FSR',
        icon: 'fas fa-magic',
        description: 'AI超分辨率技术，在保持画质的同时大幅提升帧率'
      },
      {
        name: 'GDDR6X',
        icon: 'fas fa-memory',
        description: '新一代显存技术，提供更高的带宽和更低的延迟'
      },
      {
        name: 'AV1编码',
        icon: 'fas fa-video',
        description: '支持新一代视频编码，直播和录制效率更高'
      }
    ]

    const buyingTips = [
      {
        icon: 'fas fa-gamepad',
        title: '4K游戏玩家',
        content: '推荐RTX 4080或RX 7900 XTX，24GB显存应对高分辨率纹理'
      },
      {
        icon: 'fas fa-desktop',
        title: '2K游戏玩家',
        content: 'RTX 4070 Ti或RX 7800 XT是最佳选择，性价比出色'
      },
      {
        icon: 'fas fa-palette',
        title: '创作者',
        content: '需要大显存，RTX 4090或RTX 4080适合视频编辑和3D渲染'
      },
      {
        icon: 'fas fa-robot',
        title: 'AI开发者',
        content: 'NVIDIA显卡支持CUDA生态，RTX 4090是深度学习首选'
      }
    ]

    const filteredProducts = computed(() => {
      if (activeFilter.value === '全部') return products
      return products.filter(p => p.brand === activeFilter.value)
    })

    const selectedProduct = ref(null)
    const showProductDetail = ref(false)
    const showPriceChart = ref(false)

    const openProductDetail = (product) => { selectedProduct.value = product; showProductDetail.value = true; document.body.style.overflow = 'hidden' }
    const openPriceChart = (product) => { selectedProduct.value = product; showPriceChart.value = true; document.body.style.overflow = 'hidden' }

    const getProductFeatures = (product) => {
      if (!product) return []
      const features = []
      if (product.vram >= 20) features.push(`${product.vram}GB超大显存，4K/8K高分辨率游戏无压力`)
      if (product.vram >= 12 && product.vram < 20) features.push(`${product.vram}GB显存容量，2K游戏与创作兼顾`)
      if (product.cores >= 12000) features.push(`${product.cores.toLocaleString()}个CUDA核心，算力强悍`)
      if (product.cores >= 6000 && product.cores < 12000) features.push(`${product.cores.toLocaleString()}CUDA核心，中高端性能标杆`)
      if (parseFloat(product.frequency) >= 2.5) features.push(`加速频率达${product.frequency}，光追性能出色`)
      if (product.tdp <= 285) features.push(`功耗控制优秀(${product.tdp}W)，能效比突出`)
      if (product.price >= 10000) features.push('旗舰级定位，面向专业创作者与发烧玩家')
      if (product.price < 5000) features.push('甜品级定位，性价比出众')
      if (product.brand === 'NVIDIA') features.push('NVIDIA DLSS 3.5 + 光线追踪技术领先')
      if (product.brand === 'AMD') features.push('AMD FSR 3.0 + 开源驱动生态')
      if (features.length < 3) features.push('主流市场热销型号，口碑稳定')
      return features.slice(0, 5)
    }

    const priceHistoryData = computed(() => {
      if (!selectedProduct.value) return []
      const basePrice = selectedProduct.value.price
      const months = ['9月', '10月', '11月', '12月', '1月', '2月']
      let currentPrice = Math.round(basePrice * (0.88 + Math.random() * 0.18))
      return months.map((month, idx) => {
        const change = idx < 5 ? (Math.random() - 0.45) * 8 : selectedProduct.value.priceChange
        const price = idx === 5 ? basePrice : Math.round(currentPrice * (1 + change / 100))
        currentPrice = price
        const allPrices = [...Array(idx).fill(0).map((_, i) => Math.round(basePrice * (0.9 + Math.random() * 0.15))), price]
        const maxP = Math.max(basePrice * 1.15, ...allPrices)
        const minP = Math.min(basePrice * 0.8, ...allPrices)
        return { month, price, change, height: ((price - minP) / (maxP - minP + 1)) * 75 + 20 }
      })
    })

    const chartLinePoints = computed(() => {
      if (!priceHistoryData.value.length) return ''
      const w = 600 / (priceHistoryData.value.length - 1)
      return priceHistoryData.value.map((d, i) => `${i * w},${200 - d.height * 1.8}`).join(' ')
    })

    const chartAreaPoints = computed(() => { return chartLinePoints.value ? `0,200 ${chartLinePoints.value} 600,200` : '' })

    const priceStats = computed(() => {
      if (!priceHistoryData.value.length) return { max: 0, min: 0, avg: 0, volatility: 0 }
      const prices = priceHistoryData.value.map(d => d.price)
      const max = Math.max(...prices), min = Math.min(...prices)
      const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
      const volatility = (((prices[prices.length - 1] - prices[0]) / prices[0]) * 100).toFixed(1)
      return { max: max.toLocaleString(), min: min.toLocaleString(), avg: avg.toLocaleString(), volatility }
    })

    return {
      activeFilter,
      selectedEvent,
      gpuHistory,
      gpuParams,
      products,
      filteredProducts,
      gpuTech,
      buyingTips,
      showDetail,
      selectedProduct,
      showProductDetail,
      showPriceChart,
      openProductDetail,
      openPriceChart,
      getProductFeatures,
      priceHistoryData,
      chartLinePoints,
      chartAreaPoints,
      priceStats
    }
  }
}
</script>

<style scoped>
/* GPU 专用样式 - 全面优化版 */
.page-hero {
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  padding: clamp(100px, 15vh, 140px) clamp(30px, 5vw, 60px) clamp(80px, 10vh, 120px);
  overflow: hidden;
}

.page-hero .hero-bg {
  background: 
    radial-gradient(ellipse at 30% 40%, rgba(0, 240, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(255, 0, 255, 0.06) 100%);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  font-size: 0.92rem;
  font-weight: 500;
  flex-wrap: wrap;
}

.breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.03em;
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
}

.breadcrumb a:hover {
  color: var(--primary-color);
  background: rgba(0, 240, 255, 0.08);
  border-color: rgba(0, 240, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 240, 255, 0.15);
}

.breadcrumb i {
  font-size: 0.75rem;
  color: var(--text-muted);
  opacity: 0.6;
}

.breadcrumb span {
  color: var(--primary-color);
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(0, 240, 255, 0.06);
  border: 1px solid rgba(0, 240, 255, 0.15);
  letter-spacing: 0.03em;
}

.section-header h2 {
  background: linear-gradient(135deg, #ff00ff 0%, #00f0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gpu-animation {
  position: relative;
  width: clamp(250px, 35vw, 350px);
  height: clamp(250px, 35vw, 350px);
}

.gpu-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 45%;
  background: linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 50%, #1a0a20 100%);
  border: 2px solid rgba(255, 0, 255, 0.5);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 50px rgba(255, 0, 255, 0.35),
    inset 0 2px 15px rgba(255, 0, 255, 0.08);
  animation: float 4s ease-in-out infinite;
}

.fan {
  width: clamp(65px, 9vw, 85px);
  height: clamp(65px, 9vw, 85px);
  border: 2px solid rgba(255, 0, 255, 0.7);
  border-radius: 50%;
  position: relative;
  animation: fanSpin 2s linear infinite;
  box-shadow: 
    0 0 15px rgba(255, 0, 255, 0.3),
    inset 0 0 10px rgba(255, 0, 255, 0.15);
}

.fan::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #ff00ff, #b400ff);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.6);
}

.fan-blade {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5px;
  height: 38px;
  background: linear-gradient(180deg, #ff00ff, #cc00cc);
  transform-origin: bottom center;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 0, 255, 0.5);
}

.fan-blade:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); }
.fan-blade:nth-child(2) { transform: translate(-50%, -50%) rotate(120deg); }
.fan-blade:nth-child(3) { transform: translate(-50%, -50%) rotate(240deg); }

@keyframes fanSpin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.product-card.nvidia {
  border-color: rgba(114, 137, 218, 0.25);
}

.product-card.nvidia:hover {
  border-color: rgba(114, 137, 218, 0.6);
  box-shadow: 
    0 30px 60px rgba(114, 137, 218, 0.22),
    0 0 40px rgba(114, 137, 218, 0.12) inset;
}

.product-card.amd {
  border-color: rgba(237, 20, 61, 0.25);
}

.product-card.amd:hover {
  border-color: rgba(237, 20, 61, 0.6);
  box-shadow: 
    0 30px 60px rgba(237, 20, 61, 0.22),
    0 0 40px rgba(237, 20, 61, 0.12) inset;
}

.timeline-card {
  background: linear-gradient(145deg, rgba(20, 20, 35, 0.92), rgba(18, 15, 28, 0.95));
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 0, 255, 0.15);
  border-radius: 18px;
  padding: clamp(24px, 3vw, 32px);
  margin-left: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff00ff, #b400ff, #00f0ff);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.timeline-card.clickable {
  cursor: pointer;
}

.timeline-card.clickable:hover {
  border-color: rgba(255, 0, 255, 0.45);
  box-shadow: 
    0 18px 50px rgba(255, 0, 255, 0.28),
    0 0 35px rgba(255, 0, 255, 0.12) inset,
    0 8px 16px rgba(0, 240, 255, 0.06) inset;
  transform: translateX(18px) scale(1.03);
  background: linear-gradient(145deg, rgba(255, 0, 255, 0.07), rgba(180, 0, 255, 0.04));
}

.timeline-card.clickable:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.card-header h3 {
  font-size: clamp(1.15rem, 2.2vw, 1.45rem);
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.3;
}

.view-detail {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.12), rgba(180, 0, 255, 0.08));
  border: 1px solid rgba(255, 0, 255, 0.35);
  border-radius: 22px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #ff00ff;
  opacity: 0;
  transform: translateX(-12px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 0.3px;
}

.timeline-card.clickable:hover .view-detail {
  opacity: 1;
  transform: translateX(0);
}

.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 2, 15, 0.88);
  backdrop-filter: blur(14px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.detail-modal {
  background: linear-gradient(165deg, rgba(18, 10, 32, 0.97), rgba(10, 6, 20, 0.98));
  border: 1px solid rgba(255, 0, 255, 0.35);
  border-radius: 26px;
  max-width: 750px;
  width: 100%;
  max-height: 87vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 35px 90px rgba(255, 0, 255, 0.38),
    0 0 70px rgba(255, 0, 255, 0.15) inset,
    0 0 130px rgba(114, 137, 218, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-55px) scale(0.93);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 42px;
  height: 42px;
  background: rgba(255, 68, 68, 0.08);
  border: 1px solid rgba(255, 68, 68, 0.28);
  border-radius: 50%;
  color: #ff4444;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 68, 68, 0.2);
  border-color: rgba(255, 68, 68, 0.55);
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 0 25px rgba(255, 68, 68, 0.35);
}

.modal-header {
  padding: clamp(36px, 5vw, 44px) clamp(32px, 4vw, 38px) clamp(28px, 3vw, 34px);
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 0, 255, 0.09) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255, 0, 255, 0.18);
  position: relative;
}

.modal-year-badge {
  display: inline-block;
  padding: 10px 28px;
  background: linear-gradient(135deg, #ff00ff 0%, #b400ff 50%, #7289da 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
  margin-bottom: 14px;
  position: relative;
  letter-spacing: 1px;
}

.modal-year-badge::before {
  content: '';
  position: absolute;
  inset: -6px -12px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(114, 137, 218, 0.2), rgba(0, 240, 255, 0.12));
  border-radius: 12px;
  z-index: -1;
  filter: blur(8px);
}

.modal-header h2 {
  font-size: clamp(1.7rem, 3.5vw, 2.2rem);
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #ff00ff 80%, #00f0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.3px;
  line-height: 1.25;
}

.modal-subtitle {
  color: var(--text-secondary);
  font-size: clamp(0.92rem, 1.6vw, 1.04rem);
  line-height: 1.72;
  max-width: 550px;
  margin: 0 auto;
  letter-spacing: 0.15px;
}

.modal-body {
  padding: clamp(26px, 4vw, 34px) clamp(32px, 4vw, 38px);
}

.detail-section {
  margin-bottom: 30px;
  padding: 22px;
  background: rgba(255, 0, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 0, 255, 0.08);
}

.detail-section h3 {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 1.12rem;
  margin-bottom: 14px;
  color: #ff00ff;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.detail-section h3 i {
  font-size: 1.05rem;
  opacity: 0.75;
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.82;
  font-size: 0.96rem;
  padding-left: 28px;
  letter-spacing: 0.15px;
}

.detail-section ul {
  list-style: none;
  padding-left: 28px;
}

.detail-section li {
  position: relative;
  color: var(--text-secondary);
  line-height: 1.92;
  font-size: 0.96rem;
  padding-left: 20px;
  margin-bottom: 8px;
  letter-spacing: 0.1px;
}

.detail-section li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #ff00ff;
  font-weight: bold;
  font-size: 1.1rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.spec-card {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.07), rgba(180, 0, 255, 0.04));
  border: 1px solid rgba(255, 0, 255, 0.22);
  border-radius: 13px;
  padding: 18px;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.spec-card:hover {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.13), rgba(180, 0, 255, 0.07));
  border-color: rgba(255, 0, 255, 0.48);
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 12px 30px rgba(255, 0, 255, 0.2);
}

.spec-label {
  display: block;
  font-size: 0.76rem;
  color: var(--text-secondary);
  margin-bottom: 7px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 600;
}

.spec-value {
  display: block;
  font-size: 1.08rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff00ff, #cc66ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.2px;
}

.modal-footer {
  padding: clamp(22px, 3vw, 28px) clamp(32px, 4vw, 38px);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 0, 255, 0.15);
}

.action-btn.primary {
  background: linear-gradient(135deg, #ff00ff 0%, #b400ff 50%, #7289da 100%);
  border: none;
  color: white;
  padding: 15px 36px;
  border-radius: 12px;
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 0.8px;
  box-shadow: 0 6px 25px rgba(255, 0, 255, 0.35);
}

.action-btn.primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 40px rgba(255, 0, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.18);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .detail-modal,
.modal-fade-leave-to .detail-modal {
  transform: translateY(-35px) scale(0.94);
}

.detail-modal::-webkit-scrollbar {
  width: 6px;
}

.detail-modal::-webkit-scrollbar-track {
  background: rgba(255, 0, 255, 0.04);
  border-radius: 3px;
}

.detail-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff00ff, #b400ff, #7289da);
  border-radius: 3px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.product-card {
  position: relative;
  background: linear-gradient(155deg, rgba(20, 20, 35, 0.96) 0%, rgba(15, 15, 26, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 26px;
  padding: 0;
  transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  backdrop-filter: blur(25px);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5px;
  background: linear-gradient(90deg, transparent 0%, #ff00ff 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.45s ease;
}

.product-card:hover::before {
  opacity: 1;
}

.product-card:hover {
  transform: translateY(-14px) scale(1.03);
  box-shadow: 
    0 35px 70px rgba(255, 0, 255, 0.2),
    0 0 50px rgba(255, 0, 255, 0.1) inset,
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, var(--glow-color, rgba(255, 0, 255, 0.1)) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.45s ease;
  pointer-events: none;
}

.product-card:hover .card-glow {
  opacity: 1;
}

.card-glow.nvidia { --glow-color: rgba(114, 137, 218, 0.14); }
.card-glow.amd { --glow-color: rgba(237, 20, 61, 0.14); }

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 30px 17px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.product-brand-badge {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 18px;
  border-radius: 22px;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.product-brand-badge.nvidia {
  background: linear-gradient(135deg, rgba(114, 137, 218, 0.28), rgba(130, 150, 220, 0.18));
  color: #7289da;
  border: 1px solid rgba(114, 137, 218, 0.4);
}

.product-brand-badge.amd {
  background: linear-gradient(135deg, rgba(237, 20, 61, 0.28), rgba(255, 80, 80, 0.18));
  color: #ed143d;
  border: 1px solid rgba(237, 20, 61, 0.4);
}

.product-brand-badge i {
  font-size: 1.05rem;
}

.product-badge {
  padding: 7px 16px;
  background: linear-gradient(135deg, #ff00ff 0%, #ff66ff 100%);
  border-radius: 18px;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #0a0a0f;
  box-shadow: 0 5px 20px rgba(255, 0, 255, 0.45);
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { 
    box-shadow: 0 5px 20px rgba(255, 0, 255, 0.45); 
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 5px 30px rgba(255, 0, 255, 0.65); 
    transform: scale(1.02);
  }
}

.product-name {
  font-size: clamp(1.2rem, 2.2vw, 1.35rem);
  font-weight: 850;
  margin: 16px 0 20px;
  padding: 0 30px;
  background: linear-gradient(135deg, #ffffff 0%, #ff00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.35;
  letter-spacing: 0.4px;
  position: relative;
  display: inline-block;
}

.product-name::after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 30px;
  width: 55px;
  height: 2.8px;
  background: linear-gradient(90deg, #ff00ff, transparent);
  border-radius: 3px;
}

.product-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 0 30px 26px;
  padding: 22px;
  background: rgba(0, 0, 0, 0.22);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 11px 14px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.025);
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.spec-item:hover {
  background: rgba(255, 0, 255, 0.07);
  transform: translateX(5px);
}

.spec-item.highlight {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.13), rgba(180, 0, 255, 0.07));
  border: 1px solid rgba(255, 0, 255, 0.22);
  grid-column: span 2;
}

.spec-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(180, 0, 255, 0.12));
  border-radius: 11px;
  flex-shrink: 0;
}

.spec-icon i {
  color: #ff00ff;
  font-size: 1rem;
}

.spec-content {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.spec-value {
  font-size: 0.94rem;
  font-weight: 700;
  color: #fce4f8;
  letter-spacing: 0.3px;
}

.spec-label {
  font-size: 0.73rem;
  color: rgba(255, 0, 255, 0.52);
  letter-spacing: 1.1px;
  font-weight: 600;
}

.product-price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 26px;
  padding: 22px 24px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.08), rgba(180, 0, 255, 0.04));
  border-radius: 18px;
  border: 1px solid rgba(255, 0, 255, 0.16);
}

.price-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.price-label {
  font-size: 0.73rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 600;
}

.price-current {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.currency {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ff00ff;
}

.amount {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.8rem, 3.5vw, 2.2rem);
  font-weight: 950;
  background: linear-gradient(135deg, #ff00ff 0%, #ff66ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  letter-spacing: -0.5px;
}

.price-change-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 22px;
  font-size: 0.86rem;
  font-weight: 800;
  white-space: nowrap;
  letter-spacing: 0.3px;
}

.price-change-badge.up {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.16), rgba(0, 200, 100, 0.1));
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.28);
}

.price-change-badge.down {
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.16), rgba(200, 50, 50, 0.1));
  color: #ff4444;
  border: 1px solid rgba(255, 68, 68, 0.28);
}

.change-text {
  font-size: 0.76rem;
  opacity: 0.88;
}

.product-actions {
  display: flex;
  gap: 12px;
  padding: 0 30px 28px;
}

.action-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 13px 20px;
  border-radius: 13px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  border: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.9px;
}

.action-btn i {
  font-size: 0.84rem;
  transition: transform 0.35s ease;
}

.action-btn:hover i {
  transform: translateX(3px);
}

.action-btn.primary {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.22), rgba(180, 0, 255, 0.16));
  color: #ff00ff;
  border: 1.6px solid rgba(255, 0, 255, 0.45);
  box-shadow:
    0 5px 22px rgba(255, 0, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12);
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.38), rgba(180, 0, 255, 0.28));
  border-color: rgba(255, 0, 255, 0.7);
  box-shadow:
    0 10px 38px rgba(255, 0, 255, 0.35),
    0 0 25px rgba(255, 0, 255, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
  color: #ffffff;
  text-shadow: 0 0 12px rgba(255, 0, 255, 0.55);
}

.action-btn.primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.35), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.55s ease, height 0.55s ease;
  z-index: 0;
}

.action-btn.primary:active::before {
  width: 300px;
  height: 300px;
}

.action-btn.primary span,
.action-btn.primary i {
  position: relative;
  z-index: 1;
}

.action-btn.secondary {
  background: rgba(255, 0, 255, 0.06);
  color: rgba(255, 0, 255, 0.62);
  border: 1.6px solid rgba(255, 0, 255, 0.18);
  backdrop-filter: blur(5px);
}

.action-btn.secondary:hover {
  background: rgba(255, 0, 255, 0.14);
  color: #ff00ff;
  border-color: rgba(255, 0, 255, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 0, 255, 0.15);
}

.pulse-glow {
  animation: pulseGlow 2.8s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow:
      0 5px 22px rgba(255, 0, 255, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.09);
  }
  50% {
    box-shadow:
      0 5px 32px rgba(255, 0, 255, 0.45),
      0 0 48px rgba(255, 0, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.14);
  }
}

.card-bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.5px;
  opacity: 0;
  transition: opacity 0.45s ease;
}

.product-card:hover .card-bottom-line {
  opacity: 1;
}

.card-bottom-line.nvidia {
  background: linear-gradient(90deg, #7289da, #99aab5, #7289da);
}

.card-bottom-line.amd {
  background: linear-gradient(90deg, #ed143d, #ff6b6b, #ed143d);
}

/* 产品详情弹窗 (GPU-品红主题) */
.product-modal-overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(5, 2, 15, 0.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;
}
.product-detail-modal {
  width: 600px; max-height: 87vh;
  background: linear-gradient(162deg, rgba(15, 8, 30, 0.978), rgba(8, 3, 18, 0.985));
  border: 1px solid rgba(255, 0, 255, 0.25); border-radius: 26px;
  overflow-y: auto; position: relative;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.65), 0 0 70px rgba(255, 0, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.modal-close-btn {
  position: absolute; top: 18px; right: 18px; width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10; color: rgba(255, 255, 255, 0.5); font-size: 0.95rem;
}
.modal-close-btn:hover { background: rgba(255, 68, 68, 0.22); border-color: rgba(255, 68, 68, 0.45); color: #ff4466; transform: rotate(90deg) scale(1.1); box-shadow: 0 0 22px rgba(255, 68, 68, 0.35); }
.detail-header { padding: 34px 30px 26px; text-align: center; position: relative; overflow: hidden; }
.detail-header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3.5px; }
.detail-header.nvidia::before { background: linear-gradient(90deg, #7289da, #99aab5, #7289da); }
.detail-header.amd::before { background: linear-gradient(90deg, #ed143d, #ff6b6b, #ed143d); }
.detail-brand-badge {
  display: inline-flex; align-items: center; gap: 8px; padding: 7px 18px; border-radius: 22px;
  font-size: 0.8rem; font-weight: 850; letter-spacing: 1.1px; margin-bottom: 15px;
}
.detail-brand-badge.nvidia { background: rgba(114, 137, 218, 0.22); color: #7289da; border: 1px solid rgba(114, 137, 218, 0.45); box-shadow: 0 0 22px rgba(114, 137, 218, 0.18); }
.detail-brand-badge.amd { background: rgba(237, 20, 61, 0.22); color: #ed143d; border: 1px solid rgba(237, 20, 61, 0.45); box-shadow: 0 0 22px rgba(237, 20, 61, 0.18); }
.detail-header h2 { font-size: clamp(1.4rem, 2.8vw, 1.55rem); font-weight: 850; color: #fff; margin-bottom: 9px; letter-spacing: 0.5px; line-height: 1.25; }
.detail-subtitle { font-size: 0.87rem; color: rgba(255, 0, 255, 0.62); font-weight: 500; letter-spacing: 0.2px; }
.detail-body { padding: 0 30px 30px; }
.detail-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 26px; }
.detail-spec-card {
  background: rgba(255, 0, 255, 0.045); border: 1px solid rgba(255, 0, 255, 0.09); border-radius: 17px;
  padding: 19px 14px; text-align: center; transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.detail-spec-card:hover { background: rgba(255, 0, 255, 0.09); border-color: rgba(255, 0, 255, 0.22); transform: translateY(-4px) scale(1.03); box-shadow: 0 10px 28px rgba(255, 0, 255, 0.15); }
.detail-spec-card.highlight { background: linear-gradient(135deg, rgba(255, 0, 255, 0.11), rgba(180, 0, 255, 0.06)); border-color: rgba(255, 0, 255, 0.2); }
.detail-spec-card i { font-size: 1.4rem; color: #ff00ff; margin-bottom: 9px; display: block; }
.spec-num { display: block; font-size: 1.18rem; font-weight: 850; color: #fff; font-family: 'Orbitron', monospace; letter-spacing: 0.6px; }
.spec-name { display: block; font-size: 0.73rem; color: rgba(255, 0, 255, 0.52); margin-top: 5px; letter-spacing: 1.1px; text-transform: uppercase; font-weight: 600; }
.detail-info-section { margin-bottom: 26px; }
.detail-info-section h3 { font-size: 1.04rem; color: #ff00ff; margin-bottom: 15px; font-weight: 750; display: flex; align-items: center; gap: 9px; letter-spacing: 0.2px; }
.detail-info-section h3 i { color: #ffcc00; font-size: 1rem; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li {
  padding: 11px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.035); font-size: 0.9rem; color: #f0e0f8;
  display: flex; align-items: flex-start; gap: 11px; line-height: 1.58; letter-spacing: 0.1px;
}
.feature-list li:last-child { border-bottom: none; }
.feature-list li i { color: #ff00ff; margin-top: 4px; flex-shrink: 0; font-size: 0.84rem; }
.detail-price-box {
  display: flex; justify-content: space-between; align-items: center; padding: 20px 22px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.08), rgba(180, 0, 255, 0.04));
  border: 1px solid rgba(255, 0, 255, 0.14); border-radius: 17px;
}
.price-main .price-label { font-size: 0.73rem; color: rgba(255, 0, 255, 0.52); text-transform: uppercase; letter-spacing: 1.1px; display: block; margin-bottom: 5px; font-weight: 600; }
.price-main .price-value { font-size: clamp(1.7rem, 3.5vw, 2rem); font-weight: 950; font-family: 'Orbitron', monospace; color: #ff00ff; text-shadow: 0 0 22px rgba(255, 0, 255, 0.45); letter-spacing: -0.5px; }
.price-trend { padding: 9px 18px; border-radius: 22px; font-size: 0.87rem; font-weight: 800; font-family: 'Orbitron', monospace; letter-spacing: 0.3px; }
.price-trend.up { background: rgba(255, 68, 68, 0.14); color: #ff4466; border: 1px solid rgba(255, 68, 68, 0.28); }
.price-trend.down { background: rgba(0, 255, 136, 0.14); color: #00ff88; border:  1px solid rgba(0, 255, 136, 0.28); }

/* 价格走势弹窗 (GPU) */
.price-chart-modal {
  width: 660px; max-height: 87vh;
  background: linear-gradient(162deg, rgba(15, 8, 30, 0.978), rgba(8, 3, 18, 0.985));
  border: 1px solid rgba(255, 0, 255, 0.25); border-radius: 26px;
  overflow-y: auto; position: relative;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.65), 0 0 70px rgba(255, 0, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.chart-header { padding: 30px 30px 18px; text-align: center; border-bottom: 1px solid rgba(255, 0, 255, 0.09); }
.chart-header h2 { font-size: 1.35rem; font-weight: 850; color: #fff; display: flex; align-items: center; justify-content: center; gap: 11px; margin-bottom: 7px; letter-spacing: 0.2px; }
.chart-header h2 i { color: #ff00ff; }
.chart-subtitle { font-size: 0.85rem; color: rgba(255, 0, 255, 0.52); letter-spacing: 0.15px; }
.chart-body { padding: 26px 30px 30px; }
.chart-visual { position: relative; height: 270px; margin-bottom: 26px; }
.chart-bars { display: flex; align-items: flex-end; justify-content: space-around; height: 230px; padding: 0 12px; position: relative; z-index: 2; }
.chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 7px; flex: 1; max-width: 74px; }
.chart-bar {
  width: 100%; max-width: 46px; border-radius: 9px 9px 4px 4px; min-height: 22px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); cursor: pointer;
}
.chart-bar:hover { filter: brightness(1.25); transform: scaleX(1.06) scaleY(1.03); }
.bar-price { font-size: 0.74rem; font-weight: 800; font-family: 'Orbitron', monospace; color: #ff00ff; opacity: 0; transform: translateY(-5px); transition: all 0.35s ease; letter-spacing: 0.2px; }
.chart-bar-wrapper:hover .bar-price { opacity: 1; transform: translateY(0); }
.bar-month { font-size: 0.73rem; color: rgba(255, 255, 255, 0.42); font-weight: 650; letter-spacing: 0.3px; }
.chart-line-overlay { position: absolute; bottom: 32px; left: 0; right: 0; height: 208px; pointer-events: none; z-index: 1; }
.chart-line-overlay svg { width: 100%; height: 100%; }
.chart-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }
.stat-item { background: rgba(255, 0, 255, 0.045); border: 1px solid rgba(255, 0, 255, 0.09); border-radius: 15px; padding: 16px 12px; text-align: center; transition: all 0.3s ease; }
.stat-item:hover { background: rgba(255, 0, 255, 0.08); border-color: rgba(255, 0, 255, 0.2); transform: translateY(-2px); }
.stat-label { display: block; font-size: 0.71rem; color: rgba(255, 0, 255, 0.46); text-transform: uppercase; letter-spacing: 1.1px; margin-bottom: 7px; font-weight: 600; }
.stat-val { display: block; font-size: 1.08rem; font-weight: 850; font-family: 'Orbitron', monospace; color: #f0e0f8; letter-spacing: -0.2px; }
.stat-val.high { color: #ff4466; } .stat-val.low { color: #00ff88; } .stat-val.avg { color: #ff00ff; }
.stat-val.up { color: #ff4466; } .stat-val.down { color: #00ff88; }
.chart-tip {
  display: flex; align-items: center; gap: 9px; padding: 14px 18px;
  background: rgba(255, 0, 255, 0.035); border: 1px solid rgba(255, 0, 255, 0.07); border-radius: 12px;
  font-size: 0.76rem; color: rgba(255, 255, 255, 0.37); line-height: 1.55; letter-spacing: 0.15px;
}
.chart-tip i { color: rgba(255, 0, 255, 0.43); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1); }
.modal-fade-enter-from .product-modal-overlay, .modal-fade-leave-to .product-modal-overlay { opacity: 0; }
.modal-fade-enter-from .product-detail-modal, .modal-fade-leave-to .product-detail-modal,
.modal-fade-enter-from .price-chart-modal, .modal-fade-leave-to .price-chart-modal { transform: scale(0.91) translateY(24px); opacity: 0; }
.product-detail-modal::-webkit-scrollbar, .price-chart-modal::-webkit-scrollbar { width: 6px; }
.product-detail-modal::-webkit-scrollbar-track, .price-chart-modal::-webkit-scrollbar-track { background: transparent; }
.product-detail-modal::-webkit-scrollbar-thumb, .price-chart-modal::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ff00ff, #b400ff); border-radius: 3px; }
</style>
