window.fbAsyncInit = function() {
    FB.init({
      appId      : '148922782339638',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=148922782339638";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));;

  //3. Check Login Status
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//4.Esta es la devolución de llamada. Llama a FB.getLoginStatus()
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

