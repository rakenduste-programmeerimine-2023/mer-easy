import Image from "next/image";
import AuthButton from "@/components/AuthButton";

export default function Header() {
    return (
        <div className="header flex justify-between items-center text-white">
            <div className="logo-container">
                <Image
                    src="/MerEasyLogo-small.png"
                    alt="Company Logo"
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex items-center">
                <div className="profile-container">
                    <AuthButton />
                </div>
            </div>
        </div>
    );

}
