import mongoose from "mongoose";

const caseSchema = mongoose.Schema(
    {
        caseId: {
            type: String,
            required: true,
        },
        advocateAppellant: [{ type: 'ObjectId', ref: 'Lawyer' }],
        advocateRespondent: [{ type: 'ObjectId', ref: 'Lawyer' }],
        appellant: { type: 'ObjectId', ref: 'User' },
        respondent: { type: 'ObjectId', ref: 'User' },
        judges: [{ type: 'ObjectId', ref: 'Judge' }],
        date: { type: date, required: true },
        courtNo: String,
        description: String,
    },
    { timestamps: true }
)

const Case = mongoose.model("Case", caseSchema);
export default Case;