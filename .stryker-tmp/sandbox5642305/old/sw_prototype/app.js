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