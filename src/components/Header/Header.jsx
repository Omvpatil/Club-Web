import React from "react";
import logo from "../../assets/logo.png";

export default function Header() {
    return (
        <header className="shadow bg-slate-900 text-white sticky z-50 top-0 w-full">
            <nav className=" px-4 lg:px-6 py-1">
                <div className="flex items-center">
                    <img
                    src={logo}
                    alt="Phoenix Club Logo"
                    className="h-28 w-28"
                    />
                    <h1 className="text-xl font-bold ml-4 uppercase">Phoenix Club</h1>
                </div>
            </nav>
        </header>
    );
}