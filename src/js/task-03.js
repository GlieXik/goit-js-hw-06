const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGalerry = document.querySelector(".gallery");
ulGalerry.style.display = "flex";
ulGalerry.style.listStyleType = "none";
ulGalerry.style.flexWrap = "wrap";
const addImages = images.map((element) => {
  ulGalerry.insertAdjacentHTML(
    "afterbegin",
    `<li><img src="${element.url} alt="${element.alt} width='300'"></li>`
  );
});

console.log(ulGalerry);
