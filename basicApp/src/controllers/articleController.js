import * as articleServices from '../services/articleService.js';
import jwt from "jsonwebtoken";


export const getAllArticlesController = async (req, res) => {
    try{
        const foundArticles = await articleServices.getAllArticles();
        return res.status(200).json(foundArticles);
    }
    catch(err){
        return res.status(403).json({message: "Error in fetching Articles"});
    }
}

export const getAllPublicArticlesController = async (req, res) => {
    try{
        const foundPublicArticles = await articleServices.getAllPublicArticles();
        return res.status(200).json(foundPublicArticles);
    }
    catch(err){
        return res.status(403).json({message: "Error in fetching Articles"});
    }
}

export const getAllLoggedInArticlesController = async (req, res) => {
    try{
        const verifiedToken = req.token;
        //console.log(verifiedToken);
        const foundLoggedInArticles = await articleServices.getLoggiedInArticles(verifiedToken);
        return res.status(200).json(foundLoggedInArticles);
    }
    catch(err){
        return res.status(403).json({message: "Error in fetching Articles"});
    }
}