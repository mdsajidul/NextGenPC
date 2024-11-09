// service-worker.js

const CACHE_NAME = 'offline-cache-v1'; // Cache name
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icon.png',
    '/profile.html',
    '/profile.css',
    '/profile.js',
    '/lesson1.html',
    '/lesson1.css',
    '/lesson1.js',
    '/quiz-home.html',
    '/quiz-home.css',
    '/quiz-home.js',
    '/game-home.html',
    '/game-home.css',
    '/game-home.js',
    '/back-to-islam.html',
    '/back-to-islam.css',
    '/back-to-islam.js',
    '/bmi.html',
    '/bmi.css',
    '/bmi.js',
    '/bmx.html',
    '/bmx.css',
    '/bmx.js',
    '/age.html',
    '/age.css',
    '/age.js',
    '/word-counter.html',
    '/word-counter.css',
    '/word-counter.js',
    '/ikigai.html',
    '/ikigai.css',
    '/ikigai.js',
    '/emi.html',
    '/emi.css',
    '/emi.js',
    '/submit.html',
    '/submit.css',
    '/submit.js'
];

// Install event - Cache all files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Files are being cached');
                return cache.addAll(FILES_TO_CACHE); // Add all files to the cache
            })
    );
});

// Fetch event - Serve files from cache if available, or fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
    );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Only keep the latest cache
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName); // Remove old caches
                        }
                    })
                );
            })
    );
});

// Listen for messages from the main page (for manual caching)
self.addEventListener('message', (event) => {
    if (event.data.action === 'cacheFiles') {
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(FILES_TO_CACHE);
                console.log('All files are now cached.');
            })
            .catch((err) => console.error('Error caching files: ', err));
    }
});
