let url=location.href
let product_image=document.querySelector('.product-image img')
let minus=document.querySelector('.minus')
let plus=document.querySelector('.plus')
let text=document.querySelector('.text')
let cate_a=document.querySelector('.cate a')
let product_information=document.querySelector('.product-information h1') 
let option__add_to_cart=document.querySelector('.option__add-to-cart')
let price=document.querySelector('.Price h2')
 // let Allproduct=JSON.parse(localStorage.getItem('Allproducts'))
 let Price;
let id;
Allproduct.forEach((pr,index)=>{
    if(url.includes(pr.type)){
      Price=pr.price
      id=pr.type
        price.innerText=`${new Intl.NumberFormat('it-IT', {
           style: 'currency',
          currency: 'VND'
         }).format(pr.price)}`
       if(index<24) {
           cate_a.innerText='Hoa Sáp';
           cate_a.href='Wax.html'
         }
     if(24<=index&&index<34) {
         cate_a.innerText='Hoa Nhũ';
         cate_a.href='Emulsion.html'
       } 
      if(34<=index&&index<40) {
         cate_a.innerText='Hoa Gấu';
         cate_a.href='Bear.html'
       }
      if(40<=index&&index<45) {
         cate_a.innerText='Chocolate';
         cate_a.href='Chocolate.html'
       }
      if(45<=index&&index<51) {
         cate_a.innerText='Phụ Kiện';
         cate_a.href='Accessory.html'
       }
      if(51<=index) {
         cate_a.innerText='Hộp Hoa';
         cate_a.href='Box.html'
       }
         product_information.innerText=pr.name
        product_image.src=pr.img
    }
})
minus.addEventListener('click',()=>{
    if(parseInt(text.innerText)>1){
        text.innerText = parseInt(text.innerText) - 1
    }
})
plus.addEventListener('click',()=>{
        text.innerText = parseInt(text.innerText) + 1
})

//them vao gio hang
function creatOBJgiohang(name,soluong,price,id){
  let itemgiohang=new Object()
   itemgiohang.name=name
   itemgiohang.soluong= soluong
   itemgiohang.price=(price*soluong)
  itemgiohang.id=id;
  return itemgiohang
}
console.log( (price.innerText))
function GetListCart(){
  let getListCart=new Array()
  let listCart=localStorage.getItem('ListCart')
  if(listCart!=null)
  getListCart=JSON.parse(listCart);
  
  return getListCart;
}
option__add_to_cart.onclick=function(e){
  e.preventDefault()
  let ds_giohang=GetListCart()
  let testProduct=false
  for(let i=0;i<ds_giohang.length;i++){
    let item=ds_giohang[i]
    if(item.name==id){
      item.soluong=item.soluong*1+text.innerText*1
      item.price=(Price*(item.soluong))
      testProduct=true
    }
  }
  if(testProduct==false){
    let doituongsanpham=creatOBJgiohang(product_information.innerText,text.innerText,Price,id)
    ds_giohang.push(doituongsanpham)
  }
  
  let Product=JSON.stringify(ds_giohang)
  localStorage.setItem('ListCart',Product)
  
  let cartIcon = document.getElementById("cart_icon");
  cartIcon.classList.add("rung");
  setTimeout(() => {cartIcon.classList.remove("rung")}, 2000);
}