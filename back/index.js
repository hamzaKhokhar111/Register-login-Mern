import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import  bcrypt from 'bcrypt'

const app = express();
app.use(express.json());
app.use(cors());

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/user");
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

connectToDatabase();

app.get('/', (req, res) => {
    res.send("Hmzuuuuuu ki suceessful life");
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.send({ message: "User Already Exists" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
            res.send({ message: "Successfully Registered", user: newUser });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// const bcrypt = require('bcrypt');

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



const  UserSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

 const User=mongoose.model('User',UserSchema)