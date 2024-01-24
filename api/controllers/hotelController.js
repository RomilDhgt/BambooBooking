import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
};
export const updateHotel = async (req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            { new: true}
            );
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
};
export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted");
    } catch (error) {
        next(error);
    }
};
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};
export const countByType = async (req, res, next) => {
    try {
      const vlaCount = await Hotel.countDocuments({ type: "Villa" });
      const htlCount = await Hotel.countDocuments({ type: "Hotel" });
      const ldgCount = await Hotel.countDocuments({ type: "Lodge" });
      const thCount = await Hotel.countDocuments({ type: "Tiny Home" });
      const resCount = await Hotel.countDocuments({ type: "Resort" });
  
      res.status(200).json([
        { type: "Villa", count: vlaCount },
        { type: "Hotel", count: htlCount },
        { type: "Lodge", count: ldgCount },
        { type: "Tiny Home", count: thCount },
        { type: "Resort", count: resCount },
      ]);
    } catch (err) {
      next(err);
    }
  };
export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
};
export const getAllHotel = async (req,res,next)=>{
    const {lim, min, max, ...others} = req.query
    try {
        const hotels = await (Hotel.find({
            ...others,
            cheapest: {$gte: min || 1, $lte: max || 1000000}
        })).limit(lim);
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
};
export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };
