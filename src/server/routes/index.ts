import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res) => {
    return res.send("Ola , mundo vindo do router!");
});

router.post("/teste", (req, res) => {
    //console.log(req);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(req.body);
});

export { router };
