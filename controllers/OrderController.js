const Order = require('../models/Order');


exports.create = async (req, res) => {
    const data = req.body;
    const requiredFields = ['mode', 'foodItems', 'address', 'email', 'phone', 'recipientName', 'orderDate'];
    
    const isValid = requiredFields.filter(key => {
        return !Object.keys(data).includes(key)
    });


    if (!isValid){
        return res.status(400).json({
            message: 'Some fields are missing, Please check json input'
        })
    }

    const order =  await Order.create(data);


    if (!order) {
        return res.status(400).json({
            message: 'Order creation failed, Please try again'
        })
    }

    return res.status(200).json({
        message: 'Order creation successful',
        data: {
            order
        }
    })

}
exports.readAll = async (req, res) => {

    const order = await Order.find();
    return res.status(200).json({
        message: 'Order obtained successfully',
        data: {
            order
        }
    })
    
}
exports.read = async (req, res) => {
    const id = req.params.id;

    const order = await Order.find({ _id: id });
    return res.status(200).json({
        message: 'Order obtained successfully',
        data: {
            order
        }
    })
}
exports.update = async (req, res) => {
    const data = req.body;
    const orderId = req.params.id;

    const availableFields = ['mode', 'foodItems', 'address', 'email', 'phone', 'recipientName', 'orderDate'];

    const isPart = Object.keys(data).filter(key => {
        return !availableFields.includes(key)
    });

    if (isPart.length !== 0){
        return res.status(400).json({
            message: 'baba you are sending rubbish'
        })
    }



    await Order.updateOne({ _id: orderId }, data);

    return res.status(200).json({
        message: 'Order updated successfully',
    })

    
}
exports.delete = async (req, res) => {
    const orderId = req.params.id;


    try{
        await Order.deleteOne({_id: orderId});
    } catch (err) {
        return res.status(400).json({
            message: 'An Error occured, Please try again'
        })
    }


    return res.status(200).json({
        message: 'Order deleted successfully',
    })

}