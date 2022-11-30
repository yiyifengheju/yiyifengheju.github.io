var photo = {
    page: 0,
    //offset 用于设置照片数量的上限
    offset: 1000,
    init: function () {
        var that = this;
        //这里设置的是刚才生成的 json 文件路径
        $.getJSON("/photos/figureBed.json ",
            function (data) {
                that.render(that.page, data);
            });
    },
    render: function (page, data) {
        var begin = page;
        var end = page * this.offset;
        if (begin >= data.length) return;
        var li = "";
        for (var i = begin; i < this.offset && i < data.length; i++) {
            pic_url = data[i].toString().split(',')[0];
            pic_name = data[i].toString().split(',')[1];
            li += '<div class="card" style="width: auto; break-inside: avoid; box-sizing: border-box;">' +
                '<div class="ImageInCard" style=" height: auto ">' +
                '<a data-fancybox="gallery" href="' + pic_url + '">' +
                '<img src="' + pic_url + '"/>' + '</a>' +
                '</div>' +
                '<div class="TextInCard">' + pic_name + '</div>' + //图片下显示文件名作为说明的功能
                '</div>';
            console.log(data[i]);
        }
        $(".ImageGrid ").append(li);
        $(".ImageGrid ").lazyload();
    }
};
photo.init();

