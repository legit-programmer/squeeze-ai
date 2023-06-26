import poe
from dotenv import load_dotenv
import os
import json
load_dotenv()

token = os.getenv('TOKEN')
client = poe.Client(token=token)

def getMessage(_prompt:str):
    message = _prompt
    for chunk in client.send_message("capybara", message):
        pass
    return chunk["text"]

print('Available bots:')
print(json.dumps(client.bot_names, indent=4))
