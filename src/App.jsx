import "./App.css";
import Logo from "./assets/image/logo.png";
import Banner from "./assets/image/banner.png";
import Education1 from "./assets/image/education1.png";
import Education2 from "./assets/image/education2.png";
import Education3 from "./assets/image/education3.png";
import Education4 from "./assets/image/education4.png";
import Course from "./assets/image/image1.png";
import Course1 from "./assets/image/image2.png";
import Course2 from "./assets/image/image3.png";
import Course3 from "./assets/image/image4.png";
import Course4 from "./assets/image/image5.png";
import Course5 from "./assets/image/image6.png";
import Icone from "./assets/image/icone.png";
import Icone1 from "./assets/image/icone2.png";
import Icone2 from "./assets/image/icone3.png";
import Video from "./assets/image/video.png";
import Logos from "./assets/image/icone4.png";
import Container from "./component/Container";
import Flex from "./component/Flex";
import Image from "./component/Image";
import Menu from "./component/menu";
import Button from "./component/Button";
import Hedding from "./component/Hedding";
import { IoIosStar } from "react-icons/io";
import { RiSingleQuotesL } from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      {/* navbar start */}
      <nav>
        <Container>
          <Flex className={"justify-between pt-3"}>
            <div className="w-[10%]">
              <Image src={Logo} alt={Logo} className={"mt-1"} />
            </div>
            <div className="w-[70%] flex justify-center space-x-16 mt-3">
              <Menu
                mtext={"Home"}
                className={
                  "text-[22px]  font-pop  hover:font-bold hover:text-[#327186] "
                }
              />
              <Menu
                mtext={"Course "}
                className={
                  "text-[22px] font-pop  hover:font-bold hover:text-[#327186] "
                }
              />
              <Menu
                mtext={"Monitors"}
                className={
                  "text-[22px] font-pop hover:font-bold hover:text-[#327186]  "
                }
              />
              <Menu
                mtext={"About"}
                className={
                  "text-[22px] font-pop  hover:font-bold hover:text-[#327186] "
                }
              />
            </div>
            <div className="">
              <Button
                btnText={"Get Started"}
                className={
                  "py-[15px] font-semibold text-[#190D30] text-[20px] bg-[#F5C362] px-[30px] rounded-2xl "
                }
              />
            </div>
          </Flex>
        </Container>
      </nav>
      {/* navbar end */}

      {/* banner part start  */}
      <section className="pt-[112px] pb-[118px] ">
        <Container>
          <Flex>
            <div className="w-[50%] mt-[120px] ">
              <Hedding
                text={"Getting Quality Education is now more Easy"}
                as={"h1"}
                className={"text-[80px] font-bold leading-[127%] font-Karma "}
              />
              <Hedding
                text={
                  "t is a long established fact that a reader will be distracted by the readable content of a page when looking "
                }
                as={"p"}
                className={
                  "text-[22px] text-[#565A5B] font-pop font-medium pt-[30px] "
                }
              />
              <div className="flex mt-10 space-x-8">
                <Button
                  btnText={"Join Us Free"}
                  className={
                    "py-[10px] font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] px-[30px] rounded-2xl font-pop hover:text-[#190D30] hover:font-bold   border-2  border-[#309DC1] "
                  }
                />
                <Button
                  btnText={"Join Us Free"}
                  className={
                    "py-[10px] font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] px-[30px] rounded-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                  }
                />
              </div>
            </div>
            <div className="w-[50%]">
              <Image src={Banner} alt={Banner} className={"w-full pl-9"} />
            </div>
          </Flex>
        </Container>
      </section>
      {/* banner part end */}

      {/* Counter part start  */}
      <section className="pt-[80px] pb-[80px] bg-[#0166FF] ">
        <Container>
          <Flex className={"justify-between"}>
            <div>
              <Hedding
                text={"8200"}
                as={"h4"}
                className={"text-[50px] font-bold font-pop text-white "}
              />
              <Hedding
                text={"Success Stories"}
                as={"h4"}
                className={"text-[26px] font-pop text-white "}
              />
            </div>
            <span className="border-r-2 border-white h-[75px] mt-6 ml-[60px] mr-[60px]"></span>
            <div>
              <Hedding
                text={"12200"}
                as={"h4"}
                className={"text-[50px] font-bold font-pop text-white "}
              />
              <Hedding
                text={"Expert Mentors"}
                as={"h4"}
                className={"text-[26px] font-pop text-white "}
              />
            </div>
            <span className="border-r-2 border-white h-[75px] mt-6 ml-[60px] mr-[60px]"></span>
            <div>
              <Hedding
                text={"50000"}
                as={"h4"}
                className={"text-[50px] font-bold font-pop text-white "}
              />
              <Hedding
                text={"Hours  Course"}
                as={"h4"}
                className={"text-[26px] font-pop text-white "}
              />
            </div>
            <span className="border-r-2 border-white h-[75px] mt-6 ml-[60px] mr-[60px]"></span>
            <div>
              <Hedding
                text={"70000"}
                as={"h4"}
                className={"text-[50px] font-bold font-pop text-white "}
              />
              <Hedding
                text={"Active Student"}
                as={"h4"}
                className={"text-[26px] font-pop text-white "}
              />
            </div>
          </Flex>
        </Container>
      </section>
      {/* Counter part end */}

      {/* online Education part start  */}
      <section className="pt-[120px] pb-[120px] ">
        <div className="text-center">
          <Hedding
            text={"Benefits of online Education  "}
            as={"h4"}
            className={"text-[60px] font-bold font-Karma text-[#07222C] "}
          />
          <Hedding
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking "
            }
            as={"h4"}
            className={
              "text-[22px] font-medium font-Karma text-[#565A5B] px-[450px] pb-[80px] "
            }
          />
        </div>
        <Container>
          <Flex className={"justify-between m-auto"}>
            <div className="w-[300px]">
              <Image src={Education1} alt={Education1} />
              <Hedding
                text={"One on One Monitor"}
                as={"h4"}
                className={"text-[30px] font-bold font-Karma text-[#07222C]  "}
              />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                as={"p"}
                className={
                  "text-[22px] font-normal font-Karma text-[#565A5B]  "
                }
              />
            </div>
            <div className="w-[240px]">
              <Image src={Education2} alt={Education2} />
              <Hedding
                text={"24/7 Mentor"}
                as={"h4"}
                className={"text-[30px] font-bold font-Karma text-[#07222C]  "}
              />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                as={"p"}
                className={
                  "text-[22px] font-normal font-Karma text-[#565A5B]  "
                }
              />
            </div>
            <div className="w-[240px]">
              <Image src={Education3} alt={Education3} />
              <Hedding
                text={"Whiteboard"}
                as={"h4"}
                className={"text-[30px] font-bold font-Karma text-[#07222C]  "}
              />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                as={"p"}
                className={
                  "text-[22px] font-normal font-Karma text-[#565A5B]  "
                }
              />
            </div>
            <div className="w-[240px]">
              <Image src={Education4} alt={Education4} />
              <Hedding
                text={"Affordable Price"}
                as={"h4"}
                className={"text-[30px] font-bold font-Karma text-[#07222C]  "}
              />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting"
                }
                as={"p"}
                className={"text-[22px] font-normal font-Karma text-[#565A5B] "}
              />
            </div>
          </Flex>
        </Container>
      </section>
      {/* online Education part end  */}
      {/* Larning section part start */}
      <section>
        <Container>
          <Flex>
            <div className="w-1/2">
              <Image src={Video} alt={Video} />
            </div>
            <div className="w-1/2 pl-16 pt-[82px]">
              <Hedding
                text={"We are Always Ensure Best Course for your learning "}
                as={"h4"}
                className={
                  "text-[48px] font-bold font-Roboto text-[#06053A] pr-[40px] pb-[10px] "
                }
              />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the   "
                }
                as={"p"}
                className={"text-[22px] font-medium font-pop text-[#565A5B] "}
              />
              <Button
                btnText={"Join Us Free"}
                className={
                  "py-[10px] w-[200px] mt-8 font-semibold text-[#6A6B6C] text-[20px] bg-[#F5C362] px-[30px] rounded-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
          </Flex>
        </Container>
      </section>
      {/* Larning section part end */}
      {/* Coruse part start  */}
      <section className="pt-[120px]">
        <div className="text-center">
          <Hedding
            text={"Our Popular Course "}
            as={"h4"}
            className={"text-[60px] font-bold font-Roboto text-[#07222C] pb-4"}
          />
          <Hedding
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th "
            }
            as={"h4"}
            className={
              "text-[22px] font-medium font-Karma text-[#565A5B] px-[450px] pb-[80px] "
            }
          />
        </div>
        <Container>
          <Flex className={" grid grid-cols-3 justify-between  gap-8 ml-4"}>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course} alt={Course} className={"w-full"} />
              <Hedding
                text={"Web Design  Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[42px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5 ">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] ml-5 w-[380px] font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course1} alt={Course1} className={"w-full"} />
              <Hedding
                text={"Web development Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[25px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] w-[380px] ml-5 font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course2} alt={Course2} className={"w-full"} />
              <Hedding
                text={"Web Design  Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[40px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5 ">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] w-[380px] ml-5 font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course3} alt={Course3} />
              <Hedding
                text={"Web Design  Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[40px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] w-[380px] ml-5 font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course4} alt={Course4} />
              <Hedding
                text={"Mobile design  Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[40px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] w-[380px] ml-5 font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
            <div className=" w-[420px] h-[510px] shadow-2xl">
              <Image src={Course5} alt={Course5} />
              <Hedding
                text={"Graphics Design  Basic to advance"}
                as={"h4"}
                className={
                  "text-[25px] font-bold font-Roboto text-[#07152F] py-[40px] ml-5"
                }
              />
              <div className="flex ml-5 pb-5">
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px] " />
                <IoIosStar className="text-[#F1C40F] w-[24px] h-[24px]  " />
                <span className="text-[18px] font-medium font-pop text-[#6A6B6C] pl-8">
                  5.0{" "}
                  <span className="text-[15px] font-medium font-pop text-[#6A6B6C] pl-5">
                    {" "}
                    (2 rating){" "}
                  </span>
                </span>
              </div>
              <Button
                btnText={"Add to Cart"}
                className={
                  " text-center py-[10px] w-[380px] ml-5 font-semibold text-[#6A6B6C] text-[20px] hover:bg-[#F5C362] mt-[50p] mb-[30px] px-[30px] rounded-l-2xl rounded-b-2xl font-pop hover:text-[#190D30] hover:font-bold  border-2 border-[#309DC1] "
                }
              />
            </div>
          </Flex>
          <div className=" ">
            <Button
              btnText={"See More"}
              className={
                "py-[15px] mt-10 font-semibold mx-auto text-[#190D30] text-[20px]  bg-[#F5C362] px-[30px]  rounded-2xl w-[200px] text-center "
              }
            />
          </div>
        </Container>
      </section>
      {/* Coruse part end  */}

      {/* revew part start  */}
      <section className="py-[120px]">
        <div className="text-center">
          <Hedding
            text={"What our Students say"}
            as={"h4"}
            className={"text-[60px] font-bold font-Roboto text-[#07222C] pb-4"}
          />
          <Hedding
            text={
              "There are many variations of passages of Lorem Ipsum available,"
            }
            as={"h4"}
            className={
              "text-[22px] font-medium font-Karma text-[#565A5B]  pb-[50px] "
            }
          />
        </div>
        <Container>
          <Flex className={"justify-between space-x-6"}>
            <div className="shadow-2xl p-8 w-[460px]">
              <Hedding
                text={"Great Platform "}
                as={"h4"}
                className={"text-[30px] font-bold font-Roboto text-[#07222C]"}
              />
              <RiSingleQuotesL className="text-[52px]" />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  "
                }
                as={"h4"}
                className={"text-[22px] font-pop text-[#07222C] pb-5"}
              />
              <hr className="border-1 border-[#B1B3B6] pb-4" />
              <div className="flex">
                <Image
                  src={Icone}
                  alt={Icone}
                  className={"w-[61px] h-[61px]"}
                />
                <div className="pb-10">
                  <Hedding
                    text={"Beth Luna "}
                    as={"h4"}
                    className={
                      "text-[20px] font-bold font-pop text-[#534D5E] pl-4"
                    }
                  />
                  <div className="flex w-{100px} pl-4">
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-8 w-[460px]">
              <Hedding
                text={"Great Platform "}
                as={"h4"}
                className={"text-[30px] font-bold font-Roboto text-[#07222C]"}
              />
              <RiSingleQuotesL className="text-[52px]" />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  "
                }
                as={"h4"}
                className={"text-[22px] font-pop text-[#07222C] pb-5"}
              />
              <hr className="border-1 border-[#B1B3B6] pb-4" />
              <div className="flex">
                <Image
                  src={Icone1}
                  alt={Icone1}
                  className={"w-[61px] h-[61px]"}
                />
                <div className="pb-10">
                  <Hedding
                    text={"Belinda Gomez"}
                    as={"h4"}
                    className={
                      "text-[20px] font-bold font-pop text-[#534D5E] pl-4"
                    }
                  />
                  <div className="flex w-{100px} pl-4">
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-8 w-[460px]">
              <Hedding
                text={"Great Platform "}
                as={"h4"}
                className={"text-[30px] font-bold font-Roboto text-[#07222C]"}
              />
              <RiSingleQuotesL className="text-[52px]" />
              <Hedding
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  "
                }
                as={"h4"}
                className={"text-[22px] font-pop text-[#07222C] pb-5"}
              />
              <hr className="border-1 border-[#B1B3B6] pb-4" />
              <div className="flex">
                <Image
                  src={Icone2}
                  alt={Icone2}
                  className={"w-[61px] h-[61px]"}
                />
                <div className="pb-10">
                  <Hedding
                    text={"Howard Clayton"}
                    as={"h4"}
                    className={
                      "text-[20px] font-bold font-pop text-[#534D5E] pl-4"
                    }
                  />
                  <div className="flex w-{100px} pl-4">
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px] " />
                    <IoIosStar className="text-[#F1C40F] w-[22px] h-[22px]  " />
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      {/* revew part end  */}

      {/* footer part start  */}
      <section className="pt-[130px] pb-[50px] bg-[#0166FF]">
        <Container>
          <Flex className={"justify-between pb-[170px]"}>
            <div>
              <Image src={Logos} alt={Logos} className={"pb-[33px]"} />
              <Hedding
                text={"Follow on social service "}
                as={"h4"}
                className={"text-[25px] font-medium text-[#FFFFFF] font-pop"}
              />
              <div className="flex space-x-6 pt-[23px]">
                <FaFacebook className="w-[37px] h-[34px]" />
                <FaInstagram className="w-[37px] h-[34px]" />
              </div>
            </div>
            <div>
              <Hedding
                text={"Links"}
                as={"h4"}
                className={
                  "text-[30px] font-bold text-[#FFFFFF] font-Roboto pb-[20px]"
                }
              />
              <Hedding
                text={"Home"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"Help center"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"Service"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
            </div>
            <div>
              <Hedding
                text={"Resource"}
                as={"h4"}
                className={
                  "text-[30px] font-bold text-[#FFFFFF] font-Roboto pb-[20px]"
                }
              />
              <Hedding
                text={"About Us"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"Carrier"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"Legal Notice"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
            </div>
            <div>
              <Hedding
                text={"Contacts"}
                as={"h4"}
                className={
                  "text-[30px] font-bold text-[#FFFFFF] font-Roboto pb-[20px]"
                }
              />
              <Hedding
                text={"Tongi, Dhaka"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"Support "}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
              <Hedding
                text={"01826339098"}
                as={"h4"}
                className={
                  "text-[20px] font-medium text-[#FFFFFF] font-pop pb-[38px]"
                }
              />
            </div>
          </Flex>
          <hr />
          <Hedding
            text={"Copyright 2020@ all right"}
            as={"h4"}
            className={
              "text-[20px] text-[#FFFFFF] font-Roboto pt-[30px] text-center"
            }
          />
        </Container>
      </section>
      {/* footer part end  */}
    </>
  );
}

export default App;
