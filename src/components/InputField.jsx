import InputError from "./InputError";

const InputField = ({
  label,
  name,
  type,
  min,
  max,
  step,
  icon,
  placeholder,
  register,
  errorMsg,
  errorClass,
  disabled,
  isRequired,
  className,
  innerClassName,
  handleChange = () => {},
  id = null,
  value,
  defaultValue,
  autocaps = false,
  isNull = false,
  isResetIconVisible,
  onReset,
}) => {
  const inputClassName = `outline-none bg-transparent py-2 px-3 w-full text-sm border ${innerClassName} ${
    errorMsg
      ? "border-red-500"
      : "border-darkener-200 hover:border-darkener-400 dark:border-lightener-200 dark:hover:border-lightener-400"
  } rounded-lg duration-300`;

  return !isNull ? (
    <div className={`flex flex-col w-full ${className}`}>
      {/* label */}
      {label ? (
        <label htmlFor={id ?? name} className="text-xs font-medium">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      ) : null}

      {/* input */}
      <div className="relative">
        <input
          type={type}
          id={id ?? name}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...register(name, {
            value,
            onChange: (e) => {
              handleChange(name, e.target.value);
            },
          })}
          className={`${inputClassName} ${autocaps ? "uppercase" : ""}`}
          value={value}
          defaultValue={defaultValue}
        />

        {/* reset icon */}
        {/* {isResetIconVisible && <CircleX className="absolute right-4 top-1/2 -translate-y-1/2" onClick={onReset} />} */}

        {/* error message */}
        <InputError errorMsg={errorMsg} errorClass={errorClass} />
      </div>
    </div>
  ) : null;
};

export default InputField;
