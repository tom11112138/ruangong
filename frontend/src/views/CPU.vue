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
          <span>CPU 处理器</span>
        </div>
        <h1 class="page-title">
          <span class="icon"><i class="fas fa-microchip"></i></span>
          CPU 处理器
        </h1>
        <p class="page-subtitle">Central Processing Unit - 计算机的核心大脑</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content animate-slide-left">
            <h2>什么是CPU？</h2>
            <p>
              中央处理器（CPU）是计算机系统的核心组件，负责执行程序指令、处理数据和控制其他硬件设备。
              它被称为计算机的"大脑"，决定了计算机的整体性能和处理能力。
            </p>
            <p>
              现代CPU采用多核心设计，每个核心都能独立执行指令，大大提升了并行处理能力。
              随着制程工艺的进步，CPU的性能不断提升，功耗却不断降低。
            </p>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="value">1971</span>
                <span class="label">首款CPU诞生</span>
              </div>
              <div class="intro-stat">
                <span class="value">64核</span>
                <span class="label">最高核心数</span>
              </div>
              <div class="intro-stat">
                <span class="value">5.8GHz</span>
                <span class="label">最高频率</span>
              </div>
            </div>
          </div>
          <div class="intro-visual animate-slide-right">
            <div class="cpu-animation">
              <div class="cpu-die">
                <div class="core" v-for="i in 8" :key="i" :style="{ animationDelay: i * 0.1 + 's' }"></div>
              </div>
              <div class="heat-spreader"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2>CPU发展历史</h2>
          <p>从单核到多核，见证处理器技术的飞跃</p>
        </div>
        
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(event, index) in cpuHistory" 
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
          <p>了解CPU的关键技术指标</p>
        </div>
        
        <div class="params-grid">
          <div class="param-card" v-for="param in cpuParams" :key="param.name">
            <div class="param-icon">
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
          <p>Intel vs AMD - 双雄争霸</p>
        </div>
        
        <div class="brands-comparison">
          <div class="brand-card intel">
            <div class="brand-logo">
              <span class="logo-text">intel</span>
            </div>
            <h3>Intel 英特尔</h3>
            <p class="brand-desc">全球最大的半导体制造商，x86架构的开创者</p>
            <div class="brand-series">
              <div class="series-item">
                <span class="series-name">Core i9</span>
                <span class="series-desc">旗舰级性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">Core i7</span>
                <span class="series-desc">高端性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">Core i5</span>
                <span class="series-desc">主流性能</span>
              </div>
              <div class="series-item">
                <span class="series-name">Core i3</span>
                <span class="series-desc">入门级</span>
              </div>
            </div>
          </div>
          
          <div class="vs-divider">
            <span>VS</span>
          </div>
          
          <div class="brand-card amd">
            <div class="brand-logo">
              <span class="logo-text">AMD</span>
            </div>
            <h3>AMD 超威</h3>
            <p class="brand-desc">锐龙系列处理器，性价比之王</p>
            <div class="brand-series">
              <div class="series-item">
                <span class="series-name">Ryzen 9</span>
                <span class="series-desc">旗舰多核</span>
              </div>
              <div class="series-item">
                <span class="series-name">Ryzen 7</span>
                <span class="series-desc">高端多核</span>
              </div>
              <div class="series-item">
                <span class="series-name">Ryzen 5</span>
                <span class="series-desc">主流六核</span>
              </div>
              <div class="series-item">
                <span class="series-name">Ryzen 3</span>
                <span class="series-desc">入门四核</span>
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
            v-for="brand in ['全部', 'Intel', 'AMD']" 
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
                <i :class="product.brand === 'Intel' ? 'fab fa-intel' : 'fas fa-microchip'"></i>
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
                  <i class="fas fa-microchip"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.cores }}核/{{ product.threads }}线程</span>
                  <span class="spec-label">核心配置</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.frequency }}</span>
                  <span class="spec-label">最高频率</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-memory"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.cache }}</span>
                  <span class="spec-label">缓存容量</span>
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

    <!-- 产品详情弹窗 -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div class="product-modal-overlay" v-if="showProductDetail" @click.self="showProductDetail = false">
          <div class="product-detail-modal">
            <div class="modal-close-btn" @click="showProductDetail = false">
              <i class="fas fa-times"></i>
            </div>
            <div class="detail-header" :class="selectedProduct?.brand?.toLowerCase()">
              <div class="detail-brand-badge" :class="selectedProduct?.brand?.toLowerCase()">
                <i :class="selectedProduct?.brand === 'Intel' ? 'fab fa-intel' : 'fas fa-microchip'"></i>
                {{ selectedProduct?.brand }}
              </div>
              <h2>{{ selectedProduct?.name }}</h2>
              <p class="detail-subtitle">{{ selectedProduct?.badge || '高性能处理器' }}</p>
            </div>
            <div class="detail-body">
              <div class="detail-specs-grid">
                <div class="detail-spec-card">
                  <i class="fas fa-microchip"></i>
                  <span class="spec-num">{{ selectedProduct?.cores }}</span>
                  <span class="spec-name">核心数</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-layer-group"></i>
                  <span class="spec-num">{{ selectedProduct?.threads }}</span>
                  <span class="spec-name">线程数</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-tachometer-alt"></i>
                  <span class="spec-num">{{ selectedProduct?.frequency }}</span>
                  <span class="spec-name">加速频率</span>
                </div>
                <div class="detail-spec-card">
                  <i class="fas fa-memory"></i>
                  <span class="spec-num">{{ selectedProduct?.cache }}</span>
                  <span class="spec-name">缓存容量</span>
                </div>
                <div class="detail-spec-card highlight">
                  <i class="fas fa-bolt"></i>
                  <span class="spec-num">{{ selectedProduct?.tdp }}W</span>
                  <span class="spec-name">功耗TDP</span>
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
            <div class="modal-close-btn" @click="showPriceChart = false">
              <i class="fas fa-times"></i>
            </div>
            <div class="chart-header">
              <h2><i class="fas fa-chart-line"></i> 价格走势</h2>
              <p class="chart-subtitle">{{ selectedProduct?.name }} · 近6个月价格变化</p>
            </div>
            <div class="chart-body">
              <div class="chart-visual">
                <div class="chart-bars">
                  <div
                    class="chart-bar-wrapper"
                    v-for="(item, idx) in priceHistoryData"
                    :key="idx"
                  >
                    <div
                      class="chart-bar"
                      :style="{ height: item.height + '%', background: item.change >= 0 ? 'linear-gradient(180deg, #00f0ff, #0066ff)' : 'linear-gradient(180deg, #ff4466, #cc2244)' }"
                    ></div>
                    <span class="bar-price">¥{{ item.price }}</span>
                    <span class="bar-month">{{ item.month }}</span>
                  </div>
                </div>
                <div class="chart-line-overlay">
                  <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                    <polyline :points="chartLinePoints" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <polygon :points="chartAreaPoints" fill="url(#chartGradient)" opacity="0.15"/>
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.5"/>
                        <stop offset="100%" stop-color="#00f0ff" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
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
                <div class="stat-item">
                  <span class="stat-label">波动幅度</span>
                  <span class="stat-val" :class="priceStats.volatility > 0 ? 'up' : 'down'">{{ priceStats.volatility > 0 ? '+' : '' }}{{ priceStats.volatility }}%</span>
                </div>
              </div>
              <div class="chart-tip">
                <i class="fas fa-info-circle"></i>
                数据来源于电商平台公开报价，仅供参考，实际价格以购买时为准
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
          <p>如何选择适合自己的CPU</p>
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
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'CPU',
  setup() {
    const activeFilter = ref('全部')
    const selectedEvent = ref(null)

    const cpuHistory = [
      {
        year: '1971',
        title: 'Intel 4004',
        description: '世界上第一款商用微处理器，4位架构，2300个晶体管',
        specs: ['4位', '740kHz', '2300晶体管'],
        details: {
          innovation: 'Intel 4004是微处理器时代的开端，它将整个CPU集成到单个芯片上，彻底改变了计算机的设计理念。这款处理器最初是为Busicom计算器设计的。',
          impact: '4004的诞生标志着微处理器时代的开始，为个人电脑革命奠定了基础。它的出现使得计算能力可以嵌入到各种设备中。',
          features: [
            '首款商用微处理器',
            '10μm工艺制程',
            '640字节程序存储器',
            '支持46条指令集'
          ],
          specs: {
            '架构': '4位',
            '频率': '740kHz',
            '晶体管': '2,300个',
            '工艺': '10μm',
            '指令集': '46条',
            '功耗': '0.5W'
          },
          trivia: 'Intel最初并不想生产4004，是日本计算器公司Busicom委托他们开发的。后来Intel用60000美元买回了设计权，这一决定改变了科技史！'
        }
      },
      {
        year: '1978',
        title: 'Intel 8086',
        description: '第一款16位x86架构处理器，奠定了现代PC基础',
        specs: ['16位', '5-10MHz', '2.9万晶体管'],
        details: {
          innovation: '8086引入了x86架构，这是Intel最成功的架构之一，至今仍在使用。它采用了全新的16位设计，性能远超8位处理器。',
          impact: 'IBM选择8086作为其第一台PC的核心，这个决定确立了x86架构在PC市场的主导地位，影响至今超过45年。',
          features: [
            '16位数据总线',
            '20位地址寻址',
            '1MB内存寻址能力',
            '向后兼容8080指令'
          ],
          specs: {
            '架构': '16位',
            '频率': '5-10MHz',
            '晶体管': '29,000个',
            '工艺': '3μm',
            '内存寻址': '1MB',
            '功耗': '1.5W'
          },
          trivia: 'IBM PC原本计划使用Motorola 68000处理器，但由于开发时间紧迫和成本考虑，最终选择了8086的简化版8088。'
        }
      },
      {
        year: '1993',
        title: 'Intel Pentium',
        description: '奔腾处理器，首次采用超标量架构，性能大幅提升',
        specs: ['32位', '60-300MHz', '310万晶体管'],
        details: {
          innovation: 'Pentium引入了超标量架构，能够同时执行多条指令。它还首次采用了分支预测技术，大幅提升了流水线效率。',
          impact: 'Pentium品牌成为高性能处理器的代名词，"Intel Inside"营销活动深入人心，开创了CPU品牌化时代。',
          features: [
            '超标量双管线架构',
            '64位外部数据总线',
            '内置浮点运算单元(FPU)',
            '分支预测技术'
          ],
          specs: {
            '架构': '32位',
            '频率': '60-300MHz',
            '晶体管': '310万个',
            '工艺': '0.8μm',
            'L1缓存': '16KB',
            '功耗': '15W'
          },
          trivia: 'Pentium名称来源于希腊语"Pente"(五)，代表第五代处理器。但Intel无法注册数字商标，所以改用了拉丁化的名称。'
        }
      },
      {
        year: '2000',
        title: 'Intel Pentium 4',
        description: 'NetBurst架构，追求高频率，最高达3.8GHz',
        specs: ['32位', '1.3-3.8GHz', '5500万晶体管'],
        details: {
          innovation: 'Pentium 4采用NetBurst架构，通过超长流水线(31级)实现超高频率。引入SSE2指令集，增强了多媒体性能。',
          impact: '虽然追求高频率的策略最终失败，但Pentium 4推动了GHz竞赛，促进了散热技术和电源管理的发展。',
          features: [
            '31级超长流水线',
            'Hyper-Threading超线程技术',
            'SSE2/SSE3指令集',
            'LGA 775封装(后期)'
          ],
          specs: {
            '架构': '32位',
            '频率': '1.3-3.8GHz',
            '晶体管': '5500万个',
            '工艺': '0.13-90nm',
            'L2缓存': '512KB-2MB',
            '功耗': '84-115W'
          },
          trivia: 'Pentium 4的高频率策略最终被证明是错误方向，AMD凭借更高效的K8架构在性能上反超，迫使Intel改变设计思路。'
        }
      },
      {
        year: '2006',
        title: 'Intel Core 2',
        description: 'Core架构诞生，能效比大幅提升，开启双核时代',
        specs: ['64位', '1.8-3.3GHz', '2.91亿晶体管'],
        details: {
          innovation: 'Core架构放弃了高频策略，专注于IPC(每时钟周期指令数)提升。采用宽动态执行、智能缓存等技术，能效比飞跃。',
          impact: 'Core 2系列帮助Intel重新夺回性能王座，标志着多核时代的真正开始。至今Core品牌仍是Intel的主力产品线。',
          features: [
            '宽动态执行引擎',
            '智能共享L2缓存',
            '数字媒体增强技术',
            '64位扩展技术(EM64T)'
          ],
          specs: {
            '架构': '64位',
            '频率': '1.8-3.3GHz',
            '晶体管': '2.91亿个',
            '工艺': '65nm',
            '核心数': '2/4核',
            'L2缓存': '2-8MB'
          },
          trivia: 'Core 2的开发团队来自以色列海法实验室，这个团队后来还开发了革命性的Sandy Bridge架构。'
        }
      },
      {
        year: '2011',
        title: 'Intel Sandy Bridge',
        description: '第二代Core处理器，集成GPU，全新AVX指令集',
        specs: ['32nm', '4核心', '集成显卡'],
        details: {
          innovation: 'Sandy Bridge将CPU和GPU首次集成在同一芯片上，引入AVX指令集用于浮点加速。采用环形总线连接各组件。',
          impact: '奠定了现代APU的基础概念，核显性能大幅提升，让独立显卡不再是绝对必需品。',
          features: [
            'CPU/GPU融合架构',
            '256位AVX指令集',
            '环形总线互连',
            'Turbo Boost 2.0'
          ],
          specs: {
            '工艺': '32nm',
            '核心数': '2/4核',
            'GPU单元': '12/24 EU',
            'L3缓存': '3-8MB',
            'TDP': '35-95W',
            'PCIe': 'Gen 2 x16'
          },
          trivia: 'Sandy Bridge被认为是Intel最成功的架构之一，其基本设计理念影响了后续几代产品。'
        }
      },
      {
        year: '2017',
        title: 'AMD Ryzen',
        description: 'Zen架构发布，AMD强势回归，多核性价比之王',
        specs: ['14nm', '8核16线程', 'AM4平台'],
        details: {
          innovation: 'AMD Zen架构采用Chiplet(小芯片)设计和SMT同步多线程技术，IPC相比上一代提升52%，彻底改变了CPU市场竞争格局。',
          impact: 'Ryzen的出现打破了Intel在高性能市场的垄断，迫使Intel加快产品迭代并降低价格，消费者从中受益。',
          features: [
            'SMT同步多线程',
            'Infinity Fabric互联',
            'SenseMI智能技术',
            'AM4平台长期支持'
          ],
          specs: {
            '工艺': '14nm (GlobalFoundries)',
            '核心/线程': '8核/16线程',
            'L3缓存': '16-32MB',
            'TDP': '65-105W',
            'PCIe': 'Gen 3',
            '内存支持': 'DDR4-3600'
          },
          trivia: 'Ryzen的首席架构师Jim Keller曾领导过Alpha和Apple A系列处理器的开发，是硅谷传奇人物。'
        }
      },
      {
        year: '2020',
        title: 'Apple M1',
        description: 'ARM架构桌面处理器，能效比革命性突破',
        specs: ['5nm', '8核心', '统一内存'],
        details: {
          innovation: 'M1采用ARM架构和统一内存架构，CPU/GPU/NPU共享同一块内存，消除了数据拷贝延迟。5nm工艺带来惊人能效比。',
          impact: '证明了ARM架构完全可以胜任桌面级任务，引发了整个行业对x86垄断地位的重新思考。',
          features: [
            '统一内存架构(UMA)',
            'FireStorm/IceStorm混合核心',
            '16核神经引擎(Neural Engine)',
            'Rosetta 2二进制翻译'
          ],
          specs: {
            '工艺': '5nm (TSMC)',
            'CPU': '4大+4小核心',
            'GPU': '8核',
            'NPU': '16核神经引擎',
            '内存': '8-16GB统一内存',
            '功耗': '仅5W基础功耗'
          },
          trivia: 'M1的性能让许多用户惊讶地发现，iPad Pro比他们的MacBook Pro还要快！'
        }
      },
      {
        year: '2023',
        title: 'Intel 14代酷睿',
        description: '混合架构成熟，最高24核心，AI加速',
        specs: ['Intel 7', '24核心', '5.8GHz'],
        details: {
          innovation: '14代酷睿采用成熟的Performance-core + Efficient-core混合架构，集成NPU神经网络计算单元，原生支持DDR5和PCIe 5.0。',
          impact: '代表了x86处理器的最新发展方向：异构计算+AI加速，为AI PC时代做好准备。',
          features: [
            'Raptor Lake-S Refresh架构',
            'P-Core+E-Core混合设计',
            'Intel NPU AI加速',
            'Thunderbolt 5支持'
          ],
          specs: {
            '工艺': 'Intel 7 (10nm ESF)',
            '最大核心': '24核(8P+16E)',
            '最大线程': '32线程',
            '最高频率': '6.0 GHz',
            'L3缓存': '36MB',
            'TDP': '125-253W'
          },
          trivia: '14代酷睿的i9-14900KS是首款官方支持6GHz频率的消费级处理器，创造了新的频率纪录。'
        }
      }
    ]

    const showDetail = (event) => {
      selectedEvent.value = event
    }

    const cpuParams = [
      {
        name: '核心数量',
        icon: 'fas fa-cubes',
        description: 'CPU内部独立的处理单元数量，多核心可并行处理多任务',
        importance: 95
      },
      {
        name: '主频频率',
        icon: 'fas fa-tachometer-alt',
        description: 'CPU的工作频率，直接影响单核性能表现',
        importance: 90
      },
      {
        name: '缓存大小',
        icon: 'fas fa-database',
        description: 'L1/L2/L3缓存容量，影响数据访问速度',
        importance: 85
      },
      {
        name: '制程工艺',
        icon: 'fas fa-atom',
        description: '晶体管制造工艺，越先进能效比越高',
        importance: 88
      },
      {
        name: 'TDP功耗',
        icon: 'fas fa-bolt',
        description: '热设计功耗，影响散热需求和能耗',
        importance: 75
      },
      {
        name: '指令集',
        icon: 'fas fa-code',
        description: '支持的指令集扩展，如AVX、SSE等',
        importance: 70
      }
    ]

    const products = [
      {
        name: 'Intel Core i9-14900K',
        brand: 'Intel',
        cores: 24,
        threads: 32,
        frequency: '3.2-6.0GHz',
        cache: '36MB',
        tdp: 125,
        price: 4599,
        priceChange: -2.5,
        badge: '旗舰'
      },
      {
        name: 'Intel Core i7-14700K',
        brand: 'Intel',
        cores: 20,
        threads: 28,
        frequency: '3.4-5.6GHz',
        cache: '33MB',
        tdp: 125,
        price: 3299,
        priceChange: -1.8,
        badge: '热门'
      },
      {
        name: 'Intel Core i5-14600K',
        brand: 'Intel',
        cores: 14,
        threads: 20,
        frequency: '3.5-5.3GHz',
        cache: '24MB',
        tdp: 125,
        price: 2299,
        priceChange: 0.5
      },
      {
        name: 'AMD Ryzen 9 7950X',
        brand: 'AMD',
        cores: 16,
        threads: 32,
        frequency: '4.5-5.7GHz',
        cache: '64MB',
        tdp: 170,
        price: 4299,
        priceChange: -3.2,
        badge: '多核王'
      },
      {
        name: 'AMD Ryzen 7 7800X3D',
        brand: 'AMD',
        cores: 8,
        threads: 16,
        frequency: '4.2-5.0GHz',
        cache: '104MB',
        tdp: 120,
        price: 2999,
        priceChange: 2.1,
        badge: '游戏神U'
      },
      {
        name: 'AMD Ryzen 5 7600X',
        brand: 'AMD',
        cores: 6,
        threads: 12,
        frequency: '4.7-5.3GHz',
        cache: '32MB',
        tdp: 105,
        price: 1499,
        priceChange: -4.5
      }
    ]

    const buyingTips = [
      {
        icon: 'fas fa-gamepad',
        title: '游戏玩家',
        content: '优先选择高主频、大缓存的产品，如i5/i7或Ryzen 5/7，6-8核心足够'
      },
      {
        icon: 'fas fa-video',
        title: '视频创作者',
        content: '需要多核心进行渲染，推荐i9或Ryzen 9，16核心以上更佳'
      },
      {
        icon: 'fas fa-code',
        title: '程序员',
        content: '编译代码需要多核，建议8核心以上，虚拟机用户可考虑更多核心'
      },
      {
        icon: 'fas fa-desktop',
        title: '办公用户',
        content: '日常办公i3或Ryzen 3即可，核显版本可省去独立显卡'
      }
    ]

    const filteredProducts = computed(() => {
      if (activeFilter.value === '全部') return products
      return products.filter(p => p.brand === activeFilter.value)
    })

    const selectedProduct = ref(null)
    const showProductDetail = ref(false)
    const showPriceChart = ref(false)

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
      const basePrice = product.price
      const features = []
      if (product.cores >= 12) features.push(`${product.cores}核心${product.threads}线程，多任务处理能力强劲`)
      if (product.cores >= 8 && product.cores < 12) features.push(`均衡的${product.cores}核心配置，游戏与生产力兼顾`)
      if (parseFloat(product.frequency) >= 5.0) features.push(`最高加速频率达${product.frequency}，单核性能出色`)
      if (product.cache && parseInt(product.cache) >= 30) features.push(`超大${product.cache}三级缓存，大幅降低内存延迟`)
      if (product.tdp <= 105) features.push(`低功耗设计(${product.tdp}W)，能效比优秀`)
      if (basePrice <= 1600) features.push(`性价比出众，中端装机首选`)
      if (basePrice > 3000) features.push(`旗舰级定位，面向专业用户与发烧友`)
      if (product.brand === 'Intel') features.push('Intel工艺制程成熟，生态兼容性极佳')
      if (product.brand === 'AMD') features.push('AM5平台支持PCIe 5.0，未来升级空间大')
      if (features.length < 3) features.push('主流市场热销型号，口碑稳定')
      return features.slice(0, 5)
    }

    const priceHistoryData = computed(() => {
      if (!selectedProduct.value) return []
      const basePrice = selectedProduct.value.price
      const months = ['9月', '10月', '11月', '12月', '1月', '2月']
      let currentPrice = Math.round(basePrice * (0.88 + Math.random() * 0.18))
      const data = months.map((month, idx) => {
        const change = idx < 5 ? (Math.random() - 0.45) * 8 : selectedProduct.value.priceChange
        const price = idx === 5 ? basePrice : Math.round(currentPrice * (1 + change / 100))
        const maxP = Math.max(basePrice * 1.15, ...data.map(d => d?.price || 0), price)
        const minP = Math.min(basePrice * 0.8, ...data.map(d => d?.price || maxP), price)
        currentPrice = price
        return { month, price, change: idx === 5 ? selectedProduct.value.priceChange : change, height: ((price - minP) / (maxP - minP + 1)) * 75 + 20 }
      })
      return data
    })

    const chartLinePoints = computed(() => {
      if (!priceHistoryData.value.length) return ''
      const w = 600 / (priceHistoryData.value.length - 1)
      return priceHistoryData.value.map((d, i) => `${i * w},${200 - d.height * 1.8}`).join(' ')
    })

    const chartAreaPoints = computed(() => {
      if (!chartLinePoints.value) return ''
      return `0,200 ${chartLinePoints.value} ${600},200`
    })

    const priceStats = computed(() => {
      if (!priceHistoryData.value.length) return { max: 0, min: 0, avg: 0, volatility: 0 }
      const prices = priceHistoryData.value.map(d => d.price)
      const max = Math.max(...prices)
      const min = Math.min(...prices)
      const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
      const volatility = (((prices[prices.length - 1] - prices[0]) / prices[0]) * 100).toFixed(1)
      return { max: max.toLocaleString(), min: min.toLocaleString(), avg: avg.toLocaleString(), volatility: parseFloat(volatility) }
    })

    return {
      activeFilter,
      selectedEvent,
      cpuHistory,
      cpuParams,
      products,
      filteredProducts,
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
.hardware-page {
  min-height: 100vh;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 50px);
}

