const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.body.devoured, req.params.id, function(result) {
        if (result.changedRows == 0) {
            console.log("hello world")
            //return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;