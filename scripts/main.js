(function(){
  'use strict';

  var corkMaps = etsyItems.results;

  $(document).ready(function(){

    var $list = $('.cork-maps-list');

    corkMaps.forEach(function(cork){
      var corkMapText = renderTemplate('cork-map-item', {
        title: cork.title,
        shop: cork.Shop.shop_name,
        price: cork.price,
        image: cork.Images[0].url_170x135,

      });
      $list.append(corkMapText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

})();
