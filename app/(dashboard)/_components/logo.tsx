import Image from "next/image";

const Logo = () => {
  return ( 
    <Image 
      height={160}
      width={160}
      alt="Logo"
      src="/logo.svg"
    />
   );
}
 
export default Logo;