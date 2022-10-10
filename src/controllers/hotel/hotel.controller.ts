import { Context } from "koa";

import {IHotel} from '../../interface/hotel.interface';
import { HotelModel} from '../../models/hotels/Hotel.model';


export class Hotel {
    public async createHotel(ctx: Context): Promise<void> {
        try {
            const body = ctx.request.body;

            const hotel = await HotelModel.create(body);
            ctx.body = {message: "Hotel created successfully", hotel};

        } catch (err) {
            ctx.body = err;
        }
    };

    public async updateHotel(ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
           const updateHotel = await HotelModel.findByIdAndUpdate(
            {_id : id},
            {
                $set: ctx.request.body
            },
            {new: true}
           );

           ctx.body= {message: "Hotel updated successfully", updateHotel}

        } catch (err) {
            ctx.body = err;
        }
    };

    public async deleteHotel(ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
            await HotelModel.deleteOne({_id : id});

            ctx.body= {message: "Hotel deleted successfully"};
        } catch (err) {
            ctx.body = err;
        }
    };

    public async getHotel(ctx: Context): Promise<void> {
        try {
            const {id} = ctx.params;
            const hotel = await HotelModel.findById({_id : id});

            ctx.body = {message: "Hotel found successfully", hotel}
        } catch (err) {
            ctx.body = err;
        }
    };

    public async getAllHotels(ctx: Context): Promise<void>{
        try {
            const hotels = await HotelModel.find({});
            ctx.body= {message: "All hotel found!", hotels}
        } catch (err) {
            ctx.body = err;
        }
    };
}