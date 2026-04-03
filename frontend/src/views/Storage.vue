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
          <span>硬盘存储</span>
        </div>
        <h1 class="page-title">
          <span class="icon storage-icon"><i class="fas fa-hdd"></i></span>
          硬盘存储
        </h1>
        <p class="page-subtitle">Storage - 数据的永久家园</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content animate-slide-left">
            <h2>什么是硬盘存储？</h2>
            <p>
              硬盘是计算机的主要存储设备，用于永久保存操作系统、应用程序和用户数据。
              与内存不同，硬盘中的数据在断电后不会丢失，是数据长期存储的核心设备。
            </p>
            <p>
              现代硬盘主要分为HDD（机械硬盘）和SSD（固态硬盘）两大类。
              SSD采用闪存技术，读写速度远超HDD，已成为主流选择。NVMe协议的SSD更是将速度推向新高度。
            </p>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="value">100TB</span>
                <span class="label">HDD最大容量</span>
              </div>
              <div class="intro-stat">
                <span class="value">8TB</span>
                <span class="label">SSD主流容量</span>
              </div>
              <div class="intro-stat">
                <span class="value">12GB/s</span>
                <span class="label">NVMe最高速度</span>
              </div>
            </div>
          </div>
          <div class="intro-visual animate-slide-right">
            <div class="storage-animation">
              <div class="ssd-drive">
                <div class="ssd-body">
                  <div class="controller"></div>
                  <div class="nand-chip" v-for="i in 4" :key="i"></div>
                </div>
              </div>
              <div class="hdd-drive">
                <div class="platter" v-for="i in 3" :key="i"></div>
                <div class="arm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <div class="section-header">
          <h2>存储技术发展历史</h2>
          <p>从磁带到SSD，存储技术的革命</p>
        </div>
        
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(event, index) in storageHistory" 
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

    <section class="type-comparison">
      <div class="container">
        <div class="section-header">
          <h2>HDD vs SSD vs NVMe</h2>
          <p>三种主流存储技术对比</p>
        </div>
        
        <div class="comparison-cards">
          <div class="compare-card hdd">
            <div class="card-header">
              <i class="fas fa-compact-disc"></i>
              <h3>HDD 机械硬盘</h3>
            </div>
            <div class="card-body">
              <div class="stat-row">
                <span class="label">读取速度</span>
                <span class="value">80-200 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">写入速度</span>
                <span class="value">80-200 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">容量范围</span>
                <span class="value">500GB - 20TB</span>
              </div>
              <div class="stat-row">
                <span class="label">价格/GB</span>
                <span class="value">¥0.02 - 0.05</span>
              </div>
              <div class="stat-row">
                <span class="label">适用场景</span>
                <span class="value">大容量存储、备份</span>
              </div>
            </div>
          </div>

          <div class="compare-card sata-ssd">
            <div class="card-header">
              <i class="fas fa-microchip"></i>
              <h3>SATA SSD</h3>
            </div>
            <div class="card-body">
              <div class="stat-row">
                <span class="label">读取速度</span>
                <span class="value">500-560 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">写入速度</span>
                <span class="value">450-530 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">容量范围</span>
                <span class="value">120GB - 8TB</span>
              </div>
              <div class="stat-row">
                <span class="label">价格/GB</span>
                <span class="value">¥0.3 - 0.6</span>
              </div>
              <div class="stat-row">
                <span class="label">适用场景</span>
                <span class="value">系统盘、日常使用</span>
              </div>
            </div>
          </div>

          <div class="compare-card nvme">
            <div class="card-header">
              <i class="fas fa-rocket"></i>
              <h3>NVMe SSD</h3>
            </div>
            <div class="card-body">
              <div class="stat-row">
                <span class="label">读取速度</span>
                <span class="value highlight">3500-12000 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">写入速度</span>
                <span class="value highlight">3000-11000 MB/s</span>
              </div>
              <div class="stat-row">
                <span class="label">容量范围</span>
                <span class="value">256GB - 8TB</span>
              </div>
              <div class="stat-row">
                <span class="label">价格/GB</span>
                <span class="value">¥0.5 - 1.5</span>
              </div>
              <div class="stat-row">
                <span class="label">适用场景</span>
                <span class="value">高性能系统、创作</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="params-section">
      <div class="container">
        <div class="section-header">
          <h2>核心参数解析</h2>
          <p>了解硬盘的关键技术指标</p>
        </div>
        
        <div class="params-grid">
          <div class="param-card" v-for="param in storageParams" :key="param.name">
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
          <p>全球知名存储设备制造商</p>
        </div>
        
        <div class="brands-grid">
          <div class="brand-card" v-for="brand in storageBrands" :key="brand.name">
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
            v-for="type in ['全部', 'NVMe', 'SATA SSD', 'HDD']" 
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
            :class="[product.type.toLowerCase().replace(' ', '-'), 'animate-fade-up']"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <div class="card-glow" :class="product.type.toLowerCase().replace(' ', '-')"></div>
            <div class="product-header">
              <div class="product-brand-badge" :class="product.type.toLowerCase().replace(' ', '-')">
                <i :class="getStorageIcon(product.type)"></i>
                <span>{{ product.type }}</span>
              </div>
              <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            </div>
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="product-specs">
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-hdd"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-label">容量大小</span>
                  <span class="spec-value">{{ product.capacity }}</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-label">顺序读取</span>
                  <span class="spec-value highlight">{{ product.readSpeed }}</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-download"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-label">顺序写入</span>
                  <span class="spec-value">{{ product.writeSpeed }}</span>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">
                  <i class="fas fa-plug"></i>
                </div>
                <div class="spec-content">
                  <span class="spec-label">接口协议</span>
                  <span class="spec-value">{{ product.interface }}</span>
                </div>
              </div>
            </div>
            <div class="product-price-section">
              <div class="price-wrapper">
                <span class="price-label">参考价格</span>
                <div class="price-current">
                  <span class="currency">¥</span>
                  <span class="amount">{{ product.price.toLocaleString() }}</span>
                </div>
              </div>
              <div class="price-change-badge" :class="product.priceChange > 0 ? 'up' : 'down'">
                <i :class="product.priceChange > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
                {{ Math.abs(product.priceChange) }}%
              </div>
            </div>
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
            <div class="card-bottom-line" :class="product.type.toLowerCase().replace(' ', '-')"></div>
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
            <div class="detail-header" :class="selectedProduct?.type?.toLowerCase().replace(' ', '-')">
              <div class="detail-brand-badge" :class="selectedProduct?.type?.toLowerCase().replace(' ', '-')">
                <i :class="getStorageIcon(selectedProduct?.type)"></i> {{ selectedProduct?.type }}
              </div>
              <h2>{{ selectedProduct?.name }}</h2>
              <p class="detail-subtitle">{{ selectedProduct?.badge || '高性能存储' }}</p>
            </div>
            <div class="detail-body">
              <div class="detail-specs-grid">
                <div class="detail-spec-card"><i class="fas fa-hdd"></i><span class="spec-num">{{ selectedProduct?.capacity }}</span><span class="spec-name">容量大小</span></div>
                <div class="detail-spec-card highlight"><i class="fas fa-tachometer-alt"></i><span class="spec-num">{{ selectedProduct?.readSpeed }}</span><span class="spec-name">顺序读取</span></div>
                <div class="detail-spec-card"><i class="fas fa-download"></i><span class="spec-num">{{ selectedProduct?.writeSpeed }}</span><span class="spec-name">顺序写入</span></div>
                <div class="detail-spec-card"><i class="fas fa-plug"></i><span class="spec-num">{{ selectedProduct?.interface }}</span><span class="spec-name">接口协议</span></div>
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
                    <div class="chart-bar" :style="{ height: item.height + '%', background: item.change >= 0 ? 'linear-gradient(180deg, #00ff88, #00aa55)' : 'linear-gradient(180deg, #ff4466, #cc2244)' }"></div>
                    <span class="bar-price">¥{{ item.price }}</span><span class="bar-month">{{ item.month }}</span>
                  </div>
                </div>
                <div class="chart-line-overlay"><svg viewBox="0 0 600 200" preserveAspectRatio="none">
                  <polyline :points="chartLinePoints" fill="none" stroke="#00ff88" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <polygon :points="chartAreaPoints" fill="url(#storChartGradient)" opacity="0.15"/><defs><linearGradient id="storChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#00ff88" stop-opacity="0.5"/><stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
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
          <p>如何选择适合自己的存储设备</p>
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
  name: 'Storage',
  setup() {
    const activeFilter = ref('全部')
    const selectedEvent = ref(null)

    const storageHistory = [
      {
        year: '1956',
        title: 'IBM 350 RAMAC',
        description: '世界上第一款硬盘，重达1吨，容量仅5MB',
        specs: ['50张盘片', '5MB容量', '1吨重量'],
        details: {
          innovation: 'IBM 350 RAMAC (Random Access Method of Accounting and Control) 是世界上第一款商用硬盘驱动器。它使用50张24英寸的磁盘片，通过机械臂读写数据。',
          impact: 'RAMAC的诞生标志着磁存储时代的开始，虽然当时成本高昂（每MB约1万美元），但它奠定了现代硬盘的基础架构。',
          features: [
            '50张24英寸铝制盘片',
            '空气轴承技术',
            '每分钟1200转',
            '平均存取时间600ms'
          ],
          specs: {
            '容量': '3.75MB (后升级至5MB)',
            '重量': '约1吨',
            '尺寸': '1.7m × 1.5m × 0.74m',
            '盘片数': '50张',
            '转速': '1200 RPM',
            '传输速率': '8.8 KB/s'
          },
          trivia: 'RAMAC的体积相当于两个大型冰箱，但它的5MB容量还不如现在一张低分辨率照片大！'
        }
      },
      {
        year: '1980',
        title: 'Seagate ST-506',
        description: '第一款面向个人电脑的5.25英寸硬盘',
        specs: ['5MB容量', '5.25英寸', 'PC兼容'],
        details: {
          innovation: 'ST-506是希捷(Seagate)公司的首款产品，也是第一款专为个人电脑设计的硬盘。它采用5.25英寸规格，容量为5MB。',
          impact: 'ST-506让个人电脑首次拥有了可负担的存储解决方案，推动了PC革命的进程。IBM PC最初就采用了这款硬盘。',
          features: [
            '5.25英寸全高设计',
            'MFM编码方式',
            '步进电机定位',
            '标准接口定义'
          ],
          specs: {
            '容量': '5MB',
            '接口': 'ST-506/412',
            '尺寸': '5.25" 全高',
            '转速': '3600 RPM',
            '寻道时间': '85ms',
            '功耗': '20W'
          },
          trivia: 'ST-506的命名来源于其500美元的目标售价和6MB的原始设计容量（最终定为5MB）！'
        }
      },
      {
        year: '1991',
        title: 'IBM 0663 (Deskstar 2GB)',
        description: '首款突破1GB容量的消费级硬盘',
        specs: ['1GB容量', 'MR磁头', '技术突破'],
        details: {
          innovation: 'IBM 0663首次将MR(Magnetoresistive)磁阻磁头技术应用于消费级硬盘，大幅提升了存储密度和容量上限。',
          impact: '1GB容量的突破让"GB时代"真正到来，为多媒体应用和大型软件的普及铺平了道路。',
          features: [
            'MR磁阻磁头技术',
            'PRML信号处理',
            '3.5英寸规格',
            'Zone Bit Recording'
          ],
          specs: {
            '容量': '1-2GB',
            '接口': 'Fast SCSI-2',
            '尺寸': '3.5"',
            '转速': '5400 RPM',
            '缓存': '256KB',
            'MTBF': '300,000小时'
          },
          trivia: '0663被昵称为"Barracuda 2"，因为它是IBM第二款采用先进技术的硬盘产品！'
        }
      },
      {
        year: '2000',
        title: 'PATA/IDE硬盘黄金时代',
        description: '并行ATA接口成为主流，硬盘容量快速增长至80GB+',
        specs: ['PATA接口', '40-80GB', '5400-7200RPM'],
        details: {
          innovation: 'PATA(Parallel ATA)接口在千禧年达到巅峰，UDMA/66和UDMA/100模式将理论带宽提升到100MB/s。硬盘容量从40GB快速突破100GB大关。',
          impact: 'PATA硬盘的普及使得数字音乐、照片和视频开始大量进入普通家庭电脑，为后来的多媒体时代奠定基础。',
          features: [
            'Ultra DMA/66-100',
            '40pin IDE接口',
            'GMR巨磁阻磁头',
            '玻璃基板盘片'
          ],
          specs: {
            '容量范围': '40-160GB',
            '接口速度': '33/66/100 MB/s',
            '转速': '5400/7200 RPM',
            '缓存': '2-8MB',
            '平均延迟': '4.16ms',
            '噪音': '28-32dB'
          },
          trivia: '2000年时80GB硬盘价格约800元人民币，相当于现在的16TB SSD！'
        }
      },
      {
        year: '2003',
        title: 'SATA 1.0接口革命',
        description: '串行ATA取代并行PATA，细线缆+热插拔支持',
        specs: ['SATA 1.5Gbps', '更细线缆', '热插拔'],
        details: {
          innovation: 'SATA(Serial ATA)采用串行传输替代并行传输，用7针细线缆取代了笨重的40针排线，支持热插拔和NCQ命令队列。',
          impact: 'SATA的出现彻底终结了PATA时代，为SSD时代的到来做好了准备。SATA II/III后续版本至今仍在广泛使用。',
          features: [
            '7针L形接口',
            '点对点拓扑',
            'NCQ原生命令队列',
            '热插拔支持'
          ],
          specs: {
            'SATA I速率': '1.5 Gbps (150MB/s)',
            'SATA II速率': '3 Gbps (300MB/s)',
            'SATA III速率': '6 Gbps (600MB/s)',
            '线缆长度': '最大1米',
            '电压': '250mV差分信号',
            '兼容性': '向下兼容'
          },
          trivia: 'SATA线缆比PATA排线便宜得多，而且机箱内部布线变得整洁美观！'
        }
      },
      {
        year: '2008',
        title: 'SSD商业化元年',
        description: '固态硬盘进入消费市场，Intel X25-M引领变革',
        specs: ['MLC闪存', 'SATA接口', '高速读写'],
        details: {
          innovation: '2008年Intel发布X25-M SSD，采用MLC闪存和先进的控制器，随机读写性能远超HDD，标志着SSD正式进入主流市场。',
          impact: 'X25-M证明了SSD可以彻底改变用户体验——开机从分钟级降到秒级，程序启动不再等待。SSD革命从此开始。',
          features: [
            '10通道并行读取',
            'MLC NAND闪存',
            '智能磨损均衡',
            'AES-128加密'
          ],
          specs: {
            '容量': '80/160GB',
            '顺序读取': '250MB/s',
            '顺序写入': '70MB/s',
            '随机4K读取': '33000 IOPS',
            '控制器': 'Intel自研',
            '寿命': '5年或写入量限制'
          },
          trivia: 'X25-M首发价高达590美元(80GB)，但依然一抢而空，因为它真的太快了！'
        }
      },
      {
        year: '2013',
        title: 'NVMe协议诞生',
        description: 'NVMe规范发布，PCIe直连释放SSD全部潜力',
        specs: ['PCIe通道', '超低延迟', '百万IOPS'],
        details: {
          innovation: 'NVMe(Non-Volatile Memory Express)是为NAND闪存优化的主机控制器接口规范，通过PCIe直接通信，消除了AHCI协议的瓶颈，延迟降低至微秒级。',
          impact: 'NVMe让SSD性能提升了一个数量级，随机IOPS突破百万级别，为高性能计算和企业数据中心带来革命性变化。',
          features: [
            '多达65535个队列',
            '每个队列65536条命令',
            'MSI-X中断机制',
            '端到端数据保护'
          ],
          specs: {
            '协议版本': 'NVMe 1.0-2.0',
            '接口': 'PCIe x4',
            '队列深度': '64K commands',
            '延迟': '<10μs',
            '最大IOPS': '>1,000,000',
            '功耗': '更低(无轮询)'
          },
          trivia: 'NVMe最初由90多家公司联合开发，包括Intel、三星、美光等巨头！'
        }
      },
      {
        year: '2020',
        title: 'PCIe 4.0 SSD普及',
        description: 'PS5推动PCIe 4.0 SSD普及，读取速度突破7000MB/s',
        specs: ['PCIe 4.0', '7000MB/s', 'PS5兼容'],
        details: {
          innovation: 'AMD Ryzen 3000系列率先支持PCIe 4.0，随后索尼PS5游戏主机的采用推动了PCIe 4.0 SSD的大规模普及。三星980 Pro、西数SN850等旗舰产品问世。',
          impact: 'PCIe 4.0 SSD让游戏加载时间几乎消失，3A大作秒开成为现实。同时推动了高速存储在内容创作领域的广泛应用。',
          features: [
            'PCIe Gen 4 x4',
            '176层/128层TLC/QLC',
            'DRAM-less HMB方案',
            '独立散热需求'
          ],
          specs: {
            '顺序读取': '7000-7500 MB/s',
            '顺序写入': '5000-6900 MB/s',
            '随机4K读取': '800K-1000K IOPS',
            '缓存方案': 'SLC动态缓存',
            '功耗': '6.5-9W',
            '寿命': '600TBW+'
          },
          trivia: 'PS5的定制SSD读取速度高达5.5GB/s，比SATA SSD快近10倍！'
        }
      },
      {
        year: '2023',
        title: 'PCIe 5.0 SSD时代来临',
        description: 'Gen5 SSD突破12000MB/s，主动散热成标配',
        specs: ['PCIe 5.0', '12000MB/s', '主动散热'],
        details: {
          innovation: 'PCIe 5.0 SSD将带宽翻倍至约12.8GB/s，但发热量剧增导致主动散热成为必须。群联E26、三星E4等新控制器登场，238层TLC NAND量产。',
          impact: 'Gen5 SSD的速度已经接近DDR4内存带宽的下限，正在模糊内存与存储的边界。DirectStorage API让游戏直接从SSD加载资源。',
          features: [
            'PCIe Gen 5 x4',
            '238层3D TLC/QLC',
            '主动风扇散热',
            'DirectStorage支持'
          ],
          specs: {
            '顺序读取': '10000-14500 MB/s',
            '顺序写入': '9000-12700 MB/s',
            '随机4K读取': '1400K-1800K IOPS',
            'TDP': '10-14W (需主动散热)',
            '寿命': '1200TBW+',
            '价格': '$150-300 (2TB)'
          },
          trivia: 'Gen5 SSD的高温问题如此严重，以至于厂商不得不附带小型散热风扇！'
        }
      }
    ]

    const showDetail = (event) => {
      selectedEvent.value = event
    }

    const storageParams = [
      {
        name: '容量',
        icon: 'fas fa-database',
        description: '存储空间大小，决定可存储的数据量',
        importance: 95,
        gradient: 'linear-gradient(135deg, #00ff88 0%, #00ffff 100%)'
      },
      {
        name: '读取速度',
        icon: 'fas fa-tachometer-alt',
        description: '数据读取速率，影响系统启动和程序加载',
        importance: 92,
        gradient: 'linear-gradient(135deg, #00f0ff 0%, #0066ff 100%)'
      },
      {
        name: '写入速度',
        icon: 'fas fa-download',
        description: '数据写入速率，影响文件保存和传输',
        importance: 88,
        gradient: 'linear-gradient(135deg, #ff00ff 0%, #8b00ff 100%)'
      },
      {
        name: '接口类型',
        icon: 'fas fa-plug',
        description: 'SATA/NVMe等接口，决定传输协议和速度上限',
        importance: 85,
        gradient: 'linear-gradient(135deg, #ffff00 0%, #ff6600 100%)'
      },
      {
        name: '缓存',
        icon: 'fas fa-memory',
        description: 'DRAM缓存，提升小文件读写性能',
        importance: 78,
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'
      },
      {
        name: 'TBW寿命',
        icon: 'fas fa-heartbeat',
        description: '总写入字节数，衡量SSD耐久性',
        importance: 75,
        gradient: 'linear-gradient(135deg, #a55eea 0%, #45aaf2 100%)'
      }
    ]

    const storageBrands = [
      {
        name: 'Samsung 三星',
        icon: 'fas fa-star',
        description: '全球最大闪存制造商，990 PRO系列旗舰',
        features: ['990 PRO', '870 EVO', '原厂颗粒']
      },
      {
        name: 'WD 西部数据',
        icon: 'fas fa-hdd',
        description: '硬盘行业老牌厂商，收购SanDisk后SSD实力增强',
        features: ['Black SN850X', 'Blue SN570', 'HDD专家']
      },
      {
        name: 'Crucial 英睿达',
        icon: 'fas fa-gem',
        description: 'Micron旗下品牌，原厂NAND颗粒',
        features: ['P5 Plus', 'MX500', '高性价比']
      },
      {
        name: 'Seagate 希捷',
        icon: 'fas fa-server',
        description: '全球最大HDD制造商，企业级存储专家',
        features: ['酷鱼系列', '银河系列', '企业存储']
      }
    ]

    const products = [
      {
        name: '三星 990 PRO 2TB',
        type: 'NVMe',
        capacity: '2TB',
        readSpeed: '7450MB/s',
        writeSpeed: '6900MB/s',
        interface: 'PCIe 4.0 x4',
        price: 1299,
        priceChange: -8.5,
        badge: '旗舰'
      },
      {
        name: '西部数据 Black SN850X 2TB',
        type: 'NVMe',
        capacity: '2TB',
        readSpeed: '7300MB/s',
        writeSpeed: '6600MB/s',
        interface: 'PCIe 4.0 x4',
        price: 1199,
        priceChange: -6.2,
        badge: '热门'
      },
      {
        name: '英睿达 P5 Plus 2TB',
        type: 'NVMe',
        capacity: '2TB',
        readSpeed: '6600MB/s',
        writeSpeed: '5000MB/s',
        interface: 'PCIe 4.0 x4',
        price: 999,
        priceChange: -5.8,
        badge: '性价比'
      },
      {
        name: '三星 870 EVO 1TB',
        type: 'SATA SSD',
        capacity: '1TB',
        readSpeed: '560MB/s',
        writeSpeed: '530MB/s',
        interface: 'SATA 6Gbps',
        price: 499,
        priceChange: -3.2
      },
      {
        name: '英睿达 MX500 1TB',
        type: 'SATA SSD',
        capacity: '1TB',
        readSpeed: '560MB/s',
        writeSpeed: '510MB/s',
        interface: 'SATA 6Gbps',
        price: 399,
        priceChange: -4.5
      },
      {
        name: '希捷 酷鱼 4TB',
        type: 'HDD',
        capacity: '4TB',
        readSpeed: '190MB/s',
        writeSpeed: '190MB/s',
        interface: 'SATA 6Gbps',
        price: 499,
        priceChange: -2.1
      }
    ]

    const buyingTips = [
      {
        icon: 'fas fa-gamepad',
        title: '游戏玩家',
        content: '推荐1-2TB NVMe SSD作为游戏盘，PCIe 4.0可大幅缩短加载时间'
      },
      {
        icon: 'fas fa-video',
        title: '视频创作者',
        content: '2TB以上NVMe SSD作为工作盘，大容量HDD用于素材归档'
      },
      {
        icon: 'fas fa-laptop',
        title: '办公用户',
        content: '500GB-1TB SATA SSD足够，或入门级NVMe SSD'
      },
      {
        icon: 'fas fa-server',
        title: '数据存储',
        content: '重要数据建议多盘备份，可考虑NAS专用硬盘'
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
      if (product.type === 'NVMe') features.push('NVMe PCIe 4.0/5.0 协议，极速读写，系统响应秒开')
      if (product.type === 'SATA SSD') features.push('SATA SSD成熟方案，兼容性广泛，性价比出色')
      if (product.type === 'HDD') features.push('机械硬盘大容量存储，数据归档与备份首选')
      if (parseInt(product.readSpeed) >= 7000) features.push(`超高速${product.readSpeed}顺序读取，旗舰级性能`)
      if (parseInt(product.readSpeed) >= 3000 && parseInt(product.readSpeed) < 7000) features.push(`${product.readSpeed}高速读取，游戏加载无压力`)
      if (product.capacity.includes('4TB') || product.capacity.includes('8TB')) features.push(`${product.capacity}大容量，海量数据存储无忧`)
      if (product.price < 600) features.push('价格实惠，入门装机优选')
      if (product.price > 1500) features.push('高端定位，面向专业用户')
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

    const getStorageIcon = (type) => {
      const iconMap = {
        'NVMe': 'fas fa-bolt',
        'SATA SSD': 'fas fa-memory',
        'HDD': 'fas fa-hdd'
      }
      return iconMap[type] || 'fas fa-database'
    }

    return {
      activeFilter,
      selectedEvent,
      storageHistory,
      storageParams,
      storageBrands,
      products,
      filteredProducts,
      buyingTips,
      showDetail,
      getStorageIcon,
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
/* Storage 专用样式 */

.storage-icon {
  background: linear-gradient(135deg, #00ff88 0%, #00ffff 100%) !important;
}

.storage-animation {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.ssd-drive {
  width: 250px;
  height: 80px;
  background: linear-gradient(90deg, #1a1a2e 0%, #0f0f1a 100%);
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  padding: 10px;
  animation: slideInRight 0.8s ease forwards;
}

.ssd-body {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(4, 1fr);
  gap: 5px;
}

.controller {
  background: var(--gradient-cyber);
  border-radius: 5px;
}

.nand-chip {
  background: rgba(0, 240, 255, 0.3);
  border: 1px solid rgba(0, 240, 255, 0.5);
  border-radius: 3px;
  animation: chipPulse 2s ease-in-out infinite;
}

.nand-chip:nth-child(2) { animation-delay: 0.2s; }
.nand-chip:nth-child(3) { animation-delay: 0.4s; }
.nand-chip:nth-child(4) { animation-delay: 0.6s; }
.nand-chip:nth-child(5) { animation-delay: 0.8s; }

@keyframes chipPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.hdd-drive {
  position: relative;
  width: 250px;
  height: 80px;
  background: linear-gradient(90deg, #1a1a2e 0%, #0f0f1a 100%);
  border: 2px solid rgba(0, 240, 255, 0.5);
  border-radius: 10px;
  overflow: hidden;
  animation: slideInRight 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.platter {
  position: absolute;
  top: 50%;
  left: 30px;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(0, 240, 255, 0.3);
  border-radius: 50%;
  transform: translateY(-50%);
  animation: rotate 3s linear infinite;
}

.platter:nth-child(1) { left: 30px; animation-duration: 3s; }
.platter:nth-child(2) { left: 70px; animation-duration: 3.5s; }
.platter:nth-child(3) { left: 110px; animation-duration: 4s; }

.arm {
  position: absolute;
  top: 50%;
  right: 40px;
  width: 60px;
  height: 8px;
  background: var(--primary-color);
  transform: translateY(-50%);
  animation: armMove 2s ease-in-out infinite;
  transform-origin: right center;
}

@keyframes armMove {
  0%, 100% { transform: translateY(-50%) rotate(-10deg); }
  50% { transform: translateY(-50%) rotate(10deg); }
}

.type-comparison {
  padding: 100px 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.02) 50%, transparent 100%);
}

.comparison-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.compare-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.compare-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 240, 255, 0.2);
}

.compare-card.hdd { border-color: rgba(0, 240, 255, 0.3); }
.compare-card.hdd:hover { border-color: #00f0ff; }

.compare-card.sata-ssd { border-color: rgba(255, 255, 0, 0.3); }
.compare-card.sata-ssd:hover { border-color: #ffff00; }

.compare-card.nvme { border-color: rgba(0, 255, 136, 0.3); }
.compare-card.nvme:hover { border-color: #00ff88; }

.card-header {
  padding: 30px;
  text-align: center;
  background: rgba(0, 240, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-header i {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.compare-card.hdd .card-header i { color: #00f0ff; }
.compare-card.sata-ssd .card-header i { color: #ffff00; }
.compare-card.nvme .card-header i { color: #00ff88; }

.card-header h3 {
  font-size: 1.3rem;
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-body {
  padding: 25px 30px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-row:last-child {
  border-bottom: none;
}

.stat-row .label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.stat-row .value {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.stat-row .value.highlight {
  color: var(--primary-color);
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

.product-card.nvme {
  border-color: rgba(0, 255, 136, 0.3);
}

.product-card.nvme:hover {
  border-color: #00ff88;
}

.product-card.sata-ssd {
  border-color: rgba(255, 255, 0, 0.3);
}

.product-card.sata-ssd:hover {
  border-color: #ffff00;
}

.product-card.hdd {
  border-color: rgba(0, 240, 255, 0.3);
}

.product-card.hdd:hover {
  border-color: #00f0ff;
}

/* 时间线卡片点击效果 */
.timeline-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 255, 136, 0.2);
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
  border-color: #00ff88;
  box-shadow: 0 10px 40px rgba(0, 255, 136, 0.25), 0 0 30px rgba(0, 200, 100, 0.1) inset;
  transform: translateX(15px) scale(1.02);
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 240, 255, 0.03) 100%);
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
  background: rgba(0, 255, 136, 0.15);
  border: 1px solid rgba(0, 255, 136, 0.4);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #00ff88;
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
  border: 1px solid rgba(0, 255, 136, 0.4);
  border-radius: 25px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 30px 80px rgba(0, 255, 136, 0.35),
    0 0 60px rgba(0, 200, 100, 0.12) inset,
    0 0 120px rgba(0, 240, 255, 0.05);
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
  background: linear-gradient(180deg, rgba(0, 255, 136, 0.08) 0%, transparent 100%);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  position: relative;
}

.modal-year-badge {
  display: inline-block;
  padding: 8px 24px;
  background: linear-gradient(135deg, #00ff88 0%, #00ffff 50%, #0088ff 100%);
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
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.25), rgba(0, 240, 255, 0.25));
  border-radius: 10px;
  z-index: -1;
}

.modal-header h2 {
  font-size: 2rem;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #00ff88 100%);
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
  color: #00ff88;
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
  color: #00ff88;
  font-weight: bold;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.spec-card {
  background: rgba(0, 255, 136, 0.06);
  border: 1px solid rgba(0, 255, 136, 0.25);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.spec-card:hover {
  background: rgba(0, 255, 136, 0.12);
  border-color: #00ff88;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.18);
}

.spec-value {
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #00ff88;
}

.modal-footer {
  padding: 25px 35px 35px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 255, 136, 0.15);
}

.action-btn.primary {
  background: linear-gradient(135deg, #00ff88 0%, #00cccc 100%);
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
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.45);
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
  background: rgba(0, 255, 136, 0.05);
  border-radius: 3px;
}

.detail-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #00ff88 0%, #00cccc 100%);
  border-radius: 3px;
}

/* ========== 硬盘产品卡片 - 玻璃拟态美化样式 ========== */

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
  padding: 10px 0;
}

.product-card {
  position: relative;
  background: linear-gradient(145deg, rgba(0, 40, 35, 0.85), rgba(0, 25, 20, 0.9));
  border: 1px solid rgba(0, 255, 136, 0.12);
  border-radius: 20px;
  padding: 28px 24px 24px;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--card-accent, #00ff88), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(0, 255, 136, 0.35);
  box-shadow:
    0 20px 50px rgba(0, 255, 136, 0.15),
    0 8px 25px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.product-card:hover::before {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.product-card:hover .card-glow {
  opacity: 0.3;
}

.card-glow.nvme { background: #00ff88; }
.card-glow.sata-ssd { background: #00cccc; }
.card-glow.hdd { background: #66ffaa; }

.product-card.nvme { --card-accent: #00ff88; }
.product-card.sata-ssd { --card-accent: #00cccc; }
.product-card.hdd { --card-accent: #66ffaa; }

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.product-brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.product-brand-badge.nvme {
  background: rgba(0, 255, 136, 0.15);
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.15), inset 0 0 10px rgba(0, 255, 136, 0.05);
}

.product-brand-badge.sata-ssd {
  background: rgba(0, 204, 204, 0.15);
  color: #00cccc;
  border: 1px solid rgba(0, 204, 204, 0.3);
  box-shadow: 0 0 15px rgba(0, 204, 204, 0.15), inset 0 0 10px rgba(0, 204, 204, 0.05);
}

.product-brand-badge.hdd {
  background: rgba(102, 255, 170, 0.15);
  color: #66ffaa;
  border: 1px solid rgba(102, 255, 170, 0.3);
  box-shadow: 0 0 15px rgba(102, 255, 170, 0.15), inset 0 0 10px rgba(102, 255, 170, 0.05);
}

.product-brand-badge i {
  font-size: 0.85rem;
}

.product-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(0, 255, 136, 0); }
}

.product-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e8f5e9;
  margin-bottom: 18px;
  line-height: 1.4;
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
  background: linear-gradient(90deg, var(--card-accent, #00ff88), transparent);
  border-radius: 2px;
}

.product-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(0, 255, 136, 0.04);
  border: 1px solid rgba(0, 255, 136, 0.06);
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(0, 255, 136, 0.1);
  border-color: rgba(0, 255, 136, 0.15);
  transform: translateX(3px);
}

.spec-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.82rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 204, 204, 0.1));
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.2);
}

.spec-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.spec-value {
  font-size: 0.88rem;
  color: #c8e6c9;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
}

.spec-value.highlight {
  color: #00ff88;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
}

.spec-label {
  font-size: 0.72rem;
  color: rgba(0, 255, 136, 0.5);
  letter-spacing: 1px;
  font-weight: 500;
}

.spec-value.highlight {
  color: #00ff88;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
}

.product-price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  margin-bottom: 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.08), rgba(0, 204, 204, 0.04));
  border: 1px solid rgba(0, 255, 136, 0.12);
}

.price-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price-label {
  font-size: 0.68rem;
  color: rgba(0, 255, 136, 0.5);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.price-current {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.price-current .currency {
  font-size: 1rem;
  color: #00ff88;
  font-weight: 700;
}

.price-current .amount {
  font-size: 1.65rem;
  font-weight: 900;
  font-family: 'Orbitron', 'Rajdhani', monospace;
  color: #00ff88;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
  letter-spacing: 1px;
}

.price-change-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  font-family: 'Orbitron', monospace;
  letter-spacing: 0.5px;
}

.price-change-badge.up {
  background: rgba(255, 82, 82, 0.15);
  color: #ff5252;
  border: 1px solid rgba(255, 82, 82, 0.3);
  box-shadow: 0 0 12px rgba(255, 82, 82, 0.15);
}

.price-change-badge.down {
  background: rgba(0, 255, 136, 0.15);
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
  box-shadow: 0 0 12px rgba(0, 255, 136, 0.15);
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

/* 主按钮 - 绿色玻璃拟态 */
.action-btn.primary {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 204, 204, 0.15));
  color: #00ff88;
  border: 1.5px solid rgba(0, 255, 136, 0.4);
  box-shadow:
    0 4px 18px rgba(0, 255, 136, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.35), rgba(0, 204, 204, 0.25));
  border-color: rgba(0, 255, 136, 0.65);
  box-shadow:
    0 8px 32px rgba(0, 255, 136, 0.3),
    0 0 20px rgba(0, 255, 136, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.action-btn.primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent);
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
  background: rgba(0, 255, 136, 0.05);
  color: rgba(0, 255, 136, 0.6);
  border: 1.5px solid rgba(0, 255, 136, 0.15);
  backdrop-filter: blur(4px);
}

.action-btn.secondary:hover {
  background: rgba(0, 255, 136, 0.12);
  color: #00ff88;
  border-color: rgba(0, 255, 136, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.12);
}

.action-btn.pulse-glow {
  animation: pulseGlow 2.5s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow:
      0 4px 18px rgba(0, 255, 136, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  50% {
    box-shadow:
      0 4px 28px rgba(0, 255, 136, 0.4),
      0 0 40px rgba(0, 255, 136, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }
}

.card-bottom-line {
  position: absolute;
  bottom: 0;
  left: 15%;
  right: 15%;
  height: 2px;
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .card-bottom-line {
  opacity: 1;
}

.card-bottom-line.nvme {
  background: linear-gradient(90deg, transparent, #00ff88, transparent);
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.card-bottom-line.sata-ssd {
  background: linear-gradient(90deg, transparent, #00cccc, transparent);
  box-shadow: 0 0 10px rgba(0, 204, 204, 0.5);
}

.card-bottom-line.hdd {
  background: linear-gradient(90deg, transparent, #66ffaa, transparent);
  box-shadow: 0 0 10px rgba(102, 255, 170, 0.5);
}

/* ========== 产品详情弹窗 (Storage-绿色主题) ========== */
.product-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(2, 12, 8, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.product-detail-modal { width: 580px; max-height: 85vh; background: linear-gradient(160deg, rgba(6, 22, 15, 0.97), rgba(3, 14, 10, 0.98)); border: 1px solid rgba(0, 255, 136, 0.2); border-radius: 24px; overflow-y: auto; position: relative; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 255, 136, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05); }
.modal-close-btn { position: absolute; top: 16px; right: 16px; width: 38px; height: 38px; border-radius: 50%; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; z-index: 10; color: rgba(255, 255, 255, 0.5); font-size: 0.9rem; }
.modal-close-btn:hover { background: rgba(255, 68, 68, 0.2); border-color: rgba(255, 68, 68, 0.4); color: #ff4466; transform: rotate(90deg); }
.detail-header { padding: 32px 28px 24px; text-align: center; position: relative; overflow: hidden; }
.detail-header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
.detail-header.nvme::before { background: linear-gradient(90deg, #00ff88, #00ffaa, #00ff88); }
.detail-header.sata-ssd::before { background: linear-gradient(90deg, #00cccc, #66dddd, #00cccc); }
.detail-header.hdd::before { background: linear-gradient(90deg, #66ffaa, #99ffcc, #66ffaa); }
.detail-brand-badge { display: inline-flex; align-items: center; gap: 7px; padding: 6px 16px; border-radius: 20px; font-size: 0.78rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 14px; }
.detail-brand-badge.nvme { background: rgba(0, 255, 136, 0.2); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.4); box-shadow: 0 0 20px rgba(0, 255, 136, 0.15); }
.detail-brand-badge.sata-ssd { background: rgba(0, 204, 204, 0.2); color: #00cccc; border: 1px solid rgba(0, 204, 204, 0.4); box-shadow: 0 0 20px rgba(0, 204, 204, 0.15); }
.detail-brand-badge.hdd { background: rgba(102, 255, 170, 0.2); color: #66ffaa; border: 1px solid rgba(102, 255, 170, 0.4); box-shadow: 0 0 20px rgba(102, 255, 170, 0.15); }
.detail-header h2 { font-size: 1.45rem; font-weight: 800; color: #fff; margin-bottom: 8px; letter-spacing: 0.5px; }
.detail-subtitle { font-size: 0.85rem; color: rgba(0, 255, 136, 0.6); font-weight: 500; }
.detail-body { padding: 0 28px 28px; }
.detail-specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px; }
.detail-spec-card { background: rgba(0, 255, 136, 0.04); border: 1px solid rgba(0, 255, 136, 0.08); border-radius: 16px; padding: 18px 12px; text-align: center; transition: all 0.3s ease; }
.detail-spec-card:hover { background: rgba(0, 255, 136, 0.08); border-color: rgba(0, 255, 136, 0.2); transform: translateY(-3px); }
.detail-spec-card.highlight { background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 204, 0.05)); border-color: rgba(0, 255, 136, 0.18); }
.detail-spec-card i { font-size: 1.3rem; color: #00ff88; margin-bottom: 8px; display: block; }
.spec-num { display: block; font-size: 1.15rem; font-weight: 800; color: #fff; font-family: 'Orbitron', monospace; letter-spacing: 0.5px; }
.spec-name { display: block; font-size: 0.72rem; color: rgba(0, 255, 136, 0.5); margin-top: 4px; letter-spacing: 1px; text-transform: uppercase; }
.detail-info-section { margin-bottom: 24px; }
.detail-info-section h3 { font-size: 1rem; color: #00ff88; margin-bottom: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
.detail-info-section h3 i { color: #fff; }
.feature-list { list-style: none; padding: 0; margin: 0; }
.feature-list li { padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.88rem; color: #c8e6c9; display: flex; align-items: flex-start; gap: 10px; line-height: 1.55; }
.feature-list li:last-child { border-bottom: none; }
.feature-list li i { color: #00ff88; margin-top: 3px; flex-shrink: 0; font-size: 0.82rem; }
.detail-price-box { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; background: linear-gradient(135deg, rgba(0, 255, 136, 0.07), rgba(0, 204, 204, 0.03)); border: 1px solid rgba(0, 255, 136, 0.12); border-radius: 16px; }
.price-main .price-label { font-size: 0.72rem; color: rgba(0, 255, 136, 0.5); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px; }
.price-main .price-value { font-size: 1.8rem; font-weight: 900; font-family: 'Orbitron', monospace; color: #00ff88; text-shadow: 0 0 20px rgba(0, 255, 136, 0.4); }
.price-trend { padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; font-family: 'Orbitron', monospace; }
.price-trend.up { background: rgba(255, 68, 68, 0.12); color: #ff4466; border: 1px solid rgba(255, 68, 68, 0.25); }
.price-trend.down { background: rgba(0, 255, 136, 0.12); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.25); }

/* 价格走势弹窗 (Storage) */
.price-chart-modal { width: 640px; max-height: 85vh; background: linear-gradient(160deg, rgba(6, 22, 15, 0.97), rgba(3, 14, 10, 0.98)); border: 1px solid rgba(0, 255, 136, 0.2); border-radius: 24px; overflow-y: auto; position: relative; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 255, 136, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05); }
.chart-header { padding: 28px 28px 16px; text-align: center; border-bottom: 1px solid rgba(0, 255, 136, 0.08); }
.chart-header h2 { font-size: 1.3rem; font-weight: 800; color: #fff; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 6px; }
.chart-header h2 i { color: #00ff88; }
.chart-subtitle { font-size: 0.83rem; color: rgba(0, 255, 136, 0.5); }
.chart-body { padding: 24px 28px 28px; }
.chart-visual { position: relative; height: 260px; margin-bottom: 24px; }
.chart-bars { display: flex; align-items: flex-end; justify-content: space-around; height: 220px; padding: 0 10px; position: relative; z-index: 2; }
.chart-bar-wrapper { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; max-width: 70px; }
.chart-bar { width: 100%; max-width: 44px; border-radius: 8px 8px 4px 4px; min-height: 20px; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); cursor: pointer; }
.chart-bar:hover { filter: brightness(1.2); transform: scaleX(1.05); }
.bar-price { font-size: 0.72rem; font-weight: 700; font-family: 'Orbitron', monospace; color: #00ff88; opacity: 0; transform: translateY(-4px); transition: all 0.3s ease; }
.chart-bar-wrapper:hover .bar-price { opacity: 1; transform: translateY(0); }
.bar-month { font-size: 0.72rem; color: rgba(255, 255, 255, 0.4); font-weight: 600; }
.chart-line-overlay { position: absolute; bottom: 30px; left: 0; right: 0; height: 200px; pointer-events: none; z-index: 1; }
.chart-line-overlay svg { width: 100%; height: 100%; }
.chart-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
.stat-item { background: rgba(0, 255, 136, 0.04); border: 1px solid rgba(0, 255, 136, 0.08); border-radius: 14px; padding: 14px 10px; text-align: center; }
.stat-label { display: block; font-size: 0.7rem; color: rgba(0, 255, 136, 0.45); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
.stat-val { display: block; font-size: 1.05rem; font-weight: 800; font-family: 'Orbitron', monospace; color: #c8e6c9; }
.stat-val.high { color: #ff4466; } .stat-val.low { color: #00ff88; } .stat-val.avg { color: #00ff88; }
.stat-val.up { color: #ff4466; } .stat-val.down { color: #00ff88; }
.chart-tip { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(0, 255, 136, 0.03); border: 1px solid rgba(0, 255, 136, 0.06); border-radius: 10px; font-size: 0.75rem; color: rgba(255, 255, 255, 0.35); line-height: 1.5; }
.chart-tip i { color: rgba(0, 255, 136, 0.4); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.modal-fade-enter-from .product-modal-overlay, .modal-fade-leave-to .product-modal-overlay { opacity: 0; }
.modal-fade-enter-from .product-detail-modal, .modal-fade-leave-to .product-detail-modal,
.modal-fade-enter-from .price-chart-modal, .modal-fade-leave-to .price-chart-modal { transform: scale(0.92) translateY(20px); opacity: 0; }
.product-detail-modal::-webkit-scrollbar, .price-chart-modal::-webkit-scrollbar { width: 5px; }
.product-detail-modal::-webkit-scrollbar-track, .price-chart-modal::-webkit-scrollbar-track { background: transparent; }
.product-detail-modal::-webkit-scrollbar-thumb, .price-chart-modal::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00ff88, #00aaaa); border-radius: 3px; }
</style>
