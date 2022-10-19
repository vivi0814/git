
// =========================動畫=============================
window.addEventListener("scroll", function(){
    let slidein = document.getElementsByClassName("slidein");
    for(let i = 0; i < slidein.length; i++){
        if( ((this.scrollY + this.innerHeight) - slidein[i].offsetHeight / 3) > slidein[i].offsetTop){
                // console.log("here");
            
            slidein[i].classList.add("active");
        }else{
            slidein[i].classList.remove("active");
        };
    }
    let fadein = document.getElementsByClassName("fadein");
    for(let i = 0; i < fadein.length; i++){
        if( ((this.scrollY + this.innerHeight) - fadein[i].offsetHeight / 3) > fadein[i].offsetTop){
            // console.log("here");
        
            fadein[i].classList.add("active");
        }else{
            fadein[i].classList.remove("active");
        };
    }
});