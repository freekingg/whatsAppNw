// Create a new window and get it
nw.Window.open('https://web.whatsapp.com/', {}, function(new_win) {
  new_win.on('focus', function() {
    console.log('New window is focused');
  });
});

