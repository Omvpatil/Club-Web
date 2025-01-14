import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <nav className=" text-white fixed z-50  top-0 h-28 w-screen border-b border-white/20">
            <div className="w-full h-full backdrop-blur-xl px-5  bg-slate-900/50 inset-0">
                <div className="flex items-center">
                    <img
                    src={logo}
                    alt="Phoenix Club Logo"
                    className="h-28 w-28"
                    />
                    <h1 className="text-xl font-bold uppercase">Phoenix Club</h1>
                </div>
            </div>
        </nav>
    );
}