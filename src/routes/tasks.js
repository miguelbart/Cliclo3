const express= require ('express');
const router = express.Router();

const Task =require('../models/Task');

router.get('/', async (req, res)=>{
    const tasks = await Task.find();
    res.json(tasks);
    //res.send('API tareas')
});

router.post('/', async (req,res)=>{
    const task = new Task(req.body);
    await task.save();
    //console.log(req.body);
    res.json({
        status:'Task saved'
    });
});

router.put('/:id', async (req,res)=>{
    await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        status:'Task Updated'
    });

});

router.delete('/:id', async (req,res)=>{
    await Task.findByIdAndUpdate(req.params.id);
    res.json({
        status:'Task Deleted'
    });

});




module.exports = router;