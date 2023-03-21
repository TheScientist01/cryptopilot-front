const Box = ({ label, text, image }) => {
  return (
    <div className="rounded-xl bg-gray-50 flex gap-4 p-2 w-full shadow-card-100 hover:shadow-card-200 duration-200 cursor-pointer">
      <div>
        <img src={image} alt={label} className="w-[180px] p-5" />
      </div>
      <div className="my-auto">
        <div className="font-bold text-2xl">{label}</div>
        <div className="text-gray-400 text-sm mt-1">{text}</div>
      </div>
    </div>
  );
};

export default Box;
