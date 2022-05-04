import express from 'express';
import {router} from './pages/api/users';


const app = express();

app.use('/',router);

app.listen(3000,()=>{
    console.log("app is running on 3000 port");
})
