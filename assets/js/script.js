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


let countryName = document.querySelector('#country');
let cityName = document.querySelector('#city');
let timeHour = document.querySelector('#time');
let timeZone = document.querySelector('#timeZone');
function getIp()
{
    fetch('http://worldtimeapi.org/api/ip')
      .then(function(result){
          return result.json();
      })

      .then(function(json){
        console.log(json);
      });
}


function getIp2()
{
    fetch('https://api.ipbase.com/v2/info?apikey=ipb_live_u7KFHDWIjVJHZhzfT59jeMq45fxFtOkKWpltKWes')
      .then(function(result){
          return result.json();
      })

      .then(function(json){
        console.log(json.data.location);

        
        countryName.innerText = json.data.location.country.name
        cityName.innerText = json.data.location.city.name
      });
}



function getIp3()
{
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=a62a35cf794a4573a4012f6b5f68172f')
      .then(function(result){
          return result.json();
      })

      .then(function(json){
        console.log(json);
        console.log(json.region);

        timeHour.innerText = json.timezone.current_time.substring(0,5);
        timeZone.innerText = json.timezone.gmt_offset;
        countryName.innerText = json.country;
        cityName.innerText = json.region;
      });
}




getIp3()