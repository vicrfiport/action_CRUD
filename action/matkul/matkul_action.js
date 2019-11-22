const Matkul = require("../../models/matkul_model")
const Dosen  = require("../../models/dosen_models")

const create = async(req) => {

    let {nomatkul,namamatkul,dosen,semester,relasi} = req.body

    var insert_data = {nomatkul,namamatkul,dosen,semester,relasi}

    let data = new Matkul(insert_data) 
    
    try {
        await data.save()

        return data

    } catch (err) {
        throw err
    }    
}

const cariSemua = async() => {
   
    try {
  
      let query = await Matkul.find({}).populate([

        {

            path:'relasi',
            model:Dosen
        }
      ]).exec()
      

    //   let data = query.map((v,i) => { 
            
    //       return {
    //         nomatkul : v.nomatkul,
    //         namamatkul: v.namamatkul,
    //         dosen: v.dosen,
    //         semester: v.semester,
    //         }})  
            
      return query
        
    } catch (err) {
        throw err
        
    } 
}




  const detail = async (id) => {
    
    try {
            
    let query = await Matkul.findOne({ _id:id}).exec()
    
    return query
    
        } catch (err){
            throw err
            }
    }


    const change = async(id, updated_data) => {
 
        let {nomatkul,namamatkul,dosen,semester} = updated_data
    
        let data = {nomatkul,namamatkul,dosen,semester}
    
        try {
            let query = Matkul.findOneAndUpdate({_id:id},data).exec()
             
            return query
        } catch (error) { 
            throw error
        }
    }
    

    const deleted = async (id) => {
            try {
                let query = await Matkul.findOneAndDelete({
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
    deleted,

        }