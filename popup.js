// popup.js

$(document).ready(function () {
    // View local storage data
    // chrome.storage.sync.get(function (result) { console.log(result) })

    chrome.storage.sync.get(["id"], function (items) {
        $('input[value="'.concat((items.id).replace("#", ""), '"]')).prop("checked", true)

        var colorsArray = new Array()
        $(items.id).children().each(function (idx, val) {
            colorsArray.push($(this).css("background-color"))
        })

        let colors = {
            L4: colorsArray[4],
            L3: colorsArray[3],
            L2: colorsArray[2],
            L1: colorsArray[1],
            default: colorsArray[0]
        }

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendMessage(tab.id, { colors: colors })
        })
    })
})

$('.apply-btn').click(function () {
    var idSelector = "#".concat($("input[type='radio']:checked").val())
    var colorsArray = new Array()
    $(idSelector).children().each(function (idx, val) {
        colorsArray.push($(this).css("background-color"))
    })

    let colors = {
        L4: colorsArray[4],
        L3: colorsArray[3],
        L2: colorsArray[2],
        L1: colorsArray[1],
        default: colorsArray[0]
    }

    var items = { id: idSelector, colors: colors };
    chrome.storage.sync.set(items);

    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendMessage(tab.id, { colors: colors })
    })
})