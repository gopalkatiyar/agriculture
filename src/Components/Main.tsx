import homeCardLogo1 from "../assets/homeCardLogo1.png";
import homeCardLogo2 from "../assets/homeCardLogo2.png";
import homeCardLogo3 from "../assets/homeCardLogo3.png";

function Main() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-black h-[600px] w-full rounded-lg shadow-md bg-cover bg-center">
          <div className="w-3/4  h-full mx-auto flex">
            <div className="h-full w-1/2 flex flex-col justify-center items-start text-white">
              <h1 className="text-7xl text-yellow-200 font-bold f1">
                Agriculture
              </h1>
              <h1 className="text-6xl font-bold f2">& Organic</h1>
              <h1 className="text-6xl font-bold f2">Market</h1>
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg mt-4 font-semibold f2">
                Buy Now
              </button>
            </div>
            <div className="w-1/2 h-full">
              <div className="h-1/2 w-full flex relative">
                <div className="circle absolute bottom-1 right-44"></div>
              </div>
              <div className="h-1/2 w-full flex relative">
                <div className="circle absolute top-1 right-44"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-56 md:w-auto bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-4 border-b hr">
            <img src={homeCardLogo1} alt="logo" className="w-8 h-8 mr-4" />
            <div className="flex flex-col">
              <h5>Return Policy</h5>
              <p className={"text-xs"}>Money Back Guarantee</p>
            </div>
          </div>
          <div className="flex items-center p-4 border-b hr">
            <img src={homeCardLogo2} alt="logo" className="w-8 h-8 mr-4" />
            <div className="flex flex-col">
              <h5>Free Shipping</h5>
              <p className={"text-xs"}>On all orders over $99.00</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <img src={homeCardLogo3} alt="logo" className="w-8 h-8 mr-4" />
            <div className="flex flex-col">
              <h5>Store Locator</h5>
              <p className={"text-xs"}>Find our store near you</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
