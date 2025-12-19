/**
 * Apple Intelligence Connectivity Check
 */

const url = "https://guzzoni.apple.com";
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("Apple AI", "❌ 不可达", "");
    $done();
    return;
  }

  if (response.status === 200 || response.status === 403) {
    $notification.post("Apple AI", "✅ 可连通", "");
  } else {
    $notification.post("Apple AI", "⚠️ 异常", "");
  }
  $done();
});
