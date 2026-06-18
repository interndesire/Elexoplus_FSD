import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async(req, res ) => {
    const {fullName, email, userName, password, phoneNumber} = req.body
    // console.log("email : ", email)

    if ([fullName, email, userName, password, phoneNumber].some((field) =>
            field?.trim() === "")) {
        throw new ApiError(400, "All feilds are required")
    }
    if(!email.includes('@')){
        throw new ApiError(400, "invalid email")
    }

    const existedUser = await User.findOne({
        $or: [{userName},{email},{phoneNumber}]
    })
    // console.log("existedUser : ",existedUser)

    if(existedUser){
        throw new ApiError(409, "User with same username , email or phone number already exists")
    }

    const user = await User.create({
        fullName,
        email,
        password,
        userName,
        phoneNumber
    })

    const createUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createUser){
        throw new ApiError(500, "Something went wrong while registering user")
    }
    console.log(createUser)


    return res.status(200).json(new ApiResponse(200, createUser,  "User registered sucessfully"))
})

const loginUser = asyncHandler(async(req,res) => {

    const {email,userName,password} = req.body

    if((!userName&& !email) && !password?.trim()){
        throw new ApiError(400, "username or email and password required")
    }

    const user = await User.findOne({
        $or:[{userName},{email}]
    })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credential")
    }

    const loggedInUser = await User.findById(user._id).select("-password")

    return res.status(200).json(
        new ApiResponse(200,
            {user: loggedInUser},
            "User logged in sucessfully"
        )
    )
})

const logoutUser = asyncHandler(async(req,res) => {
    
    return res
        .status(200)
        .json(new ApiResponse(200, "user logged out sucessfully"))
})

export {registerUser, loginUser, logoutUser};