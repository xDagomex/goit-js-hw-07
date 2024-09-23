const listWithID = document.querySelectorAll('#categories .item');
console.log("Number of categories: " + listWithID.length);

listWithID.forEach(ID => {
    const listName = ID.querySelector('h2').textContent;
    const listCount = ID.querySelectorAll('ul li').length;
    console.log("Category: " + listName);
    console.log("Elements: " + listCount);
})