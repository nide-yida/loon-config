/**
 * IP / Country Checker
 */

const url = "https://ip-api.com/json/?lang=zh-CN";
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("IP 检测", "失败", "");
    $done();
    return;
  }

  const info = JSON.parse(data);
  $notification.post(
    "节点信息",
    info.country + " / " + info.city,
    info.query
  );
  $done();
});
