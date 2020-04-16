import {Schema,model, SchemaTypes} from 'mongoose';

const SubjectSchema: Schema = new Schema({
    name : { type:String, required:true, unique:true},
    students : [{ type: Schema.Types.ObjectId, ref: 'Student'}]
});

export default model('Subject', SubjectSchema);