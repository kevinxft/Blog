# 参照掘金一篇文章，过一遍css动画,并做一些补充
参照: [编写自己的代码库(css3常用动画的实现)](https://juejin.im/post/5a0c18196fb9a045023b2ddf)

# 变大变小
基础样式
```css
span {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    color: #333;
    background: #ccc;
    min-width: 80px;
    padding: 0 10px;
    margin: 10px;
}

```
## 1.变大变小
### transition
transition属性只是一个简写，用于设置四个过度属性：
> 默认值: all 0 ease 0
- transition-property
- transition-duration
- transition-timing-function
- transition-delay

> 始终设置transiton-duration属性，不然没有过度效果

```html 
<span class="each-big">big</span>
<span class="each-small">small</span>
<!-- 鼠标悬浮，放大或者缩小的示例 -->
```

```css
/* transiton: proerty duration timing-function delay */
.each-big, .each-samll {
    transiton: all .4s;
}

.each-big:hover {
    transform: scale(1.2);
}

.each-samll:hover {
    transform: scale(.9);
}
```
## 形状变化

```html


```