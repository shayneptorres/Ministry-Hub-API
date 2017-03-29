import mongoose from "mongoose";
import {Router} from "express";
import Ministry from "../data_models/ministry";
import Staff from "../data_models/staff";

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

    // Get all staff from the ministry with the given id
    api.get("/staff",(req,res) => {
        Staff.find({ministry:req.headers["id"]},(err,staff) =>{
            if(err){
                res.send(err);
            }
            res.json(staff);
        })
    })

    // POST

    // Adds a staff member to a group with a given ID
    api.post("/staff",(req,res) => {
        Ministry.findById(req.body.min_id,(err,min) =>{
            if (err){
                res.send(err);
            }
            // create new staff with parameters
            let newStaff = new Staff();
            newStaff.name = req.body.name;
            newStaff.phone = req.body.phone;
            newStaff.email = req.body.email;
            newStaff.created_at = + new Date();
            newStaff.ministry = req.body.min_id;
            // save the staff
            newStaff.save(err =>{
                if(err){
                    res.send(err)
                }
                // add staff to ministry
                min.staff.push(newStaff);
                // save ministry change
                min.save(err => {
                    if(err){
                        res.send(err)
                    }
                    res.json({message:"Your staff was saved successfully to you given ministry"})
                })
            })
        })
    })

    // Add a new ministry
    // "/v1/ministry"

    api.post("/",(req,res) => {
        let newMinistry = new Ministry();

        newMinistry.name = req.body.name;
        newMinistry.info = req.body.info;
        newMinistry.created_at = + new Date();
        newMinistry.leaders.push(req.body.leader);

        newMinistry.save(err => {
            if (err){
                res.send(err);
            }
            res.json({message:"Your ministry was created successfully"});
        })
    })

    // PUT
    api.put("/:id",(req,res)=>{
        Ministry.findById(req.params.id,(err,ministry) => {
            if (err){
                res.send(err);
            }
            ministry.name = req.body.name;
            ministry.info = req.body.info;
            ministry.leaders = [req.body.leader] ;
            ministry.save(err => {
                if(err){
                    res.send(err);
                }
                res.json({message:"Your ministry was updated successfully"});
            })
        })
    })

    return api;
}