---
theme: github
---

# GUI-Challenges 系列之 Card-Stack

![card-stack.apng](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c64adb8acd624024aa3cf6c4ed803bad~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1511&h=1081&s=4679356&e=apng&f=428&b=131517)

## 结构

由两部分组成

1. 左边属性设置区域

```html
<form>
  <fieldset>
    <legend>Transform Origin</legend>
    <input type="radio" name="transform-origin" id="origin-center" value="center" />
    <label for="origin-center">center</label>
    ...
    <input type="radio" name="transform-origin" id="top-right" value="top right" />
    <label for="radio-top-right">top right</label>
    <br />
  </fieldset>
  ...
</form>
```

2. 右边卡片堆叠区域

```html
<div class="card-stack" style="--scalar: 10">
  <div class="card card-1"></div>
  <div class="card card-2"></div>
  <div class="card card-3"></div>
  <div class="card card-4"></div>
  <div class="card card-5"></div>
</div>
```

## 实现 Card Stack

卡片的 html 结构如下



要实现卡片堆叠的效果，我们需要将卡片堆叠在一起，然后将卡片旋转一定角度，这里的旋转角度是通过`--scalar`这个 css 变量来控制的，所以我们需要在父元素`.card-stack`上设置这个变量的值

### 堆叠

首先通过 grid 布局，将所有卡片堆叠在一起，所有的卡片都通过`grid-area`属性设置在同一个区域

```css
.card {
  grid-area: 1 / 1 / 2 / 2;
}
```

左右两边的卡片分别向两边旋转了一定角度,左边卡片的旋转度数是负数，右边卡片旋转度数是正数，一共有五张卡片。两两相邻的卡片，旋转的相对度数是固定的，这个固定的度数通过 Gap 范围选择器来控制，将这个度数用变量 `--scalar` 表示，那么每张卡片的旋转度数就是

1. 第一张卡片  $ -2 \times (--scalar) \deg $
2. 第二张卡片  $ -1 \times (--scalar) \deg $
3. 第三张卡片  $ 0 \times (--scalar) \deg $
4. 第四张卡片  $ 1 \times (--scalar) \deg $
5. 第五张卡片  $ 2 \times (--scalar) \deg $

这里的`--scalar` 变量的大小由 Gap 范围选择器来控制，我们可以通过 JS 来动态的设置这个变量的值

## 旋转
```js
const scalar = document.querySelector("#scalar")
const cardStack = document.querySelector(".card-stack")

scalar.addEventListener("input", (e) => {
  const value = e.target.value
  // 设置对应的 css 变量值
  cardStack.style.setProperty("--scalar", value)
})
````
