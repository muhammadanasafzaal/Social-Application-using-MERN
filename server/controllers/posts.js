import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages, 'all posts from server')
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const createPost = (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}