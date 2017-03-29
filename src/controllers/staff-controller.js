import mongoose from "mongoose";
import {Router} from "express";
import Staff from "../data_models/staff";

export default({config,db}) => {
    let api = Router();

    // Routes

    // GET

    // POST

    // Add a new staff to the DB
    api.post("/",(req,res) => {
        let newStaff = new Staff();
        newStaff.name = req.body.name;
        newStaff.phone = req.body.phone;
        newStaff.email = req.body.email;
        newStaff.created_at = + new Date();

        newStaff.save(err => {
            if(err){
                res.send(err);
            }
            res.json({message:"Your new staff was added successfully"})
        })
    })

    // PUT


    return api;
}