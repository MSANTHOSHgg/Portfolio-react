const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('contactme', ContactSchema);

const ContactFormModel = mongoose.model('contactus', ContactSchema);

const taskSchema = new mongoose.Schema({
    task_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
});

const TaskModel = mongoose.model('todolist', taskSchema);

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String },
    publishedDate: { type: Date, default: Date.now },
});

const PostModel = mongoose.model('blogpost', postSchema);

module.exports = {
    ContactModel,
    ContactFormModel,
    TaskModel,
    PostModel,
};