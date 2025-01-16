const buttons=document.querySelectorAll('.button')
// console.log(buttons)
const body=document.querySelector('body');

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click', (ev)=>{
        console.log(ev);
        console.log(ev.target);
        switch (ev.target.id) {
            case 'grey':
                body.style.backgroundColor=ev.target.id;
                break;
            case 'white':
                body.style.backgroundColor=ev.target.id;
                break;
            case 'blue':
                body.style.backgroundColor=ev.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor=ev.target.id;
                break;
            case 'purple':
                body.style.backgroundColor=ev.target.id;
                break;
        }
        
    })
})