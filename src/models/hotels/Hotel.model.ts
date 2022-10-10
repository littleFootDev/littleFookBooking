import mongoose from 'mongoose';

import {IHotel} from '../../interface/hotel.interface';
import {hotelSchema} from './Hotel.schema';


const hotelModel: mongoose.Model<IHotel> = mongoose.model<IHotel>('Hotel', hotelSchema);

export {hotelModel as HotelModel};