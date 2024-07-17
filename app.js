
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
document.getElementById(myDate).style.backgroundColor = 'red';