#viewport

## viewport meta 六大属性

* 1.  width: 设置 layout viewport 的宽度，可以是一个正整数或者字符串"width-device"
* 2.  initial-scale: 设置页面初始缩放值，数字，可以带小数
* 3.  minimun-scale: 允许用户最小缩放值，为数字，可带小数
* 4.  maximum-scale: 允许用户的最大缩放值,为数字，可带小数
* 5.  height: 设置 layout viewport 的高度
* 6.  user-scalable 是否允许用户进行缩放， 值为"no" 或 "yes"

## 三种 viewport

* 1.  layout viewport 布局视窗

网站的宽度, document.docuemntElement.clientHeight,可以通过 view 哦人头 meta 设置

* 2.  visual viewport 视觉视窗

代表浏览器可视区域的大小，docuemnt.documentElement.innerHeight 获取

* 3.  ideal viewport 理想视窗

主要用于移动设备 <br>
关系: **visula viewport width = ideal viewport width / zoom factor**
