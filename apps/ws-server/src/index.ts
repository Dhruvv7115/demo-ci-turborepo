Bun.serve({
	port: 3002,
	fetch(req, server) {
		// upgrade the request to a WebSocket
		if (server.upgrade(req)) {
			return; // do not return a Response
		}
		return new Response("Upgrade failed", { status: 500 });
	},
	websocket: {
		message(ws, message) {
      console.log("Received message:", message);
			ws.send("Server: " + message);
		},
		open(ws) {
			console.log("WebSocket opened");
		},
	}, // handlers
});
