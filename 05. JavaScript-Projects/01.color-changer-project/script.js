// 0123456789ABCDEF => HEX Value foe Colors

const btn = document.getElementById("button");
// const btn = document.querySelector("#button");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i=0; i<6; i++) {
        cons += val[Math.floor(Math.random()*16)];    // index 0 to 15
    }

    return cons;
}

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);