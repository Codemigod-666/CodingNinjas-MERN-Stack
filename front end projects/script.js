var count = 0;

document.getElementsByClassName('inner')[0].addEventListener('click', function(){
    if(count%2 == 0){
        document.getElementsByClassName('toggler')[0].style.float = "right";
        document.getElementsByClassName('inner')[0].style.backgroundColor="grey";
        document.getElementsByTagName('body')[0].style.backgroundColor="black";
        document.getElementsByTagName('h1')[0].style.color="white";
        count++;
    }
    else{
        document.getElementsByClassName('toggler')[0].style.float = "left";
        document.getElementsByClassName('inner')[0].style.backgroundColor="grey";
        document.getElementsByTagName('body')[0].style.backgroundColor="white";
        document.getElementsByTagName('h1')[0].style.color="black";
        count++;
    }
});