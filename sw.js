const CACHE_NAME = "jap-app-v1";
const FILES_TO_CACHE =[
    "./",
    "./index.html",
    "./start.css",
    "./own.html",
    "./own.css",
    "./jap.html",
    "./style.css",
    "./app.js",
    "./in.mp3",
    "./harekrishna.mp3",
    "./click.mp3",
    "./complete.mp3",
    "./icon.png",  
];

self.addEventListener("install",event=>{
    event.waitUntill(
        catches.open(CACHE_NAME)
        .then(cache=>cache.addAll(FILES_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener("activate", event=>{
    event.waitUntill(
        cacheskeys().then(keys=>{
            return Promise.all(
                keys 
                .filter(key=> key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch",event=>{
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});