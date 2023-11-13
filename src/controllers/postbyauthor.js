
const getAllPostsBy = async (id) => {
        return await db.query('SELECT * FROM Unir.posts where id_autor = ?',id);
};

const postsFilterByAuthor = (id,res) => {
    const idAutor = id;
    getAllPostsBy(id)
       .then((result) => res.json(result[0]))
       .catch((error) => res.json({error: error.message}));
};


export default postsFilterByAuthor;