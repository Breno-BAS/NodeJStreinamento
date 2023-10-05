import { Request, Response } from "express";

import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
    let age: number = 30;
    let maisVelho: boolean = false;

    if (age > 50){
        maisVelho = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Breno',
        lastName: 'Andrade',
        maisVelho,
        products: list,
        expensive: expensiveList,
        frasesDoDia: []
    });
};
