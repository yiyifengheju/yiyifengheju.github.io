if (window.player0) {
    window.player0.destroy();
}


var player0 = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    lrcType: 3,
    mutex: true,
    audio: {
        name: '他一定很爱你',
        artist: '阿杜',
        url: '/lib/music/tydhan.mp3',
        cover: '/lib/music/tydhan.jpg',
        lrc: '/lib/music/tydhan.txt'
    }
});