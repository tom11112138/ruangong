const mockPriceData = {
  cpu: [
    {
      id: 'cpu-1',
      name: 'Intel Core i9-14900K',
      brand: 'Intel',
      price: 4599,
      originalPrice: 4999,
      change: -2.5,
      source: '京东',
      url: 'https://item.jd.com/100081765674.html',
      updateTime: Date.now(),
      specs: {
        cores: 24,
        threads: 32,
        frequency: '3.2-6.0GHz',
        cache: '36MB',
        tdp: 125
      }
    },
    {
      id: 'cpu-2',
      name: 'Intel Core i7-14700K',
      brand: 'Intel',
      price: 3299,
      originalPrice: 3599,
      change: -1.8,
      source: '京东',
      url: 'https://item.jd.com/100081765675.html',
      updateTime: Date.now(),
      specs: {
        cores: 20,
        threads: 28,
        frequency: '3.4-5.6GHz',
        cache: '33MB',
        tdp: 125
      }
    },
    {
      id: 'cpu-3',
      name: 'Intel Core i5-14600K',
      brand: 'Intel',
      price: 2299,
      originalPrice: 2499,
      change: 0.5,
      source: '京东',
      url: 'https://item.jd.com/100081765676.html',
      updateTime: Date.now(),
      specs: {
        cores: 14,
        threads: 20,
        frequency: '3.5-5.3GHz',
        cache: '24MB',
        tdp: 125
      }
    },
    {
      id: 'cpu-4',
      name: 'AMD Ryzen 9 7950X',
      brand: 'AMD',
      price: 4299,
      originalPrice: 4699,
      change: -3.2,
      source: '京东',
      url: 'https://item.jd.com/100058728123.html',
      updateTime: Date.now(),
      specs: {
        cores: 16,
        threads: 32,
        frequency: '4.5-5.7GHz',
        cache: '64MB',
        tdp: 170
      }
    },
    {
      id: 'cpu-5',
      name: 'AMD Ryzen 7 7800X3D',
      brand: 'AMD',
      price: 2999,
      originalPrice: 3199,
      change: 2.1,
      source: '京东',
      url: 'https://item.jd.com/100058728124.html',
      updateTime: Date.now(),
      specs: {
        cores: 8,
        threads: 16,
        frequency: '4.2-5.0GHz',
        cache: '104MB',
        tdp: 120
      }
    },
    {
      id: 'cpu-6',
      name: 'AMD Ryzen 5 7600X',
      brand: 'AMD',
      price: 1499,
      originalPrice: 1699,
      change: -4.5,
      source: '京东',
      url: 'https://item.jd.com/100058728125.html',
      updateTime: Date.now(),
      specs: {
        cores: 6,
        threads: 12,
        frequency: '4.7-5.3GHz',
        cache: '32MB',
        tdp: 105
      }
    }
  ],
  gpu: [
    {
      id: 'gpu-1',
      name: 'NVIDIA GeForce RTX 4090',
      brand: 'NVIDIA',
      price: 14999,
      originalPrice: 15999,
      change: 1.2,
      source: '京东',
      url: 'https://item.jd.com/100055812345.html',
      updateTime: Date.now(),
      specs: {
        vram: 24,
        frequency: '2.23-2.52GHz',
        tdp: 450,
        cores: 16384
      }
    },
    {
      id: 'gpu-2',
      name: 'NVIDIA GeForce RTX 4080 Super',
      brand: 'NVIDIA',
      price: 8499,
      originalPrice: 8999,
      change: -2.1,
      source: '京东',
      url: 'https://item.jd.com/100055812346.html',
      updateTime: Date.now(),
      specs: {
        vram: 16,
        frequency: '2.29-2.55GHz',
        tdp: 320,
        cores: 10240
      }
    },
    {
      id: 'gpu-3',
      name: 'NVIDIA GeForce RTX 4070 Ti Super',
      brand: 'NVIDIA',
      price: 6499,
      originalPrice: 6799,
      change: -1.5,
      source: '京东',
      url: 'https://item.jd.com/100055812347.html',
      updateTime: Date.now(),
      specs: {
        vram: 16,
        frequency: '2.34-2.61GHz',
        tdp: 285,
        cores: 8448
      }
    },
    {
      id: 'gpu-4',
      name: 'AMD Radeon RX 7900 XTX',
      brand: 'AMD',
      price: 7999,
      originalPrice: 8499,
      change: -3.8,
      source: '京东',
      url: 'https://item.jd.com/100056789012.html',
      updateTime: Date.now(),
      specs: {
        vram: 24,
        frequency: '1.9-2.5GHz',
        tdp: 355,
        cores: 6144
      }
    },
    {
      id: 'gpu-5',
      name: 'AMD Radeon RX 7900 XT',
      brand: 'AMD',
      price: 6499,
      originalPrice: 6999,
      change: -2.5,
      source: '京东',
      url: 'https://item.jd.com/100056789013.html',
      updateTime: Date.now(),
      specs: {
        vram: 20,
        frequency: '1.5-2.4GHz',
        tdp: 315,
        cores: 5376
      }
    },
    {
      id: 'gpu-6',
      name: 'AMD Radeon RX 7800 XT',
      brand: 'AMD',
      price: 3999,
      originalPrice: 4199,
      change: 0.8,
      source: '京东',
      url: 'https://item.jd.com/100056789014.html',
      updateTime: Date.now(),
      specs: {
        vram: 16,
        frequency: '1.9-2.5GHz',
        tdp: 263,
        cores: 3840
      }
    }
  ],
  memory: [
    {
      id: 'mem-1',
      name: '芝奇 Trident Z5 RGB DDR5-6400 32GB',
      brand: 'G.SKILL',
      type: 'DDR5',
      price: 1299,
      originalPrice: 1499,
      change: -5.2,
      source: '京东',
      url: 'https://item.jd.com/100057890123.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '6400MHz',
        cas: 32,
        voltage: 1.4
      }
    },
    {
      id: 'mem-2',
      name: '海盗船 Vengeance DDR5-5600 32GB',
      brand: 'Corsair',
      type: 'DDR5',
      price: 899,
      originalPrice: 999,
      change: -3.8,
      source: '京东',
      url: 'https://item.jd.com/100057890124.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '5600MHz',
        cas: 36,
        voltage: 1.25
      }
    },
    {
      id: 'mem-3',
      name: '金士顿 FURY Beast DDR5-5200 32GB',
      brand: 'Kingston',
      type: 'DDR5',
      price: 799,
      originalPrice: 899,
      change: -2.1,
      source: '京东',
      url: 'https://item.jd.com/100057890125.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '5200MHz',
        cas: 40,
        voltage: 1.25
      }
    },
    {
      id: 'mem-4',
      name: '英睿达 DDR5-4800 32GB',
      brand: 'Crucial',
      type: 'DDR5',
      price: 699,
      originalPrice: 799,
      change: -4.5,
      source: '京东',
      url: 'https://item.jd.com/100057890126.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '4800MHz',
        cas: 40,
        voltage: 1.1
      }
    },
    {
      id: 'mem-5',
      name: '芝奇 Trident Z RGB DDR4-3600 32GB',
      brand: 'G.SKILL',
      type: 'DDR4',
      price: 599,
      originalPrice: 699,
      change: -8.2,
      source: '京东',
      url: 'https://item.jd.com/100057890127.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '3600MHz',
        cas: 18,
        voltage: 1.35
      }
    },
    {
      id: 'mem-6',
      name: '海盗船 Vengeance LPX DDR4-3200 32GB',
      brand: 'Corsair',
      type: 'DDR4',
      price: 449,
      originalPrice: 549,
      change: -6.5,
      source: '京东',
      url: 'https://item.jd.com/100057890128.html',
      updateTime: Date.now(),
      specs: {
        capacity: '32GB (16GB×2)',
        frequency: '3200MHz',
        cas: 16,
        voltage: 1.35
      }
    }
  ],
  storage: [
    {
      id: 'ssd-1',
      name: '三星 990 PRO 2TB',
      brand: 'Samsung',
      type: 'NVMe',
      price: 1299,
      originalPrice: 1499,
      change: -8.5,
      source: '京东',
      url: 'https://item.jd.com/100058901234.html',
      updateTime: Date.now(),
      specs: {
        capacity: '2TB',
        readSpeed: '7450MB/s',
        writeSpeed: '6900MB/s',
        interface: 'PCIe 4.0 x4'
      }
    },
    {
      id: 'ssd-2',
      name: '西部数据 Black SN850X 2TB',
      brand: 'WD',
      type: 'NVMe',
      price: 1199,
      originalPrice: 1399,
      change: -6.2,
      source: '京东',
      url: 'https://item.jd.com/100058901235.html',
      updateTime: Date.now(),
      specs: {
        capacity: '2TB',
        readSpeed: '7300MB/s',
        writeSpeed: '6600MB/s',
        interface: 'PCIe 4.0 x4'
      }
    },
    {
      id: 'ssd-3',
      name: '英睿达 P5 Plus 2TB',
      brand: 'Crucial',
      type: 'NVMe',
      price: 999,
      originalPrice: 1199,
      change: -5.8,
      source: '京东',
      url: 'https://item.jd.com/100058901236.html',
      updateTime: Date.now(),
      specs: {
        capacity: '2TB',
        readSpeed: '6600MB/s',
        writeSpeed: '5000MB/s',
        interface: 'PCIe 4.0 x4'
      }
    },
    {
      id: 'ssd-4',
      name: '三星 870 EVO 1TB',
      brand: 'Samsung',
      type: 'SATA SSD',
      price: 499,
      originalPrice: 549,
      change: -3.2,
      source: '京东',
      url: 'https://item.jd.com/100058901237.html',
      updateTime: Date.now(),
      specs: {
        capacity: '1TB',
        readSpeed: '560MB/s',
        writeSpeed: '530MB/s',
        interface: 'SATA 6Gbps'
      }
    },
    {
      id: 'ssd-5',
      name: '英睿达 MX500 1TB',
      brand: 'Crucial',
      type: 'SATA SSD',
      price: 399,
      originalPrice: 449,
      change: -4.5,
      source: '京东',
      url: 'https://item.jd.com/100058901238.html',
      updateTime: Date.now(),
      specs: {
        capacity: '1TB',
        readSpeed: '560MB/s',
        writeSpeed: '510MB/s',
        interface: 'SATA 6Gbps'
      }
    },
    {
      id: 'hdd-1',
      name: '希捷 酷鱼 4TB',
      brand: 'Seagate',
      type: 'HDD',
      price: 499,
      originalPrice: 549,
      change: -2.1,
      source: '京东',
      url: 'https://item.jd.com/100058901239.html',
      updateTime: Date.now(),
      specs: {
        capacity: '4TB',
        readSpeed: '190MB/s',
        writeSpeed: '190MB/s',
        interface: 'SATA 6Gbps'
      }
    }
  ]
}

