import mongoose from "mongoose";
import {Router} from "express";
import Ministry from "../data_models/ministry";

export default({ config,db }) => {
    let api = Router();

    // Routes here

    // GET

    api.get("/",(req,res) => {
        Ministry.find({},(err,ministries) =>{
            if (err){
                res.send(err);
            }
            res.json(ministries)
        })
    })

    // POST

    // Add a new ministry
    // "/v1/ministry"

    api.post("/",(req,res) => {
        let newMinistry = new Ministry();

        newMinistry.name = req.body.name;
        newMinistry.info = req.body.info;
        newMinistry.created_at = + new Date();
        newMinistry.leaders.push(req.body.leader) ;

        newMinistry.save(err => {
            if (err){
                res.send(err);
            }
            res.json({message:"Your ministry was created successfully"});
        })
    })

    return api;
}