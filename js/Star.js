// 禁止用户使用鼠标右键菜单
document.oncontextmenu = function() {
    return false;
};
// 禁止用户选中内容
document.onselectstart = function() {
    return false;
};

// 设置  客服图片  跟随手指移动
var star = document.querySelector('.Star');
var sr_X = 0,
    sr_Y = 0;
var sr_startX = 0,
    sr_startY = 0;
star.addEventListener('touchstart', function(e) {
    sr_startX = e.targetTouches[0].pageX;
    sr_startY = e.targetTouches[0].pageY;
    sr_X = this.offsetLeft;
    sr_Y = this.offsetTop;
});

star.addEventListener('touchmove', function(e) {
    var moveX = e.targetTouches[0].pageX - sr_startX,
        moveY = e.targetTouches[0].pageY - sr_startY;
    this.style.left = moveX + sr_X + 'px';
    this.style.top = moveY + sr_Y + 'px';
    e.preventDefault();
});

// PC端 客服球跟随鼠标移动
star.addEventListener('mousedown', function(e) {
    this.offsetLeft = e.pageX;
    this.offsetTop = e.pageY;
});

// 设置  客服图片  不超出可视区
star.addEventListener('touchmove', function() {
    let wdw = window.screen.availWidth,
        wdh = window.screen.availHeight;
    if (this.offsetLeft <= 0 && this.offsetTop <= 0) {
        this.style.left = this.style.top = 0;
    } else if (this.offsetLeft >= wdw - 70 && this.offsetTop >= wdh - 70) {
        this.style.top = wdh - 70 + 'px';
        this.style.left = wdw - 70 + 'px';
    } else if (this.offsetLeft >= wdw - 70 && this.offsetTop <= 0) {
        this.style.left = wdw - 70 + 'px';
        this.style.top = 0;
    } else if (this.offsetTop >= wdh - 70 && this.offsetLeft <= 0) {
        this.style.top = wdh - 70 + 'px';
        this.style.left = 0;
    } else if (this.offsetLeft <= 0) {
        this.style.left = 0;
    } else if (this.offsetTop <= 0) {
        this.style.top = 0;
    } else if (this.offsetLeft >= wdw - 70) {
        this.style.left = wdw - 70 + 'px';
    } else if (this.offsetTop >= wdh - 70) {
        this.style.top = wdh - 70 + 'px';
    }
});

// 设置 客服图片 点击跳转
star.addEventListener('click', function() {
    location.href =
        'https://openai.weixin.qq.com/webapp/RXLuhdKuxR0346ycBhemVyelAPvJd5?robotName=%E6%98%9F%E5%96%B5';
});

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var sp = document.querySelector('.swiper'),
    sp_next = sp.querySelector('.swiper-button-next'),
    sp_prev = sp.querySelector('.swiper-button-prev');
var tim = setInterval(function() {
    sp_next.click();
}, 2500);
sp.addEventListener('mouseenter', function() {
    clearInterval(tim);
    sp_next.style.display = 'block';
    sp_prev.style.display = 'block';
});
sp.addEventListener('mouseleave', function() {
    tim = setInterval(function() {
        sp_next.click();
    }, 2500);
    sp_next.style.display = 'none';
    sp_prev.style.display = 'none';
});

document.addEventListener('keyup', function() {
    apk(window, 0);
});

function apk(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    }, 10);
}
