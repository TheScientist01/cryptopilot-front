import InputField from "../../../../components/InputField";
import { useForm } from "react-hook-form";
import { getEncryptionKey } from "../../api";
import { login } from "./api";
import { useDispatch } from "react-redux";
import { validate } from "../../../../redux/slices/authSlice";
import encrypt from "../../../../helper/encryptor";
import { setUser } from "../../../../redux/slices/userSlice";
import Spinner from "../../../../components/Spinner";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();

  const { isSubmitting } = formState;

  const dispatch = useDispatch();

  const loginUser = async (data) => {
    const key = await getEncryptionKey();
    const res = await login({
      username: data.username,
      encryptedPassword: encrypt(data.password, key.data.key),
      keyID: key.data.id,
    });
    dispatch(validate(res.data.tokens));
    dispatch(setUser(res.data.user));
  };

  return (
    <form
      onSubmit={handleSubmit(loginUser)}
      className="absolute  w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 col-span-2  bg-white rounded-md h-fit p-9 shadow-card-200"
    >
      <h1 className="font-bold text-[26px] mb-3 text-center">
        Login to system
      </h1>
      <InputField
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
        className="mb-3"
        register={register}
        isRequired={true}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        register={register}
        isRequired={true}
      />
      <button className="w-full p-2 my-4 rounded-lg bg-purple-400 text-white">
        {isSubmitting?<Spinner size="small" />:"Login"}
      </button>
      <div className="text-center text-sm text-indigo-400 underline underline-offset-2 decoration-dashed hover:no-underline duration-200">
        <a href="/auth/register">or sign up</a>
      </div>
    </form>
  );
};

export default LoginPage;
