const WS = new WebSocket("ws://localhost:8080");

WS.onopen = (e) => {
    WS.send("CLient")
}

export default WS;