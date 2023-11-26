import { MainApp, SubApp } from "../App"


export const APPS = [
    {
        subdomain: "www",
        app: MainApp,
        main: true
    },
    {
        subdomain: "*",
        app: SubApp,
        main: false
    }
]