# -*- coding: latin-1 -*-
import time
import websocket

def on_message(wsapp, message):
    print(">>", message)

def on_open(wsapp):
    f = open('testClient.txt', 'r')
    lines = f.readlines()
    for line in lines:
        time.sleep(0.1)
        print(">>")
        message = line.encode("utf-8")
        print("<<", message)
        print("<<", message)
        wsapp.send(message)
    
wsapp = websocket.WebSocketApp("ws://localhost:9090", on_message=on_message, on_open=on_open)

wsapp.run_forever()


