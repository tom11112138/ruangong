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
          <span>内存 RAM</span>
        </div>
        <h1 class="page-title">
          <span class="icon memory-icon"><i class="fas fa-memory"></i></span>
          内存 RAM
        </h1>
        <p class="page-subtitle">Random Access Memory - 计算机的高速数据通道</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content animate-slide-left">
            <h2>什么是内存？</h2>
            <p>
              随机存取存储器（RAM）是计算机系统中的临时数据存储设备，用于存放正在运行的程序和数据。
              与硬盘不同，RAM的读写速度极快，但断电后数据会丢失。
            </p>
            <p>
              现代计算机主要使用DDR（双倍数据速率）内存，目前主流是DDR4和DDR5。
              内存容量和频率直接影响系统的多任务处理能力和响应速度。
            </p>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="value">DDR5</span>
                <span class="label">最新标准</span>
              </div>
              <div class="intro-stat">
                <span class="value">128GB</span>
                <span class="label">最大容量</span>
              </div>
              <div class="intro-stat">
                <span class="value">8000MHz</span>
                <span class="label">最高频率</span>
              </div>
            </div>
          </div>
          <div class="intro-visual animate-slide-right">
            <div class="memory-animation">
              <div class="memory-module" v-for="i in 2" :key="i">
                <div class="chip" v-for="j in 8" :key="j"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2>内存发展历史</h2>
          <p>从SIMM到DDR5，内存技术的演进之路</p>
        </div>
        
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(event, index) in memoryHistory" 
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
          <p>了解内存的关键技术指标</p>
        </div>
        
        <div class="params-grid">
          <div class="param-card" v-for="param in memoryParams" :key="param.name">
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

    <section class="ddr-comparison">
      <div class="container">
        <div class="section-header">
          <h2>DDR4 vs DDR5</h2>
          <p>两代内存标准对比</p>
        </div>
        
        <div class="comparison-table">
          <div class="table-header">
            <div class="table-cell">参数</div>
            <div class="table-cell">DDR4</div>
            <div class="table-cell">DDR5</div>
          </div>
          <div class="table-row" v-for="row in ddrComparison" :key="row.param">
            <div class="table-cell param-name">{{ row.param }}</div>
            <div class="table-cell">{{ row.ddr4 }}</div>
            <div class="table-cell highlight">{{ row.ddr5 }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="brands-section">
      <div class="container">
        <div class="section-header">
          <h2>主流品牌</h2>
          <p>全球知名内存制造商</p>
        </div>
        
        <div class="brands-grid">
          <div class="brand-card" v-for="brand in memoryBrands" :key="brand.name">
            <div class="brand-icon">
              <i :class="brand.icon"></i>
            </div>
            <h3>{{ brand.name }}</h3>
            <p>{{ brand.description }}</p>
            <div class="brand-features">
              <span v-for="feature in brand.features" :key="feature">{{ feature }}</span>
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
            v-for="type in ['全部', 'DDR4', 'DDR5']" 
            :key="type"
            :class="['filter-btn', { active: activeFilter === type }]"
            @click="activeFilter = type"
          >
            {{ type }}
          </button>
        </div>
        
        <div class="products-grid">
          <div 
            class="product-card" 
            v-for="(product, index) in filteredProducts" 
            :key="product.name"
            :class="[product.type.toLowerCase(), 'animate-fade-up']"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <!-- 卡片顶部装饰 -->
            <div class="card-glow" :class="product.type.toLowerCase()"></div>
            
            <!-- 产品头部 -->
            <div class="product-header">
              <div class="product-brand-badge" :class="product.type.toLowerCase()">
                <i class="fas fa-memory"></i>
                <span>{{ product.type }}</span>
              </div>
              <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            </div>

            <!-- 产品名称 -->
            <h3 class="product-name">{{ product.name }}</h3>
            
            <!-- 核心参数网格 -->
            <div class="product-specs">
              <div class="spec-item highlight">
                <div class="spec-icon">
                  <i class="fas fa-database"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.capacity }}</span>
                  <span class="spec-label">容量大小</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.frequency }}</span>
                  <span class="spec-label">运行频率</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">CL{{ product.cas }}</span>
                  <span class="spec-label">时序延迟</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-value">{{ product.voltage }}V</span>
                  <span class="spec-label">工作电压</span>
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
            <div class="card-bottom-line" :class="product.type.toLowerCase()"></div>
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
            <div class="detail-header" :class="selectedProduct?.type?.toLowerCase()">
              <div class="detail-brand-badge" :class="selectedProduct?.type?.toLowerCase()"><i class="fas fa-memory"></i> {{ selectedProduct?.type }}</div>
              <h2>{{ selectedProduct?.name }}</h2>
              <p class="detail-subtitle">{{ selectedProduct?.badge || '高性能内存' }}</p>
            </div>
            <div class="detail-body">
              <div class="detail-specs-grid">
                <div class="detail-spec-card"><i class="fas fa-database"></i><span class="spec-num">{{ selectedProduct?.capacity }}</span><span class="spec-name">容量大小</span></div>
                <div class="detail-spec-card"><i class="fas fa-tachometer-alt"></i><span class="spec-num">{{ selectedProduct?.frequency }}</span><span class="spec-name">运行频率</span></div>
                <div class="detail-spec-card highlight"><i class="fas fa-clock"></i><span class="spec-num">CL{{ selectedProduct?.cas }}</span><span class="spec-name">时序延迟</span></div>
                <div class="detail-spec-card"><i class="fas fa-bolt"></i><span class="spec-num">{{ selectedProduct?.voltage }}V</span><span class="spec-name">工作电压</span></div>
              </div>
              <div class="detail-info-section">
                <h3><i class="fas fa-star"></i> 产品亮点</h3>
                <ul class="feature-list">
                  <li v-for="(feat, idx) in getProductFeatures(selectedProduct)" :key="idx"><i class="fas fa-check-circle"></i> {{ feat }}</li>
                </ul>
              </div>
              <div class="detail-price-box">
                <div class="price-main"><span class="price-label">参考售价</span><span class="price-value">¥{{ selectedProduct?.price?.toLocaleString() }}</span></div>
                <div class="price-trend" :class="selectedProduct?.priceChange > 0 ? 'up' : 'down'"><i :class="selectedProduct?.priceChange > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i> 较上月 {{ Math.abs(selectedProduct?.priceChange || 0) }}%</div>
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
            <div class="chart-header"><h2><i class="fas fa-chart-line"></i> 价格走势</h2><p class="chart-subtitle">{{ selectedProduct?.name }} · 近6个月价格变化</p></div>
            <div class="chart-body">
              <div class="chart-visual">
                <div class="chart-bars">
                  <div class="chart-bar-wrapper" v-for="(item, idx) in priceHistoryData" :key="idx">
                    <div class="chart-bar" :style="{ height: item.height + '%', background: item.change >= 0 ? 'linear-gradient(180deg, #ffcc00, #ff9900)' : 'linear-gradient(180deg, #ff4466, #cc2244)' }"></div>
                    <span class="bar-price">¥{{ item.price }}</span><span class="bar-month">{{ item.month }}</span>
                  </div>
                </div>
                <div class="chart-line-overlay"><svg viewBox="0 0 600 200" preserveAspectRatio="none">
                  <polyline :points="chartLinePoints" fill="none" stroke="#ffcc00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polygon :points="chartAreaPoints" fill="url(#memChartGradient)" opacity="0.15"/><defs><linearGradient id="memChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffcc00" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffcc00" stop-opacity="0"/>
                  </linearGradient></defs></svg></div>
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
          <p>如何选择适合自己的内存</p>
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
  name: 'Memory',
  setup() {
    const activeFilter = ref('全部')
    const selectedEvent = ref(null)

    const memoryHistory = [
      {
        year: '1983',
        title: 'SIMM内存',
        description: '单列直插内存模块，早期个人电脑的标准内存',
        specs: ['30pin', '8位数据', '最大16MB'],
        details: {
          innovation: 'SIMM（Single Inline Memory Module）是早期PC的标准内存接口，采用30针脚设计，数据宽度为8位。它的出现使得内存升级变得简单。',
          impact: 'SIMM确立了内存模块化的标准概念，为后续的DIMM设计奠定了基础。早期的286/386/486电脑都使用SIMM内存。',
          features: [
            '30针脚接口',
            '8位数据宽度',
            'FPM (Fast Page Mode)',
            '需要成对安装(386以上)'
          ],
          specs: {
            '接口': '30pin SIMM',
            '数据宽度': '8位',
            '容量范围': '256KB-16MB',
            '电压': '5V',
            '速度': '60-70ns',
            '类型': 'FPM DRAM'
          },
          trivia: '早期486电脑通常有4个SIMM插槽，必须成对安装才能获得32位性能！'
        }
      },
      {
        year: '1990',
        title: '72pin SIMM',
        description: '扩展数据总线至32位，支持更大容量',
        specs: ['72pin', '32位数据', '最大64MB'],
        details: {
          innovation: '72针SIMM将数据总线扩展到32位，单条内存即可满足486/Pentium的需求，无需再成对安装。',
          impact: '简化了内存安装流程，为Pentium时代的到来做好了准备。EDO RAM技术也在此时期开始普及。',
          features: [
            '72针脚接口',
            '32位数据宽度',
            'EDO (Extended Data Out)',
            '单条即可满带宽'
          ],
          specs: {
            '接口': '72pin SIMM',
            '数据宽度': '32位',
            '容量范围': '4-64MB',
            '电压': '5V',
            '速度': '50-60ns',
            '类型': 'EDO/FPM DRAM'
          },
          trivia: 'Pentium 66MHz时代，64MB内存已经是"天文数字"，价格高达数千元！'
        }
      },
      {
        year: '1996',
        title: 'SDRAM',
        description: '同步动态随机存取存储器，与系统总线同步',
        specs: ['168pin', '66-133MHz', 'PC66/100/133'],
        details: {
          innovation: 'SDRAM（Synchronous DRAM）与系统时钟同步工作，消除了异步等待时间，大幅提升效率。采用168针DIMM双列直插封装。',
          impact: 'SDRAM的出现让内存频率首次突破100MHz大关，为3D游戏和多媒体应用提供了足够的带宽。',
          features: [
            '168针 DIMM封装',
            '与CPU总线同步',
            '突发传输模式(Burst Mode)',
            '支持ECC纠错'
          ],
          specs: {
            '接口': '168pin DIMM',
            '数据宽度': '64位',
            '标准': 'PC66/PC100/PC133',
            '电压': '3.3V',
            '最大容量': '512MB/条',
            '带宽': '0.8-1.06GB/s'
          },
          trivia: 'PC133 SDRAM曾是"超频神器"，好的PC133可以轻松跑在150MHz+！'
        }
      },
      {
        year: '2000',
        title: 'DDR SDRAM',
        description: '双倍数据速率，每个时钟周期传输两次数据',
        specs: ['184pin', '200-400MHz', 'DDR200-400'],
        details: {
          innovation: 'DDR（Double Data Rate）在每个时钟周期的上升沿和下降沿都传输数据，等效频率翻倍但实际运行频率不变。',
          impact: 'DDR让内存带宽翻倍，为Pentium 4和Athlon XP等高频CPU提供了足够的数据供应。',
          features: [
            '184针 DIMM封装',
            '双边沿触发',
            '2倍预取(2n prefetch)',
            '差分时钟信号'
          ],
          specs: {
            '接口': '184pin DIMM',
            '数据宽度': '64位',
            '标准': 'DDR200/266/333/400',
            '实际频率': '100-200MHz',
            '电压': '2.5V',
            '带宽': '1.6-3.2GB/s'
          },
          trivia: 'DDR400曾被称为"终极SDRAM"，直到DDR2出现才被取代！'
        }
      },
      {
        year: '2004',
        title: 'DDR2',
        description: '4倍数据速率，更低功耗，更高频率',
        specs: ['240pin', '400-1066MHz', '1.8V'],
        details: {
          innovation: 'DDR2将预取从2bit提升到4bit，进一步降低功耗和提高频率上限。采用240针新接口，不兼容DDR1。',
          impact: 'DDR2成为Core 2 Duo时代的标配内存，配合Intel的前端总线架构发挥最佳性能。',
          features: [
            '240针 DIMM封装',
            '4倍预取(4n prefetch)',
            'ODT片上终结',
            'Post-CAS延迟优化'
          ],
          specs: {
            '接口': '240pin DIMM',
            '数据宽度': '64位',
            '标准': 'DDR2-400/533/667/800/1066',
            '电压': '1.8V',
            '最大容量': '4GB/条',
            '带宽': '3.2-8.5GB/s'
          },
          trivia: 'DDR2-1066是官方最高规格，但超频玩家可以跑到DDR2-1200+！'
        }
      },
      {
        year: '2007',
        title: 'DDR3',
        description: '8倍数据速率，更低电压，更大容量',
        specs: ['240pin', '800-2133MHz', '1.5V'],
        details: {
          innovation: 'DDR3将预取提升到8bit，电压降至1.5V，引入了自动自刷新(ASR)和ZQ校准等技术。',
          impact: 'DDR3伴随Core i系列处理器诞生，从2007年一直使用到2020年代，是最长寿的内存标准之一。',
          features: [
            '240针 DIMM封装',
            '8倍预取(8n prefetch)',
            '1.5V低电压',
            'XMP超频配置文件'
          ],
          specs: {
            '接口': '240pin DIMM',
            '数据宽度': '64位',
            '标准': 'DDR3-800/1333/1600/1866/2133',
            '电压': '1.5V (1.35V DDR3L)',
            '最大容量': '16GB/条',
            '带宽': '6.4-17GB/s'
          },
          trivia: 'DDR3-1600被称为"甜点频率"，性价比最佳，至今仍是主流选择之一！'
        }
      },
      {
        year: '2014',
        title: 'DDR4',
        description: '更高频率，更低功耗，支持更大容量',
        specs: ['288pin', '2133-3200MHz', '1.2V'],
        details: {
          innovation: 'DDR4引入了Bank Group架构降低延迟，电压降至1.2V，采用288针新接口。单条容量可达32GB甚至更高。',
          impact: 'DDR4是当前最主流的内存标准，配合第6-13代酷睿和Ryzen处理器广泛使用。',
          features: [
            '288针 DIMM封装',
            'Bank Group分组',
            '1.2V超低电压',
            'XMP 2.0配置'
          ],
          specs: {
            '接口': '288pin DIMM',
            '数据宽度': '64位',
            '标准': 'DDR4-2133/2400/2666/3000/3200/3600/4000+',
            '电压': '1.2V',
            '最大容量': '128GB/条 (RDIMM)',
            '带宽': '17-51GB/s'
          },
          trivia: 'DDR4-3600被认为是Ryzen处理器的"甜点频率"，时序CL18左右最佳！'
        }
      },
      {
        year: '2020',
        title: 'DDR5',
        description: '新一代标准，双倍带宽，片上ECC',
        specs: ['288pin', '4800-8000MHz', '1.1V'],
        details: {
          innovation: 'DDR5将预取提升到16bit，每个通道独立管理电源，内置PMIC电源管理芯片，原生支持ECC纠错。',
          impact: 'DDR5配合12/13代酷睿和Zen 4架构，为未来高带宽需求做好准备，单通道带宽即超过DDR4双通道。',
          features: [
            '288pin DIMM封装',
            '16倍预取(16n prefetch)',
            '1.1V极低电压',
            '内置PMIC电源管理',
            '片上ECC (On-die ECC)'
          ],
          specs: {
            '接口': '288pin DIMM',
            '数据宽度': '64位 (每通道40bit)',
            '标准': 'DDR5-4800/5200/5600/6000/6400/7200/8000+',
            '电压': '1.1V',
            '最大容量': '256GB/条 (规划中)',
            '带宽': '38.4-64GB/s per channel'
          },
          trivia: 'DDR5首发价格昂贵，但现在DDR5-6000已经降至合理价位，性价比超越高端DDR4！'
        }
      }
    ]

    const showDetail = (event) => {
      selectedEvent.value = event
    }

    const memoryParams = [
      {
        name: '容量',
        icon: 'fas fa-database',
        description: '内存总容量，决定可同时运行的程序数量',
        importance: 95,
        gradient: 'linear-gradient(135deg, #ffff00 0%, #ff6600 100%)'
      },
      {
        name: '频率',
        icon: 'fas fa-tachometer-alt',
        description: '内存工作频率，影响数据传输速度',
        importance: 90,
        gradient: 'linear-gradient(135deg, #00f0ff 0%, #0066ff 100%)'
      },
      {
        name: '时序',
        icon: 'fas fa-clock',
        description: 'CAS延迟等时序参数，影响响应延迟',
        importance: 85,
        gradient: 'linear-gradient(135deg, #ff00ff 0%, #8b00ff 100%)'
      },
      {
        name: '带宽',
        icon: 'fas fa-road',
        description: '数据传输速率，频率×位宽计算',
        importance: 88,
        gradient: 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)'
      },
      {
        name: '通道数',
        icon: 'fas fa-layer-group',
        description: '双通道/四通道配置，提升总带宽',
        importance: 82,
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'
      },
      {
        name: '电压',
        icon: 'fas fa-bolt',
        description: '工作电压，影响功耗和发热',
        importance: 70,
        gradient: 'linear-gradient(135deg, #a55eea 0%, #45aaf2 100%)'
      }
    ]

    const ddrComparison = [
      { param: '标准频率', ddr4: '2133-3200MHz', ddr5: '4800-8000MHz' },
      { param: '工作电压', ddr4: '1.2V', ddr5: '1.1V' },
      { param: '最大容量', ddr4: '128GB/模组', ddr5: '256GB/模组' },
      { param: '突发长度', ddr4: '8', ddr5: '16' },
      { param: '片上ECC', ddr4: '不支持', ddr5: '支持' },
      { param: '电源管理', ddr4: '主板', ddr5: '模组内置' },
      { param: '通道架构', ddr4: '单64位', ddr5: '双32位' }
    ]

    const memoryBrands = [
      {
        name: 'Corsair 美商海盗船',
        icon: 'fas fa-ship',
        description: '高端内存领导者，Vengeance系列闻名',
        features: ['DOMINATOR', 'Vengeance', 'RGB PRO']
      },
      {
        name: 'G.SKILL 芝奇',
        icon: 'fas fa-fire',
        description: '超频内存专家，Trident系列备受推崇',
        features: ['Trident Z', 'Ripjaws', '超频记录']
      },
      {
        name: 'Kingston 金士顿',
        icon: 'fas fa-crown',
        description: '全球最大内存模组制造商',
        features: ['FURY', 'ValueRAM', 'HyperX']
      },
      {
        name: 'Crucial 英睿达',
        icon: 'fas fa-gem',
        description: 'Micron旗下品牌，原厂颗粒',
        features: ['Ballistix', '原厂颗粒', '高性价比']
      }
    ]

    const products = [
      {
        name: '芝奇 Trident Z5 RGB DDR5-6400',
        type: 'DDR5',
        capacity: '32GB (16GB×2)',
        frequency: '6400MHz',
        cas: 32,
        voltage: 1.4,
        price: 1299,
        priceChange: -5.2,
        badge: '高端'
      },
      {
        name: '海盗船 Vengeance DDR5-5600',
        type: 'DDR5',
        capacity: '32GB (16GB×2)',
        frequency: '5600MHz',
        cas: 36,
        voltage: 1.25,
        price: 899,
        priceChange: -3.8,
        badge: '热门'
      },
      {
        name: '金士顿 FURY Beast DDR5-5200',
        type: 'DDR5',
        capacity: '32GB (16GB×2)',
        frequency: '5200MHz',
        cas: 40,
        voltage: 1.25,
        price: 799,
        priceChange: -2.1
      },
      {
        name: '英睿达 DDR5-4800',
        type: 'DDR5',
        capacity: '32GB (16GB×2)',
        frequency: '4800MHz',
        cas: 40,
        voltage: 1.1,
        price: 699,
        priceChange: -4.5,
        badge: '性价比'
      },
      {
        name: '芝奇 Trident Z RGB DDR4-3600',
        type: 'DDR4',
        capacity: '32GB (16GB×2)',
        frequency: '3600MHz',
        cas: 18,
        voltage: 1.35,
        price: 599,
        priceChange: -8.2
      },
      {
        name: '海盗船 Vengeance LPX DDR4-3200',
        type: 'DDR4',
        capacity: '32GB (16GB×2)',
        frequency: '3200MHz',
        cas: 16,
        voltage: 1.35,
        price: 449,
        priceChange: -6.5
      }
    ]

    const buyingTips = [
      {
        icon: 'fas fa-gamepad',
        title: '游戏玩家',
        content: '16GB起步，推荐32GB DDR5-5600，时序CL36左右即可'
      },
      {
        icon: 'fas fa-video',
        title: '视频剪辑',
        content: '32GB起步，64GB更佳，DDR5高频率提升渲染效率'
      },
      {
        icon: 'fas fa-code',
        title: '程序员',
        content: '虚拟机和容器用户建议64GB，编译速度与内存频率正相关'
      },
      {
        icon: 'fas fa-server',
        title: '服务器/工作站',
        content: '128GB或更高容量，选择带ECC的内存确保数据安全'
      }
    ]

    const filteredProducts = computed(() => {
      if (activeFilter.value === '全部') return products
      return products.filter(p => p.type === activeFilter.value)
    })

    const selectedProduct = ref(null)
    const showProductDetail = ref(false)
    const showPriceChart = ref(false)
    const openProductDetail = (product) => { selectedProduct.value = product; showProductDetail.value = true; document.body.style.overflow = 'hidden' }
    const openPriceChart = (product) => { selectedProduct.value = product; showPriceChart.value = true; document.body.style.overflow = 'hidden' }

    const getProductFeatures = (product) => {
      if (!product) return []
      const features = []
      if (product.type === 'DDR5') features.push('DDR5新一代内存标准，带宽翻倍，延迟更低')
      if (product.type === 'DDR4') features.push('DDR4成熟方案，性价比出色，兼容性广泛')
      if (parseInt(product.frequency) >= 6000) features.push(`超高频${product.frequency}，极致性能释放`)
      if (parseInt(product.frequency) >= 4800 && parseInt(product.frequency) < 6000) features.push(`${product.frequency}高频设计，游戏与生产力兼顾`)
      if (product.cas <= 30) features.push(`低时序CL${product.cas}，响应速度极快`)
      if (product.voltage <= 1.25) features.push(`低电压(${product.voltage}V)设计，功耗与发热控制优秀`)
      if (product.capacity.includes('64')) features.push('大容量配置，多任务/虚拟机用户首选')
      if (product.price < 500) features.push('价格亲民，入门装机优选')
      if (product.price > 800) features.push('高端定位，面向发烧友与专业用户')
      if (features.length < 3) features.push('市场热销型号，品质稳定可靠')
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
        const allPrices = [...Array(idx).fill(0).map(() => Math.round(basePrice * (0.9 + Math.random() * 0.15))), price]
        const maxP = Math.max(basePrice * 1.15, ...allPrices), minP = Math.min(basePrice * 0.8, ...allPrices)
        return { month, price, change, height: ((price - minP) / (maxP - minP + 1)) * 75 + 20 }
      })
    })

    const chartLinePoints = computed(() => {
      if (!priceHistoryData.value.length) return ''
      const w = 600 / (priceHistoryData.value.length - 1)
      return priceHistoryData.value.map((d, i) => `${i * w},${200 - d.height * 1.8}`).join(' ')
    })
    const chartAreaPoints = computed(() => chartLinePoints.value ? `0,200 ${chartLinePoints.value} 600,200` : '')
    const priceStats = computed(() => {
      if (!priceHistoryData.value.length) return { max: 0, min: 0, avg: 0, volatility: 0 }
      const prices = priceHistoryData.value.map(d => d.price)
      const max = Math.max(...prices), min = Math.min(...prices), avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
      const volatility = (((prices[prices.length - 1] - prices[0]) / prices[0]) * 100).toFixed(1)
      return { max: max.toLocaleString(), min: min.toLocaleString(), avg: avg.toLocaleString(), volatility }
    })

    return {
      activeFilter,
      selectedEvent,
      memoryHistory,
      memoryParams,
      ddrComparison,
      memoryBrands,
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
/* Memory 专用样式 */

.memory-icon {
  background: linear-gradient(135deg, #ffff00 0%, #ff6600 100%) !important;
}

.memory-animation {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.memory-module {
  width: 300px;
  height: 40px;
  background: linear-gradient(90deg, #1a1a2e 0%, #0f0f1a 100%);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 5px;
  animation: slideInRight 0.8s ease forwards;
}

.memory-module:nth-child(2) {
  animation-delay: 0.2s;
}

.chip {
  flex: 1;
  height: 100%;
  background: var(--gradient-cyber);
  border-radius: 3px;
  animation: chipPulse 1.5s ease-in-out infinite;
}

@keyframes chipPulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.ddr-comparison {
  padding: 100px 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.02) 50%, transparent 100%);
}

.comparison-table {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 15px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgba(0, 240, 255, 0.1);
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.table-row:hover {
  background: rgba(0, 240, 255, 0.05);
}

.table-cell {
  padding: 20px;
  text-align: center;
}

.table-cell.param-name {
  text-align: left;
  font-weight: 500;
  color: var(--text-primary);
}

.table-header .table-cell {
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  color: var(--primary-color);
}

.table-cell.highlight {
  color: var(--primary-color);
  font-weight: 500;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.brand-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.brand-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 240, 255, 0.15);
}

.brand-icon {
  width: 70px;
  height: 70px;
  background: var(--gradient-cyber);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--bg-dark);
  margin: 0 auto 20px;
}

.brand-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.brand-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.brand-features span {
  padding: 5px 12px;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--primary-color);
}

