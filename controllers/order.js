const Order = require("../models/Order");
const User = require("../models/User");

    //Add Order
    exports.addOrder = async (req, res) => {
    try {
        const newOrder = new Order({
        userId: req.body.userId,
        product: req.body.product,
        sum: req.body.sum,
        });
        await newOrder.save();
        res.status(200).send({ msg: "Add Order Success", newOrder });
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "can not save the Order" }] });
    }
    };

    //Get All Order
    exports.getOrder = async (req, res) => {
    try {
        const allOrder = await Order.find().populate("userId", User);
        res.status(200).send({ msg: "Get All Order Success", Orders: allOrder });
    } catch (error) {
        console.log(error);
        res.status(400).send({ errors: [{ msg: "can not get Order" }] });
    }
    };

    //update Order
    exports.updateOrder = async (req, res) => {
    try {
        const { _id } = req.params;
        const orderToUpdate = await Product.updateOne(
        { _id },
        { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "Order is Updated ...", orderToUpdate });
    } catch (error) {
        res.status(400).send({ msg: "Can't Updated Order", error });
    }
    };

    //delete
    exports.deleteProductOrder = async (req, res) => {
    try {
        const { _id } = req.params;
        const orderToDelete = await Order.deleteOne({ _id });
        if (!orderToDelete) {
        res.status(200).send({ msg: "Order already deleted ..." });
        return;
        }
        res.status(200).send({ msg: "Order deleted ...", orderToDelete });
    } catch (error) {
        res.status(400).send({ msg: "can not deleted ... ", error });
    }
    };