.page-hero {
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  padding: clamp(100px, 15vh, 140px) clamp(30px, 5vw, 60px) clamp(80px, 10vh, 120px);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 20% 40%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 60%, rgba(0, 240, 255, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 102, 255, 0.06) 0%, rgba(0, 240, 255, 0.03) 100%);
}

.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 35%, rgba(0, 240, 255, 0.08) 0%, transparent 35%),
    radial-gradient(circle at 75% 65%, rgba(0, 102, 255, 0.08) 0%, transparent 35%);
  animation: pulse 4s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  font-size: 0.9rem;
  font-weight: 500;
}

.breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
}

.breadcrumb a:hover {
  color: var(--primary-color);
  transform: translateX(3px);
}

.breadcrumb i {
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.breadcrumb span {
  color: var(--primary-color);
  font-weight: 600;
}

.page-title {
  display: flex;
  align-items: center;
  gap: clamp(20px, 4vw, 32px);
  font-size: clamp(2.2rem, 6vw, 4rem);
  margin-bottom: 22px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  position: relative;
  text-shadow: 0 0 40px rgba(0, 240, 255, 0.2);
}

.page-title .icon {
  width: clamp(70px, 8vw, 95px);
  height: clamp(70px, 8vw, 95px);
  min-width: clamp(70px, 8vw, 95px);
  background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%);
  border-radius: clamp(18px, 3vw, 28px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2.2rem, 4vw, 3rem);
  color: white;
  box-shadow: 
    0 0 50px rgba(0, 240, 255, 0.45),
    inset 0 0 30px rgba(255, 255, 255, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.3);
  animation: pulse 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.page-title .icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  animation: rotate 8s linear infinite;
}

