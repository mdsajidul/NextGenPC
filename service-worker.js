// service-worker.js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/app.js',
                '/profile.html',           // Added
                '/profile.css',            // Added
                '/profile.js',             // Added
                '/lesson1.html',           // Added
                '/lesson1.css',            // Added
                '/lesson1.js',             // Added
                '/quiz-home.html',         // Added
                '/quiz-home.css',          // Added
                '/quiz-home.js',           // Added
                '/game-home.html',         // Added
                '/game-home.css',          // Added
                '/game-home.js',           // Added
                '/back-to-islam.html',     // Added
                '/back-to-islam.css',      // Added
                '/back-to-islam.js',       // Added
                '/bmi.html',               // Added
                '/bmi.css',                // Added
                '/bmi.js',                 // Added
                '/bmx.html',               // Added
                '/bmx.css',                // Added
                '/bmx.js',                 // Added
                '/age.html',               // Added
                '/age.css',                // Added
                '/age.js',                 // Added
                '/word-counter.html',     // Added
                '/word-counter.css',      // Added
                '/word-counter.js',       // Added
                '/ikigai.html',           // Added
                '/ikigai.css',            // Added
                '/ikigai.js',             // Added
                '/emi.html',              // Added
                '/emi.css',               // Added
                '/emi.js',                // Added
                '/submit.html',           // Added
                '/submit.css',            // Added
                '/submit.js'              // Added
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
