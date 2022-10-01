const WS = new WebSocket("wss://10.14.161.116:5174");

WS.onopen = (e) => {
    WS.send("Client sending request")
    console.log("message sent")
}; 

WS.onmessage = (e) => {
    console.log(`Data received from the server: ${e.data}`);
};

WS.onclose = (e) => {
    if (e.wasClean) {
        console.log("Connection closed cleanly");
    } else {
        console.log("Connection died")
    }
}

WS.onerror = (error) => {
    console.log("Error")
}

export default WS;