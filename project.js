let books=[
 {
    image:"Category_Depictions of the Christian Trinity with three faces on one head (vultus trifrons) - Wikimedia Commons.jpg",
    url:"Why_Is_The_Holy_Trinity_Not_a_Mystery_A_philosophical_perspective.pdf",
    id:"philosophy trinity christianity god"
 },
 {
  image:"Reasoning That Falls Flat.jpg",
  url:"The Theoretical physics of Flat Earth _260419_192827.pdf",
  id:'physics flat Earth The Theoretical physics of Flat Earth'
 },
 {
  image:"Ethiopian Orthodox Art.jpg",
  url:"Who created God.pdf",
  id:'god metaphysics philosophy Who created God'
 },
 {
  image:"Amazon_com_ Network Programming C++(1).jpg",
  url:"A Complete Guide to programming in c++.pdf",
  id:'c++ programming A Complete Guide to programming in c++'
 },
 {
  image:"Metaphysics.jpg",
  url:"aristotle's metaphysics.pdf",
  id:"aristotle metaphysics aristotle's philosophy"
 },
 {
  image:"C++ Free Book.jpg",
  url:"C++.Primer.5th.Edition_2013.pdf",
  id:"c++ programming C++ Primer 5th Edition "
 },
 {
  image:"JavaScript from Beginner to Professional_ Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages.jpg",
  url:"javascript from beginner to professional.pdf",
  id:"javascript from beginner to professional programming web development"
 },
 {
  image:"JavaScript_ FROM ZERO TO HERO_ A Guide to Master JavaScript for Beginners.jpg",
  url:"JavaScript-from-Zero-to-Hero.pdf",
  id:"JavaScript from Zero to Hero programming web development"
 },
 {
  image:"The Inner Workings of C++ Operator Overloading.jpg",
  url:"Object Oriented Programming Using c++.pdf",
  id:'Object Oriented Programming Using c++'
 },
 {
  image:"Eloquent JavaScript.jpg",
  url:"Eloquent_JavaScript.pdf",
  id:'Eloquent JavaScript web development'
 }
 ,
 {
  image:"Christian Theology, Volume 1_ The Grace of Our Lord Jesus Christ - Hardcover.jpg",
  url:"Christian Theology.pdf",
  id:'Christian Theology.pdf'
 }
 ,
 {
  image:"Psychology Book _ Big Ideas Simply Explained By Dk (2012, Hardcover).jpg",
  url:"psychology explained.pdf",
  id:'psychology explained.pdf human behavior Big Ideas Simply Explained the psychology book'
 }
 ,
 {
  image:"Top 5 High-demand Front-end Programming Languages in Web Development World.jpg",
  url:"html tutorials.pdf",
  id:'html web development language front end'
 }
 ,
 {
  image:"Html Css The Complete Referen - Good.jpg",
  url:"the-complete-reference-html-css-fifth-edition.pdf",
  id:'html web development language front end css cascading style sheet the-complete-reference-html-css-fifth-edition.pdf'
 }
 ,
 {
  image:"HTML5 Introduction – Beginners Guide for Web Developers(1).jpg",
  url:"html a beginner guide.pdf",
  id:'html web development language front end css cascading style sheet html a beginner guide.pdf'
 }
 ,
 {
  image:"Beginning CSS3 - Paperback.jpg",
  url:"Beginning CSS Cascading Style Sheets for Web Design.pdf",
  id:'html web development language front end css cascading style sheet Beginning CSS3 - Paperback Beginning CSS Cascading Style Sheets for Web Design.pdf'
 }
];

function mainPage(){
  function homePage(){

    document.body.innerHTML=`
    <div class="sidebar">

  <div class="imgs side" id="menu">
    <img src="menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="menu bar">

    <div class="menu_box">

     <div class="innerMenuBox">
     <div class="history">
     <img src="history_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" id="history">
     <p par>History</p>
     </div>
     <ul class='searchHistory'></ul>
     </div>

    </div>
    
  </div>


  <div class="imgs side">
    <img src="home_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="home bar">
    <p class="par">Home</p>
    </div>

  <div class="imgs side">
    <img src="description_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="description bar">
<p class="par">description</p>
  </div>

    <div class="imgs side" id="mode">
       <img src="dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="mode bar">
       <p class="mode_text">night</p>
    </div>

    
  </div>

  <div class="container">

    <div id="search">
         
        <input type="text" class="category">
       
           <div class="searchlogo">
            <img src="search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="">
             </div>
    </div>

    <div class="images">
     
       
    </div>
  </div>   

`;
let search_input=document.querySelector(".category");
let search_button=document.querySelector(".searchlogo");
let pictures=document.querySelector(".images");
let mode=document.querySelector("#mode img");
let modeText=document.querySelector(".mode_text");
let container=document.querySelector(".container");
let menu=document.querySelector("#menu");
let menu_box=document.querySelector(".menu_box");
let home=document.querySelector(".home");
let history=document.querySelector("#history");
let searchHistory=document.querySelector(".searchHistory");
let description=document.querySelector(".description");


forYouPage(pictures,container);

search_button.addEventListener("click", function () {
    let searchInput = search_input.value.trim();

    if (searchInput === "") return;

    let result = searchBook(searchInput);

    displayResult(result, pictures, container);


    if (result.length === 0) {
        pictures.innerHTML = `
            <p class="no-result">No result found</p>
        `;
        return;
    }
});
  
mode.addEventListener("click",()=>{dark_light(mode,modeText)});

home.addEventListener("click",homePage);

description.addEventListener("click",()=>{goToDescription(container)});

menu.addEventListener("click",()=>{openMenuBox(menu_box)});

  }

function searchBook(searchInput) {
    let result = books.filter(book =>
        book.id.toLowerCase().includes(searchInput.toLowerCase())
    );
    return result;
}
function displayResult(result,pictures,container){
      pictures.innerHTML="";
       
      result.forEach((element,i)=>{
       pictures.innerHTML+=`  
    <div class="element">
    <img src="${result[i].image}" alt="" class="pictures">
    <p class="text">
       ${result[i].url}</p></div>
      `;
      });
let selectedBook=document.querySelectorAll(".element");

selectedBook.forEach(
  (book,i)=>{
    book.addEventListener("click",()=>{

       container.innerHTML = `
        <iframe
            src="${result[i].url}" 
            width="100%" 
            height="100%">
        </iframe>

    `;
    });
  }
);
      

}
function dark_light(mode,modeText){
 document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        mode.src="light_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
        modeText.textContent="light";
    } else {
        mode.src="dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
        modeText.textContent="night";
    }
}
function forYouPage(pictures, container) {
    let randomBooks = books.sort(() => Math.random() - 0.5);

    displayResult(randomBooks, pictures, container);
}
function goToDescription(container){
    container.innerHTML=`<p class="text">This web page is built by Akleshiya Abrham in 2026 G.C as his first we development project. You can get books that are free to read and download. If you want to get a book with a specific category just search the category or genre of that book and it's yours.</p>`;
}
function openMenuBox(menu_box){
  if(menu_box.style.display==="none"){
  menu_box.style.display="flex";
  }
  else{
    menu_box.style.display="none";
  }
}

homePage();
}
setTimeout(mainPage,5000);






