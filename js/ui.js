const elements={
    menuList:document.querySelector("#menu-list"),
    inputs:document.querySelectorAll("#buttons input"),
    detailContainer:document.querySelector("#outlet")
}


//Menu elemanlarını render eden fonk
const renderCards = (data)=>{
    const cardsHtml=data.map((item)=>
        `<a href="/detail.html?id=${item.id}" class="d-flex text-decoration-none flex-column flex-md-row text-dark gap-3" id="card">
        <img  class="rounded img-fluid shadow" src="${item.img}" alt="image">
       
       <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title} </h5>
            <p class="text-success fw-bold">${(item.price*30).toFixed(2)} ₺</p>
        </div>
        <p class="lead">${item.desc} </p>
       </div>
       </a>`
    ).join("")
   
    elements.menuList.innerHTML=cardsHtml
}

//Detay sayfasını render eden fonk

const renderDatailPage=(products,outlet)=>{
    outlet.innerHTML=` <div class="d-flex justify-content-between fs-6">
            <a href="/">
                <img width="35px" src="./images/home.png" alt="">
            </a>
            <p>anasayfa / ${products.category} / ${products.title}</p>
        </div>
        <h1 class="text-center my-4"> ${products.title}</h1>
        

        <img style="max-width: 400p;" class="rounded object-fit-cover "  src=" ${products.img}" alt="">
        <h4 class="mt-4">Ürün Kategorisi : <span class="text-success">${products.category} </span></h4>
        <h4 class="mt-4">Ürün Fiyatı : <span class="text-success">${(products.price*30).toFixed(2)} ₺</span></h4>
        <p class="lead">${products.desc} </p>`
}

//Not Found Durumunu renderlayan fonk

const renderNotFound=(outlet)=>{
    outlet.innerHTML=`<!-- From Uiverse.io by PriyanshuGupta28 --> 
<div class="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>`
}

export {renderCards ,elements,renderDatailPage,renderNotFound}