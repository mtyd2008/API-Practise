// console.log("hello world!");

const div = document.querySelector(".container");


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res)=>{
    console.log(res.products);

    res.products.map((item)=>{
        div.innerHTML += `<div class="cards">
            <img src = ${item.thumbnail}
            <h1>${item.title}</h1>
            <p>${item.description.slice(1,20)}....</p>
            <p>Price:$${item.price}</p>
            <button onclick="showmore(${item.id})">See More</button>
        </div>`
    })
    
  })
  .catch(err=>console.log(err));



function showmore(id){
    window.location = "SingleApi.html"
    localStorage.setItem("id" , id)
    // console.log(id);
    
}


fetch("https://dummyjson.com/mtyd2008")
.then((res) => res.json())
  .then((res)=>{
    console.log(res);
})


