.page-title .icon i {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
}

.page-subtitle {
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  color: var(--text-secondary);
  margin-bottom: 0;
  max-width: 650px;
  line-height: 1.75;
  letter-spacing: 0.03em;
  font-weight: 300;
  opacity: 0.9;
}

.intro-section {
  padding: clamp(60px, 10vh, 100px) 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%);
  position: relative;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.3), transparent);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(50px, 8vw, 100px);
  align-items: center;
}

@media (max-width: 900px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .intro-visual {
    order: -1;
  }
}

.intro-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 28px;
  background: linear-gradient(135deg, #00f0ff 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.intro-content p {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.85;
  margin-bottom: 22px;
  color: rgba(255, 255, 255, 0.88);
  letter-spacing: 0.2px;
}

.intro-stats {
  display: flex;
  gap: clamp(28px, 5vw, 48px);
  margin-top: 44px;
  padding-top: 32px;
  border-top: 1px solid rgba(0, 240, 255, 0.15);
}

.intro-stat {
  text-align: center;
  flex: 1;
}

.intro-stat .value {
  display: block;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  background: linear-gradient(135deg, #00f0ff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.intro-stat .label {
  display: block;
  font-size: 0.82rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.intro-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cpu-animation {
  position: relative;
  width: clamp(250px, 35vw, 350px);
  height: clamp(250px, 35vw, 350px);
}

.cpu-die {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68%;
  height: 68%;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f1729 100%);
  border-radius: 14px;
  box-shadow: 
    0 0 50px rgba(0, 240, 255, 0.25),
    inset 0 2px 10px rgba(0, 240, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 6px;
  padding: 5%;
  animation: float 5s ease-in-out infinite;
}

.core {
  background: linear-gradient(135deg, #00f0ff 0%, #0066ff 100%);
  border-radius: 5px;
  animation: pulse 2s ease-in-out infinite;
  opacity: 0.75;
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
}

.heat-spreader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 86%;
  height: 86%;
  background: linear-gradient(145deg, #2a2a3a 0%, #181825 100%);
  border-radius: 14px;
  box-shadow: 
    0 0 60px rgba(0, 240, 255, 0.15),
    inset 0 0 30px rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.history-section {
  padding: clamp(60px, 10vh, 100px) 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.22) 100%);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: clamp(45px, 8vh, 70px);
}

.section-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 16px;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.3px;
}

.section-header p {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
  letter-spacing: 0.2px;
}

.timeline {
  position: relative;
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, 
    transparent 0%, 
    #00f0ff 10%, 
    #0066ff 50%, 
    #00f0ff 90%, 
    transparent 100%
  );
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: clamp(50px, 8vh, 70px);
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.year {
  display: inline-block;
  background: linear-gradient(135deg, #0066ff 0%, #00f0ff 100%);
  color: white;
  padding: 11px 26px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 1px;
  box-shadow: 
    0 0 25px rgba(0, 240, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: pulse 3s ease-in-out infinite;
  white-space: nowrap;
}

.timeline-card {
  width: calc(50% - 65px);
  background: linear-gradient(145deg, rgba(20, 20, 35, 0.92), rgba(15, 15, 28, 0.95));
  backdrop-filter: blur(25px);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 18px;
  padding: clamp(24px, 3vw, 34px);
  box-shadow: 
    0 12px 35px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  background: linear-gradient(90deg, #0066ff, #00f0ff);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.timeline-card.clickable {
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 55px rgba(0, 240, 255, 0.2),
    0 0 40px rgba(0, 240, 255, 0.1);
  border-color: rgba(0, 240, 255, 0.35);
}

.timeline-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-header h3 {
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  color: var(--text-primary);
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.3;
}

.view-detail {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--primary-color);
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
}

.view-detail i {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.view-detail:hover {
  transform: translateX(6px);
  color: #00ffff;
}

.view-detail:hover i {
  transform: translateX(3px);
}

.timeline-card p {
  color: var(--text-secondary);
  line-height: 1.72;
  margin-bottom: 20px;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  letter-spacing: 0.15px;
}

.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.spec-tag {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.08));
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 25px;
  padding: 6px 18px;
  font-size: 0.82rem;
  color: var(--primary-color);
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
}

.spec-tag:hover {
  background: rgba(0, 240, 255, 0.15);
  border-color: rgba(0, 240, 255, 0.4);
  transform: translateY(-2px);
}

.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.detail-modal {
  background: linear-gradient(165deg, rgba(22, 22, 38, 0.97), rgba(15, 15, 28, 0.99));
  backdrop-filter: blur(30px);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 24px;
  max-width: 850px;
  max-height: 85vh;
  overflow-y: auto;
  padding: clamp(32px, 5vw, 48px);
  box-shadow: 
    0 25px 80px rgba(0, 240, 255, 0.25),
    0 0 100px rgba(0, 240, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.15);
  color: var(--text-secondary);
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: var(--primary-color);
  background: rgba(0, 240, 255, 0.15);
  border-color: rgba(0, 240, 255, 0.4);
  transform: rotate(90deg);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.modal-header {
  text-align: center;
  margin-bottom: 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(0, 240, 255, 0.12);
}

.modal-year-badge {
  display: inline-block;
  background: linear-gradient(135deg, #0066ff, #00f0ff);
  color: white;
  padding: 10px 26px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 18px;
  letter-spacing: 1.5px;
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.4);
}

.modal-header h2 {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin-bottom: 12px;
  color: var(--text-primary);
  letter-spacing: -0.3px;
  line-height: 1.25;
}

.modal-subtitle {
  font-size: clamp(0.95rem, 1.6vw, 1.08rem);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 650px;
  margin: 0 auto;
}

.modal-body {
  margin-bottom: 32px;
}

.detail-section {
  margin-bottom: 32px;
  padding: 24px;
  background: rgba(0, 240, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(0, 240, 255, 0.08);
}

.detail-section h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.15rem;
  margin-bottom: 16px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.2px;
}

.detail-section h3 i {
  font-size: 1.1rem;
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 12px;
  font-size: 0.98rem;
  letter-spacing: 0.15px;
}

.detail-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-section li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 12px;
  font-size: 0.96rem;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.detail-section li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.detail-section li i {
  color: var(--primary-color);
  margin-top: 4px;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.spec-card {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.06), rgba(0, 102, 255, 0.04));
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 12px;
  padding: 18px;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.spec-card:hover {
  border-color: rgba(0, 240, 255, 0.35);
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 240, 255, 0.15);
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 102, 255, 0.07));
}

