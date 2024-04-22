import Image from "next/image";

const Logo = () => {
  return ( 
    <Image 
      height={60}
      width={60}
      alt="Logo"
      src="/logo.png"
    />
    
   );
}
 
export default Logo;