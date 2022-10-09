import {serverSetup} from "./setupServer";
import {connectedToDatabase} from './setupDatabase';
 

async function init() {
    await serverSetup();
    await connectedToDatabase();
};

init();