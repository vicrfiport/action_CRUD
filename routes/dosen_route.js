const express = require('express')
const router = express.Router()
const {create,cariSemua,detail,change,deleted} = require("../action/Dosen/dosen_action")

router.post("/", async (req,res) => {

    try {

        let data = await create(req)

        return res.status(200).json({
            status: "success",
            data,
            message: "data berhasil dibuat"
        })
        
    } catch (err) {
        return res.status(400).json({

            status : "faild",
            message : err.message
        })
        
    }
})

router.get("/find", async (req,res) => {

    try {

        let data = await cariSemua(req)

        return res.send({
            status: "success",
            data,
            message: "semua data tampil"
        })
        
    } catch (error) {
        return res.status(400).json({

            satatus : "faild",
            message : error.message
        })
        
    }
})

router.get("/:id", async (req,res) => {

    try {

        let {id} = req.params
        let data = await detail(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "data berhasil dibuat"
        })
        
    } catch (err) {
        return res.status(400).json({

            satatus : "faild",
            message : err.message
        }
        )
    }
}
)

router.put("/:id", async (req,res) => {
    let { id } = req.params
    let update_data = {
        nik: req.body.nik,
        nama: req.body.nama, 
        email: req.body.email,
        tlp: req.body.tlp,
        matkul: req.body.matkul
    }

    try {
        let data = await change(id, update_data)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil diubah !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.put("/:id", async (req,res) => {
    let { id } = req.params
    let update_data = {
        nik: req.body.nik,
        nama: req.body.nama, 
        email: req.body.email,
        tlp: req.body.tlp,
        matkul: req.body.matkul
    }

    try {
        let data = await ubah(id, update_data)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil diubah !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await deleted(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil hapus"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});




module.exports = router