.spec-label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 600;
}

.spec-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00f0ff, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.3px;
}

.modal-footer {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 240, 255, 0.12);
}

.params-section {
  padding: clamp(60px, 10vh, 100px) 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.28) 100%);
}

.params-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: clamp(24px, 4vw, 36px);
  max-width: 1250px;
  margin: 0 auto;
}

.param-card {
  background: linear-gradient(155deg, rgba(20, 20, 35, 0.88), rgba(15, 15, 28, 0.95));
  backdrop-filter: blur(25px);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 18px;
  padding: clamp(26px, 4vw, 36px);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.param-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0066ff, #00f0ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.param-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 240, 255, 0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.param-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 
    0 20px 55px rgba(0, 240, 255, 0.2),
    0 0 80px rgba(0, 240, 255, 0.1);
  border-color: rgba(0, 240, 255, 0.35);
}

.param-card:hover::before {
  transform: scaleX(1);
}

.param-card:hover::after {
  opacity: 1;
}

.param-icon {
  width: clamp(70px, 9vw, 90px);
  height: clamp(70px, 9vw, 90px);
  background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: white;
  margin: 0 auto 24px;
  box-shadow: 
    0 0 40px rgba(0, 240, 255, 0.35),
    inset 0 2px 15px rgba(255, 255, 255, 0.15);
  animation: pulse 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.param-card:hover .param-icon {
  transform: scale(1.1) rotate(5deg);
}

.param-card h3 {
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  margin-bottom: 16px;
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.2px;
}

.param-card p {
  color: var(--text-secondary);
  line-height: 1.72;
  margin-bottom: 24px;
  font-size: 0.96rem;
  letter-spacing: 0.15px;
}

.param-visual {
  height: 8px;
  background: rgba(0, 240, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.param-visual::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--progress, 0%);
  background: linear-gradient(90deg, #0066ff, #00f0ff);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}

/* ========== 产品卡片样式 (与 GPU 一致) ========== */
.products-section {
  padding: clamp(60px, 10vh, 100px) 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.25) 100%);
  position: relative;
}

.products-filter {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 11px 26px;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.06));
  border: 1px solid rgba(0, 240, 255, 0.18);
  border-radius: 24px;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 0.3px;
  backdrop-filter: blur(8px);
}

