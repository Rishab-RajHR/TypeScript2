"use strict";
// let statusCode = "Success";
// enum Direction {
//     up,
//     down,
//     left,
//     right
// }
// console.log(Direction.up);  // 0
var Direction;
(function (Direction) {
    Direction["up"] = "East";
    Direction["down"] = "West";
    Direction["left"] = "North";
    Direction["right"] = "South";
})(Direction || (Direction = {}));
console.log(Direction.down); // West
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success); // 200
// Enums through function
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["pending"] = "PENDING";
    PaymentStatus["success"] = "SUCCESS";
    PaymentStatus["failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
function checkPayment(status) {
    console.log(status);
}
checkPayment(PaymentStatus.success);
