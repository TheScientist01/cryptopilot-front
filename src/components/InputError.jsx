import { TiWarning } from "react-icons/ti";

const InputError = ({ errorMsg, errorClass }) => {
  return (
    <>
      {errorMsg && (
        <span className="absolute top-full flex items-center gap-x-1">
          <TiWarning className="text-sm text-red-500" />
          <p className={`text-xs font-medium text-red-500 ${errorClass}`}>{errorMsg}</p>
        </span>
      )}
    </>
  );
};

export default InputError;
