import { useEffect, useState } from "react";
import { getFacilities } from "../../data";
import { Card } from "../Elements/card";
import { H1, H2 } from "../Elements/heading";
import { ButtonPrimary } from "../Elements/button";

export const ItemSpesification = (props) => {
    const {isDetail} = props
    const [facilities,setFacilities] = useState([]);
    useEffect(() => {
        setFacilities(getFacilities());
    }, []);
    return (
        <Card varian="md:mr-4 p-4">
            {isDetail &&
                <img className="img-item hidden md:block" src="../assets/item1.svg" alt="" />
            }
            <H1>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</H1><br />
            <div className="grid grid-cols-12 ...">
                <div className="col-span-3 ..."><b><h5 className="price">Rp 250K</h5></b></div>
                <div className="col-span-5 ..."><p className="line-through text-black-400 text-md">Rp 500K</p></div>
                <div className="col-span-4 ..."><p className="bg-yellow-400 rounded-lg text-gray-100 text-md px-2 py-1">Diskon 50%</p></div>
            </div>
            {!isDetail && 
            <>
                <p className="mt-2 text-sm text-blue-400">Penawaran spesial tersisa 2 hari lagi!</p>
                <ButtonPrimary url="/checkout" varian="mt-4">Beli Sekarang</ButtonPrimary>
            </>
            }
            <H2 varian="mt-4">Kelas Ini Sudah Termasuk</H2>
            <div className="grid grid-cols-2 ...">
                {facilities.length > 0 && facilities.map((facility) => (
                    <div className="col-span-1 ... mt-3" key={facility.id}>
                        <div className="grid grid-cols-4 ...">
                            <div className="col-span-1 ..."><img src={`../assets/`+facility.img} alt="" /></div>
                            <div className="col-span-3 ..."><p>{facility.name}</p></div>
                        </div>
                    </div>
                ))}
            </div>
            <H2 varian="mt-4">Bahasa Pengantar</H2>
            <div className="grid grid-cols-8 ...">
                <div className="col-span-1 ..."><img src="../assets/bahasa.svg" alt="" /></div>
                <div className="col-span-7 ..."><p>Bahasa Indonesia</p></div>
            </div>
        </Card>
    )
}