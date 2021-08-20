// alert("ssas")
let appJson = "json/app.json"
let clockHour = document.querySelector(".hand-hour");
let clockMinute = document.querySelector(".hand-minute");
let clockSecond = document.querySelector(".hand-second");
let node=null
//IIFE練習
$(document).ready(function () {
    $.get(appJson, function(data) {
        
            setApplication(data)
        });
})
(function () {
    function runTime() {
        var dayObj = new Date();
        var second = dayObj.getSeconds();
        var minute = dayObj.getMinutes();
        var hour = dayObj.getHours();
        // console.log(second)
        // console.log(minute)
        // console.log(hour)
      
        let secToMin =second/60;
        let minToHour = minute/60;

        // var hourMinute =dayObj.getMinutes()/2;   //每分鐘轉0.5度
        clockSecond.style = `transform:translateX(-50%) rotate(${second * 6}deg) ;`
        clockMinute.style = `transform:translateX(-50%) rotate(${minute * 6 + secToMin*6}deg) ;`
        clockHour.style = `transform: translateX(-50%) rotate(${hour * 30 + minToHour*30}deg) `
      
    }
    setInterval(runTime, 1000);
}());
function setApplication(data){
    data.application.map((eachAppType,typeIndex)=>{
        node = $('#Template01').html();
        let content = node.replace('SUBTITLE', eachAppType.subtitle);
       content = content.replace('TYPENUM',typeIndex)
        console.log(content)
        $('.application_tplt').append(content)
        eachAppType.appList.map((eachApp)=>{
            node2 = $('#Template02').html();
            let content = node2.replace('APP', eachApp);
            $('.app-each-list-'+typeIndex).append(content)
        
        })
    })

// console.log(data);

}