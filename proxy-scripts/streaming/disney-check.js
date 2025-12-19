/**
 * Disney+ Unlock Checker
 */

const url = "https://www.disneyplus.com";
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("Disney+", "请求失败", "");
    $done();
    return;
  }

  if (response.status === 200) {
    $notification.post("Disney+", "✅ 已解锁", "");
  } else {
    $notification.post("Disney+", "❌ 未解锁", "");
  }
  $done();
});
