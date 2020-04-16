import {Schema,model} from 'mongoose';

const StudentSchema: Schema = new Schema({
    name : { type:String, required:true, unique:true},
    address : { type: String, required:true},
    phones : [{
        namenum : {type:String},
        number: {type:String}
    }],
    studies : [{type:String}]

});

export default model('Student', StudentSchema);