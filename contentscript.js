// contentscript.js

var g_legacy_colorSet;

function init_colorChange(colorSet) {
    /*
    let colorSet = {
        L4: "#0080ff",
        L3: "#03a6ff",
        L2: "#1ec0ff",
        L1: "#a3daff",
        default: "#ebedf0"
    }
    */

    let rect = document.querySelectorAll("rect")
    rect.forEach(element => {
        let fill = element.getAttribute("fill")
        if (fill == "var(--color-calendar-graph-day-L4-bg)") {
            element.setAttribute("fill", colorSet.L4)
        } else if (fill == "var(--color-calendar-graph-day-L3-bg)") {
            element.setAttribute("fill", colorSet.L3)
        } else if (fill == "var(--color-calendar-graph-day-L2-bg)") {
            element.setAttribute("fill", colorSet.L2)
        } else if (fill == "var(--color-calendar-graph-day-L1-bg)") {
            element.setAttribute("fill", colorSet.L1)
        }
    });

    let contribLegend = document.querySelectorAll(".contrib-legend > ul > li")
    let colors = new Array()
    for (var key in colorSet) {
        colors.push(colorSet[key])
    }

    var blank_color = colors[colors.length - 1]
    colors.unshift(blank_color)
    for (let index = 0; index < contribLegend.length; index++) {
        contribLegend[index].style.backgroundColor = colors[index]
    }
}

function onClickColorChange(request_colors, legacy_colorSet) {
    let rect = document.querySelectorAll("rect")
    rect.forEach(element => {
        let fill = element.getAttribute("fill")
        if (fill == legacy_colorSet.L4) {
            element.setAttribute("fill", request_colors.L4)
        } else if (fill == legacy_colorSet.L3) {
            element.setAttribute("fill", request_colors.L3)
        } else if (fill == legacy_colorSet.L2) {
            element.setAttribute("fill", request_colors.L2)
        } else if (fill == legacy_colorSet.L1) {
            element.setAttribute("fill", request_colors.L1)
        } else if (fill == request_colors.L4) {
            element.setAttribute("fill", legacy_colorSet.L4)
        } else if (fill == request_colors.L3) {
            element.setAttribute("fill", legacy_colorSet.L3)
        } else if (fill == request_colors.L2) {
            element.setAttribute("fill", legacy_colorSet.L2)
        } else if (fill == request_colors.L1) {
            element.setAttribute("fill", legacy_colorSet.L1)
        }
    })

    let contribLegend = document.querySelectorAll(".contrib-legend > ul > li")
    let colors = new Array()
    for (var key in request_colors) {
        colors.push(request_colors[key])
    }

    const reversed_colors = colors.reverse()
    for (let index = 0; index < contribLegend.length; index++) {
        contribLegend[index].style.backgroundColor = reversed_colors[index]
    }

    g_legacy_colorSet = request_colors
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        onClickColorChange(request.colors, g_legacy_colorSet)
    }
)

window.onload = function () {
    chrome.storage.sync.get(["id", "colors"], function (items) {
        g_legacy_colorSet = items.colors
        init_colorChange(items.colors)
    })
}