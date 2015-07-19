$(document).ready(function(){
  $(".main").onepage_scroll({
      pagination: false,
      updateURL: false,
      loop: false
  });
  $('.movedown').click(function(e){
    $('.main').moveDown();
  });
  $('.topHome').click(function(e){
    $('.main').moveTo(1);
  });

  $.i18n.init({
      //lng: 'en',
      escapeInterpolation: false,
      ns: { namespaces: ['ns.common'], defaultNs: 'ns.common'},
      useLocalStorage: false,
      debug: true
  }, function(t) {
      $('#home').i18n();
      $('#matrimonio').i18n();
      $('#viaggio').i18n();
      $('#contatti').i18n();
  });
  $(".alberto .mail").click(function(e) { 
    e.preventDefault();
    window.location.href = mailto("alberto.colella+matrimonio2015", "gmail.com", ""); 
  });
});


function mailto(user, domain, subject){ 
  return "mai" + "lto" + ":" + user + "@" + domain + "?subject=" + subject ;
};