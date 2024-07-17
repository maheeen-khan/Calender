
function func(event,type){
    if(event.type === 'mouseenter'){
        document.getElementById('tab').style.display = 'block';

    }
    else{
    document.getElementById('tab').style.display = 'none';

    }

}

var myDate = new Date().getDate();

console.log(myDate );//+ " "+ (myDate.getMonth()+1) + " "+ myDate.getFullYear());
document.getElementById(myDate).style.backgroundColor = '#01BD93';
document.getElementById(myDate).style.color = 'white';
document.getElementById(myDate).style.borderRadius = '10px';

var month_array = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP','OCT', 'NOV', 'DEC'];
var month = month_array[new Date().getMonth()];

var day_array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var day = day_array[new Date().getDay()];

var today = day + ", " + myDate + " " + month + " " + new Date().getFullYear();

// document.write(today);
document.getElementById('end').innerHTML = "<p>" + "TODAY  | " +today + "</p>";


