$(document).ready(function(event){
  _init();
});

function _init() {
  _initEvents();
  _initBackgroundImage();
  digi();
}

function _initEvents() {
  $('.finder-list .right-col').slimScroll({
		height: '500px',
    width:'70%'
	});
  $('.finder-body').slimScroll({
		width: '100%',
    height: 'calc(100% - 140px)'
  });
  $('#full-screen-js').on('click', function(event) {
    _initFullScreen();
  });
  $('#theme-switcher-js').on('click', function(event) {
    $('html').toggleClass('light-theme dark-theme');
  })
  $('.menu-item').on('click', function(event){
    event.preventDefault();
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    $('.main-section').removeClass('active');
    // console.log('event target ', $(event.target).attr('data-href'));
    $('#'+$(event.target).attr('data-href')).addClass('active');
  });
  $('.gallery-item-wrapper').on('click', function(e){
    $('.design-details-wrapper').addClass('hidden');
    $('#'+$(this).attr('data-id')).removeClass('hidden');
    $('.finder-container').addClass('perspective');
    window.setTimeout(function(){
      $('.finder-wrapper-list').addClass('perspective');
    },200);
  });
  $('.finder-close').on('click', function(e){
    $('.finder-container').removeClass('perspective');
    window.setTimeout(function(){
      $('.finder-wrapper-list').removeClass('perspective');
    },200);
  });
}

function _initFullScreen() {
  // $('body').requestFullscreen();
  elem = document.querySelector('html');
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
  elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
  elem.msRequestFullscreen();
  }
}

function _initBackgroundImage() {
  var tmpImg = new Image() ;
  tmpImg.src = './../assets/images/bg.jpg';
  tmpImg.onload = function() {
    $('html.light-theme').removeClass('preload').addClass('postload');
  }

  var tmpImgDark = new Image() ;
  tmpImgDark.src = './../assets/images/bg_dark.jpg';
  tmpImgDark.onload = function() {
    $('html.dark-theme').removeClass('preload').addClass('postload');
  }
}
