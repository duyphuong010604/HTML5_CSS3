function getData(){
    localStorage.setItem('product', JSON.stringify(products));
    let htmlProduct = ``;
    for(var i=0; i < products.length; i++){
        htmlProduct =`  <figure class="col-sm-3 figure">
                                             <img src="${products[i].img}" class="figure-img img-fluid rounded" alt="...">
                                             <figcaption class="figure-caption">${products[i].name}</figcaption>
                                         </figure>`
        document.getElementById("showCart").innerHTML += htmlProduct;
    }
}
getData();