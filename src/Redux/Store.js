import { configureStore } from "@reduxjs/toolkit";
import Adminlogins from "./Adminlogins";

export default configureStore({
    reducer:{
        admins: Adminlogins
    }
})

