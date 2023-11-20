**Note:- The python package 'poe-api' which provides free access to OpenAI api is no longer stable.**
![](https://i.ibb.co/SyS6L0h/Capture.png)


#### SqueezeAI helps you to scrap/summarize the content of the webpage you are currently on with just few clicks! It saves your time by only extracting and providing the essential articles/paragraphs from the page.


## Features

- Extracts useful contents from the webpage
- Live previews
- Variable length of the content to be squeezed
- Easy to use
  
## Stack
- Javascript for scripting the extension
- Python for the server
- [FastAPI](https://fastapi.tiangolo.com/) for handling serverside requests
- [PoeAPI](https://github.com/ading2210/poe-api) for [gpt](https://openai.com/blog/chatgpt) services
 
## Setup locally
Download the [latest release](https://github.com/legit-programmer/squeeze-ai/releases)

- Extract the zip file

- goto ```main/config.js``` and change ```"env":"prod"``` to ```"env":"dev"```
- load the root directory of the extension into your [chromium based browser](https://www.google.co.in/search?q=chromium+based+browsers). Step by step guide on how to load an unpacked extension is [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)

Fire up the server🚀

```
cd server
pip install -r requirements.txt
uvicorn server:api --reload
```

Done!

## Author

- [@legit-programmer](https://www.github.com/legit-programmer)

