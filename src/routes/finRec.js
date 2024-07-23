const express = require('express');
const financialRecordModel = require('../schema/financialRecord');

const financialRecordRouter = express.Router();


financialRecordRouter.get("/getAllByUserID/:userId" ,async(req,res)=>{
    try {
        const userId = req.params.userId;
        const records = await financialRecordModel.find({userId:userId});

        if (records.length===0) {
            return res.status(404).send("No records for the user is found");
        }
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error);
    }
});

financialRecordRouter.post("/" ,async(req,res)=>{
    try {
        const newRecordBody = req.body;
        const newRecord = new financialRecordModel(newRecordBody);

        const savedRecord = await newRecord.save();

        res.status(200).send(savedRecord);

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
});

//update
financialRecordRouter.put("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const updRecord = await financialRecordModel.findByIdAndUpdate(
            id,
            newRecordBody,
            {new:true}
        );

        if (!updRecord) return res.status(404).send();

        
        res.status(200).send(updRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});

financialRecordRouter.delete("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const record = await financialRecordModel.findByIdAndDelete(id);

        if(!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = financialRecordRouter;