/**
 * Netflix Unlock Checker (Loon)
 */

const url = "https://www.netflix.com/title/80018499"; // Netflix Originals
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("Netflix 检测", "请求失败", "");
    $done();
    return;
  }

  if (response.status === 200) {
    $notification.post("Netflix 解锁", "✅ 可观看", "");
  } else if (response.status === 403) {
    $notification.post("Netflix 解锁", "❌ 仅自制剧", "");
  } else {
    $notification.post("Netflix 解锁", "⚠️ 未解锁", "");
  }
  $done();
});
