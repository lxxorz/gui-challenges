const pre = document.querySelector('pre');
const button = document.querySelector('button');

// 插入pre标签
function insertIntoPre() {
  pre.textContent = `
  @keyframes cyberpunk-glitch {
    0% {clip-path: polygon(${generatePath()});}
    4% {clip-path: polygon(${generatePath()});}
    24% {clip-path: polygon(${generatePath()});}
    66% {clip-path: polygon(${generatePath()});}
    80% {clip-path: polygon(${generatePath()});}
    92% {clip-path: polygon(${generatePath()});}

    1%, 5%, 25%, 80%, 94% {
      clip-path: none;
    }
  }
  `.trim();
  ;
}
// 生成25对随机数
function generatePath() {
  const path = new Set();
  while (path.size < 25) {
    path.add(`${random()}% ${random()}% `);
  }
  return [...path].join(",");
}

// 生成随机数
function random(){
  return (Math.random() * 100).toFixed();
}

insertIntoPre();

button.addEventListener('click', () => {
  insertIntoPre();
})
