import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="bg-[#252b42] ">
      <div className=" flex ">
        <nav className="flex flex-center list-none  ">
          <h1 className=" text-[24px] font-bold text-[#ffffff] pt-[13px] pl-[180px]">
            Brand Name
          </h1>
          <div className="gap-[21px] flex text-[14px]  font-light text-[#ffffff] pl-[59px] pt-[23px]">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/">Product</Link>
            </li>
            <li className="">
              <Link href="/">Pricing</Link>
            </li>
            <li className="">
              <Link href="/">Contact</Link>
            </li>
          </div>
          <div className="  text-[14px] text-[#ffffff] pl-[400px] pt-[16px] space-x-8 ">
            <span className="">Login</span>
            <button className=" bg-[#23A6F0] h-8 w-20 rounded-l-[5px]">
              JOIN US
            </button>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <h1 className="text-[16px] text-[#23A6F0] pt-[110px] text-center">
            Welcome
          </h1>
          <h1 className="text-[58px] font-bold text-[#ffffff] text-center pt-2">
            Selling on the <br /> internet like a pro
          </h1>
          <p className="text-[20px]  text-[#ffffff] pt-4 pr-10 text-center">
            We know how large objects will act, but things on a <br /> small
            scale just do not act they way.
          </p>
        </div>

        <div className="text-center pr-[50px] pt-[30px] ">
          <button className="h-[52px] w-[170px] text-[#ffffff] bg-[#23A6F0] text-[14px] rounded-md">
            Get Quote Now
          </button>
          <button className="h-[52px] w-[150px] text-[14px] text-[#23A6F0] border-[1px] border-[#23A6F0] ml-[10px] rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="h-[265px] w-[275px] bg-[#ffffff] ml-[210px] mt-[100px] pt-[22px] pl-[25px]">
          <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-md"></div>

          <h1 className="text-[#252B42] pt-[15px]">training courses</h1>
          <div className="w-[50px] h-[2px] mt-[15px] bg-[#E74040] "> </div>
          <p className="text-[#737373]  pt-[15px] text-[14px]">
            The gradual accumulation of
            <br />
            information about atomic and <br />
            small scale behaviour...
          </p>
        </div>

        <div className="  h-[265px] w-[275px] bg-[#ffffff] ml-[45px] mt-[100px] pt-[22px] pl-[25px]">
          <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-md"></div>

          <h1 className="text-[#252B42] pt-[15px]">training courses</h1>
          <div className="w-[50px] h-[2px] mt-[15px] bg-[#E74040] "> </div>
          <p className="text-[#737373]  pt-[15px] text-[14px]">
            The gradual accumulation of
            <br />
            information about atomic and <br />
            small scale behaviour...
          </p>
        </div>

        <div className="  h-[265px] w-[275px] bg-[#23A6F0] ml-[45px] mt-[100px] pt-[22px] pl-[25px]">
          <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-md"></div>

          <h1 className="text-[#FFFFFF] pt-[15px]">training courses</h1>
          <div className="w-[50px] h-[2px] mt-[15px] bg-[#FFFFFF] "> </div>
          <p className="text-[#FFFFFF]  pt-[15px] text-[14px]">
            The gradual accumulation of
            <br />
            information about atomic and <br />
            small scale behaviour...
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
