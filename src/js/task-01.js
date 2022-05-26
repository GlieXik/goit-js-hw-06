const listCategoriesRef = document.querySelector("#categories");
const listItemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemRef.length}`);

const getNameCategories = (arr) => {
  arr.forEach((item) =>
    console.log(
      `Category: ${item.firstElementChild.innerHTML}\nCategory: ${item.lastElementChild.children.length}`
    )
  );
};

getNameCategories(listItemRef);
