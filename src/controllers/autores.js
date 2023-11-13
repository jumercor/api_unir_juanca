
const getAllAutors = async () => {
    return await db.query('SELECT * FROM Unir.autor');
};

const autores = (req,res) => {
    console.log('autores!')
    getAllAutors()
       .then((result) => res.json(result[0]))
       .catch((error) => res.json({error: error.message}));
};


export default autores;