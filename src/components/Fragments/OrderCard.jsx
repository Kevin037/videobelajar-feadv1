import { number_format } from "../../data";
import { StatusDisplay } from "../Elements/status_orders";

export const OrderCard = (props) => {
    const {order} = props
    return (
        <>
        <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-300">
             <div className="border-b p-4 bg-green-50 border-gray-300 rounded-lg">
                 <div className="grid grid-cols-1 md:grid-cols-12 ...">
                     <div className="col-span-9 ... flex gap-3 text-sm text-gray-600">
                         <p className="hidden md:block">No. Invoice: </p> <span className="text-blue-600"> {order.no}</span>
                         <p className="hidden md:block">Waktu Pembayaran: </p> <span>{order.paid_at}</span>
                     </div>
                     <div className="col-span-3 ... text-left md:text-right mt-3 md:mt-0">
                        <StatusDisplay status={order.status} />
                     </div>
                 </div>
             </div>
             <div className="border-b p-4 bg-green-30 border-gray-300">
                <div className="grid grid-cols-12 ... gap-2">
                     <div className="col-span-3 md:col-span-1 ... flex gap-2">
                         <img className="rounded-lg object-cover h-auto" src={order.img} alt="" />
                     </div>
                     <div className="col-span-9 md:col-span-9 ... flex gap-2 border-r border-gray-300">
                         <p className="text-lg">{order.title}</p>
                     </div>
                     <div className="col-span-12 md:col-span-2 ... text-left md:text-right">
                     <p className="text-sm mt-3 md:mt-0">Harga</p>
                     <p className="font-medium">Rp {number_format(order.price)}</p>
                     </div>
                 </div>
             </div>
             <div className="p-4 bg-green-50 rounded-lg">
                <div className="grid grid-cols-12 ...">
                    <div className="col-span-7 ... flex gap-2">
                        Total Pembayaran
                    </div>
                    <div className="col-span-5 ... text-right">
                        <p className="price">Rp {number_format(order.price)}</p>
                    </div> 
                </div>
             </div>
         </div>
        </>
    )
}