import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthProvider";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { setToken } = useAuth();
    const [error, setError] = useState(null);

    const onSubmit = (data) => {
        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
            axios
                .post("http://localhost:8000/login", data)
                .then((res) => {
                    setError(null);
                    console.log(res.data);
                })
                .catch((err) => {
                    if (err.response.data.message)
                        setError(err.response.data.message);
                    setError(err.response.data?.errors);
                });
        });
    };

    return (
        <div className="max-w-xs mx-auto" onClick={() => setToken("awefwefwe")}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.email || error?.email ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </p>
                    )}
                    {error?.email && (
                        <p className="text-red-500 text-xs italic">
                            {error.email[0]}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.password ? "border-red-500" : ""
                        }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password.message}
                        </p>
                    )}
                    {error?.error && (
                        <p className="text-red-500 text-xs italic">
                            {error.error[0]}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
