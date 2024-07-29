
function func(){
    // wrong approach...
    // if(event.type === 'click'){
    //     document.getElementById('tab').style.display = 'block';

    // }
    // else{
    // document.getElementById('tab').style.display = 'none';

    // }
    // var a =  document.getElementById('tab');
    if(document.getElementById('tab').style.display === 'none'){
        document.getElementById('tab').style.display = 'block';
    }
    else {
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

var hours_array = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];

function clock(){
    document.getElementById('sec-bottom').innerHTML ="<h2>" + hours_array[new Date().getHours()] + " : "+ new Date().getMinutes() + " : " + new Date().getSeconds() + "<h2>";
}
setInterval(clock,1000);
clock();
// document.getElementById('sec-bottom').innerHTML = "<h2>" + clock()"<h2>";


