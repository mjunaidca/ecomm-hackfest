import BottomBar from "./FooterNav/BottomBar";
import Footer from "./FooterNav/Footer";

const FooterBar = () => {
  return (
    <div className="">
      {/* <div className="py-4"> */}
      <Footer />
      <BottomBar />
      {/* </div> */}
      {/* <div className="flex items-start py-6 md:py-3 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto justify-between  ">
                Made by Muhammad Junaid!
            </div> */}
    </div>
  );
};

export default FooterBar;
