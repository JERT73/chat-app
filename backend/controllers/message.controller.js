import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id;
        // console.log(req.user);
        // console.log(senderId);

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            }
        })

        if (!conversation){
            // no need to explicitly save
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        }

        // need to explicitly save
        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await  conversation.save();
        // await newMessage.save();

        // saves both of em parallely
        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error){
        console.log("Error while sending message", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId]
            },
        }).populate("messages") // gives array of objects of each message rather than just the id

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages);


    } catch {
        console.log("Error while getting message", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}