
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {  
    slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
        pagination: {
          el: '.pag-2',
          type: 'fraction',
          clickable: true,
          slideToClickedSlide: true,
    },
  loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 57
      }
    }
  })
    
   // Бургер меню
   window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger').addEventListener('click', function(){
     document.querySelector('#menu').classList.toggle('is-active')

     })
    }) 
    $( document ).ready(function() {


        $( ".menu" ).hide();
        $( ".burger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        
        
        });
        });
        });
  // socsety
  Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
      url  = 'http://vkontakte.ru/share.php?';
      url += 'url='          + encodeURIComponent(purl);
      url += '&title='       + encodeURIComponent(ptitle);
      url += '&description=' + encodeURIComponent(text);
      url += '&image='       + encodeURIComponent(pimg);
      url += '&noparse=true';
      Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
      url  = 'http://www.facebook.com/sharer.php?s=100';
      url += '&p[title]='     + encodeURIComponent(ptitle);
      url += '&p[summary]='   + encodeURIComponent(text);
      url += '&p[url]='       + encodeURIComponent(purl);
      url += '&p[images][0]=' + encodeURIComponent(pimg);
      Share.popup(url);
    },
    instagram: function(purl, ptitle, pimg, text) {
      url  = 'http://instagram.com/###?ref=badge';
      url += '&p[title]='     + encodeURIComponent(ptitle);
      url += '&p[summary]='   + encodeURIComponent(text);
      url += '&p[url]='       + encodeURIComponent(purl);
      url += '&p[images][0]=' + encodeURIComponent(pimg);
      Share.popup(url);
    },
    popup: function(url) {
      window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
  };
  // yandex maps

    // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("myMap1", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [50.41236274945651,36.91282616878153],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 16
            });
            
            // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Шоурум №4',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.svg',
            // Размеры метки.
            iconImageSize: [28, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.75846306898368,37.601079499999905], {
            
        
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
        }
        
        // validation
        var selector = document.querySelector("input[type='tel']");
        var im = new Inputmask("+7 (999) 999-99-99");

        im.mask(selector);
        
        new JustValidate('.contacts__form', {
            rules: {
               name: {
                required: true,
                minLength: 2,
                maxLength: 10
              },
              tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.Inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
              },

              mail: {
                required: true,
                email: true
              },
            },
        });