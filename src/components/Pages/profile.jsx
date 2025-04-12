import { useEffect, useState } from "react";
import Authlayout from "../Layouts/AuthLayout";
import { getOrders, getOrderStatuses } from "../../data";
import { Card } from "../Elements/card";
import { H2 } from "../Elements/heading";
import { Link } from "react-router-dom";
import { OrderCard } from "../Fragments/OrderCard";
import { Pagination } from "../Fragments/Pagination";
import { SidebarMenu } from "../Fragments/SidebarMenu";
import { Button, ButtonMd, ButtonPrimaryMD } from "../Elements/button";
import { FloatingInput, Select } from "../Elements/input";

const token = localStorage.getItem("token");
const ProfilePage = () => {

    const [activeTab, setActiveTab] = useState("all");
    const [orderStatus, setOrderStatus] = useState([]);
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        if(token === null) {
            window.location.href = "/login";
        }
        setOrderStatus(getOrderStatuses());
        setOrders(getOrders());
    }, []);

    useEffect(() => {
    }, [orders]);

    useEffect(() => {
        setOrders(getOrders(activeTab));
    }, [activeTab]);
 return (
    <Authlayout title="Home" navType="home" withFooter={true}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 ...">
                <div className="col-span-3 ...">
                    <H2>Ubah Profile</H2>
                    <p className="text-sm text-gray-400">Ubah data diri anda</p>
                    <SidebarMenu activeMenu="/profile" />
                </div>
                <div className="col-span-9 ... mx-2 sm:mx-0">
                    <Card>
                        <div className="grid grid-cols-12 ... gap-3">
                            <div className="col-span-3 md:col-span-2 ...">
                                <img  
                                className="object-cover h-auto rounded-lg"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                                alt="" />
                            </div>
                            <div className="col-span-9 md:col-span-10 ...">
                                <p className="text-sm">
                                    <H2>John Jennie Ruby Jane</H2>
                                    <p>rubyjane@gmail.com</p>
                                </p>
                                <button className="mt-3 text-red-600 text-sm cursor-pointer">Ganti Foto Profil</button>
                            </div>
                        </div>
                        <hr className="mt-6 text-slate-200" />
                        <div className="grid grid-cols-4 md:grid-cols-9 mt-6 gap-3">
                            <FloatingInput
                                label="Nama Lengkap"
                                value="Jennie Ruby Jane"
                                name="nama"
                                onChange={() => {}}
                                className="col-span-4 md:col-span-3"
                            />

                            <FloatingInput
                                label="E-Mail"
                                value="rubyjane@gmail.com"
                                name="email"
                                onChange={() => {}}
                                className="col-span-4 md:col-span-3"
                            />

                            <Select className="col-span-1 md:col-span-1">
                                <option value="">+62</option>
                            </Select>
                            <FloatingInput
                                label="No. Hp"
                                value="81234567890"
                                name="hp"
                                onChange={() => {}}
                                className="col-span-3 md:col-span-2"
                            />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <ButtonPrimaryMD url="#">Simpan</ButtonPrimaryMD>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </Authlayout>
 );
}

export default ProfilePage