.filter-btn:hover {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 102, 255, 0.1));
  border-color: rgba(0, 240, 255, 0.35);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 240, 255, 0.15);
}

.filter-btn.active {
  background: linear-gradient(135deg, #0066ff 0%, #00f0ff 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 6px 25px rgba(0, 240, 255, 0.35);
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
  background: linear-gradient(90deg, transparent 0%, #00f0ff 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.45s ease;
}

.product-card:hover::before {
  opacity: 1;
}

.product-card:hover {
  transform: translateY(-14px) scale(1.03);
  box-shadow: 
    0 35px 70px rgba(0, 240, 255, 0.2),
    0 0 50px rgba(0, 240, 255, 0.1) inset,
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, var(--glow-color, rgba(0, 240, 255, 0.1)) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.45s ease;
  pointer-events: none;
}

.product-card:hover .card-glow {
  opacity: 1;
}

.card-glow.intel { --glow-color: rgba(0, 102, 255, 0.14); }
.card-glow.amd { --glow-color: rgba(237, 20, 61, 0.14); }

.product-card.intel {
  border-color: rgba(0, 102, 255, 0.2);
}

.product-card.intel:hover {
  border-color: rgba(0, 102, 255, 0.5);
  box-shadow: 
    0 35px 70px rgba(0, 102, 255, 0.22),
    0 0 50px rgba(0, 102, 255, 0.1) inset;
}

.product-card.amd {
  border-color: rgba(237, 20, 61, 0.2);
}

.product-card.amd:hover {
  border-color: rgba(237, 20, 61, 0.5);
  box-shadow: 
    0 35px 70px rgba(237, 20, 61, 0.22),
    0 0 50px rgba(237, 20, 61, 0.1) inset;
}

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

.product-brand-badge.intel {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.28), rgba(0, 150, 255, 0.18));
  color: #0066ff;
  border: 1px solid rgba(0, 102, 255, 0.4);
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
  background: linear-gradient(135deg, #00f0ff 0%, #00ccff 100%);
  border-radius: 18px;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #0a0a0f;
  box-shadow: 0 5px 20px rgba(0, 240, 255, 0.45);
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { 
    box-shadow: 0 5px 20px rgba(0, 240, 255, 0.45); 
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 5px 30px rgba(0, 240, 255, 0.65); 
    transform: scale(1.02);
  }
}

.product-name {
  font-size: clamp(1.2rem, 2.2vw, 1.35rem);
  font-weight: 850;
  margin: 16px 0 20px;
  padding: 0 30px;
  background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%);
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
  background: linear-gradient(90deg, #00f0ff, transparent);
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
  background: rgba(0, 240, 255, 0.07);
  transform: translateX(5px);
}

.spec-item.highlight {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.13), rgba(0, 102, 255, 0.07));
  border: 1px solid rgba(0, 240, 255, 0.22);
  grid-column: span 2;
}