.product-card.ddr5 {
  border-color: rgba(255, 0, 255, 0.3);
}

.product-card.ddr5:hover {
  border-color: #ff00ff;
}

.product-card.ddr4 {
  border-color: rgba(0, 240, 255, 0.3);
}

.product-card.ddr4:hover {
  border-color: #00f0ff;
}

/* 时间线卡片点击效果 */
.timeline-card {
  background: var(--bg-card);
  border: 1px solid rgba(255, 204, 0, 0.2);
  border-radius: 15px;
  padding: 25px;
  margin-left: 20px;
  transition: all 0.3s ease;
  cursor: default;
}

.timeline-card.clickable {
  cursor: pointer;
}

.timeline-card.clickable:hover {
  border-color: #ffcc00;
  box-shadow: 0 10px 40px rgba(255, 204, 0, 0.25), 0 0 30px rgba(255, 153, 0, 0.1) inset;
  transform: translateX(15px) scale(1.02);
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.05) 0%, rgba(255, 102, 0, 0.03) 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.view-detail {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  background: rgba(255, 204, 0, 0.15);
  border: 1px solid rgba(255, 204, 0, 0.4);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #ffcc00;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.timeline-card.clickable:hover .view-detail {
  opacity: 1;
  transform: translateX(0);
}

/* 详情弹窗样式 */
.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.detail-modal {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
  border: 1px solid rgba(255, 204, 0, 0.4);
  border-radius: 25px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 30px 80px rgba(255, 204, 0, 0.35),
    0 0 60px rgba(255, 102, 0, 0.12) inset,
    0 0 120px rgba(255, 153, 0, 0.05);
  animation: modalSlideIn 0.4s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.95);
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
  width: 40px;
  height: 40px;
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid rgba(255, 68, 68, 0.3);
  border-radius: 50%;
  color: #ff4444;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 68, 68, 0.2);
  border-color: #ff4444;
  transform: rotate(90deg);
  box-shadow: 0 0 20px rgba(255, 68, 68, 0.3);
}

