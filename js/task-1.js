const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);
item.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const elements = el.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
