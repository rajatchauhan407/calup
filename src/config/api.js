let BACKEND_DEV_URL;
if(process.env.NODE_ENV === "development"){
    BACKEND_DEV_URL = "http://localhost:9000";
}else if(process.env.NODE_ENV === "production"){
    BACKEND_DEV_URL = "Calupserver-env.eba-9gkkmh4t.us-east-1.elasticbeanstalk.com"
}

export {BACKEND_DEV_URL};
