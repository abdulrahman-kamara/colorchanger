let color = ["#222f3e", "#000000", "#ee5253", "#0abde3"];
let i = 0;
document.querySelector("button").addEventListener('click', function() {
    i = i < color.length ? ++i : 0;
    document.querySelector('body').style.background = color[i]
})