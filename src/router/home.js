import { Router } from "express";
export const router = Router();

router.get("/", (req, res) => {
  const titulo = "Home"
  res.render("home", { titulo })
})

