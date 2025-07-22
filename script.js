console.log("Hello World");
// 在這裡加入一些基本的 JavaScript 功能示範

// 1. 選擇 DOM 元素
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');

// 2. 添加點擊事件
heading.addEventListener('click', () => {
    heading.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// 3. 修改段落文字
paragraph.textContent = '這是一段被 JavaScript 修改的文字。';

// 4. 顯示當前時間
setInterval(() => {
    console.log('現在時間：' + new Date().toLocaleString());
}, 5000);
