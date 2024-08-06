import mongoose from 'mongoose'

export const DBConnection = async ()=>
{
    return await mongoose.connect('mongodb+srv://Nour09:Momken1234@cluster0.zh6cj82.mongodb.net/RecipeSharingPlatform')
    .then((res)=>console.log('Connection has been established successfully.'))
    .catch((err)=>console.log('Unable to connect to the database.',err))
}
//done