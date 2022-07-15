const Food = require('../models/Food');


exports.create = async (req, res) => {
    const data = req.body;
    const requiredFields = ['price', 'name', 'description', 'image'];
    

    const missingFields = requiredFields.filter(key => {
        return !Object.keys(data).includes(key)
    });


    if (missingFields.length !== 0){
        return res.status(400).json({
            message: 'Some fields are missing, Please check json input'
        })
    }

    const food = await Food.create(data);


    if (!food) {
        return res.status(400).json({
            message: 'Food creation failed, Please try again'
        })
    }

    return res.status(200).json({
        message: 'Food creation successful',
        data: {
            food
        }
    })
}
exports.readAll = async (req, res) => {

    const food = await Food.find();
    return res.status(200).json({
        message: 'Food obtained successfully',
        data: {
            food
        }
    })
    
}
exports.read = async (req, res) => {
    const id = req.params.id;

    const food = await Food.find({ _id: id });
    return res.status(200).json({
        message: 'Food obtained successfully',
        data: {
            food
        }
    })
}
exports.update = async (req, res) => {
    const data = req.body;
    const foodId = req.params.id;

    const availableFields = ['price', 'name', 'description', 'image'];

    const isPart = Object.keys(data).filter(key => {
        return !availableFields.includes(key)
    });

    if (isPart.length !== 0){
        return res.status(400).json({
            message: 'baba you are sending rubbish'
        })
    }



    await Food.updateOne({ _id: foodId }, data);

    return res.status(200).json({
        message: 'Food updated successfully',
    })

    
}
exports.delete = async (req, res) => {
    const foodId = req.params.id;


    try{
        await Food.deleteOne({_id: foodId});
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: 'An Error occured, Please try again'
        })
    }


    return res.status(200).json({
        message: 'Food deleted successfully',
    })

}