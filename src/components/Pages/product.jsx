import { useEffect, useState } from "react";
import Authlayout from "../Layouts/AuthLayout";
import { getCourseSections, getFacilities, getItem } from "../../data";
import CardItems from "../Fragments/CardItems";
import { BannerContent } from "../Fragments/Content";
import { ButtonPrimary } from "../Elements/button";
import { Card } from "../Elements/card";
import { H1, H2 } from "../Elements/heading";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ItemSpesification } from "../Fragments/ItemSpesification";

const token = localStorage.getItem("token");
const ProductPage = () => {

const [items,setItems] = useState([]);
const [courseSections,setCourseSections] = useState([]);

useEffect(() => {
    if(token === null) {
        window.location.href = "/login";
    }
    setItems(getItem("all"));
    setCourseSections(getCourseSections());
}, []);

const [openIndex, setOpenIndex] = useState(0);

const toggle = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const strLimit = (str, limit) => {
    if (!str) return "";
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

 return (
    <Authlayout title="Home" navType="home" withFooter={true}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <section className="banner-hero banner-space">
                <div className="banner-content">
                    <BannerContent 
                        title="Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."
                        desc="Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun."
                        varian="text-left"
                    >
                    <img className="mt-3" src="../assets/head_star.svg" alt="" />
                    </BannerContent>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 ...">
                <div className="col-span-2 ... order-2 md:order-1">
                    <Card varian="md:mr-4">
                        <H1>Deskripsi</H1><br />
                        <p>Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.</p>
                    </Card>
                    <Card varian="md:mr-4 mt-4 py-6">
                        <H1>Belajar bersama Tutor Profesional</H1><br />
                        <div className="grid grid-cols-1 md:grid-cols-2 ...">
                            <div className="col-span-1 ...">
                                <Card varian="md:mr-4">
                                    <div className="grid grid-cols-12 ...">
                                        <div className="col-span-2 ... "><img src="../assets/avatar5.svg" alt="" /></div>
                                        <div className="col-span-10 ...">
                                            <p className="text-sm mx-2 font-medium">Gregorius Edrik Lawanto</p>
                                            <p className="text-xs mx-2">Senior Talent Acquisition di <span className="font-medium">WingsGroup</span></p>
                                        </div>
                                    </div>
                                    <p className="mt-2">Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
                                </Card>
                            </div>
                            <div className="col-span-1 ...">
                                <Card varian="md:mr-4">
                                    <div className="grid grid-cols-12 ...">
                                        <div className="col-span-2 ... "><img src="../assets/avatar5.svg" alt="" /></div>
                                        <div className="col-span-10 ...">
                                            <p className="text-sm mx-2 font-medium">Gregorius Edrik Lawanto</p>
                                            <p className="text-xs mx-2">Senior Talent Acquisition di <span className="font-medium">WingsGroup</span></p>
                                        </div>
                                    </div>
                                    <p className="mt-2">Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
                                </Card>
                            </div>
                        </div>
                    </Card>
                    <Card varian="md:mr-4">
                        <H1>Kamu akan Mempelajari</H1><br />
                        {courseSections.map((section, index) => (
                            <div key={index} className="mb-4">
                            {/* Section Header */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-green-600 font-semibold text-base focus:outline-none"
                            >
                                <span className="hidden md:block">{section.title}</span>
                                <span className="block md:hidden">{strLimit(section.title, 35)}</span>
                                {openIndex === index ? (
                                <ChevronUp size={20} />
                                ) : (
                                <ChevronDown size={20} />
                                )}
                            </button>

                            {/* Lessons */}
                            {openIndex === index && section.lessons.length > 0 && (
                                <div className="mt-3 space-y-2 pl-3">
                                {section.lessons.map((lesson, i) => (
                                    <div
                                    key={i}
                                    className="flex items-center justify-between bg-white p-3 rounded border"
                                    >
                                    <div className="grid grid-cols-12 ...">
                                        <div className="col-span-9">
                                            {lesson.title}
                                        </div>
                                        <div className="col-span-3 flex justify-end hidden md:block">
                                            <div className="flex items-center gap-1">
                                                <img src="../assets/play.svg" alt="" />
                                                <span className="text-sm text-gray-800">Video</span>
                                                <img src="../assets/clock.svg" alt="" />
                                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                ))}
                                </div>
                            )}
                            </div>
                        ))}
                    </Card>
                </div>
                <div className="col-span-1 ... mx-2 sm:mx-0 order-1 md:order-2">
                    <ItemSpesification isDetail={false} />
                </div>
            </div>
            <h3 className="text-2xl font-weigh-200 mt-4">Video Pembelajaran Terkait Lainnya</h3>
            <p className="mt-2">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 ...">
                {items.length > 0 && items.slice(0, 3).map((item) => (
                    <CardItems 
                        key={item.id} 
                        id={item.id} 
                        photo={item.photo} 
                        title={item.title} 
                        desc={item.desc} 
                        avatar={item.avatar} 
                        user={item.user} 
                        user_position={item.user_position} 
                        user_company={item.user_company} 
                    />
                ))}
            </div>
        </div>
    </Authlayout>
 );
}

export default ProductPage