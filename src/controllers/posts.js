import {Router} from "express";
const router = Router();


const getAllPosts = async () => {
    return await db.query('SELECT * FROM Unir.posts');
}

const posts = (req,res) => {
    console.log('posts!')
    getAllPosts()
       .then((result) => res.json(result[0]))
       .catch((error) => res.json({error: error.message}));
};


export default posts;


