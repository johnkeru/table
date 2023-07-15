import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post("http://localhost:8000/register", data, {
                withCredentials: true,
            })
            .then((res) => {
                setError(null);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const password = watch("password");
    const passwordConfirmation = watch("password_confirmation");

    return (
        <div className="max-w-xs mx-auto">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        {...register("username", {
                            required: "Username is required",
                        })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.username ? "border-red-500" : ""
                        }`}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-xs italic">
                            {errors.username.message}
                        </p>
                    )}
                </div>
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
                            errors.email ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
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
                            minLength: {
                                value: 8,
                                message:
                                    "Password must have at least 8 characters",
                            },
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
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        {...register("password_confirmation", {
                            validate: (value) =>
                                value === password ||
                                "The passwords do not match",
                        })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.password_confirmation ? "border-red-500" : ""
                        }`}
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-xs italic">
                            {errors.password_confirmation.message}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
