import User from '../models/UserSchema'

export default updateUser = async(req,res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(id,{${set:req.body},{new:true}})
        

    } catch (error) {
        
    }

}