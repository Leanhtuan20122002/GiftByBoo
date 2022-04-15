let input_search=document.querySelector('input')
let result_search=document.querySelector('#show_product-search')
let ip_search=document.querySelector('.input-search')
let search=document.querySelector('.search')
let Allproduct=JSON.parse(localStorage.getItem('Allproducts'))
input_search.oninput=function(){
    let value_search=input_search.value.toLowerCase().trim()
    let Product_search;
    let html=Allproduct.filter(element => {
       return (element.name.toLowerCase()).includes(value_search)
    });
    console.log(html)
     if(input_search.value==''){
         Product_search=[]
         render1(Product_search)
     }
     else{
        Product_search=html
        console.log(Product_search)
         render1(Product_search)
     }
}
//show sản phẩm
function render1(Product_search){
  let html=  Product_search.map(Ps => {
        return `<a class="search-link" href="./Sanpham.html?type=${Ps.type}">
        <div class="search-img">
        <img src="${Ps.img}" alt="">
    </div>
    <div class="price_name">
        <div class="na_me">${Ps.name}</div>
        <div class="pri_ce">${new Intl.NumberFormat('it-IT', {
           style: 'currency',
          currency: 'VND'
         }).format(Ps.price)}</div>
    </div>
        </a>`
    });
    result_search.innerHTML=html.join('')
}
//sự kiện focus vào input
input_search.onfocus=function(){
     result_search.style.display='block'
 }
//blur ra khỏi input
window.onclick=function(e){
    if (!result_search.contains(e.target) && !input_search.contains(e.target))
    result_search.style.display = 'none';
 }