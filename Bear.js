let grid_row=document.getElementById('grid__row')
  let five=document.querySelectorAll('.panel-item')
  let nav_product_h2=document.querySelector('.nav__product h2')
  let select_arrange=document.getElementById('select__arrange')
  let options=document.querySelectorAll('option')
  let product=Allproduct.filter((element,index)=>{
    return 34<=index&&index<40
  })
function lowtohigh(objProduct){
    let htmls= objProduct.sort((a,b)=>(a.price>b.price)?1:-1)
    render(htmls)
 }
  function hightolow(objProduct){
     let htmls= objProduct.sort((a,b)=>(a.price<b.price)?1:-1)
    render(htmls)
 }
  function selects(obj_select){
     select_arrange.onchange=function(){
         let giaTri = select_arrange.options[select_arrange.selectedIndex].value;
         console.log(giaTri)
         if(giaTri==1) hightolow(obj_select)
         if(giaTri==2) lowtohigh(obj_select)
     }
 }
 
  function render(productss){
     let html= productss.map(function(pr){
         return `<a class="item-product" href="./Sanpham.html?name=${pr.type}">
         <div class="detail__product">
             <div class="detail__img">
                <img src="${pr.img}" alt="" class="img-product">
             </div>
             <div class="Information">
             <div class="name">${pr.name}</div>
                 <div class="price"><span>${new Intl.NumberFormat('it-IT', {
           style: 'currency',
          currency: 'VND'
         }).format(pr.price)}</span></div>
             </div>
         </div>
         </a>`
     })
     grid_row.innerHTML=html.join('')
 }
 five.forEach(function(five_element,index){
     five_element.addEventListener('click',function(e){
         switch(index){
             case 0: nav_product_h2.innerText='Hoa gấu'
             break;
             case 1: nav_product_h2.innerText='Gấu bông'
             break;
             
         }
          e.preventDefault()
          window.scrollTo(0,0);
         let products= product.filter(function(pr){
             return pr.id==index
         })
         render(products)
        selects(products)    
     })
 })
 render(product)
 selects(product)