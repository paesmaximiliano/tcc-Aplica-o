import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from '../components/login/login'
import Main from '../components/main/Main';
import User from '../components/user/User';
import AddUser from '../components/user/AddUser';
import Service from "../components/service/Service";
import AddService from "../components/service/AddService";
import Category from "../components/category/Category";
import AddCategory from "../components/category/AddCategory";
import Agenda from "../components/agenda/Agenda";
import AddAgenda from "../components/agenda/AddAgenda";
import Payment from "../components/payment/Payment";
import Plataforma from "../components/plataforma/plataforma";
import Client from "../components/cliente/client";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/client" element={<Client/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/addservice" element={<AddService/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/addcategory" element={<AddCategory/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
                <Route path="/addagenda" element={<AddAgenda/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/plataforma" element={<Plataforma/>}/>
            </Routes>
        </BrowserRouter>
    )
}