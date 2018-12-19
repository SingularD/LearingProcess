# 原生JS练习

### 控制DIV

通过JS获取到指定元素的css样式

1. 如果css样式是内嵌（现在元素标签内部）：

   ```Js
   document.getElement.style
   ```

2. 外联(获取到的是最终的样式，适用于外联引入css)

   ```Js
   let dom = document.getElementById('id');
   let demo = window.getComputedStyle(dom, null).width;
   ```

   或者

   ```js
   document.getElement.offsetWidth;
   document.getElement.offsetHeight;
   ```

   改语句返回的是整型，并且适用于所有方式，而上一种是字符串；

3. 批量修改css样式

   ```js
   document.getElement.style.cssText = "background-color:Blue; border:solid 1px red; width:300px; height:200px; background-position:center";
   ```





### 网站换肤

1. 获取浏览器可见区域的尺寸

   ```Js
   window.innerWidth;
   window.innerHeight
   ```



改变鼠标形状

css: `cursor`属性

js: `element.style.cursor`

