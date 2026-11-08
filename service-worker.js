self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('electrovoz-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './catalog.json',
      './stocks.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});