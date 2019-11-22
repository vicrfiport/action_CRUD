const Mahasiswa = require("../../models/mahasiswa_models")

const create = async(req) => {

    

    let {npm,nama,email,tlp,jurusan} = req.body

    var insert_data = {npm,nama,email,tlp,jurusan}

    let data = new Mahasiswa(insert_data) 
    
    try {
        await data.save()

        return data

    } catch (err) {
        throw err
    }    
}

const cariSemua = async() => {
   
    try {
  
      let query = await Mahasiswa.find({}).exec()
      
      let data = query.map((v,i) => { 
            
          return {
            npm : v.npm,
            nama: v.nama,
            email: v.email,
            tlp: v.tlp,
            jurusan: v.jurusan}})  
            
      return data
        
    } catch (err) {
        throw err
        
    } 
  }

  const detail = async (id) => {
    
    try {
            
    let query = await Mahasiswa.findOne({ _id:id}).exec()
    
    return query
    
        } catch (err){
            throw err
            }
    }


    const change = async(id, updated_data) => {
 
        let {npm,nama,email,tlp,jurusan} = updated_data
    
        let data = {npm,nama,email,tlp,jurusan}
    
        try {
            let query = Mahasiswa.findOneAndUpdate({_id:id},data).exec()
             
            return query
        } catch (error) { 
            throw error
        }
    }
    

    const deleted = async (id) => {
            try {
                let query = await Mahasiswa.findOneAndDelete({
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