.modal-header {
  padding: 40px 35px 30px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 204, 0, 0.08) 0%, transparent 100%);
  border-bottom: 1px solid rgba(255, 204, 0, 0.2);
  position: relative;
}

.modal-year-badge {
  display: inline-block;
  padding: 8px 24px;
  background: linear-gradient(135deg, #ffff00 0%, #ff6600 50%, #ff3300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
}

.modal-year-badge::before {
  content: '';
  position: absolute;
  inset: -5px -10px;
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.25), rgba(255, 102, 0, 0.25));
  border-radius: 10px;
  z-index: -1;
}

.modal-header h2 {
  font-size: 2rem;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #ffcc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

.modal-body {
  padding: 30px 35px;
}

.detail-section {
  margin-bottom: 28px;
}

.detail-section h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #ffcc00;
  font-weight: 600;
}

.detail-section h3 i {
  font-size: 1rem;
  opacity: 0.7;
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
  padding-left: 26px;
}

.detail-section ul {
  list-style: none;
  padding-left: 26px;
}

.detail-section li {
  position: relative;
  color: var(--text-secondary);
  line-height: 1.9;
  font-size: 0.95rem;
  padding-left: 18px;
  margin-bottom: 6px;
}

.detail-section li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #ffcc00;
  font-weight: bold;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.spec-card {
  background: rgba(255, 204, 0, 0.06);
  border: 1px solid rgba(255, 204, 0, 0.25);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.spec-card:hover {
  background: rgba(255, 204, 0, 0.12);
  border-color: #ffcc00;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 204, 0, 0.18);
}

.spec-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-value {
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffcc00;
}

.modal-footer {
  padding: 25px 35px 35px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 204, 0, 0.15);
}

