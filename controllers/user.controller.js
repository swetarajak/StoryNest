import express from 'express';
import User from '../models/user.models.js'
const app = express();

export const getSignInDetails = async(req,res) =>{
    return res.render("signin");
}

export const postSignInDetails = async(req,res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");

}

export const signUp = async(req,res) => {
    return res.render('signup');
}