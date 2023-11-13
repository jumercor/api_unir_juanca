import {Router} from "express";
import autores from "../controllers/autores.js";
import posts from "../controllers/posts.js";
import express from "express";
import postsFilterByAuthor from "../controllers/postbyauthor.js";

const app = express();
const router = Router();

//respuesta para consulta del fichero principal /api
router.get("/api", (req, res)=>{
    res.send("estas consultando a la api en el fichero /api");
  
    
});

//derivación a fichero /autores

//obtener lista de autores
router.get("/api/autores", autores);

//crear un autor
router.post("/api/autores", async (req,res) => {
  try{
    const { nombre, email, imagen} = req.body;
    const autorNuevo = [nombre, email, imagen];
    const result = await db.query('INSERT INTO `Unir`.`autor` (`nombre`, `email`, `imagen`) VALUES (?, ?, ?)', autorNuevo);
    res.json(result)
  } catch (err) {
    res.json({error: err.message});
  }
});

//derivación a fichero /posts

//obtener lista de posts
router.get("/api/posts", posts);

//obtener posts según el id del autor
router.get("/api/posts/:id", (req,res) => {
  try{
    const {id} = req.params;
    postsFilterByAuthor(id,res);
  } catch (err) {
    res.json({error: err.message})
  }


});

//crear un post
router.post("/api/posts", async (req,res) => {
    try{
      const { titulo, descripcion, categoria, id_autor} = req.body;
      const postNuevo = [titulo, descripcion, categoria, id_autor];
      const result = await db.query('INSERT INTO `Unir`.`posts` (`titulo`, `descripcion`, `categoria`, `id_autor`) VALUES (?, ?, ?, ?)', postNuevo);
      res.json(result)
    } catch (err) {
      res.json({error: err.message});
    }
  });


export default router;