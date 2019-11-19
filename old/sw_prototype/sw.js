self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/sw_prototype/',
          '/sw_prototype/index.html',
          '/sw_prototype/css/style.css',
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
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/sw_prototype/img/cat1.jpg');
        });
      }
    }));
  });