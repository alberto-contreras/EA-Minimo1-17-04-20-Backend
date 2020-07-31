import mongoose, {model} from 'mongoose';

function initiateDB(){
    mongoose.connect('mongodb://localhost:27017/Minimo1-Covid19',(error) =>{
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