.spec-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(0, 102, 255, 0.12));
  border-radius: 11px;
  flex-shrink: 0;
}

.spec-icon i {
  color: #00f0ff;
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
  color: #e4f8ff;
  letter-spacing: 0.3px;
}

.spec-label {
  font-size: 0.73rem;
  color: rgba(0, 240, 255, 0.52);
  letter-spacing: 1.1px;
  font-weight: 600;
}

.product-price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 26px;
  padding: 22px 24px;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.04));
  border-radius: 18px;
  border: 1px solid rgba(0, 240, 255, 0.16);
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
  color: #00f0ff;
}

.amount {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.8rem, 3.5vw, 2.2rem);
  font-weight: 950;
  background: linear-gradient(135deg, #00f0ff 0%, #00ccff 100%);
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
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.22), rgba(0, 102, 255, 0.16));
  color: #00f0ff;
  border: 1.6px solid rgba(0, 240, 255, 0.45);
  box-shadow:
    0 5px 22px rgba(0, 240, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12);
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.38), rgba(0, 102, 255, 0.28));
  border-color: rgba(0, 240, 255, 0.7);
  box-shadow:
    0 10px 38px rgba(0, 240, 255, 0.35),
    0 0 25px rgba(0, 240, 255, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
  color: #ffffff;
  text-shadow: 0 0 12px rgba(0, 240, 255, 0.55);
}

