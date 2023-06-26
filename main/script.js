const but = document.getElementById("but");
const handleClick = () => {
    console.log("hello");
    fetch("http://127.0.0.1:8000/post/", {        
        method: "POST",        
        body: JSON.stringify({
            prompt:'hello'
        }),        
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};

but.addEventListener("click", handleClick);
