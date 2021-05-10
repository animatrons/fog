function fadeInOut(selector){
    let count = 0;
    let f = true;
    function inner(anim){
        if(f) count ++;
        f = !f;
        count %= 7;
        document.querySelector(selector).style.animationName = anim;
        return count;
    }
    return inner;
}

var leads = [
    '"Life must be understood backward. But it must be lived forward." -Soren Kierkegaard',
    '"All we have to do is decide what to do with time that is given to us" -J.R.R. Tolkien',
    '"This is how philosophers should salute each other: `Take your time`" -Ludwig Wittgenstein',
    '"Time you enjoyed wasting, isn`t really wasted!" -Unkown',
    '"The only reason for time is so that everything doesn`t happen at once." -Albert Einstein'
]
var fadeOut_0 = fadeInOut("#lead") ;
let f = true;
let i = 0;
// setInterval(() => {
//     if(f) i = fadeOut_0("text-fade-away-0");
//     else i = fadeOut_0("text-fade-away-1");
//     setTimeout(() => {
//            document.getElementById("lead").innerHTML = leads[i];
//         }, 1500 );
//     f = !f;
// }, 5000);
setInterval(() => {
    i++;
    i %=5;
    if(f) document.getElementById("lead").style.animationName = "text-fade-away-0";
    else document.getElementById("lead").style.animationName = "text-fade-away-1";
    setTimeout(() => {
        document.getElementById("lead").innerHTML = leads[i];
    }, 1500);
    f = !f;
}, 6000);

// document.querySelector("#lead").style.animationName = "text-fade-away";

// let i = 0;
// var fun1 = fadeInOut(1,1);
// var fun2 = fadeInOut(2,2);
// var id = setInterval(() => {
//     i++;
//     console.log(fun1());
//     console.log(fun2());

//     if(i==20) clearInterval(id);
// }, 200);
