// const boxContainer = document.querySelector(".boxContainer")
//      const textcontainer = document.querySelector(".textcontainer")
//      const imagecontainer = document.querySelector(".imagecontainer")
//      const name = document.querySelector(".name")
//      const jobtitle = document.querySelectorAll(".jobtitle")
//      const projectstitle = document.querySelector(".projectstitle")
//      const phone = document.querySelectorAll(".phone")
//      const laptop = document.querySelector(".laptop")



//      for(let i=0; i<365; i++)
//      {
//          const list = [0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167, 205,
//          206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210, 211, 251, 252, 292, 293, 8, 9,
//          14, 15, 49, 50, 51, 90, 91, 92, 131, 132, 133, 134, 137, 138, 172, 173, 213, 214,
//           254, 255, 295, 296, 175,55,56,97,96,179,178,220,219,270,
//          176, 217, 177, 218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
//          144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306, 24, 25, 65, 66, 67, 106,
//          107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192,
//          233, 274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116, 156,
//          157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78, 79, 80, 118,  119, 159, 160, 161, 162,
//          200, 201, 202, 203, 241, 242, 282, 283, 284, 285, 323, 324, 325, 326 ];

         
//         const el = document.createElement("div")
//         el.classList = list.includes(i) ? "box active" : "box"
//         boxContainer.appendChild(el)
//      }
//         window.addEventListener("scroll", ()=>{
//          let offsetY = window.scrollY
//          textcontainer.style.transform= `translateY(${offsetY * 0.1}px)`
//          imagecontainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
//          name.style.transform = `translateX(${offsetY * 0.3}px)`  
//          jobtitle[0].style.transform = `translateX(calc(300vh - ${offsetY}px))`
//          jobtitle[1].style.transform = `translateX(calc(-400vh + ${offsetY}px))`
//          projectstitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
//          phone[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
//          laptop.style.transform = `translateY(calc(600vh - ${offsetY}px))`
//          phone[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
//       })


//new js ..........................................

const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")

for(let i = 0; i<365; i++){

  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];


  const el = document.createElement("div")
  el.classList = list.includes(i) ? "box active" : "box"
  boxContainer.appendChild(el)
}

window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
  authorName.style.transform= `translateX(${offsetY * 0.2}px)`
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
  // laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
  // phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})

/*
const allStars = document.querySelectorAll('.java-star');

allStars.forEach((star, i) => {
    star.onclick = function () {
    let current_star_level = i + 1;

    allStars.forEach((star, j) => {
      if(current_star_level >= j + 1){
        star.innerHTML = '&#9733';
      }
      else{
        star.innerHTML = '&#9734';
      }
    })
  }
})

const allDbms = document.querySelectorAll('.dbms-star');

allDbms.forEach((star, i) => {
    star.onclick = function () {
    let current_star_level = i + 1;

    allDbms.forEach((star, j) => {
      if(current_star_level >= j + 1){
        star.innerHTML = '&#9733';
      }
      else{
        star.innerHTML = '&#9734';
      }
    })
  }
})

const allHtml = document.querySelectorAll('.html-star');

allHtml.forEach((star, i) => {
    star.onclick = function () {
    let current_star_level = i + 1;

    allHtml.forEach((star, j) => {
      if(current_star_level >= j + 1){
        star.innerHTML = '&#9733';
      }
      else{
        star.innerHTML = '&#9734';
      }
    })
  }
})

const allCss = document.querySelectorAll('.css-star');

allCss.forEach((star, i) => {
    star.onclick = function () {
    let current_star_level = i + 1;

    allCss.forEach((star, j) => {
      if(current_star_level >= j + 1){
        star.innerHTML = '&#9733';
      }
      else{
        star.innerHTML = '&#9734';
      }
    })
  }
})

const allJs = document.querySelectorAll('.js-star');

allJs.forEach((star, i) => {
    star.onclick = function () {
    let current_star_level = i + 1;

    allJs.forEach((star, j) => {
      if(current_star_level >= j + 1){
        star.innerHTML = '&#9733';
      }
      else{
        star.innerHTML = '&#9734';
      }
    })
  }
})*/