// service-worker.js

// Install event for caching all necessary files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',                 // Root page
                '/index.html',       // Main page
                '/styles.css',       // CSS file
                '/script.js',        // JavaScript file
                '/manifest.json',    // Manifest file
                '/icon.png',         // Icon file
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
                '/submit.js',
            ]);
        })
    );
});

// Fetch event to serve cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
