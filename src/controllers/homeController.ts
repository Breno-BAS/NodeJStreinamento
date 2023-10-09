import { Request, Response } from "express";

import { sequelize } from '../instances/pg';

import { Product } from "../models/Product";

export const home = async(req: Request, res: Response) => {
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com sucesso");
    } catch(error) {
        console.log("Deu problema:", error);
    }


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
