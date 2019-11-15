self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/sw_prototype/',
          '/sw_prototype/index.html',
          '/sw_prototype/style.css',
          '/sw_prototype/app.js',
          '/sw_prototype/image-list.js',
          '/sw_prototype/img/cat1.jpg',
          '/sw_prototype/img/cat2.jpg',
          '/sw_prototype/img/cat3.jpg',
          '/sw_prototype/img/cat4.jpg',
          '/sw_prototype/img/cat5.jpg'
        ]);
      })
    );
  });

  /*Holt Dateien vom Cache, wenn Internet nicht geht */
  this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).catch(function() {
        return fetch(event.request);
      })
    );
  });