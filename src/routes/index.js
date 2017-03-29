import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../db";

import ministry from "../controllers/ministry-controller";

let router = express();

initializeDB(db=>{
    router.use(middleware({config,db}));

    // API routes
    router.use("/ministry",ministry({config,db}));

})

export default router;