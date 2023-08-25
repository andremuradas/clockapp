let moreLess_btn = document.querySelector('.more_btn');
let topSection = document.querySelector('.top');
let bottomContainer = document.querySelector('.bottom_container');
let expandSection = document.querySelector('.expand');

moreLess_btn.addEventListener('click', () => {
    
    if(moreLess_btn.innerText == "MORE")
    {

        setTimeout(() => {
            expandSection.children[0].style.opacity = "1";
        }, 500);
        setTimeout(() => {
            expandSection.children[0].style.display = "flex"
        }, 200);
                
        topSection.style.height = "0";
        moreLess_btn.children[0].innerText = "LESS";
        moreLess_btn.children[1].children[1].setAttribute('d', 'M14 23L20 17L26 23');
        expandSection.style.height = "50%";
        setTimeout(() => {
            
            bottomContainer.style.alignItems = "center";
        }, 100);
        
        
            
        

    }
    else if(moreLess_btn.innerText == "LESS")
    {
        expandSection.children[0].style.opacity = "0";

        setTimeout(() => {
            
            expandSection.children[0].style.display = "none"
            topSection.style.height = "50%";
            moreLess_btn.children[0].innerText = "MORE";
            moreLess_btn.children[1].children[1].setAttribute('d', 'M14 17L20 23L26 17');
            expandSection.style.height = "0";
            setTimeout(() => {
                bottomContainer.style.alignItems = "normal";
            }, 100);
        }, 300);
        
    }
});

