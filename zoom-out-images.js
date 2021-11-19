// ==UserScript==
// @name         阮一峰科技爱好者周刊图片缩小
// @namespace    https://github.com/cycychenyi
// @version      0.1
// @description  打开页面时，默认把图片都缩小到 20%，方便快速浏览。点击恢复原来大小，再点击缩小到 20%。
// @author       cycychenyi
// @match        https://www.ruanyifeng.com/blog/*/weekly-issue-*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const images = document.getElementsByTagName('img');
    for (let i = 1; i < images.length; ++i) { // 第一张图片是 RSS 链接的图片，跳过
        images[i].style.maxWidth = '20%';
        images[i].onclick = function() {
            if (this.style.maxWidth === '') {
                this.style.maxWidth = '20%';
            } else {
                this.style.maxWidth = '';
            }
        }
    }
})();