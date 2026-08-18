declare enum Direction {
    up = "East",
    down = "West",
    left = "North",
    right = "South"
}
declare enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
declare enum PaymentStatus {
    pending = "PENDING",
    success = "SUCCESS",
    failed = "FAILED"
}
declare function checkPayment(status: PaymentStatus): void;
