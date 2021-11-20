// ==UserScript==
// @name         Trello GitHub issue 标签黑色字体
// @namespace    https://greasyfork.org/zh-CN/users/459661-cycychenyi
// @version      0.3
// @description  Tello GitHub Power-Up issue 标签默认白色字体，我使用浅色标签居多，会导致看不清标签上的字，故设置为黑色字体。
// @author       cycychenyi
// @match        http*://github.trello.services/issues.html*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @resource     waitForKeyElements https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

eval(GM_getResourceText('waitForKeyElements'));

waitForKeyElements('.label', function() {
    'use strict';
    const labels = document.getElementsByClassName('label');
    for (let i = 0; i < labels.length; ++i) {
        labels[i].style.color = 'black';
    }
});
