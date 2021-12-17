var data = document.querySelector("#inputfromdata").value;
var database = JSON.parse(localStorage.getItem("mainprojectdata")) || [];
// var indexfors = JSON.parse(localStorage.getItem('indexvalue'))||[];
var indexfors = [];

// value(indexfors);
displayTable(database)
function displayTable (database){
    document.querySelector("#inputfromdata").textContent = "";
    database.map(function (elem, index) {
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'mainprojectdiv');
        var imgdiv2 = document.createElement('div');
        imgdiv2.setAttribute('class','imagediv');
        var image = document.createElement('img');
        image.setAttribute('class', 'forimageofpro');
        image.setAttribute('src', elem.image);
        imgdiv2.append(image);
        
        var belowimgdiv3 = document.createElement('div');
        belowimgdiv3.setAttribute('class', 'belowimagetag');
        var brandnamehere = document.createElement('p');
        brandnamehere.setAttribute('class','brandnametag');
        brandnamehere.textContent = elem.brand;
        var productname = document.createElement('p');
        productname.setAttribute('class', 'productnametag');
        productname.textContent = elem.name;
        belowimgdiv3.append(brandnamehere,productname);
        
        var finaldiv4 = document.createElement('div');
        
        var pricewithlogo = document.createElement('div');
        pricewithlogo.setAttribute('class','priceandlogo');
        
        var pricediv5 = document.createElement('div');
        pricediv5.setAttribute('class', 'pricedivtag')
        
        var mainprice = document.createElement('p');
        mainprice.setAttribute('class', 'discountprice');
        mainprice.textContent = elem.price;
        var cutprice = document.createElement('p');
        cutprice.setAttribute('class', 'originalprice');
        cutprice.textContent = elem.cutprice;
        var logoofubuy = document.createElement('img');
        logoofubuy.setAttribute('class', 'logoimageubuy');
        logoofubuy.setAttribute('src', "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/fulfilled.png");
        var ubuylogo = document.createElement('div');
        ubuylogo.append(logoofubuy);
        pricediv5.append(mainprice, cutprice);
        pricewithlogo.append(pricediv5, ubuylogo);
        var containerdiv = document.createElement('div');
        containerdiv.setAttribute('class','outterlayer');
        // var bestseller = document.createElement('span');
        var atag = document.createElement("a");
        atag.style.textDecoration = "none";
        atag.addEventListener("click", function () {
        if (p.style.color == "red") {
            p.style.color = "gray";
        } else {
            p.style.color = "red";
        }
        console.log(index);
        });
        atag.setAttribute("href", "#");
        atag.setAttribute("class", 'a-for-heart')
        var p = document.createElement("button");
        p.setAttribute("class", "buttonforheart");
        p.innerHTML = ' <i class="fas fa-heart"></i>';
        atag.append(p);
        var divforbutton = document.createElement('div');
        divforbutton.setAttribute('class','divforbutton');
        divforbutton.append(atag);
        div1.append(imgdiv2,belowimgdiv3,pricewithlogo);
        containerdiv.append(divforbutton,div1);
        div1.addEventListener('click', function(){
            console.log(elem,index);
            var k = index;
            var valueforproduct = {
                brand : elem.brand,
                name : elem.name,
                price : elem.price,
                cutprice : elem.cutprice,
                image : elem.image,
                discription : elem.discription,
                important : elem.important,
                detail : elem.detail
            }

            indexfors.push(valueforproduct);
            localStorage.setItem('indexvalue',JSON.stringify(indexfors));
            window.location.href = "demo.html"
        })
        
        document.querySelector('#inputfromdata').append(containerdiv);
    })
}


function priceofp(event){
    var kokain = document.querySelector('price-rangecat').value;
    console.log(kokain)
}