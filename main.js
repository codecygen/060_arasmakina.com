//window.getComputedStyle(document.querySelector('#test')).display == "block"
//This is to pull values from CSS if CSS, HTML and Javascript are saved individually.
var current = {
  condition : 0,
};


// Button for Subproducts Object
var companyProductList = {
    Index: 0, // How many subproduct buttons we have? Index of it is given here.
    List: null, // How many subproduct we have in the a list? We have it in here
    ID: null // ID name of the selected subproduct
};

document.addEventListener("click", toggleDropdown);
document.getElementById("burger").addEventListener("click", toggleBurger);
document.getElementById("aboutUs").addEventListener("click", AboutUs);
document.getElementById("home").addEventListener("click", Home);
document.getElementById("contact").addEventListener("click", Contact);
document.getElementById("myproductsButton").addEventListener("click", homeProductsButton);
document.getElementById("contactsButton").addEventListener("click", homeContactsButton);
document.getElementById("closeSlide").getElementsByTagName("P")[0].addEventListener("click", closeSlideWindow);
document.getElementById("forwardArrow").addEventListener("click", nextPhoto);
document.getElementById("backwardArrow").addEventListener("click", lastPhoto);


var myproducts = document.getElementsByClassName("myproducts");
companyProductList.List = myproducts;

for(var num = 0; num < myproducts.length; num++){
    myproducts[num].addEventListener('click', Products.bind(this, num));
}


function toggleDropdown(event) {
    var dropdown = document.getElementById("dropdown");
        
    if (event.target.classList.contains('urunler')){
        dropdown.classList.toggle('show');
    } else {
        dropdown.classList.remove('show');
    }
}

function toggleBurger(event) {
    event1 = event.target.classList.contains('hamburger');
    event2 = event.target.classList.contains('bar1');
    event3 = event.target.classList.contains('bar2');
    event4 = event.target.classList.contains('bar3');
    
    if ((event1 || event2 || event3 || event4) && current.condition == 0){
        burger.classList.toggle('change');
        openNav();
        current.condition = 1;
    }else if((event1 || event2 || event3 || event4) && current.condition == 1){
        burger.classList.toggle('change');
        current.condition = 0;
        closeNav();
    }
}

function openNav(){
    document.getElementById("menu").style.marginLeft = "75%";
    document.getElementById("myNav").style.width = "75%";
    document.getElementById("mobileNavMessage").style.display = "block";
    document.body.style.overflowY = "hidden";
 /*   document.getElementById("map").style.zIndex = "-1"; */
}

function closeNav(){
    document.getElementById("menu").style.marginLeft = "0";
    document.getElementById("myNav").style.width = "0";
    document.body.style.backgroundColor = "#ECEDFF";
     document.getElementById("mobileNavMessage").style.display = "none";
    document.body.style.overflowY = "scroll";
 /*   setTimeout(function(){ document.getElementById("map").style.zIndex = "0"; }, 400); */
}

function AboutUs(){
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("aboutUsContent").style.display = "block";
    document.getElementById("productsContent").style.display = "none";
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
    
    closeNav();
    burger.classList.toggle('change');
    current.condition = 0;
}

function Home(){
    for(var increment = 0; increment < productPicture.totalProducts; increment++){
        document.getElementById(productPicture.subproductList[increment].id).style.display = "flex";
    }
    
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("aboutUsContent").style.display = "none";
    document.getElementById("productsContent").style.display = "none";
    
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
    
    closeNav();
    burger.classList.toggle('change');
    current.condition = 0;
}

function Products(myNum){
    companyProductList.Index = myNum;
    productPicture.currentSubproductIndex = myNum;
    companyProductList.ID = productPicture.subproductList[productPicture.currentSubproductIndex].id;
    
    for(var increment = 0; increment < productPicture.totalProducts; increment++){
        document.getElementById(productPicture.subproductList[increment].id).style.display = "none";
    }
    
    document.getElementById(companyProductList.ID).style.display = "flex";
    
    
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("aboutUsContent").style.display = "none";
    document.getElementById("productsContent").style.display = "block";
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
    
    closeNav();
    burger.classList.toggle('change');
    current.condition = 0;
}

function homeProductsButton(){
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("aboutUsContent").style.display = "none";
    document.getElementById("productsContent").style.display = "block";
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
}

function homeContactsButton(){
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("contactContent").style.display = "block";
    document.getElementById("aboutUsContent").style.display = "none";
    document.getElementById("productsContent").style.display = "none";
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
}

