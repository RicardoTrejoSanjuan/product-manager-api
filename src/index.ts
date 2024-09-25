import { getNumberEnv } from "./config/config";
import server, { log } from "./server";

const port: number = getNumberEnv('PORT');

server.listen(4000, () => {
    log.success
    log.success(`Server listening on port ${port}`);
})
