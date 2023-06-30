// Choose the config in config.js file (dev or prod)
import { windows } from "./utils.js";
import config from "./config.json" assert { type: "json" };

const main = document.getElementById("main");
main.innerHTML = windows["start"];
const github = document.getElementById("github");
const serverUrl =
    config["env"] === "dev"
        ? "http://127.0.0.1:8000/"
        : "https://squeezeai.legit-programmer.repl.co/";
console.log(serverUrl);

const addContent = () => {
    main.innerHTML = windows["spinner"];
    fetch(serverUrl + "add/")
        .then((res) => res.json())
        .then((res) => resultWindow(res));
};

const cutContent = () => {
    main.innerHTML = windows["spinner"];
    fetch(serverUrl + "cut/")
        .then((res) => res.json())
        .then((res) => resultWindow(res));
};

const resultWindow = (text) => {
    main.innerHTML = windows["result"];
    const arrMain = String(text).split(" ");
    const textarea = document.getElementById("result");
    const copy = document.getElementById("copy");
    let count = 0;
    copy.addEventListener("click", () => {
        textarea.select();
        document.execCommand("copy");
    });
    const interval = setInterval(() => {
        textarea.innerText = textarea.value + " " + arrMain[count];
        count += 1;
        if (count === arrMain.length) {
            clearInterval(interval);
        }
    }, 50);

    const add = document.getElementById("add");
    const cut = document.getElementById("cut");
    add.addEventListener("click", addContent);
    cut.addEventListener("click", cutContent);
};

const postPrompt = (url) => {
    fetch(serverUrl + "post/", {
        method: "POST",
        body: JSON.stringify({
            prompt: url,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            resultWindow(res);
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
github.addEventListener("click", () => {
    window.open("https://github.com/legit-programmer/");
});
