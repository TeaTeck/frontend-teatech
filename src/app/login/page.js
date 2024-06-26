'use client'

import { LoginHandler, getCookie } from '@/api/login';
import { emailValidation } from '@/util/validation';
import { useState, useEffect } from "react";
import Image from "next/image";
import Lock from "@/assets/lock.svg";
import Logo from "@/assets/logo.png"
import User from "@/assets/person.svg";
import { useRouter } from 'next/navigation';

export default function Login() {
    const [loginError, setLoginError] = useState('');
    const [token, setToken] = useState();
    const router = useRouter()

    useEffect(() => {
        const getToken = async () => {
            const t = await getCookie()
            if (t) {
                setToken(t)
            }
        }

        getToken();
    }, []);


    if (token) {
        router.push('/')
    }

    async function loginEvent(event) {
        event.preventDefault()

        const formData = event.target;
        const userData = {
            email: formData.elements[0].value,
            password: formData.elements[1].value
        };

        if (!emailValidation(userData.email)) {
            setLoginError('Email esta em formato incorreto, corrija-o e tente novamente.')
            return
        }

        const loginCheck = await LoginHandler(userData)
        if (loginCheck) {
            router.push('/')
        } else {
            setLoginError('Erro ao Realizar Login! Verifique sua senha e tente novamente.')
        }
    }

    return (
        <main className=" w-screen h-screen bg-[#3182B0] flex">
            <div className="img-login w-screen h-screen sm:absolute left-[40%] max-sm:blur-sm shadow-lg sm:rounded-3xl"></div>
            <form onSubmit={loginEvent} className="sm:bg-[#f0f0f04a] bg-[#cce2fe4a] rounded-2xl shadow-md w-80 h-[29rem] absolute flex flex-col justify-start items-center top-2/4 right-[68%] max-sm:left-2/4 max-sm:-translate-x-2/4 -translate-y-2/4">
                <Image priority className=" w-25 h-25 mt-8"
                    src={Logo}
                    alt="Logo"
                />
                <div className=" flex w-4/5 p-[10px] rounded-md bg-white mt-12 shadow-md">
                    <Image className=" w-5"
                        src={User}
                        alt="User"
                    />
                    <input required type="text" name="login" id="login" placeholder="Email" className=" ml-1 pl-1 w-full h-full outline-none" />
                </div>
                <div className=" flex w-4/5 p-[10px] rounded-md bg-white mt-5 shadow-md mb-[2rem]">
                    <Image className=" w-5"
                        src={Lock}
                        alt="Lock"
                    />
                    <input required type="password" name="pwd" id="pwd" placeholder="Senha" className=" ml-1 pl-1 w-full h-full outline-none" />
                </div>
                <span className=" text-red-600 text-sm font-bold rounded-md text-center">{(loginError)}</span>
                <button type="submit" className=" mt-2 mb-2 bg-[#01499C] p-2 text-white font-semibold w-40 rounded-lg shadow-md hover:bg-white hover:text-[#01499C] transition duration-300">ACESSAR</button>
            </form>
        </main>
    );
}