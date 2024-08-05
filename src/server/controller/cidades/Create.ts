import { Request, Response } from "express";
import * as yup from "yup";

interface ICidade {
    nome: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validatedate: ICidade | undefined = undefined;

    try {
        validatedate = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError;
        return res.json({
            error: {
                default: yupError.message,
            },
        });
    }
    console.log(validatedate);

    return res.send("Create!");
};

// Aula 10 no começo!!
