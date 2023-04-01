const IndicatorBox = ({data, name}) => {
    const getColorForPercentage = (percentage) => {
        let red, green, blue;
        if (percentage < 50) {
          red = 255;
          green = Math.round((255 * percentage) / 50);
          blue = 0;
        } else if (percentage < 65) {
          red = Math.round(255 - (255 * (percentage - 50)) / 15);
          green = 255;
          blue = 0;
        } else {
          red = 0;
          green = 255;
          blue = Math.round((255 * (percentage - 65)) / 35);
        }
        return `#${red.toString(16).padStart(2, "0")}${green
          .toString(16)
          .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
      };
  return (
    <div className="rounded-lg w-full h-[180px] my-3 p-0">
      <div className="grid grid-cols-4">
        <div className="rounded-t-md h-fit bg-[#7422DD] text-white py-1 pl-3">
          {name}
        </div>
      </div>
      <div className="h-[150px] bg-white shadow-card-100 rounded-b-lg rounded-r-lg grid grid-cols-4 p-5">
        <div className="text-center">
          <div className="text-gray-400">Total</div>
          <div className="text-5xl font-semibold">
            {data?.buy_points?.length + data?.sell_points?.length}
          </div>
          <div className="mt-4 text-gray-400">signals</div>
        </div>

        <div className="text-center">
          <div className="text-gray-400">Buy</div>
          <div className="text-5xl font-semibold text-red-800">
            {data?.buy_points?.length}
          </div>
          <div className="mt-4 text-gray-400">signals</div>
        </div>

        <div className="text-center">
          <div className="text-gray-400">Sell</div>
          <div className="text-5xl text-green-600 font-semibold">
            {data?.sell_points?.length}
          </div>
          <div className="mt-4 text-gray-400">signals</div>
        </div>

        <div className="text-center">
          <div className="text-gray-400">Win rate</div>
          <div
            style={{
              color: `${getColorForPercentage(data?.success_rate)}`,
            }}
            className={`text-6xl font-semibold`}
          >
            {data?.success_rate?.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorBox;