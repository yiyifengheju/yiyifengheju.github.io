/* global NexT, CONFIG, Pjax */

const pjax = new Pjax({
  selectors: [
    'head title',
    'script[type="application/json"]',
    '.main-inner',
    '.post-toc-wrap',
    '.languages',
    '.pjax'
  ],
  analytics: false,
  cacheBust: false,
  scrollTo : !CONFIG.bookmark.enable
});

 //添加以下代码
 var dynamicLoading = {
      css: function(path){
            if(!path || path.length === 0){
              throw new Error('argument "path" is required !');
            }
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
      },
      js: function(path){
        if(!path || path.length === 0){
          throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
      }
}

document.addEventListener('pjax:success', () => {
  pjax.executeScripts(document.querySelectorAll('script[data-pjax]'));
  NexT.boot.refresh();
  // loadDPlayer();
  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
      .init()
      .add(NexT.motion.middleWares.subMenu)
      .add(NexT.motion.middleWares.postList)
      .bootstrap();
  }
  const hasTOC = document.querySelector('.post-toc');
  document.querySelector('.sidebar-inner').classList.toggle('sidebar-nav-active', hasTOC);
  NexT.utils.activateSidebarPanel(hasTOC ? 0 : 1);
  NexT.utils.updateSidebarPosition();

  if(document.getElementsByTagName("ImageGrid")){
    //动态加载 CSS 文件
    dynamicLoading.css("/css/gallery.css");
    //动态加载 JS 文件
    dynamicLoading.js("/js/photo.js");
  }
  // if(document.getElementsByTagName("hexo-douban-tabs")){
  //   //动态加载 CSS 文件
  //   dynamicLoading.css("/css/douban.css");
  //   dynamicLoading.js("/js/douban.js");
  // }
  // if(document.getElementsByTagName("hexo-douban-pagination")){
  //   //动态加载 CSS 文件
  //   dynamicLoading.css("/css/douban.css");
  //   dynamicLoading.js("/js/douban.js");
  // }
  //   if(document.getElementsByTagName("pullquote mindmap mindmap-md km-view")){
  //   //动态加载 CSS 文件
  //   dynamicLoading.css("https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@0.6.0/dist/mindmap.min.css");
  //   dynamicLoading.js("https://cdn.jsdelivr.net/npm/hexo-simple-mindmap@0.6.0/dist/mindmap.min.js");
  //   dynamicLoading.js("https://cdn.jsdelivr.net/npm/kityminder-core@1.4.50/dist/kityminder.core.min.js");
  //   dynamicLoading.js("https://cdn.jsdelivr.net/npm/kity@2.0.4/dist/kity.min.js");
  // }
  //   if(document.getElementById("dplayer0")){
  //     if (window.dplayers) {
  //       for (let i = 0; i < window.dplayers.length; i++) {
  //           window.dplayers[i].destroy();
  //       }
  //       window.dplayers = [];
  //     }

    // dynamicLoading.js("https://cdn.jsdelivr.net/npm/hexo-tag-dplayer@0.3.3/index.min.js");
    // dynamicLoading.js("https://cdn.jsdelivr.net/npm/dplayer@1.27.0/dist/DPlayer.min.js");
    // dynamicLoading.js("/js/dplayer0.js");
    // dynamicLoading.js("/js/dplayer00.js");
  // }

});
