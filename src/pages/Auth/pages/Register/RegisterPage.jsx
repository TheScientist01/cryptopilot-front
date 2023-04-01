import InputField from "../../../../components/InputField";
import bg from "../../../../assets/bg.jpg";
import { useForm } from "react-hook-form";
import { getEncryptionKey } from "../../api";
import encrypt from "../../../../helper/encryptor";
import { useDispatch } from "react-redux";
import { registerUser } from "./api";
import { validate } from "../../../../redux/slices/authSlice";
import { setUser } from "../../../../redux/slices/userSlice";
import Spinner from "../../../../components/Spinner";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();

  const { isSubmitting } = formState;

  const dispatch = useDispatch();

  const registerUserForm = async (data) => {
    const key = await getEncryptionKey();

    const res = await registerUser({
      username: data.username,
      email: data.email,
      encryptedPassword: encrypt(data.password, key.data.key),
      keyID: key.data.id,
    });
    dispatch(validate(res.data.tokens));
    dispatch(setUser(res.data.user));

    // const res = await axios.post("https://nest-v1.onrender.com/auth/register", {
    //   username: "thesci1",
    //   email: "arifehmedli49@gmail.com",
    //   encryptedPassword:
    //     "Xo1ROIRaMiRfCow16ztgDzamnZFan9qevlOAKCcP5Ty20mKDLBnrL0W0MOn6KSbcAZBViELulaygvANgqxM0nc4Yr6aHnmiLbn8BM1AFkXEEJ6H7nvm6c07UeOCt727GL56JJNNceLdyVOb1jJCxf6HG6Rf2O57AiPM82ic78eggLBfXcoxXsnW24NI8tCTn/g9fWDWmPYJUH/LL3MDWMKL/EoL9HvffJe8iAVJxsafKZl4t4iVTcbvvLzWdilt4Pc8kEctE5NW5T4I73aHOWXpjyHg6v+mSd8ZU0Y53UecGCS2Pp3BFtAKfC5svHe7oxf91z6kf9HpIfrmlRubomg==",
    //   keyID: 63,
    // });
    return res;
  };

  return (
    <form
      onSubmit={handleSubmit(registerUserForm)}
      className="absolute  w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 col-span-2  bg-white rounded-md h-fit p-9 shadow-card-200"
    >
      <h1 className="font-bold text-[26px] mb-3 text-center">
        Register to system
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
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
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
        <a href="/auth/login">or log in</a>
      </div>
    </form>
  );
};

export default RegisterPage;
