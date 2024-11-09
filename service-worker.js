// service-worker.js

const filesToCache = [
    '/', // মূল পেজ
    '/index.html',
    '/styles.css',
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

// Install event to cache all the files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            console.log('Caching files...');
            return cache.addAll(filesToCache);  // ক্যাশে ফাইল গুলি রাখা
        })
    );
});

// Fetch event to serve cached files or fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// Listen to message to cache files on demand
self.addEventListener('message', (event) => {
    if (event.data.action === 'cacheFiles') {
        caches.open('my-cache').then((cache) => {
            console.log('Caching files on demand...');
            return cache.addAll(filesToCache);
        });
    }
});
