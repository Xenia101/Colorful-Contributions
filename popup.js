// popup.js

$(document).ready(function () {
    chrome.storage.local.get(["id"], function (items) {
        $('input[value="'.concat((items.id).replace("#", ""), '"]')).prop("checked", true)
        console.log(items.id)

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

    var items = { id: idSelector };
    chrome.storage.local.set(items);

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