function Contact(){
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("contactContent").style.display = "block";
    document.getElementById("aboutUsContent").style.display = "none";
    document.getElementById("productsContent").style.display = "none";
    
    if(window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
    }else{
        document.getElementById("logo").style.height = "75px";
    }
    
    closeNav();
    burger.classList.toggle('change');
    current.condition = 0;
}


// Initial state
var scrol = {
  pos : 0,
};


/*
// adding scroll event. This section is to make the logo invisible when the page being scrolled.
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
    
    if ((document.body.getBoundingClientRect()).top <= scrol.pos && window.innerWidth < "601"){
        document.getElementById("logo").style.height = "0";
        document.getElementById("burger").style.top = "0";
        scrol.pos = (document.body.getBoundingClientRect()).top;
    }else if ((document.body.getBoundingClientRect()).top == 0 && window.innerWidth < "601"){
        document.getElementById("logo").style.height = "60px";
        document.getElementById("burger").style.top = "60px";
        scrol.pos = (document.body.getBoundingClientRect()).top;
    }
	// saves the new position for iteration.
});

*/

var productPicture = {
    Index: 0, // Index of the picture under entire productsContent
    current: null, // Current selected picture
    next: null, // Next incoming picture
    twoNext: null,
    last: null, // Previous picture
    twoLast: null,
    totalProducts: document.getElementById("productsContent").getElementsByTagName("DIV").length, // How many subproducts we have? (2)
    subproductList: document.getElementById("productsContent").getElementsByTagName("DIV"), // List of subproducts
    currentSubproductIndex: null // Current picture's Subproduct index. Indexes are 0 and 1 --> subproductList = ["tableFeet", "moldingGears"]
};



var photoList = document.getElementById("productsContent").getElementsByTagName("img");

for(var i = 0; i < photoList.length; i++){
    photoList[i].addEventListener("click", showPicture.bind(this, i, "photoList"));
}

function showPicture(number, word){
    document.getElementById("windowSlide").style.display = "flex";
    document.getElementById("backgroundBlur").style.display = "flex";
    document.getElementById("arrowLayer").style.display = "flex";
    document.getElementById("arrowLayer").style.display = "flex";
    document.getElementById("closeSlide").style.display = "block";
    //Disable scrolling
    document.body.style.overflowY = "hidden";
    
    var img = photoList[number];
    
    //These are necessary for showing the next and previous pictures in slide mode. See nextPhoto(), lastPhoto() functions
    productPicture.Index = number;
    productPicture.current = img;
    productPicture.twoNext = photoList[number + 2];
    productPicture.next = photoList[number + 1];
    productPicture.last = photoList[number - 1];
    productPicture.twoLast = photoList[number - 2];
    
    for(var count = 0; count < productPicture.totalProducts; count++){
        var picOwnerIndex = document.getElementById(productPicture.subproductList[count].id).contains(productPicture.current);
        if(picOwnerIndex == true){
            productPicture.currentSubproductIndex = count;
        }
    }
    //These are necessary for showing the next and previous pictures in slide mode. See nextPhoto(), lastPhoto() functions
    
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("pictureSlide");
    var captionText = document.getElementById("captionSlide");

    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    
    scaleImage(img);

    var lastPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.last);
    
    var nextPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.next);
    
    if(nextPictureCheck == false && lastPictureCheck == true){
        document.getElementById("backwardArrow").style.visibility = "visible";
        document.getElementById("forwardArrow").style.visibility = "hidden";
    }else if(nextPictureCheck == true && lastPictureCheck == false){
        document.getElementById("backwardArrow").style.visibility = "hidden";
        document.getElementById("forwardArrow").style.visibility = "visible";
    }else if(nextPictureCheck == true && lastPictureCheck == true){
        document.getElementById("backwardArrow").style.visibility = "visible";
        document.getElementById("forwardArrow").style.visibility = "visible";
    }else{
        document.getElementById("backwardArrow").style.visibility = "hidden";
        document.getElementById("forwardArrow").style.visibility = "hidden";
    }
}

