const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscribers')

//getting all

router.get('/', async (req,res) => {
    try {
       const subscriber = await Subscriber.find(); 
       res.status(200).json(subscriber)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }



    // try {
    //     const subscribers = await Subscriber.find()
    //     res.json(subscribers);
    // }catch(err){
    //     res.status(500).json({
    //         message: err.message
    //     })
    // }
})
// Getting one
router.get('/:id', (req,res) => {
res.send(req.params.id)
});
// creating one
router.post('/', async (req,res) => {
    // const subscriber = new Subscriber({
    //     name: req.body.name,
    //     subscribeToChannel: req.body.subscribeToChannel
    // })
    // try{
    //     const newsubscriber = await subscriber.save();
    //     res.status(201).json(newsubscriber)
    // } catch(err){
    //     res.status(400).json({
    //         message: err.message
    //     })
    // }

})
// Updating
router.patch('/', (req,res) => {

});

//Delete

router.delete('/:id', (req,res) => {

});

module.exports = router;