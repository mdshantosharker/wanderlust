"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });

    if (error) {
      console.log(error);
      toast.warning(error.message);
      return;
    }
    if (data) {
      toast.success("Login Successfully");
    }
  };
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-black px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            login Your Account
          </h1>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* Email */}

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-white">Email</Label>

              <Input placeholder="john@example.com" />

              <FieldError />
            </TextField>

            {/* Password */}

            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain a number";
                }

                return null;
              }}
            >
              <Label className="text-white">Password</Label>

              <div className="relative">
                <Input placeholder="Enter password" className={"w-full"} />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-xl"
            >
              <Check size={18} />
              Login
            </Button>
          </Form>
          <h1 className="text-center mt-2 text-white">
            Your don't have an account?{" "}
            <Link className="text-blue-500" href={"/signup"}>
              signup{" "}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
