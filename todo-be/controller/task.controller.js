const Task = require("../model/Task");


const taskController = {};

taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const { userId } = req
        const newTask = new Task({ task, isComplete, author: userId });
        await newTask.save();
    return res.status(200).json({ status: "success", data: newTask });
    } catch (error) {
    console.log("123", error)
    res.status(400).json({status:"fail", message: error.message})
    }
};

taskController.getTasks = async (req, res) => {
    try {
      const { userId } = req
      const taskList = await Task.find({author:userId}).populate("author");
      // console.log("1232414123", taskList);
      res.status(200).json({ status: "success", data: taskList });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
};

taskController.updateTask = async (req, res) => {
    try {
        const toggleTask = await Task.findById(req.params.id)
        if (!toggleTask) {
            throw new Error("no data");
          }
        const { _id, isComplete } = req.body
        Object.keys(req.body).forEach(key => {
            toggleTask[key] = req.body[key];
        });
        await toggleTask.save();

        // const fields = Object.keys(req.body);
        // fields.map((item) => (toggleTask[item] = req.body[item]));
        res.status(200).json({ status: "success", data: toggleTask });
    } catch (error) {
        res.status(400).json({ status: "fail", message: error.message });
    }
}

taskController.deleteTask = async (req, res) => {
    try {
      const deleteItem = await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: "success", data: deleteItem });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  };
  

module.exports = taskController;