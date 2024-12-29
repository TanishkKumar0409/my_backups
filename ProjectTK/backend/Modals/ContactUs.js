import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
});

const Contact = mongoose.model("contact", contactSchema);

export default Contact;