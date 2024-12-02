require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { ContactModel, ContactFormModel, TaskModel, PostModel } = require("./models/model");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const connectdb = require('./config/db');
connectdb();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('SMTP server is ready to take messages');
    }
});

//For ContactMe
app.post("/contactme", async (req, res) => {
    try {
        const contact = await ContactModel.create(req.body);
        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

//For ContactForm Project
app.post("/contactform", async (req, res) => {
    try {
        const contact = await ContactFormModel.create(req.body);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'Contact Form Submission',
            text: `Hello ${req.body.name},\n\nThank you for reaching out to us! We’ve received your message and will get back to you as soon as possible. In the meantime, if you have any further questions, feel free to reply to this email.\n\nBest regards,\nThe ContactForm Team`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

//For ToDoList Project
app.get("/taskslist", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

app.post("/tasks", async (req, res) => {
    const newTask = {
        task_id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        completed: false,
    };
    try {
        const todo = await TaskModel.create(newTask);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});

app.put("/taskupdate/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const updatedTask = await TaskModel.findOneAndUpdate(
            { task_id: id },
            { $set: { completed } },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(400).json({ error: "Failed to update task" });
    }
});

app.delete("/taskdelete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await TaskModel.findOneAndDelete({ task_id: id });

        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(204).end();
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(400).json({ error: "Failed to delete task" });
    }
});

//For BlogPost
app.post("/posts", async (req, res) => {
    try {
        const { title, content, summary } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }
        const newPost = new PostModel({ title, content, summary });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating the post." });
    }
});

app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, summary } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const updatedPost = await PostModel.findByIdAndUpdate(
            id,
            { title, content, summary },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating the post." });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching posts." });
    }
});

app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await PostModel.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching the post." });
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPost = await PostModel.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.json({ message: "Post deleted successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting the post." });
    }
});

app.listen(3001, () => {
    console.log("Server is running successfully on port 3001");
});
