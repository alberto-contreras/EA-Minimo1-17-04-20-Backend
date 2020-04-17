import {Schema,model} from 'mongoose';

const ResClinicoSchema: Schema = new Schema({
    nombre : { type:String, required:true},
    idMuestra : { type: String, required:true, unique:true},
    dataResultado : { type: String, required : true},
    resultado : { type: String, required : true},
    tipoTest : { type: String, required : true}

});

export default model('ResClinico', ResClinicoSchema);