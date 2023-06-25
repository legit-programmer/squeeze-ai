const but = document.getElementById('but');
const head = document.getElementById('test');



const handleClick = ()=>{
    head.innerText = 'Clicked!';
}

but.addEventListener('click', handleClick)