import { client } from "@repo/db/client";

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
		message: async function (ws, message) {
			if (message === "create-user") {
				const user = await client.user.create({
					data: {
						username: `user-${Math.floor(Math.random() * 1000)}`,
						password: "password",
					},
				});
				ws.send(JSON.stringify(user));
			}
		},
		open(ws) {
			console.log("WebSocket opened");
		},
	}, // handlers
});
