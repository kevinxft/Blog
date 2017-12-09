// ==UserScript==
// @name         kv-menu
// @namespace    http://tampermonkey.net/
// @version      0.44
// @description  方便生成界面的tempmonkey脚本模板
// @author       Kevin
// @match        http://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    console.log('kv-menu is run');
    const blue = '#247BA0;'
    const green = '#70C1B3'
    const li_green = '#B2DBBF'
    const yellow = '#F3FFBD'
    const red = '#FF1654'

    GM_addStyle(`
    #k-menu{ z-index:999999;
            position:fixed;
            right:2%;
            display:flex;
            flex-direction: column;
            top:30%;
            width:100px;
            padding:10px;
            border-radius:4px;
            background:red;
        }
    #k-menu button:not(:first-child) {
            margin-top:5px;
    
`)

    const KT = {
        evt: {
            cb: function cb(e) {
                console.log(`按钮${e.currentTarget.innerHTML}被点击了`)
            },
            fuck() {
                console.log('fuckyoumoney')
            }
        },
        createEle: function (item) {
            let ele = document.createElement('button')
            ele.innerHTML = item.name || 'btn'
            ele.id = item.id || ''
            ele.addEventListener('click', item.cb || KT.evt.cb, false)
            return ele
        },
        initMenu() {
            let menu = document.createElement('div')
            menu.id = 'k-menu'
            buttons.forEach(item => {
                menu.appendChild(this.createEle(item))
            })
            document.body.appendChild(menu)
        }
    }

    const buttons = [
        {
            name: 'btn1',
            cb: null
        },
        {
            name: 'btn2',
            cb: KT.evt.fuck
        },
        {
            name: 'btn3',
            cb: null
        }
    ]


    KT.initMenu()


    // Your code here...
})();