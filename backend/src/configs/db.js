const mongoose=require("mongoose");



const connect= ()=> {
    return mongoose.connect("mongodb+srv://shaquibsgrl:shaquibsgrl@cluster0.tdroc.mongodb.net/beyond?retryWrites=true&w=majority")
}


module.exports=connect
