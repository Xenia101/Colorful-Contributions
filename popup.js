// popup.js

$(document).ready(function () {
    $('.apply-btn').click(function () {
        var idSelector = "#".concat($("input[type='radio']:checked").val())

        var colors = new Array()
        $(idSelector).children().each(function (idx, val) {
            colors.push($(this).css("background-color"))
        })

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendMessage(tab.id, { colors: colors })
        })
    })
})