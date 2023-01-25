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

// 添加以下代码///////////////////////////////////////
var dynamicLoading = {
  css: function (path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
  },
  js: function (path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    head.appendChild(script);
  }
}
///////////////////////////////////////////////

document.addEventListener('pjax:success', () => {
  pjax.executeScripts(document.querySelectorAll('script[data-pjax]'));
  NexT.boot.refresh();
  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
      .init()
      .add(NexT.motion.middleWares.subMenu)
      .add(NexT.motion.middleWares.postList)
      // Add sidebar-post-related transition.
      .add(NexT.motion.middleWares.sidebar)
      .bootstrap();
  }
  if (CONFIG.sidebar.display !== 'remove') {
    const hasTOC = document.querySelector('.post-toc');
    document.querySelector('.sidebar-inner').classList.toggle('sidebar-nav-active', hasTOC);
    NexT.utils.activateSidebarPanel(hasTOC ? 0 : 1);
    NexT.utils.updateSidebarPosition();
  }

  // 动态刷新gallery页面
  if (document.getElementById("gallery")) {
    dynamicLoading.css("/css/gallery.css");
    dynamicLoading.js("/js/photo.js");
  }
  // 动态刷新aplayer
  if (document.getElementById('aplayer')) {
    dynamicLoading.css("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css");
    dynamicLoading.js("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js");
    dynamicLoading.js("/lib/js/tydhan.js");
  }
});
