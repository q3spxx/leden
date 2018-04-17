var site = {};
(function () {
  function ImgViewer () {
    this.setImg = function (path) {
      // enable imgViewer
      $('#img-viewer')[0].hidden = false;
      // no scroll
      $('body')[0].style.overflow = 'hidden';
      // scroll fix
      console.log(window.innerWidth);
      if (window.innerWidth > 991) {
        $('body')[0].style.paddingRight = '18px';
      };
      // enter img
      $('#img-viewer-img')[0].src = path;
      // height align
      $('#img-viewer-wrap')[0].style.marginTop = (window.innerHeight / 2 - $('#img-viewer-img')[0].height / 2) + 'px';
    };
    this.close = function () {
      // disable imgViewer and return default settings
      $('#img-viewer')[0].hidden = true;
      $('body')[0].style.paddingRight = '0px';
      $('body')[0].style.overflow = 'auto';
    };
  }
  function MainMenu () {
    this.opened = false;
    this.open = function () {
      if (this.opened) {
        $('#main-menu')[0].style.height = "0px";
        this.opened = false;
      } else {
        $('#main-menu')[0].style.height = "260px";
        this.opened = true;
      }
    }
  }
  site.imgViewer = new ImgViewer();
  site.mainMenu = new MainMenu();
}())
