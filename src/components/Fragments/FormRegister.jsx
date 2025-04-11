import { ButtonPrimary, ButtonSecondary, ButtonSpan } from "../Elements/button";
import InputForm from "../Elements";
import { Link } from "react-router-dom";
import PhoneInputForm from "../Elements/phone_input";
import { Card } from "../Elements/card";
import { HeadAuth } from "./Content";

const FormRegister = () => {
    return (
    <div className="space p-10 overflow-sm-hidden">
            <Card varian={`max-w-xl mx-auto sm:px-6 lg:px-8`}>
            <HeadAuth 
                title="Pendaftaran Akun" 
                desc="Yuk, daftarkan akunmu sekarang juga!"
            />
            <form>
                <InputForm label="Nama Lengkap *" type="text" placeholder="name" name="name" />
                <InputForm label="Email" type="text" placeholder="email@gmail.com" name="email" />
                <PhoneInputForm label="No. Hp *" type="number" name="phone" />
                <InputForm label="Kata Sandi *" type="password" placeholder="***" name="password" />
                <InputForm label="Konfirmasi Kata Sandi *" type="password" placeholder="***" name="password" />
                <div className="mb-4 text-right">
                    <a className="text-sm">Lupa Password ?</a>
                </div>
                <ButtonPrimary url="/login">Daftar</ButtonPrimary>
                <ButtonSecondary url="/login" varian="mt-2">Masuk</ButtonSecondary>
                <div className="separator mt-4 mb-4">atau</div>
                <ButtonSpan url="/"className="hover:bg-gray-50">
                    <img src="../assets/logos_google.svg" className="w-5 h-5" alt="Google" />
                    Daftar dengan Google
                </ButtonSpan>
            </form>
        </Card>
    </div>
    )
}

export default FormRegister