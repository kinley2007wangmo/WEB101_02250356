<<<<<<< HEAD
"use client"

import { useForm } from "react-hook-form"

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    alert("Login Successful!")
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">

      <h1 className="text-xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

        {/* Email */}
        <input
          type="text"
          placeholder="Email"
          className="border p-2 w-full"
          {...register("email", {
            required: "Email is required",
            pattern: {
             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
             message: "Invalid email format"
            }
          })}
        />

        {errors.email && (
            <p className="text-red-500 text-sm">
                {errors.email.message}
            </p>
            )}
            
        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white px-4 py-2 w-full"
        >
=======
"use client";

import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login Successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="border p-2 rounded"
        />

        <button className="bg-black text-white p-2 rounded">
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
          Login
        </button>

      </form>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
}