function scaleImage(Image){
    var photoRealWidth = Image.naturalWidth;
    var photoRealHeight = Image.naturalHeight;
    var viewPortHeight = window.innerHeight;
    var viewPortWidth = window.innerWidth;

    imageRatio = photoRealWidth /  photoRealHeight;
    
    screenRatio = viewPortWidth / viewPortHeight;
    
    //Algorithm to fit a picture into any screen
    //Image data: (wi, hi) and define ri = wi / hi
    //Screen resolution: (ws, hs) and define rs = ws / hs
    //Scaled image dimensions:
    //rs > ri ? (wi * hs/hi, hs) : (ws, hi * ws/wi)
    
    var scaledPhotoWidth = (screenRatio > imageRatio) ? photoRealWidth * viewPortHeight / photoRealHeight : viewPortWidth;
    var scaledPhotoHeight = (screenRatio > imageRatio) ? viewPortHeight : photoRealHeight * viewPortWidth / photoRealWidth;
    
    //alert("wi x hi = " + scaledPhotoWidth + " x " + scaledPhotoHeight + "\n" + "ws x hs = " + viewPortWidth + " x " + viewPortHeight);
    
    var windowSlide = document.getElementById("windowSlide");

    var windowWidth = scaledPhotoWidth * 0.8;
    var windowHeight = scaledPhotoHeight * 0.8;
    
    windowSlide.style.width = windowWidth.toString() + "px";
    
    var topSlideGap = (viewPortHeight - windowHeight - 80) / 2.0;
    var leftSlideGap = (viewPortWidth - windowWidth) / 2.0;
    
    windowSlide.style.top = topSlideGap.toString() + "px";
    windowSlide.style.left = leftSlideGap.toString() + "px";
    
    var windowSlideHeight = window.getComputedStyle(windowSlide).height;
    
    var closeSlide = document.getElementById("closeSlide");
    var photoSlide = document.getElementById("photoSlide");
    var captionSlide = document.getElementById("captionSlide");
    
    var closeSlideHeight = window.getComputedStyle(closeSlide).height;
    var photoSlideHeight = window.getComputedStyle(photoSlide).height;
    var captionSlideHeight = window.getComputedStyle(captionSlide).height;
    
    //alert(windowSlideHeight + " = " + closeSlideHeight + " + " + photoSlideHeight + " + " + captionSlideHeight);
}

function closeSlideWindow(){
    document.getElementById("windowSlide").style.display = "none";
    document.getElementById("backgroundBlur").style.display = "none";
    document.getElementById("arrowLayer").style.display = "none";
    document.getElementById("closeSlide").style.display = "none";
    //Enable scrolling
    document.body.style.overflowY = "scroll";
}

function nextPhoto(){
    productPicture.Index = productPicture.Index + 1;
    
    var nextPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.next);
    
    var twoNextPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.twoNext);
    
    var currentPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.current);
    
    if(currentPictureCheck == true){
        document.getElementById("backwardArrow").style.visibility = "visible";
    }
    
    if(twoNextPictureCheck == false){
        document.getElementById("forwardArrow").style.visibility = "hidden";
    }

    if(nextPictureCheck == true){
        showPicture(productPicture.Index, "photoList");
    }else{
        productPicture.Index = productPicture.Index - 1;
    }
}

function lastPhoto(){
    productPicture.Index = productPicture.Index - 1;
    
    var lastPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.last);
    
    
    var currentPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.current);
    
    var twoLastPictureCheck = document.getElementById(productPicture.subproductList[productPicture.currentSubproductIndex].id).contains(productPicture.twoLast);
    
    if(currentPictureCheck == true){
        document.getElementById("forwardArrow").style.visibility = "visible";
    }
    
    if(twoLastPictureCheck == false){
        document.getElementById("backwardArrow").style.visibility = "hidden";
    }

    if(lastPictureCheck == true){
        showPicture(productPicture.Index, "photoList");
    }else{
        productPicture.Index = productPicture.Index + 1;
    }
}

//This is supposed to reload page when we resize it but it does not work as intended.

var browserSize = {
    width: null,
    height: null,
    oldWidth: null,
    oldHeight: null
};

window.addEventListener("resize", function (event){
    
    browserSize.oldWidth = browserSize.width;
    browserSize.oldHeight = browserSize.height;
    
    browserSize.width = window.innerWidth;
    browserSize.height = window.innerHeight;
    
    while(true){
        if(browserSize.oldWidth === null){
            break;
        }else if(Math.abs(browserSize.width - browserSize.oldWidth) >= 10){
            setTimeout(function(){
              window.location.reload();
            }, 50);
            break;
        }else{
            break;
        }
    }
});

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
})

var homeSlideIndex = 0;
homeSlide();

function homeSlide(){
    var homeSlidePhotos = document.getElementsByClassName("homeSlide");
    
    for(var z = 0; z < homeSlidePhotos.length; z++){
        homeSlidePhotos[z].style.display = "none";
    }
    
    if(homeSlideIndex + 2 <= homeSlidePhotos.length){
        homeSlidePhotos[homeSlideIndex].style.display = "inline";
        homeSlidePhotos[homeSlideIndex + 1].style.display = "inline";
    }
    
    homeSlideIndex = homeSlideIndex + 2;
    
    if(homeSlideIndex == homeSlidePhotos.length){
        homeSlideIndex = 0;
    }
    
    setTimeout(homeSlide, 2000); // Change image every 2 seconds
}
