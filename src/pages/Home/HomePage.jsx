import Header from "./components/Header";
import mobile from "../../assets/phoneTrading.png";
import Box from "../../components/Box";
import research from "../../assets/research.png";
import analytics from "../../assets/analytics.png";

const HomePage = () => {
  return (
    <div className="mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto mt-9">
        <div className="my-auto mx-auto md:ml-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[200px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *30 Days free trial
          </div>
          <div className="text-[50px] font-extrabold leading-[70px]">
            The world's most powerful crypto app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Get the most accurate market data, alerts, conversions, indicators,
            tools and more - all within the same app.
          </div>
        </div>
        <div className="flex mx-auto rounded-[50px] w-[450px] h-[600px] bg-gradient-to-tr from-purple-900 via-blue-400 to-pink-600">
          <img
            src={mobile}
            alt="Mobile"
            className="w-[250px] h-[500px] mx-auto my-auto"
          />
        </div>
      </div>
      <div className="pt-[130px] text-center">
        <div className="font-bold text-[50px]">Why choose us?</div>
        <div className="text-gray-400 w-[400px] mx-auto my-3">
          You can find the best indicator and indicator combination for your
          coins
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] py-[50px] w-[80%] mx-auto">
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={analytics}
        />
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={research}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto">
        <div className="flex justify-center mx-auto md:ml-auto w-[500px] h-[600px]">
          <img
            src={mobile}
            alt="Mobile"
            className="w-[250px] h-[500px] mx-auto my-auto"
          />
        </div>
        <div className="my-auto mx-auto md:mr-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[200px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *30 Days free trial
          </div>
          <div className="text-[50px] font-extrabold leading-[70px]">
            The world's most powerful crypto app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Get the most accurate market data, alerts, conversions, indicators,
            tools and more - all within the same app.
          </div>
        </div>
      </div>
      <footer className="bg-black text-white p-[60px] mt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="text-center">
            <div>Arif Ahmadli</div>
            <div>Mikail Shahtakhtinski</div>
            <div>Khumar Huseynova</div>
            <div>Rza Ismayilov</div>
            <div>Narmin Pashayeva</div>
            <div>Nijat Agayan</div>
          </div>

          <div className="text-center">
            <div>Arif Ahmadli</div>
            <div>Mikail Shahtakhtinski</div>
            <div>Khumar Huseynova</div>
            <div>Rza Ismayilov</div>
            <div>Narmin Pashayeva</div>
            <div>Nijat Agayan</div>
          </div>

          <div className="text-center">
            <div>Arif Ahmadli</div>
            <div>Mikail Shahtakhtinski</div>
            <div>Khumar Huseynova</div>
            <div>Rza Ismayilov</div>
            <div>Narmin Pashayeva</div>
            <div>Nijat Agayan</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
