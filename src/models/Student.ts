import {Schema,model} from 'mongoose';

const StudentSchema: Schema = new Schema({
    name : { type:String, required:true},
    address : { type: String, required:true},
    phones : [{
        namenum : {type:String},
        number: {type:String}
    }],
    studies : [{type:String, required:true}]

});

export default model('Student', StudentSchema);