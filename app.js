//switching clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
 formatSwitchBtn.classList.toggle("active");

 let formatValue = formatSwitchBtn.getAttribute("data-format");

 if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
 }
 else{
    formatSwitchBtn.setAttribute("data-format", "12");
 }
});


//get current time in javascript
function clock () {
    var today = new Date();

    var hour =today.getHours();
    var minutes =today.getMinutes();
    var seconds =today.getSeconds();
    let period = "AM"

    //set the time period(am/pm)
    if(hour >= 12){
        period = "PM"
    }

    //set the 12-hour clock format
    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        hour = hour > 12 ? hour % 12 : hour; 
    }


    if(hour < 10){
        hour = "0" + hour;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
};

    var updateClock = setInterval(clock, 1000);

    //Get the date in javascript

var today = new Date();

    const dayNumber =today.getDay();
    const year =today.getFullYear();
    const dayName =today.toLocaleString("default", {weekday: "long"});
    const monthName =today.toLocaleString("default", {month: "short"});

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-number").innerHTML = dayNumber ;
    document.querySelector(".year").innerHTML = year;
    
    //javascript for dot menu toggle

    const dotMenuBtn = document.querySelector(".dot-menu-btn");
    const dotMenu = document.querySelector(".dot-menu");

    dotMenuBtn.addEventListener("click", () => {
        dotMenu.classList.toggle("active");

        
    });

    document.addEventListener("click", (e) => {
        if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
        }
    });
    