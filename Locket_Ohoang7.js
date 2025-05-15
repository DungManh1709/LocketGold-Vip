// Locket_Ohoang7.js - Unlock Locket Gold
let obj = JSON.parse($response.body);

obj.subscriber.entitlements = {
  "pro": {
    "expires_date": null,
    "product_identifier": "locket.gold.yearly",
    "purchase_date": "2024-01-01T00:00:00Z"
  }
};

obj.subscriber.subscriptions = {
  "locket.gold.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": null,
    "is_sandbox": false,
    "original_purchase_date": "2024-01-01T00:00:00Z",
    "period_type": "active",
    "purchase_date": "2024-01-01T00:00:00Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
};

$done({body: JSON.stringify(obj)});