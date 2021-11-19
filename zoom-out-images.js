// ==UserScript==
// @name         阮一峰科技爱好者周刊图片缩小
// @namespace    https://github.com/cycychenyi
// @version      0.3
// @description  打开页面时，默认把图片都缩小到 20%，方便快速浏览。点击恢复原来大小，再点击缩小到 20%。
// @author       cycychenyi
// @match        http*://www.ruanyifeng.com/blog/*/weekly-issue-*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; ++i) {
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
