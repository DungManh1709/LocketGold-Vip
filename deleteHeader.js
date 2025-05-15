// deleteHeader.js - Xóa các header gây lỗi với RevenueCat
let headers = $request.headers;

delete headers["x-revenuecat-etag"];
delete headers["X-RevenueCat-ETag"];

$done({headers});