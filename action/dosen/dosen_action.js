const Dosen = require("../../models/dosen_models")
const matkul = require("../../models/matkul_model")
const mahasiswa = require("../../models/mahasiswa_models")

const create = async(req) => {

    let {nik,nama,email,tlp,matkul,relasi,relasi1} = req.body

    var insert_data = {nik,nama,email,tlp,matkul,relasi,relasi1}

    let data = new Dosen(insert_data) 
    
    try {
        await data.save()

        return data

    } catch (err) {
        throw err
    }    
}

const cariSemua = async() => {
   
    try {
  
      let query = await Dosen.find({}).populate([
       {
        path:'relasi',
        model:matkul
       },
       {
           path:'relasi1',
           model:mahasiswa

            }
      ]).exec()
      
    //   let data = query.map((v,i) => { 
            
    //     //   return {
    //     //     nik: v.nik,
    //     //     nama: v.nama,
    //     //     email: v.email,
        //     tlp: v.tlp,
        //     matkul: v.matkul}})  
            
      return query
        
    } catch (err) {
        throw err
        
    } 
  }

  const detail = async (id) => {
    
    try {
            
    let query = await Dosen.findOne({ _id:id}).exec()
    
    return query
    
        } catch (err){
            throw err
            }
    }


    const change = async(id, updated_data) => {
 
        let {nik,nama,email,tlp,matkul,relasi} = updated_data
    
        let data = {nik,nama,email,tlp,matkul,relasi}
    
        try {
            let query = Dosen.findOneAndUpdate({_id:id},data).exec()
             
            return query
        } catch (error) { 
            throw error
        }}

    const deleted = async (id) => {
            try {
                let query = await Dosen.findOneAndDelete({
                    _id: id
                }).exec()
        
                return query
            } catch(err){
                throw err
            }
        }
        









module.exports = {
    
    create,
    cariSemua,
    detail,
    change,
    deleted

        }