import poe
from dotenv import load_dotenv
import os
import json
load_dotenv()

token = os.getenv('TOKEN')
client = None

def ClientInit():
    global client
    client = poe.Client(token=token)


def sendMessage(_message):
    ClientInit()
    for chunk in client.send_message("chinchilla", _message):
        pass
    return chunk["text"]


def getMessage(_prompt: str):
    ClientInit()
    message = f'summarize a web page at {_prompt}'
    return sendMessage(message)


def describeMessage():
    ClientInit()
    message = 'I need a bit lengthy'
    return sendMessage(message)


def cutMessage():
    ClientInit()
    message = 'Shorten the informtaion please...'
    return sendMessage(message)


print('Available bots:')
ClientInit()
print(json.dumps(client.bot_names, indent=4))
