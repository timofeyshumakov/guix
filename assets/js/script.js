const headerMenu=document.getElementById("headerMenu"),burger=document.getElementById("burger"),burgerContent=document.getElementById("burgerContent"),headerMenuGap=22;function burgerShow(){parseFloat(window.getComputedStyle(headerMenu).getPropertyValue("gap"))<headerMenuGap?(headerMenu.style.display="none",burger.style.display="flex"):(headerMenu.style.display="flex",burger.style.display="none")}document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{burgerContent.style.display="none"},"0")}),window.addEventListener("resize",()=>{}),burger.addEventListener("click",()=>{burgerContent.classList.toggle("show")});