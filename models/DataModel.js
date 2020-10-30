const mongoose = require('mongoose');

const sesorDataSchema =mongoose.Schema({
    hubId: { type: Number},
    user: { type: String},
    location: { type: String},
    sensorType: { type: String},
    sensorId: { type: Number},
    sensorData: { type: Number},
    sensorUnit: { type: String}
})

 const Data = module.exports = mongoose.model("datalists", sesorDataSchema);

module.exports.get = (callback,limit)=>{
Data.find(callback).limit(limit);
}