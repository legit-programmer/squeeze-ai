import poe
from dotenv import load_dotenv
import os
import json
load_dotenv()

token = os.getenv('TOKEN')
client = poe.Client(token=token)
message = "Summarize the content from a webpage: github.com/legit-programmer"
for chunk in client.send_message("capybara", message):
    pass

print(chunk["text"])

print('Available bots:')
print(json.dumps(client.bot_names, indent=4))
