/* eslint-disable no-console */
import express from "express";

const publicRouter = new express.Router();

publicRouter.get("*", function (req, res) {
	res.status(404).send("what???");
});

publicRouter.post("*", function (req, res) {
	res.status(404).send("what???");
});

export { publicRouter };
