"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const signUpData = Object.fromEntries(formData.entries());
    console.log(signUpData);

    const { name, email, password, image } = signUpData;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/",
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("wrong credential");
    }
    console.log(data, error);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Card className="border rounded-none w-full max-w-md p-6 shadow-lg">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">Create Account</h1>
              <p className="text-default-500 mt-1">
                Start your adventure with Wanderlust
              </p>
            </div>

            <Form onSubmit={onSubmit} className="flex flex-col gap-4">
              <TextField isRequired name="name" type="text">
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
                <FieldError />
              </TextField>

              <TextField name="image" type="url">
                <Label>Image URL</Label>
                <Input placeholder="Image url" />
                <FieldError />
              </TextField>

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
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type={showPassword ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }

                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }

                  return null;
                }}
              >
                <Label>Password</Label>

                <div className="relative w-full">
                  <Input placeholder="Enter your password" className="w-full" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-default-500"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>

                <FieldError />
              </TextField>

              <Button
                className="rounded-none w-full bg-cyan-500 text-white"
                type="submit"
              >
                Create Account
              </Button>
            </Form>

            <div className="flex justify-center items-center gap-3 my-5">
              <Separator className="flex-1" />
              <div className="whitespace-nowrap text-sm text-default-500">
                Or sign up with
              </div>
              <Separator className="flex-1" />
            </div>

            <Button
              // onClick={handleGoogleSignin}
              variant="outline"
              className="w-full rounded-none "
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </Button>
            <p className="text-center text-sm text-default-500 mt-5">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-cyan-500 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
