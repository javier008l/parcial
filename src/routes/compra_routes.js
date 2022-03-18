const express = require("express");
const compraSchema = require('../models/compra')
const router = express.Router()

//agrega nuevo
router.post('/compra',(req,res)=>{
    const compra = compraSchema(req.body)
    compra
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Listar los usuarios existentes en la BD
router.get('/compras',(req,res)=>{
    compraSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/compras/:id',(req,res)=>{
    const {id} = req.params
    compraSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
// Consultar un recurso específico existente en la BD
router.get('/comprasRef/:Ref',(req,res)=>{
    const {Ref} = req.params
    compraSchema
        .find({"Line.ExpenseDetail.Customer.Ref.value": Ref})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

// Consultar un recurso específico existente en la BD
router.get('/comprasDetail/:DetailType',(req,res)=>{
    const {DetailType} = req.params
    compraSchema
        .find({"Line.DetailType": DetailType})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})

router.get("/:productId", (req, res) => {
    const { productId } = req.params;
    compraSchema
      .findById(productId)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// Eliminar un recurso específico existente en la BD
router.delete('/compras/:id',(req,res)=>{
    const {id} = req.params
    compraSchema
    .remove({ _id: id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))

})
// Actualizar un recurso específico existente en la BD
router.put('/compras/:id', (req, res) => {
    const { id } = req.params
    const {fecha,DocNum,client:{name,direction},product:{details:{namaP,amount}}} = req.body
    compraSchema
        .updateOne({ _id: id }, { $set: {fecha,DocNum,client:{name,direction},product:{details:{namaP,amount}}}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

});
module.exports = router

