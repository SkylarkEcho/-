function scrollNews() { 
    var $news = $('.father table'); 
    var $lineHeight = $news.find('tr:first').height(); 
    /*下行的数字100  控制自动换行时的速度*/
    $news.animate({ 'marginTop': -$lineHeight + 'px' }, 100, function () { 
        $news.css({ margin: 0 }).find('tr:first').appendTo($news); 
    }); 
}  
var scrollTimer = null; 
/*delay  控制从头到尾一次完整的自动播放的时间*/ 
var delay = 1500; 
scrollTimer = setInterval(function () { 
    scrollNews(); 
}, delay); 
