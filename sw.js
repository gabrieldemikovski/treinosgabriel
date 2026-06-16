// Arquivo: sw.js
const CACHE_NAME = 'fitflow-gabriel';

// Lista das páginas principais que o celular vai baixar para funcionar offline
const urlsToCache = [
  '/',
  '/index.html',
  '/treino.html',
  '/historico.html',
  '/simuladotaf.html',
  '/perfil.html'
];

// Instala o Service Worker e salva os arquivos no cache do celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta os carregamentos para rodar liso igual aplicativo nativo
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});