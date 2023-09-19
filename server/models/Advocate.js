import mongoose from "mongoose";

const AdvocateSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        caseList: [{ type: 'ObjectId', ref: 'Case' }]
    },
    { timestamps: true }
)

const Advocate = mongoose.model("Advocate", AdvocateSchema);
export default Advocate;