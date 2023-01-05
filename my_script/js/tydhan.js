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
            url: 'https://cdn.jsdelivr.net/gh/yiyifengheju/Music@master/Music/20230104/tydhan.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/yiyifengheju/Music@master/Music/20230104/ad.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/yiyifengheju/Music@master/Music/20230104/tydhan.lrc'
        }
});