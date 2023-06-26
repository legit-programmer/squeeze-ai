const main = document.getElementById("main");

const windows = {
    start: '<div class="form"><div class="head">Welcome to <span>SqueezeAI</span></div><div class="start-div"><button id="but" class="start-but">Start</button></div></div>',
    result: '<div id="inner-main"><div id="result-parent"><textarea name="result" id="result" cols="40" rows="25"></textarea></div><button class="util">Strip off</button><button class="util">Add More</button><button style="float: right;width: 50px;border-radius: 100%;" class="util"><svg style="width: 30px;"            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"           stroke-width="0.5" stroke="currentColor" class="w-6 h-6"> <path               stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/></svg></button></div>',
    spinner:
        '<h1 style="color: white; margin-right: 5px;text-shadow: 0 0 25px #ffffff;">Squeezing</h1><img style="width: 50px; border-radius: 100%;box-shadow: 0 0 25px #F86F03;" src="https://media.giphy.com/avatars/iqoption/cBA2NTl4H0wy.gif" alt="" >',
};
let current = "start";
console.log(windows["start"]);
main.innerHTML = windows["start"];

const setValue = (text) => {
    const textarea = document.getElementById("result");
    textarea.innerText = text;
};



const postPrompt = (url) => {
    fetch("http://127.0.0.1:8000/post/", {
        method: "POST",
        body: JSON.stringify({
            prompt: `summarize with important points this web page: ${url} `,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            main.innerHTML = windows["result"];
            setValue(res);
        });
};

const getUrl = () => {
    main.innerHTML = windows["spinner"];
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true,
        },
        function (tabs) {
            var tabURL = tabs[0].url;
            console.log(tabURL);
            postPrompt(tabURL);
        }
    );
};

const start = document.getElementById("but");
start.addEventListener("click", getUrl);