.action-btn.primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.35), transparent);
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
  background: rgba(0, 240, 255, 0.06);
  color: rgba(0, 240, 255, 0.62);
  border: 1.6px solid rgba(0, 240, 255, 0.18);
  backdrop-filter: blur(5px);
}

.action-btn.secondary:hover {
  background: rgba(0, 240, 255, 0.14);
  color: #00f0ff;
  border-color: rgba(0, 240, 255, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 240, 255, 0.15);
}

.pulse-glow {
  animation: pulseGlow 2.8s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow:
      0 5px 22px rgba(0, 240, 255, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.09);
  }
  50% {
    box-shadow:
      0 5px 32px rgba(0, 240, 255, 0.45),
      0 0 48px rgba(0, 240, 255, 0.15),
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

.card-bottom-line.intel {
  background: linear-gradient(90deg, #0066ff, #00ccff, #0066ff);
}

.card-bottom-line.amd {
  background: linear-gradient(90deg, #ed143d, #ff6b6b, #ed143d);
}

/* ========== 选购指南样式 ========== */
.knowledge-section {
  padding: clamp(60px, 10vh, 100px) 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.2) 100%);
  position: relative;
}

.knowledge-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  max-width: 1250px;
  margin: 0 auto;
}

.knowledge-card {
  background: linear-gradient(155deg, rgba(20, 20, 35, 0.88), rgba(15, 15, 28, 0.95));
  backdrop-filter: blur(25px);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 20px;
  padding: clamp(28px, 4vw, 36px);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.knowledge-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0066ff, #00f0ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.knowledge-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 240, 255, 0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.knowledge-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 
    0 20px 55px rgba(0, 240, 255, 0.2),
    0 0 80px rgba(0, 240, 255, 0.1);
  border-color: rgba(0, 240, 255, 0.35);
}

.knowledge-card:hover::before {
  transform: scaleX(1);
}

.knowledge-card:hover::after {
  opacity: 1;
}

