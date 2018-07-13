document.addEventListener('DOMContentLoaded', function() {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var obj = document.getElementById('copied');
    chrome.storage.sync.get({
      customFormat: '[[${url}|${title}]]',
    }, function (options) {
      document.getElementById('title').innerHTML = tab.title;
      document.getElementById('url').innerHTML = tab.url;
      obj.value = options.customFormat.replace('${title}', tab.title).replace('${url}', tab.url);
      obj.select();
      document.execCommand('copy');
    });
  });
});
