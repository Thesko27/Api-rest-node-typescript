import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesControles } from "./../controller";

const router = Router();

router.get("/", (_, res) => {
    return res.send("Ola , mundo vindo do router!");
});

router.post("/cidades", CidadesControles.create);

export { router };
