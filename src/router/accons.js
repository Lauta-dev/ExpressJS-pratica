import express from "express";
export const accons = express.Router();

accons.get("/cuenta", (req, res) => {
  res.render("accons")
})
