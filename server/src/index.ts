import express , {Application, Request, Response} from 'express'
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response)=> {
    return res.send({"message": "It is working"})
})


app.listen(PORT, function(err?:Error){
    if(err) console.log(err)
    console.log(`Server is running on port ${PORT}`)
})