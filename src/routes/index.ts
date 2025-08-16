import express from "express";
import mustache from "mustache-express";
import path from "path";

const app = express();

// middlewares e rotas
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

// suas rotas
app.get("/", (req, res) => {
  res.render("home");
});

// exporta o app p/ vercel
export default app;

// se estiver rodando localmente, abre na porta
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => console.log("Rodando na porta 3000 🚀"));
}
