import { APPS } from "./constants"

export const getApp = () =>{
    console.log("main domain : "+window.location);
    const subDomain = getSubdomain(window.location.hostname);
    console.log("sub domain : "+subDomain);
    const main =  APPS.find((app) => app.main);
    if (!main) {
        throw new Error ("Must have main App")
    }
    if (subDomain === "") {
        return main.app
    }else{
        const app = APPS.find((app) => "*" === app.subdomain);
        return app.app;
    }


}

const getSubdomain = (location) =>{
    const locationParts = location.split(".");
    let sliceTill = -2;

    //for localhost
    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    if (isLocalHost) {
        sliceTill = -1
    }


    return locationParts.slice(0, sliceTill).join("");
}