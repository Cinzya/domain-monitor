/* Registers SW */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw_prototype/sw.js', { scope: '/sw_prototype/' }).then(function(reg) {
      // Registrierung erfolgreich
      console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
    }).catch(function(error) {
      // Registrierung fehlgeschlagen
      console.log('Registrierung fehlgeschlagen mit ' + error);
    });
  };


  /*Weiß gar nicht, ob wir das brauchen, ich check es jedenfalls nicht.
  Wenn wir es weglassen, können wir auch image-list.js löschen*/
  
  // function for loading each image via XHR

function imgLoad(imgJSON) {
    // return a promise for an image loading
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', imgJSON.url);
      request.responseType = 'blob';
  
      request.onload = function() {
        if (request.status == 200) {
          var arrayResponse = [];
          arrayResponse[0] = request.response;
          arrayResponse[1] = imgJSON;
          resolve(arrayResponse);
        } else {
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };
  
      request.onerror = function() {
        reject(Error('There was a network error.'));
      };
  
      // Send the request
      request.send();
    });
  }
  
  var imgSection = document.querySelector('section');
  
  window.onload = function() {
  
    // load each set of image, alt text, name and caption
    for(var i = 0; i<=Gallery.images.length-1; i++) {
      imgLoad(Gallery.images[i]).then(function(arrayResponse) {
  
        var myImage = document.createElement('img');
        var myFigure = document.createElement('figure');
        var myCaption = document.createElement('caption');
        var imageURL = window.URL.createObjectURL(arrayResponse[0]);
  
        myImage.src = imageURL;
        myImage.setAttribute('alt', arrayResponse[1].alt);
        myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1].credit;
  
        imgSection.appendChild(myFigure);
        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);
  
      }, function(Error) {
        console.log(Error);
      });
    }
  };