import mongoose from "mongoose";

const judgeSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        courtId : String,
        password : String,
        caseList : [{type : 'ObjectId', ref: 'Case'}]
    },
    { timestamps: true }
)

const Judge = mongoose.model("Judge", judgeSchema);
export default Judge;