.action-btn.primary {
  background: linear-gradient(135deg, #ffcc00 0%, #ff6600 100%);
  border: none;
  color: #0a0a0f;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 204, 0, 0.45);
}

/* 弹窗动画 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .detail-modal,
.modal-fade-leave-to .detail-modal {
  transform: translateY(-30px) scale(0.95);
}

/* 滚动条样式 */
.detail-modal::-webkit-scrollbar {
  width: 6px;
}

.detail-modal::-webkit-scrollbar-track {
  background: rgba(255, 204, 0, 0.05);
  border-radius: 3px;
}

.detail-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ffcc00 0%, #ff6600 100%);
  border-radius: 3px;
}

/* Memory 产品卡片 - 优化版 (金黄主题) */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
}

.product-card {
  position: relative;
  background: linear-gradient(145deg, rgba(20, 20, 35, 0.95) 0%, rgba(15, 15, 26, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ffcc00, transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover::before {
  opacity: 1;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 30px 60px rgba(255, 204, 0, 0.18),
    0 0 40px rgba(255, 204, 0, 0.08) inset,
    0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, var(--glow-color, rgba(255, 204, 0, 0.08)) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.product-card:hover .card-glow {
  opacity: 1;
}

.card-glow.ddr5 { --glow-color: rgba(255, 0, 255, 0.12); }
.card-glow.ddr4 { --glow-color: rgba(0, 240, 255, 0.12); }

.product-card.ddr5 {
  border-color: rgba(255, 0, 255, 0.2);
}

.product-card.ddr5:hover {
  border-color: rgba(255, 0, 255, 0.5);
  box-shadow: 
    0 30px 60px rgba(255, 0, 255, 0.22),
    0 0 40px rgba(255, 0, 255, 0.1) inset;
}

.product-card.ddr4 {
  border-color: rgba(0, 240, 255, 0.2);
}

.product-card.ddr4:hover {
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 
    0 30px 60px rgba(0, 240, 255, 0.22),
    0 0 40px rgba(0, 240, 255, 0.1) inset;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.product-brand-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.product-brand-badge.ddr5 {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.25), rgba(220, 0, 180, 0.15));
  color: #ff00ff;
  border: 1px solid rgba(255, 0, 255, 0.35);
}

.product-brand-badge.ddr4 {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(0, 200, 220, 0.15));
  color: #00f0ff;
  border: 1px solid rgba(0, 240, 255, 0.35);
}

.product-brand-badge i {
  font-size: 1rem;
}

.product-badge {
  padding: 6px 14px;
  background: linear-gradient(135deg, #ffcc00 0%, #ff9900 100%);
  border-radius: 16px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0a0a0f;
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.45);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 4px 15px rgba(255, 204, 0, 0.45); }
  50% { box-shadow: 0 4px 25px rgba(255, 204, 0, 0.65); }
}

.product-name {
  font-size: 1.25rem;
  font-weight: 800;
  margin: 14px 0 18px;
  background: linear-gradient(135deg, #ffffff 0%, #ffcc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.35;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
}

.product-name::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 50px;
  height: 2.5px;
  background: linear-gradient(90deg, #ffcc00, transparent);
  border-radius: 2px;
}

.product-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 0 28px 24px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(255, 204, 0, 0.06);
  transform: translateX(4px);
}

.spec-item.highlight {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.12), rgba(255, 153, 0, 0.06));
  border: 1px solid rgba(255, 204, 0, 0.2);
  grid-column: span 2;
}

