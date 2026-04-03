import express from 'express'
import cors from 'cors'
import { scrapeJDPrice, scrapeTMallPrice } from './scrapers/priceScraper.js'
import { getMockPrices } from './data/mockPrices.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const priceCache = new Map()
const CACHE_DURATION = 5 * 60 * 1000

app.get('/api/prices/:category', async (req, res) => {
  const { category } = req.params
  const cacheKey = `prices_${category}`
  
  if (priceCache.has(cacheKey)) {
    const cached = priceCache.get(cacheKey)
    if (Date.now() - cached.timestamp < CACHE_DURATION) {
      return res.json({
        success: true,
        data: cached.data,
        cached: true,
        timestamp: cached.timestamp
      })
    }
  }
  
  try {
    let prices = await getMockPrices(category)
    
    priceCache.set(cacheKey, {
      data: prices,
      timestamp: Date.now()
    })
    
    res.json({
      success: true,
      data: prices,
      cached: false,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('获取价格失败:', error)
    res.status(500).json({
      success: false,
      error: '获取价格失败',
      message: error.message
    })
  }
})

app.get('/api/price/:productId', async (req, res) => {
  const { productId } = req.params
  
  try {
    const price = await getMockPrices('single', productId)
    res.json({
      success: true,
      data: price
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '获取价格失败'
    })
  }
})

app.get('/api/search', async (req, res) => {
  const { keyword } = req.query
  
  if (!keyword) {
    return res.status(400).json({
      success: false,
      error: '请提供搜索关键词'
    })
  }
  
  try {
    const results = await getMockPrices('search', keyword)
    res.json({
      success: true,
      data: results,
      keyword
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '搜索失败'
    })
  }
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: process.uptime()
  })
})

app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║   🖥️  硬件价格API服务已启动                                ║
  ║                                                           ║
  ║   端口: ${PORT}                                            ║
  ║   地址: http://localhost:${PORT}                           ║
  ║                                                           ║
  ║   API端点:                                                 ║
  ║   - GET /api/prices/:category  获取分类价格               ║
  ║   - GET /api/price/:productId  获取单个产品价格           ║
  ║   - GET /api/search?keyword=   搜索产品                   ║
  ║   - GET /api/health            健康检查                   ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
  `)
})
