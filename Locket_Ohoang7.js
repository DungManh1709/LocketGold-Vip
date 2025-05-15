// Locket_Ohoang7.js - Fake VIP badge response

let body = JSON.parse($response.body);

body.hasGold = true;
body.hasVip = true;
body.vipBadge = {
  status: "active",
  label: "GOLD VIP"
};

$done({ body: JSON.stringify(body) });