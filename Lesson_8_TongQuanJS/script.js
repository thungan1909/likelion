//1. Write a JavaScript function to check whether an `input` is an array or not. 

var is_array = function (input)
{
    //Hàm call() dùng để thực thi một hàm nào đó với các tham số truyền vào (nếu có),
    // hàm này được tích hợp sẵn trong các đối tượng là function.
    if(toString.call(input) === "[object Array]")
        return true;
    return false;
    
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));