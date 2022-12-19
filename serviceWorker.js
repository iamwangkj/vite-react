const CACHE_NAME = 'CACHE_NAME'
const urlsToCache = ['kj.com']

console.log('self=', self)
console.log('this', this)

self.addEventListener('install', (event) => {
  console.log('install事件')
  self.skipWaiting() // 用来强制更新的servicework跳过等待时间
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('cache=', cache)
      return cache.addAll(urlsToCache)
    })
  )
})
