import * as cheerio from 'cheerio'

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
          ...options.headers
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.text()
    } catch (error) {
      console.error(`尝试 ${i + 1}/${retries} 失败:`, error.message)
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}

export async function scrapeJDPrice(keyword) {
  const searchUrl = `https://search.jd.com/Search?keyword=${encodeURIComponent(keyword)}&enc=utf-8`
  
  try {
    const html = await fetchWithRetry(searchUrl)
    const $ = cheerio.load(html)
    const results = []
    
    $('.gl-item').slice(0, 10).each((index, element) => {
      const $item = $(element)
      const name = $item.find('.p-name a em').text().trim()
      const priceText = $item.find('.p-price .J_price i').text()
      const price = parseFloat(priceText) || 0
      const link = 'https:' + $item.find('.p-name a').attr('href')
      const shop = $item.find('.p-shop a').text().trim()
      
      if (name && price > 0) {
        results.push({
          name,
          price,
          originalPrice: price,
          change: 0,
          source: '京东',
          url: link,
          shop,
          updateTime: Date.now()
        })
      }
    })
    
    return results
  } catch (error) {
    console.error('京东爬取失败:', error)
    return []
  }
}

export async function scrapeTMallPrice(keyword) {
  console.log('天猫爬虫暂未实现，使用模拟数据')
  return []
}

export async function scrapeProductDetail(platform, productId) {
  console.log(`获取${platform}产品详情: ${productId}`)
  return null
}

export function parsePrice(priceText) {
  if (!priceText) return 0
  const cleaned = priceText.replace(/[^\d.]/g, '')
  return parseFloat(cleaned) || 0
}
