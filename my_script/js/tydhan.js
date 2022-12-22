if (window.player0) {
    window.player0.destroy();
}


var player0 = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    lrcType: 3,
    mutex: true,
    audio:{
            name: '他一定很爱你',
            artist: '阿杜',
            url: 'https://my-gallery-1306340269.cos.ap-beijing.myqcloud.com/%E6%AD%8C%E6%9B%B2/%E9%98%BF%E6%9D%9C-%E4%BB%96%E4%B8%80%E5%AE%9A%E5%BE%88%E7%88%B1%E4%BD%A0.flac',
            cover: '/my_script/cover/109951163076301483.jpg',
            lrc: '/my_script/lrc/tydhan.lrc'
        }
});