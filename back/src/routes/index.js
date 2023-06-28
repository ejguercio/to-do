const {Router} =require("express");
const getAllTasks=require("../handlers/getAllTasks");
const postTask=require("../handlers/postTask");
const deleteTask=require("../handlers/deleteTask");
const putTask=require("../handlers/putTask");
const getTaskById=require("../handlers/getTaskById")

const router= Router();
//ROUTES
router.get("/tasks", getAllTasks)
router.get("/tasks/:id", getTaskById)
router.post("/tasks", postTask)
router.delete("/tasks/:id", deleteTask)
router.put("/tasks/:id", putTask)

module.exports= router;
