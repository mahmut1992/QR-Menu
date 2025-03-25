import fetchMenu from "./api.js";
import { elements, renderDatailPage, renderNotFound } from "./ui.js";

/*

Çok sayfalı projelerde pekçok eleman için tek bir sayfayı render
edeceksek bu noktada sayfa içeriği dinamik bir şekilde renderlanır
Bunu yaparken de her bir eleman için url e bir parametre geçilir devamında
bu parametreye sahip ürün verileri sayfaya renderlanır

*/
   const params=new URLSearchParams(window.location.search)
   const id=+params.get("id");
   document.addEventListener("DOMContentLoaded",async ()=>{
   const data=await fetchMenu("../db.json")
   const products=data.find((item)=>item.id==id)
  if(!products){
renderNotFound(outlet)
  }else{
//Detay verisi bilinen ürün ile arayüzü renderla
renderDatailPage(products,elements.detailContainer)
  
  }

  
   
   })
   
  
    