.card-icon {
  width: clamp(70px, 9vw, 90px);
  height: clamp(70px, 9vw, 90px);
  background: linear-gradient(135deg, #0066ff 0%, #00f0ff 50%, #00cccc 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  color: white;
  margin: 0 auto 24px;
  box-shadow: 
    0 0 40px rgba(0, 240, 255, 0.35),
    inset 0 2px 15px rgba(255, 255, 255, 0.15);
  animation: pulse 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.knowledge-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.knowledge-card h3 {
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  margin-bottom: 16px;
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.2px;
}

.knowledge-card p {
  color: var(--text-secondary);
  line-height: 1.72;
  font-size: 0.96rem;
  letter-spacing: 0.15px;
}

/* ========== 产品详情弹窗 (CPU-蓝色主题) ========== */
.product-modal-overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(2, 5, 15, 0.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;
}
.product-detail-modal {
  width: 600px; max-height: 87vh;
  background: linear-gradient(162deg, rgba(8, 15, 30, 0.978), rgba(3, 8, 18, 0.985));
  border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 26px;
  overflow-y: auto; position: relative;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.65), 0 0 70px rgba(0, 240, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06);
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
.detail-header.intel::before { background: linear-gradient(90deg, #0066ff, #00ccff, #0066ff); }
.detail-header.amd::before { background: linear-gradient(90deg, #ed143d, #ff6b6b, #ed143d); }
.detail-brand-badge {
  display: inline-flex; align-items: center; gap: 8px; padding: 7px 18px; border-radius: 22px;
  font-size: 0.8rem; font-weight: 850; letter-spacing: 1.1px; margin-bottom: 15px;
}
.detail-brand-badge.intel { background: rgba(0, 102, 255, 0.22); color: #0066ff; border: 1px solid rgba(0, 102, 255, 0.45); box-shadow: 0 0 22px rgba(0, 102, 255, 0.18); }
.detail-brand-badge.amd { background: rgba(237, 20, 61, 0.22); color: #ed143d; border: 1px solid rgba(237, 20, 61, 0.45); box-shadow: 0 0 22px rgba(237, 20, 61, 0.18); }
.detail-header h2 { font-size: clamp(1.4rem, 2.8vw, 1.55rem); font-weight: 850; color: #fff; margin-bottom: 9px; letter-spacing: 0.5px; line-height: 1.25; }
.detail-subtitle { font-size: 0.87rem; color: rgba(0, 240, 255, 0.62); font-weight: 500; letter-spacing: 0.2px; }
.detail-body { padding: 0 30px 30px; }
.detail-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 26px; }
.detail-spec-card {
  background: rgba(0, 240, 255, 0.045); border: 1px solid rgba(0, 240, 255, 0.09); border-radius: 17px;
  padding: 19px 14px; text-align: center; transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.detail-spec-card:hover { background: rgba(0, 240, 255, 0.09); border-color: rgba(0, 240, 255, 0.22); transform: translateY(-4px) scale(1.03); box-shadow: 0 10px 28px rgba(0, 240, 255, 0.15); }
.detail-spec-card.highlight { background: linear-gradient(135deg, rgba(0, 240, 255, 0.11), rgba(0, 102, 255, 0.06)); border-color: rgba(0, 240, 255, 0.2); }
.detail-spec-card i { font-size: 1.4rem; color: #00f0ff; margin-bottom: 9px; display: block; }
.spec-num { display: block; font-size: 1.18rem; font-weight: 850; color: #fff; font-family: 'Orbitron', monospace; letter-spacing: 0.6px; }
.spec-name { display: block; font-size: 0.73rem; color: rgba(0, 240, 255, 0.52); margin-top: 5px; letter-spacing: 1.1px; text-transform: uppercase; font-weight: 600; }
.detail-info-section { margin-bottom: 26px; }
.detail-info-section h3 { font-size: 1.04rem; color: #00f0ff; margin-bottom: 15px; font-weight: 750; display: flex; align-items: center; gap: 9px; letter-spacing: 0.2px; }
.detail-info-section h3 i { color: #ffcc00; font-size: 1rem; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li {
  padding: 11px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.035); font-size: 0.9rem; color: #e0f8ff;
  display: flex; align-items: flex-start; gap: 11px; line-height: 1.58; letter-spacing: 0.1px;
}
.feature-list li:last-child { border-bottom: none; }
.feature-list li i { color: #00f0ff; margin-top: 4px; flex-shrink: 0; font-size: 0.84rem; }
.detail-price-box {
  display: flex; justify-content: space-between; align-items: center; padding: 20px 22px;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(0, 102, 255, 0.04));
  border: 1px solid rgba(0, 240, 255, 0.14); border-radius: 17px;
}
.price-main .price-label { font-size: 0.73rem; color: rgba(0, 240, 255, 0.52); text-transform: uppercase; letter-spacing: 1.1px; display: block; margin-bottom: 5px; font-weight: 600; }
.price-main .price-value { font-size: clamp(1.7rem, 3.5vw, 2rem); font-weight: 950; font-family: 'Orbitron', monospace; color: #00f0ff; text-shadow: 0 0 22px rgba(0, 240, 255, 0.45); letter-spacing: -0.5px; }
.price-trend { padding: 9px 18px; border-radius: 22px; font-size: 0.87rem; font-weight: 800; font-family: 'Orbitron', monospace; letter-spacing: 0.3px; }
.price-trend.up { background: rgba(0, 255, 136, 0.14); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.28); }
.price-trend.down { background: rgba(255, 68, 68, 0.14); color: #ff4466; border:  1px solid rgba(255, 68, 68, 0.28); }

/* 价格走势弹窗 (CPU) */
.price-chart-modal {
  width: 660px; max-height: 87vh;
  background: linear-gradient(162deg, rgba(8, 15, 30, 0.978), rgba(3, 8, 18, 0.985));
  border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 26px;
  overflow-y: auto; position: relative;
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.65), 0 0 70px rgba(0, 240, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.chart-header { padding: 30px 30px 18px; text-align: center; border-bottom: 1px solid rgba(0, 240, 255, 0.09); }
.chart-header h2 { font-size: 1.35rem; font-weight: 850; color: #fff; display: flex; align-items: center; justify-content: center; gap: 11px; margin-bottom: 7px; letter-spacing: 0.2px; }
.chart-header h2 i { color: #00f0ff; }
.chart-subtitle { font-size: 0.85rem; color: rgba(0, 240, 255, 0.52); letter-spacing: 0.15px; }
.chart-body { padding: 26px 30px 30px; }
.chart-visual { position: relative; height: 270px; margin-bottom: 26px; }
.chart-bars { display: flex; align-items: flex-end; justify-content: space-around; height: 230px; padding: 0 12px; position: relative; z-index: 2; }
.chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 7px; flex: 1; max-width: 74px; }
.chart-bar {
  width: 100%; max-width: 46px; border-radius: 9px 9px 4px 4px; min-height: 22px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); cursor: pointer;
}
.chart-bar:hover { filter: brightness(1.25); transform: scaleX(1.06) scaleY(1.03); }
.bar-price { font-size: 0.74rem; font-weight: 800; font-family: 'Orbitron', monospace; color: #00f0ff; opacity: 0; transform: translateY(-5px); transition: all 0.35s ease; letter-spacing: 0.2px; }
.chart-bar-wrapper:hover .bar-price { opacity: 1; transform: translateY(0); }
.bar-month { font-size: 0.73rem; color: rgba(255, 255, 255, 0.42); font-weight: 650; letter-spacing: 0.3px; }
.chart-line-overlay { position: absolute; bottom: 32px; left: 0; right: 0; height: 208px; pointer-events: none; z-index: 1; }
.chart-line-overlay svg { width: 100%; height: 100%; }
.chart-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }
.stat-item { background: rgba(0, 240, 255, 0.045); border: 1px solid rgba(0, 240, 255, 0.09); border-radius: 15px; padding: 16px 12px; text-align: center; transition: all 0.3s ease; }
.stat-item:hover { background: rgba(0, 240, 255, 0.08); border-color: rgba(0, 240, 255, 0.2); transform: translateY(-2px); }
.stat-label { display: block; font-size: 0.71rem; color: rgba(0, 240, 255, 0.46); text-transform: uppercase; letter-spacing: 1.1px; margin-bottom: 7px; font-weight: 600; }
.stat-val { display: block; font-size: 1.08rem; font-weight: 850; font-family: 'Orbitron', monospace; color: #e0f8ff; letter-spacing: -0.2px; }
.stat-val.high { color: #ff4466; } .stat-val.low { color: #00ff88; } .stat-val.avg { color: #00f0ff; }
.stat-val.up { color: #00ff88; } .stat-val.down { color: #ff4466; }
.chart-tip {
  display: flex; align-items: center; gap: 9px; padding: 14px 18px;
  background: rgba(0, 240, 255, 0.035); border: 1px solid rgba(0, 240, 255, 0.07); border-radius: 12px;
  font-size: 0.76rem; color: rgba(255, 255, 255, 0.37); line-height: 1.55; letter-spacing: 0.15px;
}
.chart-tip i { color: rgba(0, 240, 255, 0.43); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1); }
.modal-fade-enter-from .product-modal-overlay, .modal-fade-leave-to .product-modal-overlay { opacity: 0; }
.modal-fade-enter-from .product-detail-modal, .modal-fade-leave-to .product-detail-modal,
.modal-fade-enter-from .price-chart-modal, .modal-fade-leave-to .price-chart-modal { transform: scale(0.91) translateY(24px); opacity: 0; }
.product-detail-modal::-webkit-scrollbar, .price-chart-modal::-webkit-scrollbar { width: 6px; }
.product-detail-modal::-webkit-scrollbar-track, .price-chart-modal::-webkit-scrollbar-track { background: transparent; }
.product-detail-modal::-webkit-scrollbar-thumb, .price-chart-modal::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00f0ff, #0066ff); border-radius: 3px; }
</style>