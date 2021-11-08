const buyButtons = document.querySelectorAll('.js-buy-ticket-btn');
const modal = document.querySelector('.modal');
const close_icon = document.querySelector('.modal-close');
const modal_container = document.querySelector('.modal-container');

/* bật modal khi click vao button */

function open_modal() {
    modal.classList.add('open');
}

for(var buybtn of buyButtons) {
    buybtn.addEventListener('click', open_modal);
}

/* tắt modal khi click vào x (icon đóng) trong modal container */
function close_modal() {
 modal.classList.remove('open');
}

close_icon.addEventListener('click', close_modal);

/* tắt modal khi click vào overlay bên ngoài */

modal.addEventListener('click', function(){
    modal.classList.remove('open');
})


/* ngăn modal tắt khi click vào modal container(box modal) - sự kiên nổi bọt  */


modal_container.addEventListener('click', function(event){
    event.stopPropagation();
})







/* mobile menu btn handle / đóng - mở menu */

var header = document.querySelector('#header');
var mobileMenu_btn = document.querySelector('.mobile-menu-btn');
var headerHeight = header.clientHeight;
mobileMenu_btn.onclick = ()=>{
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    } else {

        header.style.height = null; //null same at set height = 46px ()
    }
}


/* đóng menu khi nhấn chọn từng danh mục */
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// console.log(menuItems);
var menuItemsLength = menuItems.length;
for(var i = 0; i < menuItemsLength; i++) {
    var menuItem = menuItems[i];


    menuItem.onclick = function(event){
         //kiem tra khi nhan vao more(co menu con thi se khong an menu cha di)
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        } else {
            header.style.height = null; //mỗi lần bấm vào danh mục, nó sẽ set height của header = null(tức là đóng menu)   
        }
    }
}


