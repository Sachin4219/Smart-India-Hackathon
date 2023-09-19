import mongoose from "mongoose";

const advocateSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        advId : String,
        password : String,
        caseList: [{ type: 'ObjectId', ref: 'Case' }]
    },
    { timestamps: true }
)

const Advocate = mongoose.model("Advocate", advocateSchema);
export default Advocate;