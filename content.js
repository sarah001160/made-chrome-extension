// 你想自動執行的 JS
console.log("自動注入成功！");

const bodyTag = document.body;

// 所有你希望改字體的元素
const list = ['div', 'a', 'p', 'span'];

// 字體微軟正黑體
function changeFont() {
  list.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el) => {
      el.style.fontFamily = 'Arial, 微軟正黑體';
    })
  })
}

changeFont(); // 執行