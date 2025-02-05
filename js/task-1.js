const ulCategories = document.querySelector("#categories");
const liItem = ulCategories.querySelectorAll(".item");
// Виведення кількості категорій:

console.log(`Number of categories: ${liItem.length}`);

// Через цикл виводимо заголовки та кількість елементів:

liItem.forEach(item => {
  const textTitle = item.querySelector(".title").textContent;
  const count = item.querySelectorAll(".list-item").length;
  console.log("Category:", textTitle);
  console.log(`Elements: ${count}`);
});
