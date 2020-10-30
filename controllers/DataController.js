Data = require("../models/DataModel");
console.log(Data)
exports.index =(req, res)=>{
    Data.get((err,datas)=>{
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        
        // res.json({
        //         status: "success",
        //         message: "Data retrived successfully",
        //         data : datas
        //     });
        res.send(datas)

    })
 
};

// exports.new =(req, res)=>{

//     const getdata1 = new Data({

//             hubId: req.body.hubId,
//     user: req.body.user,
//     // location: { type: String, required: true},
//     // sensorType: { type: String, required: true},
//     // sensorId: { type: Number, required: true},
//     // sensorData: { type: Number, required: true},
//     // sensorUnit: { type: String, required: true}
//     //       title : req.body.title? req.body.title : book.title,
//     // author : req.body.author,
//     // genre : req.body.genre
//     });
//   console.log(req.body);

//     getdata1.save(
//        err=>{
//            if(err){
//                res.json(err)
//            }
//            res.json({
//                message:"New book created!",
//                data: getdata1
//            })

//        }
//     )
// }

exports.view =(req, res)=>{
    
    Data.find( req.params.hubId,(err,datas)=>{
        if(err){
            res.send(err);
        }
         
            res.json({  
                message: "1 data found!",
                data : datas
            });
        

     
    })
};



