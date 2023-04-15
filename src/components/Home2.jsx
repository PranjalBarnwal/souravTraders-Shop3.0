import asianpaints from "./../assets/asianpaints.png";
import "./../App.css";
import eagle from "./../assets/eagle.jpg";
import kajaria from "./../assets/kajaria.svg";
import oasis from "./../assets/oasis.png";
import roxo from "./../assets/roxo.png";
import watertech from "./../assets/watertech.png";
import utkarsh from "./../assets/utkarsh.png";

const Home2 = () => {
  return (
    <div>
      <div className="text-2xl h-full w-full text-center font1 underline">
        FEATURED BRANDS
      </div>
      <div className="flex h-full w-full justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-4 bg-red-300 w-7/12 " >
        <div className="row-span-2">
          <img  className="sw-[1000px]" src={kajaria} alt="" />
        </div>

        <div >
          <img className="w-[800px]" src={watertech} alt="" />
        </div>

        <div className="w-[200px]">
          <img src={oasis} alt="" />
        </div>

        <div className="w-[200px]">
          <img src={eagle} alt="" />
        </div>

        <div>
          <img src={utkarsh} alt="" />
        </div>

        <div>
          <img src={asianpaints} alt="" />
        </div>

        <div className="w-[200px]">
          <img src={roxo} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home2;
