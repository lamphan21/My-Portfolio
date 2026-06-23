import imgRectangle4 from "./1f8e22c10121ea73c7f37be2495d8d7605d3ed24.png";
import imgRectangle3 from "./88e071fb10eaac759e467c6704c24fd3fadc04b4.png";

export default function ImageGroup() {
  return (
    <div className="relative size-full" data-name="image-group">
      <div className="absolute h-[500px] left-[276px] rounded-tl-[20px] rounded-tr-[30px] shadow-[0px_-11px_10.7px_0px_rgba(89,89,89,0.25)] top-0 w-[310px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[20px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[134.23%] left-0 max-w-none top-[0.03%] w-full" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute h-[397px] left-0 rounded-tl-[20px] rounded-tr-[30px] shadow-[8px_-11px_10.7px_0px_rgba(89,89,89,0.25)] top-[103px] w-[326px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[20px] rounded-tr-[30px]">
          <img alt="" className="absolute h-[177.58%] left-0 max-w-none top-[-0.01%] w-full" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}