.spec-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.18), rgba(255, 153, 0, 0.1));
  border-radius: 10px;
  flex-shrink: 0;
}

.spec-icon i {
  color: #ffcc00;
  font-size: 0.95rem;
}

.spec-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spec-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff8e8;
  letter-spacing: 0.3px;
}

.spec-label {
  font-size: 0.72rem;
  color: rgba(255, 204, 0, 0.5);
  letter-spacing: 1px;
  font-weight: 500;
}

.product-price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 28px 24px;
  padding: 20px 22px;
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.07), rgba(255, 153, 0, 0.03));
  border-radius: 16px;
  border: 1px solid rgba(255, 204, 0, 0.15);
}

.price-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price-label {
  font-size: 0.72rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.price-current {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.currency {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffcc00;
}

.amount {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffcc00 0%, #ff9900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.price-change-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
}

.price-change-badge.up {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 200, 100, 0.1));
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.25);
}

.price-change-badge.down {
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.15), rgba(200, 50, 50, 0.1));
  color: #ff4444;
  border: 1px solid rgba(255, 68, 68, 0.25);
}

.change-text {
  font-size: 0.75rem;
  opacity: 0.85;
}

.product-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 0.83rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  border: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.8px;
}

.action-btn i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.action-btn:hover i {
  transform: translateX(2px);
}

