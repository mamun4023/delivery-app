import { NextResponse } from "next/server"

import {User} from '@/models/User'
import bcrypt from 'bcrypt';
import mongoose from 'mongoose'



export async function POST(req){


    const body = await req.json();
    
    console.log(body)

    mongoose.connect(process.env.MONGO_URL);

    const pass  = body.password;

    if(!pass.length || pass.length < 5){
        new Error("Password must be at least 5 characters")
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);
    const createUser = await User.create(body)
    return NextResponse.json(createUser)
}
