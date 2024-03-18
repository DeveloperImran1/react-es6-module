const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) =>{
    return first*second;
}

const divideTheFirstNumberByTheSecondNumber = (first, second) => {
    return first / second;
}

// export default add;    // normally akta function k default a export kora jai. But akadhik function k akta file theke export korar jonno array ba object akare export korte hobe.
export {add, multiply}