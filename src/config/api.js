let BACKEND_DEV_URL;
if(process.env.NODE_ENV === "development"){
    BACKEND_DEV_URL = "http://localhost:9000";
}

export {BACKEND_DEV_URL};
