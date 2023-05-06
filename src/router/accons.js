import express from "express";
export const accons = express.Router();

accons.get("/cuenta", (req, res) => {
  const titulo = "Cuenta"
  res.render("accons", { titulo })
})

