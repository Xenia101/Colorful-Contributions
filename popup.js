// popup.js

$(document).ready(function () {
    $('.apply-btn').click(function () {
        console.log("clicked")

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendMessage(tab.id, { foo: "bar" }, function (response) {
                console.log(response.baz)
            })
        })
    })
})