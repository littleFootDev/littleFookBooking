import Router from 'koa-router';

import { Hotel } from './controllers/hotel/hotel.controller';


export function registerRoutes() {
    const router = new Router();

    //Hotel route
    router.post('/api/hotels/add', Hotel.prototype.createHotel);
    router.patch('/api/hotels/update/:id', Hotel.prototype.updateHotel);
    router.get('/api/hotels/', Hotel.prototype.getAllHotels);
    router.get('/api/hotels/:id', Hotel.prototype.getHotel);
    router.delete('/api/hotels/delete/:id', Hotel.prototype.deleteHotel);
    

    return router;
}