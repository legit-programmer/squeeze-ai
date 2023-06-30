import poe
from dotenv import load_dotenv
import os
import json
load_dotenv()

token = os.getenv('TOKEN')
client = poe.Client(token=token)


def sendMessage(_message):
    for chunk in client.send_message("chinchilla", _message):
        pass
    return chunk["text"]


def getMessage(_prompt: str):
    message = f'summarize a web page at {_prompt}'
    return sendMessage(message)


def describeMessage():
    message = 'I need a bit lengthy'
    return sendMessage(message)


def cutMessage():
    message = 'Shorten the informtaion please...'
    return sendMessage(message)


print('Available bots:')
print(json.dumps(client.bot_names, indent=4))
