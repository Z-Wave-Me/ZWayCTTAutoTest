# -*- coding: latin-1 -*-
import time
import threading
import websocket

def on_message(wsapp, message):
    print("Received", message)

def on_open(wsapp):
    f = open('testClient.txt', 'r')
    lines = f.readlines()
    print("Opened connection")
    t = threading.Thread(target=thread_function, args=(lines,))
    t.start()

def thread_function(lines):
    print("Start sending")
    for line in lines:
        time.sleep(0.01)
        message = ('{"log": "' + line.strip().replace('"', '\"') + '"}').encode("utf-8");
        print("Sending", message)
        wsapp.send(message)
    
wsapp = websocket.WebSocketApp("ws://localhost:9090", on_message=on_message, on_open=on_open)

wsapp.run_forever()
