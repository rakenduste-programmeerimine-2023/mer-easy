import Image from "next/image";
import '@/app/styles/headerAndFooter.scss'

export default function Header() {
    return (
        <div className="header flex justify-between items-center text-white">
            <div className="logo-container logo-Padding">
                <Image
                    src="/MerEasyLogo-small.png"
                    alt="Company Logo"
                    width={70}
                    height={70}
                    className="rounded-lg"
                />
            </div>

            <div className="profile-container profile-Padding">
                <Image
                    src="/nondescript_pfp.png"
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}
