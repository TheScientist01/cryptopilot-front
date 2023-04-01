import { useNavigate, useParams } from "react-router-dom";
import { cryptoList } from "../../constants/cryptos";
import ChartsPage from "./components/ChartsPage";
import IndicatorsPage from "./components/IndicatorsPage";
import RSIPage from "./components/RSIPage";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";
import {FaUserCircle} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import { logoutAuth } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { excelExport, objectToArray } from "../../helper/excelExport";
import { getCoin } from "./api";

const DashboardPage = ({ page }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const pageList={
    chart: <ChartsPage />,
    indicators: <IndicatorsPage />,
    rsi: <RSIPage />
  }

  const user=useSelector(selectUser);

  const handleLogout=()=>{
    dispatch(logoutAuth());
    navigate("/auth/login");
  }

  const handleSaveData=async ()=>{
    const res=await getCoin(name);
    excelExport(res, name);
  }

  return (
    <div style={{ fontFamily: "Helvetica" }} className="flex">
      <div className="w-[350px] py-9 pl-9 relative">
        <div className="text-[27px] font-semibold mb-5">CryptoKraken</div>
        <hr></hr>
        {Object.values(cryptoList).map((crypto) => (
          <div
            onClick={() => {
              navigate(`/dashboard/${crypto.name.toLocaleLowerCase()}/chart`);
              window.location.reload(false);
            }}
            className={`flex gap-2 mt-2 rounded-lg p-1 ${
              crypto.name.toLocaleLowerCase() === name &&
              "bg-[#7422DD] text-[#7422DD] bg-opacity-10"
            } hover:bg-[#7422DD] hover:bg-opacity-10 hover:text-[#7422DD] duration-200 cursor-pointer`}
          >
            <div className="rounded-md w-[30px] h-[30px] p-1.5 my-auto bg-white shadow-card-100">
              <img src={crypto.url} />
            </div>
            <div className="my-auto font-semibold">{crypto.name}</div>
          </div>
        ))}
        <div className="absolute left-6 bottom-0">
            <div className="p-5 flex gap-4">
              <div className="my-auto"><FaUserCircle className="text-4xl text-[#7422dd]" /></div>
              <div>
                <div className="font-bold text-lg">{user.username}</div>
                <div className="text-[12px] text-gray-400">{user.email}</div>
              </div>
              <button onClick={handleLogout} className="rounded-lg px-2 h-7 my-auto text-white bg-red-500"><FiLogOut /></button>
            </div>
        </div>
      </div>
      <div className="relative flex bg-gray-100 pt-[135px] pb-3 w-[99%] m-4 rounded-[25px] shadow-black">
        <div className="absolute top-0 h-[40vh] w-full rounded-t-[25px] bg-black">
          <div className="flex justify-between text-[15px] text-white w-[85%] mx-auto my-9">
            <div className="flex gap-10">
              <div
                onClick={() => {
                  if (page !== "chart")
                    navigate(`/dashboard/${name.toLocaleLowerCase()}/chart`);
                }}
                className={`cursor-pointer ${
                  page !== "chart" && "text-[#969696]"
                }`}
              >
                Interactive Chart
              </div>
              <div
                onClick={() => {
                  if (page !== "indicators")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/indicators`
                    );
                }}
                className={`${
                  page !== "indicators" && "text-[#969696]"
                } cursor-pointer`}
              >
                Indicators
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsi" && "text-[#969696]"
                } cursor-pointer`}
              >
                RSI
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsi" && "text-[#969696]"
                } cursor-pointer`}
              >
                MACD
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsii" && "text-[#969696]"
                } cursor-pointer`}
              >
                Bollinger Bands
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsii" && "text-[#969696]"
                } cursor-pointer`}
              >
                Moving Average
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsii" && "text-[#969696]"
                } cursor-pointer`}
              >
                Stochastic
              </div>
              <div
                onClick={() => {
                  if (page !== "rsi")
                    navigate(
                      `/dashboard/${name.toLocaleLowerCase()}/rsi`
                    );
                }}
                className={`${
                  page !== "rsii" && "text-[#969696]"
                } cursor-pointer`}
              >
                EMA
              </div>
              
            </div>
            <button onClick={handleSaveData} className="rounded-md bg-[#2E2E2E] font-semibold text-sm py-2 px-5">
              Save data
            </button>
          </div>
        </div>
        <div className="w-[85%] mx-auto z-10 relative">
          <div className="flex gap-5 font-semibold mb-4">
            <div className="rounded-md w-[45px] h-[45px] p-1.5 my-auto bg-gray-300 shadow-card-100 shadow-white">
              <img src={cryptoList[name].url} />
            </div>
            <div className="text-[35px] text-white">
              {cryptoList[name].name}
            </div>
          </div>
          {pageList[page]}
        </div>
        
      </div>
    </div>
  );
};

export default DashboardPage;
