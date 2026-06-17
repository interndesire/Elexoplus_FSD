import mongoose from "mongoose"
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true
        },
        email:  {
            type: String,
            required:true,
            unique: true,
            trim: true,
            lowercase: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            unique: true,
            match: [/^\+91\d{10}$/, 'Please enter a valid 10-digit Indian phone number with +91']   // we can make country code variable also when needed.
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))
        return next;
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)