// contentscript.js

function colorChange(colorSet) {
    /*
    let colorSet = {
        L4: "#0080ff",
        L3: "#03a6ff",
        L2: "#1ec0ff",
        L1: "#a3daff",
        default: "#ebedf0"
    }
    */

    /*
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
    */

    let contribLegend = document.querySelectorAll(".contrib-legend > ul > li")
    let colors = new Array()
    for (var key in colorSet) {
        colors.push(colorSet[key])
    }

    const reversed_colors = colors.reverse()
    for (let index = 0; index < contribLegend.length; index++) {
        contribLegend[index].style.backgroundColor = reversed_colors[index]
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        colorChange(request.colors)
    }
)

window.onload = function () {
    console.log("hello")

}