const CACHE_NAME = 'ai-alex-v1.0.0';
const FONT_CACHE = 'ai-alex-fonts-v1';
const APP_SHELL = ['/', '/index.html', '/manifest.json', '/favicon.ico',
  '/icons/icon-192x192.png', '/icons/icon-512x512.png', '/icons/apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(APP_SHELL).catch(() => {})
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME && n !== FONT_CACHE).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open(FONT_CACHE).then(cache =>
      cache.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(r => { if (r.ok) cache.put(event.request, r.clone()); return r; })
          .catch(() => new Response('', { status: 503 }));
      })
    ));
    return;
  }
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(r => {
        if (!r.ok) return r;
        caches.open(CACHE_NAME).then(c => c.put(event.request, r.clone()));
        return r;
      }).catch(() => event.request.destination === 'document' ? caches.match('/index.html') : new Response('Offline', { status: 503 }));
    })
  );
});
