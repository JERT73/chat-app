import mongoose from 'mongoose';

const messageScehma = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true}) // will show created at and updated at

const Message = mongoose.model("Message", messageScehma);

export default Message;