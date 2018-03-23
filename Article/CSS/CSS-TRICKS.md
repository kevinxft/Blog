## CSS-TRICKS

CSS 技巧

> https://css-tricks.com/almanac/properties/

### float 和 position

当一个行内元素被设置了 float 和 position 的时候，这个行内元素可以设置宽高

### user-select:none

不可选中，就无法复制了

```css
.icon {
  -webkit-user-select: none; /* Chrome all / Sarari all */
  -moz-user-select: none; /* Firfox all   */
  -ms-user-select: none; /* IE 10+ /*
           user-select: none;  /* futrue */
}
```
