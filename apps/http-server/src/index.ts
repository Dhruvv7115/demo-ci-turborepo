import express from "express";
import { client } from "@repo/db/client";


const app = express();
app.use(express.json());
console.log("Database url:", process.env.DATABASE_URL);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  console.log("Received request body:", req.body);
	const { username, password } = req.body;
  console.log("Received signup request:", { username });

	try {
		const user = await client.user.create({
			data: {
				username,
				password,
			},
		});
    console.log("Created user:", user);

		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});

export default app;
