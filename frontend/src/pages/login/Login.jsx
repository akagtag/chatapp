import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div>
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/bghero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300">
                        Login
                    </h1>

                    <form onSubmit={handleSubmit}>
                        {[
                            {
                                label: "Username",
                                type: "text",
                                placeholder: "Enter username",
                                value: username,
                                onChange: (e) =>
                                    setUsername(e.target.value.trim()),
                            },
                            {
                                label: "Password",
                                type: "password",
                                placeholder: "Enter Password",
                                value: password,
                                onChange: (e) =>
                                    setPassword(e.target.value.trim()),
                            },
                        ].map((input, index) => (
                            <div key={index}>
                                <label className="label p-2">
                                    <span className="text-base label-text">
                                        {input.label}
                                    </span>
                                </label>
                                <input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="w-full input input-bordered h-10"
                                    value={input.value}
                                    onChange={input.onChange}
                                />
                            </div>
                        ))}

                        <Link
                            to="/signup"
                            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
                        >
                            {"Don't"} have an account?
                        </Link>

                        <div>
                            <button
                                className="btn btn-block btn-sm mt-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner "></span>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
