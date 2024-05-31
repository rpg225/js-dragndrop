const king = document.querySelector(".chess-piece")
const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")

king.addEventListener("drag", dragging )
king.addEventListener("dragstart", dragStart)

function dragging (e) {
    console.log(e + "is being dragged")
}

function dragStart (e) {
    console.log("dragging has started on " + e.target)
}