function addRandomPriceFluctuation(price) {
  const fluctuation = (Math.random() - 0.5) * 0.02
  return Math.round(price * (1 + fluctuation))
}

export async function getMockPrices(category, param = null) {
  await new Promise(resolve => setTimeout(resolve, 100))
  
  if (category === 'single' && param) {
    for (const cat of Object.values(mockPriceData)) {
      const product = cat.find(p => p.id === param)
      if (product) {
        return {
          ...product,
          price: addRandomPriceFluctuation(product.price),
          updateTime: Date.now()
        }
      }
    }
    return null
  }
  
  if (category === 'search' && param) {
    const keyword = param.toLowerCase()
    const results = []
    for (const [cat, products] of Object.entries(mockPriceData)) {
      for (const product of products) {
        if (product.name.toLowerCase().includes(keyword) || 
            product.brand.toLowerCase().includes(keyword)) {
          results.push({
            ...product,
            price: addRandomPriceFluctuation(product.price),
            updateTime: Date.now()
          })
        }
      }
    }
    return results
  }
  
  const categoryMap = {
    cpu: 'cpu',
    gpu: 'gpu',
    memory: 'memory',
    storage: 'storage'
  }
  
  const dataKey = categoryMap[category] || category
  
  if (mockPriceData[dataKey]) {
    return mockPriceData[dataKey].map(product => ({
      ...product,
      price: addRandomPriceFluctuation(product.price),
      updateTime: Date.now()
    }))
  }
  
  return []
}
