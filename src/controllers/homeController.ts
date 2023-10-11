import { Request, Response } from "express";
import { Op } from 'sequelize'

import { Product } from "../models/Product";
import { User } from '../models/User';

export const home = async(req: Request, res: Response) => {
    let users = await User.findAll({
       where: {
            age: [55, 30, 90]
       }
    });


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
        frasesDoDia: [],
        users
    });
};
