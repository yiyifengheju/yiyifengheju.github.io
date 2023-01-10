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
        url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e55f9e2-a263-4425-90f0-fd29c4cd87db/%E9%98%BF%E6%9D%9C-%E4%BB%96%E4%B8%80%E5%AE%9A%E5%BE%88%E7%88%B1%E4%BD%A0.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230107T044320Z&X-Amz-Expires=86400&X-Amz-Signature=3565bf64881f3c76f4221efac3998c5d2ea300289e09db027ca2a5cba9a96310&X-Amz-SignedHeaders=host&x-id=GetObject',
        cover: 'https://mastermaoo.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83431a64-505e-456e-828b-477a23f86af1%2Fad.jpg?id=669acebb-e370-4e64-8dcc-341d6becd270&table=block&spaceId=be29b58a-cc81-4e09-84b4-38b3f54d3644&width=260&userId=&cache=v2',
        lrc: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77e6cfa7-1f58-466f-be46-bb2cdad1af85/tydhan.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230107T050731Z&X-Amz-Expires=86400&X-Amz-Signature=7be5228a232f9d0f0357de729ddea497e8feec840b69e8154466fe50f78c7694&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22tydhan.txt%22&x-id=GetObject'
    }
});