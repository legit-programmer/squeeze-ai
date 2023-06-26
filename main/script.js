const start = document.getElementById("but");

const postPrompt = (url) => {
        fetch("http://127.0.0.1:8000/post/", {
        method: "POST",
        body: JSON.stringify({
            prompt: `summarize with important points this web page: ${url} `,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then(res=>console.log(res));
};

const getUrl = () => {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true,
        },
        function (tabs) {
            var tabURL = tabs[0].url;
            console.log(tabURL)
            postPrompt(tabURL);
        }
    );
};



start.addEventListener("click", getUrl);
