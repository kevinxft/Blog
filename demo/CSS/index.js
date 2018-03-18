import "./base.css";
import "./kevin.css"
// import './demo1.css'
// import "./demo2.css";
// import "./demo3.css";
// import "./demo4.css";
// import "./demo5.css";
// import "./demo6.css";
// import "./demo7.css";
// import "./demo8.css";
// import "./demo9.css";
// import "./2/2.2.css"
// import "./2/2.2_.css"
// import "./2/2.3.css";
import "./2/2.3_.css";
// import "./demo10.css";


function component(name, className) {
  var ele = document.createElement("span");
  ele.innerHTML = name || "span-text";
  if (className) {
    ele.classList.add(className);
  }

  return ele;
}

/**
 * 变大变小
 */

// document.body.appendChild(component())
// document.body.appendChild(component('big', 'each-big'))
// document.body.appendChild(component('small', 'each-small'))

/**
 * 形状变化
 */
// document.body.appendChild(component("skew-l", "each-skew-l"));
// document.body.appendChild(component("skew-r", "each-skew-r"));
// document.body.appendChild(component("skew-l-t", "each-skew-l-t"));
// document.body.appendChild(component("skew-r-t", "each-skew-r-t"));
// document.body.appendChild(component("skew-l-b", "each-skew-l-b"));
// document.body.appendChild(component("skew-r-b", "each-skew-r-b"));

/**
 * 旋转变化
 */

//  document.body.appendChild(component('grow-rotate-l','each-grow-rotate-l'))
//  document.body.appendChild(component('grow-rotate-r','each-grow-rotate-r'))
//  document.body.appendChild(component('rotate5','each-rotate5'))
//  document.body.appendChild(component('rotate15','each-rotate15'))
//  document.body.appendChild(component('rotate30','each-rotate30'))
//  document.body.appendChild(component('rotate60','each-rotate60'))
//  document.body.appendChild(component('rotate90','each-rotate90'))
//  document.body.appendChild(component('rotate180','each-rotate180'))
//  document.body.appendChild(component('rotate360','each-rotate360'))
//  document.body.appendChild(component('rotate-5','each-rotate-5'))
//  document.body.appendChild(component('rotate-15','each-rotate-15'))
//  document.body.appendChild(component('rotate-30','each-rotate-30'))
//  document.body.appendChild(component('rotate-60','each-rotate-60'))
//  document.body.appendChild(component('rotate-90','each-rotate-90'))
//  document.body.appendChild(component('rotate-180','each-rotate-180'))
//  document.body.appendChild(component('rotate-360','each-rotate-360'))

/**
 * 位移变化
 */
//  document.body.appendChild(component('up','each-t'))
//  document.body.appendChild(component('bottom','each-b'))
//  document.body.appendChild(component('left','each-l'))
//  document.body.appendChild(component('right','each-r'))
 
/**
 * 边框变化
 */
//  document.body.appendChild(component('border', 'each-border'))
//  document.body.appendChild(component('border-in', 'each-border-in'))

/**
 * 阴影变化
 */
// document.body.appendChild(component('shadow', 'each-shadow'))
// document.body.appendChild(component('shadow-in', 'each-shadow-in'))
// document.body.appendChild(component('shadow-write', 'each-shadow-write'))
// document.body.appendChild(component('shadow-big', 'each-shadow-big'))

/**
 * 透明度变化
 */

//  document.body.appendChild(component('fade-out','each-fade-out'))
//  document.body.appendChild(component('fade-in','each-fade-in'))

/**
 * 圆角变化
 */

//  document.body.appendChild(component('rectangle','each-rectangle'))
//  document.body.appendChild(component('radius','each-radius'))

/**
 * 颜色快变化
 */

//  document.body.appendChild(component('fade', 'each-fade'))
//  document.body.appendChild(component('fade-t', 'each-fade-t'))
//  document.body.appendChild(component('fade-b', 'each-fade-b'))
//  document.body.appendChild(component('fade-l', 'each-fade-l'))
//  document.body.appendChild(component('fade-r', 'each-fade-r'))
//  document.body.appendChild(component('bounce-t', 'each-bounce-t'))
//  document.body.appendChild(component('bounce-b', 'each-bounce-b'))
//  document.body.appendChild(component('bounce-l', 'each-bounce-l'))
//  document.body.appendChild(component('bounce-r', 'each-bounce-r'))
//  document.body.appendChild(component('fade-c-out', 'each-fade-c-out'))
//  document.body.appendChild(component('fade-c-in', 'each-fade-c-in'))
//  document.body.appendChild(component('fade-m-out', 'each-fade-m-out'))
//  document.body.appendChild(component('fade-m-in', 'each-fade-m-in'))

//  document.body.appendChild(component('K-fade', 'k-fade'))
//  document.body.appendChild(component('K-fade-t', 'k-fade-t'))
//  document.body.appendChild(component('K-fade-b', 'k-fade-b'))
//  document.body.appendChild(component('K-fade-l', 'k-fade-l'))
//  document.body.appendChild(component('K-fade-r', 'k-fade-r'))

/**
 * 颜色上下划线变化
 */

//  document.body.appendChild(component('overline-l','each-overline-l'))
//  document.body.appendChild(component('overline-r','each-overline-r'))
//  document.body.appendChild(component('underline-l','each-underline-l'))
//  document.body.appendChild(component('underline-r','each-underline-r'))

//  document.body.appendChild(component('underline-c','each-underline-c'))
//  document.body.appendChild(component('overline-c','each-overline-c'))
//  document.body.appendChild(component('underline-c-out','each-underline-c-out'))
//  document.body.appendChild(component('overline-c-out','each-overline-c-out'))

/**
 * 箭头动画
 */
 document.body.appendChild(component('arrow-l','each-arrow-l'))
 document.body.appendChild(component('arrow-r','each-arrow-r'))
 document.body.appendChild(component('arrow-t','each-arrow-t'))
 document.body.appendChild(component('arrow-b','each-arrow-b'))

 document.body.appendChild(component('arrow-l-move','each-arrow-l-move'))
 document.body.appendChild(component('arrow-r-move','each-arrow-r-move'))
 document.body.appendChild(component('arrow-t-move','each-arrow-t-move'))
 document.body.appendChild(component('arrow-b-move','each-arrow-b-move'))