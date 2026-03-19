const CACHE_NAME = 'gsc-actas-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo_entidad.png',
  './logo_consicor.png',
  './mapa_tramo_1.jpg',
  './mapa_tramo_2.jpg',
  './mapa_tramo_3.jpg',
  './mapa_tramo_4.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  // Delete all caches that aren't named in CACHE_NAME.
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Immediately take control of the page
  );
});

self.addEventListener('fetch', event => {
  // Network-first strategy: Always try to get the newest file from the internet requested by the app.
  // If the internet completely drops/fails, then (and only then) pull the copy stored in the Service Worker Cache.
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});