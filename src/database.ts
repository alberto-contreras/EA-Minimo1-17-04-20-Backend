import mongoose, {model} from 'mongoose';

function initiateDB(){
    mongoose.connect('mongodb://localhost:27017/SchooMinimo',(error) =>{
        if(!error)
        {
            console.log('Connection w/ DB Succesful!');     
        }
        else
        {
            console.log('Connection Error w/ DB!');     
        }
        
    })
}
export {initiateDB};