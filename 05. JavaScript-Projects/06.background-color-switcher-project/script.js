const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector("body");

// javascript events
buttons.forEach(function(btn) {
    // console.log(btn);

    btn.addEventListener('click', function(ele){
        // console.log(ele);
        // console.log(ele.target);

        if(ele.target.id === 'grey')
            body.style.backgroundColor = ele.target.id;
        else if(ele.target.id === 'white')
            body.style.backgroundColor = ele.target.id;
        else if(ele.target.id === 'blue')
            body.style.backgroundColor = ele.target.id;
        else if(ele.target.id === 'yellow')
            body.style.backgroundColor = ele.target.id;
        else if(ele.target.id === 'purple')
            body.style.backgroundColor = ele.target.id;
    })
})