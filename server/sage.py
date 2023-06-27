import poe
from dotenv import load_dotenv
import os
import json
load_dotenv()

token = os.getenv('TOKEN')
client = poe.Client(token=token)

def sendMessage(_message):
    for chunk in client.send_message("a2", _message):
        pass
    return chunk["text"]

def getMessage(_prompt:str):
    message = f'summarize with important points this web page: {_prompt}'
    return sendMessage(message)

def describeMessage():
    message = 'I need more content, describe it more...'
    return sendMessage(message)

print('Available bots:')
print(json.dumps(client.bot_names, indent=4))
