
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

// =========================數量加減=============================
window.addEventListener("load", function(){
    //-------------------
    let btnPluses = document.getElementsByClassName("btnPlus");
    let btnMinuses = document.getElementsByClassName("btnMinus");
    let qtys = document.getElementsByClassName("qty");

    for(let i=0; i<btnPluses.length; i++){
        //------註冊 + 按鈕
        btnPluses[i].onclick = function(e){
            //qtys[i].value = parseInt(qtys[i].value) + 1; //+
            let qtyBox = e.target.previousElementSibling;
            qtyBox.value = parseInt(qtyBox.value)+1;
        }

        //------註冊 - 按鈕
        btnMinuses[i].onclick = function(){
            if(qtys[i].value > 0){
                qtys[i].value = qtys[i].value - 1;//-
            }
        }
    }
})
