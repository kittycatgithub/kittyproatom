import mongoose from "mongoose";

const selectedPlatterSchema = new mongoose.Schema({
        userId: {type: String, required: true, ref: 'user'},
        _id: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true }
})

const SelectedPlatter = mongoose.models.selectedplatter || mongoose.model('selectedplatter', selectedPlatterSchema)

export default SelectedPlatter