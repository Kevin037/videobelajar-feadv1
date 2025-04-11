import { useEffect, useState } from "react";
import Authlayout from "../Layouts/AuthLayout";
import { ButtonPrimarySubmit } from "../Elements/button";
import { Card } from "../Elements/card";
import { H1 } from "../Elements/heading";
import { ItemSpesification } from "../Fragments/ItemSpesification";
import { getPaymentMethodGroup, getPaymentMethods } from "../../data";
import { TransactionNominal } from "../Fragments/TransactionNominal";
import { CheckCircle, ChevronDown } from "lucide-react";

const token = localStorage.getItem("token");
const data = JSON.parse(localStorage.getItem("transactions"));
const ChangePaymentPage = () => {
    const [paytmentMethods,setPaytmentMethods] = useState([]);
    const [openGroup, setOpenGroup] = useState("Transfer Bank");
    const [selectedMethod, setSelectedMethod] = useState("");
    const [transaction, setTransaction] = useState("");

useEffect(() => {
    if(token === null) {
        window.location.href = "/login";
    }
    setTransaction(data);
    setPaytmentMethods(getPaymentMethods());
}, []);

useEffect(() => {
    setSelectedMethod(transaction.metode);
    setOpenGroup(getPaymentMethodGroup(transaction.metode));
}, [transaction]);

const UpdateTransaction = (event) => {
    if (selectedMethod === "") {
        alert("Pilih Metode Pembayaran");
        return false;
    }
    const data = transaction;
    const updateData = {...data, metode: selectedMethod};
    
    event.preventDefault();
    localStorage.setItem("transactions",JSON.stringify(updateData));
    window.location.href = "/payment";
};

 return (
    <Authlayout title="Home" navType="home" withFooter={false} style={{paddingTop: "0"}} customHead={<img src="../assets/process_choose_payment.svg" className="w-100" />}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="p-2 mt-4 block md:hidden">
                <img src="../assets/process_choose_payment_mobile.svg" className="w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 ...">
                <div className="col-span-2 order-2 md:order-1">
                        <Card varian="md:mr-4 mt-4 py-6">
                        <TransactionNominal />
                    </Card>
                    <Card varian="md:mr-4">
                        <H1>Metode Pembayaran</H1><br />
                        {Object.entries(paytmentMethods).map(([groupName, methods]) => (
                            <div key={groupName} className="bg-white rounded-xl shadow-sm">
                            <button
                                className="w-full flex justify-between items-center px-4 py-3 font-medium mb-3"
                                onClick={() =>
                                setOpenGroup(openGroup === groupName ? "" : groupName)
                                }
                            >
                                {groupName}
                                <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                    openGroup === groupName ? "rotate-180" : ""
                                }`}
                                />
                            </button>

                            {openGroup === groupName && (
                                <div className="">
                                {methods.map((method) => (
                                    <button
                                    key={method.key}
                                    className={`flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 ${
                                        selectedMethod === method.key
                                        ? "bg-orange-50"
                                        : "bg-white"
                                    }`}
                                    onClick={() => setSelectedMethod(method.key)}
                                    >
                                    <div className="flex items-center gap-3">
                                        <img
                                        src={method.icon}
                                        alt={method.name}
                                        className="h-6"
                                        />
                                        <span>{method.name}</span>
                                    </div>
                                    {selectedMethod === method.key && (
                                        <CheckCircle className="text-orange-500 w-5 h-5" />
                                    )}
                                    </button>
                                ))}
                                </div>
                            )}
                            </div>
                        ))}
                        <ButtonPrimarySubmit onClick={UpdateTransaction} varian="w-full mt-4">Bayar Sekarang</ButtonPrimarySubmit>
                    </Card>
                </div>
                <div className="col-span-1 ... mx-2 sm:mx-0 order-1 lg:order-2">
                    <ItemSpesification isDetail={true}/>
                </div>
            </div>
        </div>
    </Authlayout>
 );
}

export default ChangePaymentPage