// curry in js

function double(a){
    return function(b){
        return a*b;
    }
}

const double2 = double(2);// a = 2 it is fixed like a templete in ppt

console.log(double2(4)); // material that chage
console.log(double2(5));