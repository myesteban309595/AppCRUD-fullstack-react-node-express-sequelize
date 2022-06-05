
import blogModel from '../models/blogmodel.js'

export const GetAllBlog = async (req,res)=> {
    try { 
        const allblogs = await blogModel.findAll()
        res.json(allblogs)
        console.log(allblogs);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const GetBlogId = async (req,res) => {
      try{
          const blogId = await blogModel.findAll({
              where: {id : req.params.id}
          })
          res.json(blogId[0])
       }catch (error) {
          res.json({message: error.message})
       }
}

export const CreateBlog = async (req, res) => {

    try{
        const CreatedBlog = await blogModel.create(req.body)
        res.json({"message": "Se ha creado el registro correctamente"})
        console.log("registro creado: ", CreatedBlog);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al crear el registro");
    }
}

export const UpdateBlog = async (req, res) => {

    try{
        const updateddBlog = await blogModel.update(req.body, {
            where: {id : req.params.id}
        })
        res.json({"message": "Se ha actualizado el registro correctamente"})
        console.log("registro actualizado: ", updated);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al actualizar el registro");
    }
}

export const DeleteBlog = async (req, res) => {

    try{
        const deleteddBlog = await blogModel.destroy({
            where: {id : req.params.id}
        })
        res.json({"message": "Se ha eliminado el registro correctamente"})
        console.log("registro actualizado: ", deleteddBlog);
    } catch(error) {
        res.json({message: error.message})
        console.log("error al eliminar el registro");
    }
}