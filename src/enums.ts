// let statusCode = "Success";

// enum Direction {
//     up,
//     down,
//     left,
//     right
// }
// console.log(Direction.up);  // 0



enum Direction {
    up="East",
    down="West",
    left="North",
    right="South"
}
console.log(Direction.down);   // West



enum StatusCode{
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
console.log(StatusCode.Success);   // 200



// Enums through function

enum PaymentStatus {
    pending="PENDING",
    success="SUCCESS",
    failed="FAILED"
}

function checkPayment(status:PaymentStatus){
     console.log(status);
}
checkPayment(PaymentStatus.success);