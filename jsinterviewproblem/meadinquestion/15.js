// closure in js is used for encapulation
function outerfuction(){
    let cnt = 0;

    function innerFunction(){
        cnt++;
        console.log(cnt)
    }
    return innerFunction;
}


const counter = outerfuction();

counter(); // 1
counter(); // 2
counter(); // 3