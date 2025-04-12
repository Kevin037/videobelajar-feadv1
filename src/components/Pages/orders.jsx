import { useEffect, useState } from "react";
import Authlayout from "../Layouts/AuthLayout";
import { getOrders, getOrderStatuses, getSidebarMenus } from "../../data";
import { Card } from "../Elements/card";
import { H2 } from "../Elements/heading";
import { Link } from "react-router-dom";
import { OrderCard } from "../Fragments/OrderCard";
import { Pagination } from "../Fragments/Pagination";
import { SidebarMenu } from "../Fragments/SidebarMenu";

const token = localStorage.getItem("token");
const OrderPage = () => {

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
                    <H2>Daftar Pesanan</H2>
                    <p className="text-sm text-gray-400">Informasi terperinci mengenai pembelian</p>
                    <SidebarMenu activeMenu="/orders" />
                </div>
                <div className="col-span-9 ... mx-2 sm:mx-0">
                    <Card>
                        <div className="overflow-x-auto mx-4">
                            <div className="flex space-x-6 whitespace-nowrap border-gray-200 mt-4 mx-4">
                            {orderStatus.length > 0 && orderStatus.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`pb-2 font-medium text-sm md:text-base transition-all item-option ${
                                activeTab === tab.key
                                    ? "text-red-500 cursor-pointer active"
                                    : "text-gray-700 hover:text-red-500 cursor-pointer"
                                }`}
                            >
                                {tab.name}
                            </button>
                            ))}
                            </div>
                        </div>
                        {orders.length > 0 && orders.map((order) => (
                            <OrderCard order={order} key={order.id} />
                        ))}
                        {orders.length > 0 && (
                            <Pagination />
                        )}
                    </Card>
                </div>
            </div>
        </div>
    </Authlayout>
 );
}

export default OrderPage