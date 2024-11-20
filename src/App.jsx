import "./App.css";
import Logo from "./assets/image/logo.png";
import Banner from "./assets/image/banner.png";
import Education1 from "./assets/image/education1.png";
import Education2 from "./assets/image/education2.png";
import Education3 from "./assets/image/education3.png";
import Education4 from "./assets/image/education4.png";
import Video from "./assets/image/video.png";
import Container from "./component/Container";
import Flex from "./component/Flex";
import Image from "./component/Image";
import Menu from "./component/menu";
import Button from "./component/Button";
import Hedding from "./component/Hedding";

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
                  "text-[48px] font-bold font-Karma text-[#06053A] pr-[40px] pb-[10px] "
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
            className={"text-[60px] font-bold font-Karma text-[#07222C] "}
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
      </section>
      {/* Coruse part end  */}
    </>
  );
}

export default App;
