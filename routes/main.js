const index = require("./index")
const dosen = require("./dosen_route")
const mahasiswa = require("./mahasiswa_routes")
const matkul = require("./matkul_route")


const routes = (app) =>{

    app.use("/",index)
    app.use("/dosen",dosen)
    app.use("/mahasiswa",mahasiswa)
    app.use("/matkul",matkul)

}
module.exports = routes