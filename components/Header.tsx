import Image from "next/image";

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

            <div className="profile-container">
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