/* 主按钮 - 金色玻璃拟态 */
.action-btn.primary {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 153, 0, 0.15));
  color: #ffcc00;
  border: 1.5px solid rgba(255, 204, 0, 0.4);
  box-shadow:
    0 4px 18px rgba(255, 204, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.35), rgba(255, 153, 0, 0.25));
  border-color: rgba(255, 204, 0, 0.65);
  box-shadow:
    0 8px 32px rgba(255, 204, 0, 0.3),
    0 0 20px rgba(255, 204, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
}

.action-btn.primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 204, 0, 0.3), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
  z-index: 0;
}

.action-btn.primary:active::before {
  width: 280px;
  height: 280px;
}

.action-btn.primary span,
.action-btn.primary i {
  position: relative;
  z-index: 1;
}

/* 次要按钮 */
.action-btn.secondary {
  background: rgba(255, 204, 0, 0.05);
  color: rgba(255, 204, 0, 0.6);
  border: 1.5px solid rgba(255, 204, 0, 0.15);
  backdrop-filter: blur(4px);
}

.action-btn.secondary:hover {
  background: rgba(255, 204, 0, 0.12);
  color: #ffcc00;
  border-color: rgba(255, 204, 0, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 204, 0, 0.12);
}

.pulse-glow {
  animation: pulseGlow 2.5s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow:
      0 4px 18px rgba(255, 204, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  50% {
    box-shadow:
      0 4px 28px rgba(255, 204, 0, 0.4),
      0 0 40px rgba(255, 204, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }
}

.card-bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .card-bottom-line {
  opacity: 1;
}

.card-bottom-line.ddr5 {
  background: linear-gradient(90deg, #ff00ff, #ff66ff, #ff00ff);
}

.card-bottom-line.ddr4 {
  background: linear-gradient(90deg, #00f0ff, #66ffff, #00f0ff);
}

/* ========== 产品详情弹窗 (Memory-金色主题) ========== */
.product-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(10, 8, 5, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.product-detail-modal { width: 580px; max-height: 85vh; background: linear-gradient(160deg, rgba(25, 20, 10, 0.97), rgba(15, 12, 6, 0.98)); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 24px; overflow-y: auto; position: relative; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 204, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05); }
.modal-close-btn { position: absolute; top: 16px; right: 16px; width: 38px; height: 38px; border-radius: 50%; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; z-index: 10; color: rgba(255, 255, 255, 0.5); font-size: 0.9rem; }
.modal-close-btn:hover { background: rgba(255, 68, 68, 0.2); border-color: rgba(255, 68, 68, 0.4); color: #ff4466; transform: rotate(90deg); }
.detail-header { padding: 32px 28px 24px; text-align: center; position: relative; overflow: hidden; }
.detail-header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
.detail-header.ddr5::before { background: linear-gradient(90deg, #ff00ff, #ff66ff, #ff00ff); }
.detail-header.ddr4::before { background: linear-gradient(90deg, #00f0ff, #66ffff, #00f0ff); }
.detail-brand-badge { display: inline-flex; align-items: center; gap: 7px; padding: 6px 16px; border-radius: 20px; font-size: 0.78rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 14px; }
.detail-brand-badge.ddr5 { background: rgba(255, 0, 255, 0.2); color: #ff00ff; border: 1px solid rgba(255, 0, 255, 0.4); box-shadow: 0 0 20px rgba(255, 0, 255, 0.15); }
.detail-brand-badge.ddr4 { background: rgba(0, 240, 255, 0.2); color: #00f0ff; border: 1px solid rgba(0, 240, 255, 0.4); box-shadow: 0 0 20px rgba(0, 240, 255, 0.15); }
.detail-header h2 { font-size: 1.45rem; font-weight: 800; color: #fff; margin-bottom: 8px; letter-spacing: 0.5px; }
.detail-subtitle { font-size: 0.85rem; color: rgba(255, 204, 0, 0.6); font-weight: 500; }
.detail-body { padding: 0 28px 28px; }
.detail-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }
.detail-spec-card { background: rgba(255, 204, 0, 0.04); border: 1px solid rgba(255, 204, 0, 0.08); border-radius: 16px; padding: 18px 12px; text-align: center; transition: all 0.3s ease; }
.detail-spec-card:hover { background: rgba(255, 204, 0, 0.08); border-color: rgba(255, 204, 0, 0.2); transform: translateY(-3px); }
.detail-spec-card.highlight { background: linear-gradient(135deg, rgba(255, 204, 0, 0.1), rgba(255, 153, 0, 0.05)); border-color: rgba(255, 204, 0, 0.18); }
.detail-spec-card i { font-size: 1.3rem; color: #ffcc00; margin-bottom: 8px; display: block; }
.spec-num { display: block; font-size: 1.15rem; font-weight: 800; color: #fff; font-family: 'Orbitron', monospace; letter-spacing: 0.5px; }
.spec-name { display: block; font-size: 0.72rem; color: rgba(255, 204, 0, 0.5); margin-top: 4px; letter-spacing: 1px; text-transform: uppercase; }
.detail-info-section { margin-bottom: 24px; }
.detail-info-section h3 { font-size: 1rem; color: #ffcc00; margin-bottom: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
.detail-info-section h3 i { color: #fff; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li { padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.88rem; color: #fff8e8; display: flex; align-items: flex-start; gap: 10px; line-height: 1.55; }
.feature-list li:last-child { border-bottom: none; }
.feature-list li i { color: #ffcc00; margin-top: 3px; flex-shrink: 0; font-size: 0.82rem; }
.detail-price-box { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; background: linear-gradient(135deg, rgba(255, 204, 0, 0.07), rgba(255, 153, 0, 0.03)); border: 1px solid rgba(255, 204, 0, 0.12); border-radius: 16px; }
.price-main .price-label { font-size: 0.72rem; color: rgba(255, 204, 0, 0.5); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px; }
.price-main .price-value { font-size: 1.8rem; font-weight: 900; font-family: 'Orbitron', monospace; color: #ffcc00; text-shadow: 0 0 20px rgba(255, 204, 0, 0.4); }
.price-trend { padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; font-family: 'Orbitron', monospace; }
.price-trend.up { background: rgba(255, 68, 68, 0.12); color: #ff4466; border: 1px solid rgba(255, 68, 68, 0.25); }
.price-trend.down { background: rgba(0, 255, 136, 0.12); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.25); }

/* 价格走势弹窗 (Memory) */
.price-chart-modal { width: 640px; max-height: 85vh; background: linear-gradient(160deg, rgba(25, 20, 10, 0.97), rgba(15, 12, 6, 0.98)); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 24px; overflow-y: auto; position: relative; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 204, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05); }
.chart-header { padding: 28px 28px 16px; text-align: center; border-bottom: 1px solid rgba(255, 204, 0, 0.08); }
.chart-header h2 { font-size: 1.3rem; font-weight: 800; color: #fff; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 6px; }
.chart-header h2 i { color: #ffcc00; }
.chart-subtitle { font-size: 0.83rem; color: rgba(255, 204, 0, 0.5); }
.chart-body { padding: 24px 28px 28px; }
.chart-visual { position: relative; height: 260px; margin-bottom: 24px; }
.chart-bars { display: flex; align-items: flex-end; justify-content: space-around; height: 220px; padding: 0 10px; position: relative; z-index: 2; }
.chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; max-width: 70px; }
.chart-bar { width: 100%; max-width: 44px; border-radius: 8px 8px 4px 4px; min-height: 20px; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); cursor: pointer; }
.chart-bar:hover { filter: brightness(1.2); transform: scaleX(1.05); }
.bar-price { font-size: 0.72rem; font-weight: 700; font-family: 'Orbitron', monospace; color: #ffcc00; opacity: 0; transform: translateY(-4px); transition: all 0.3s ease; }
.chart-bar-wrapper:hover .bar-price { opacity: 1; transform: translateY(0); }
.bar-month { font-size: 0.72rem; color: rgba(255, 255, 255, 0.4); font-weight: 600; }
.chart-line-overlay { position: absolute; bottom: 30px; left: 0; right: 0; height: 200px; pointer-events: none; z-index: 1; }
.chart-line-overlay svg { width: 100%; height: 100%; }
.chart-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
.stat-item { background: rgba(255, 204, 0, 0.04); border: 1px solid rgba(255, 204, 0, 0.08); border-radius: 14px; padding: 14px 10px; text-align: center; }
.stat-label { display: block; font-size: 0.7rem; color: rgba(255, 204, 0, 0.45); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
.stat-val { display: block; font-size: 1.05rem; font-weight: 800; font-family: 'Orbitron', monospace; color: #fff8e8; }
.stat-val.high { color: #ff4466; } .stat-val.low { color: #00ff88; } .stat-val.avg { color: #ffcc00; }
.stat-val.up { color: #ff4466; } .stat-val.down { color: #00ff88; }
.chart-tip { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(255, 204, 0, 0.03); border: 1px solid rgba(255, 204, 0, 0.06); border-radius: 10px; font-size: 0.75rem; color: rgba(255, 255, 255, 0.35); line-height: 1.5; }
.chart-tip i { color: rgba(255, 204, 0, 0.4); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.modal-fade-enter-from .product-modal-overlay, .modal-fade-leave-to .product-modal-overlay { opacity: 0; }
.modal-fade-enter-from .product-detail-modal, .modal-fade-leave-to .product-detail-modal,
.modal-fade-enter-from .price-chart-modal, .modal-fade-leave-to .price-chart-modal { transform: scale(0.92) translateY(20px); opacity: 0; }
.product-detail-modal::-webkit-scrollbar, .price-chart-modal::-webkit-scrollbar { width: 5px; }
.product-detail-modal::-webkit-scrollbar-track, .price-chart-modal::-webkit-scrollbar-track { background: transparent; }
.product-detail-modal::-webkit-scrollbar-thumb, .price-chart-modal::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ffcc00, #ff9900); border-radius: 3px; }
</style>
