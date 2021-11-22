// đóng mở menu

var header = document.querySelector('.responsive-menu');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed) {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
}
