"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className="min-h-screen bg-gray-50 flex flex-wrap">
            <div className="hidden lg:block lg:w-1/2">
                <div className="flex items-center flex-col h-full justify-center ">
                    <img
                        src="https://wowdash.pixcelsthemes.com/wowdash-bootstrap/WowDash/wowdash/assets/images/auth/auth-img.png"
                        alt="ECA Nepal Logo"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 py-8 px-6 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    <div className="mb-8">
                        <NavLink to="/index" className="block mb-10 max-w-72">
                            <img src="/placeholder.svg?height=40&width=168&text=168X40" alt="ECA Nepal Logo" className="h-10" />
                        </NavLink>
                        <h4 className="mb-3 text-2xl font-semibold text-gray-900">Sign Up to your Account</h4>
                        <p className="mb-8 text-gray-600 text-lg">Welcome back! please enter your detail</p>
                    </div>

                    <form>
                        <div className="relative mb-4">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon icon="mage:user" className="text-xl" />
                            </div>
                            <input
                                type="text"
                                className="w-full h-14 bg-gray-50 rounded-xl pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Bikash Pandey"
                            />
                        </div>

                        <div className="relative mb-4">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon icon="mage:email" className="text-xl" />
                            </div>
                            <input
                                type="email"
                                className="w-full h-14 bg-gray-50 rounded-xl pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="bikashpandey835@gmail.com"
                            />
                        </div>

                        <div className="relative mb-5">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon icon="solar:lock-password-outline" className="text-xl" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full h-14 bg-gray-50 rounded-xl pl-12 pr-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <Icon icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"} className="text-xl" />
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mb-4">Your password must have at least 8 characters</p>

                        <div className="mb-8">
                            <div className="flex items-start gap-3">
                                <input
                                    className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    type="checkbox"
                                    id="terms"
                                />
                                <label className="text-sm text-gray-600" htmlFor="terms">
                                    By creating an account means you agree to the{" "}
                                    <NavLink to="#" className="text-blue-600 hover:underline">
                                        Terms & Conditions
                                    </NavLink>{" "}
                                    and our{" "}
                                    <NavLink to="#" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </NavLink>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl text-sm transition-colors"
                        >
                            Sign Up
                        </button>

                        <div className="mt-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-gray-50 px-4 text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <button
                                type="button"
                                className="flex-1 font-semibold text-gray-700 py-4 px-6 border border-gray-200 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
                            >
                                <Icon icon="ic:baseline-facebook" className="text-blue-600 text-xl" />
                                Google
                            </button>
                            <button
                                type="button"
                                className="flex-1 font-semibold text-gray-700 py-4 px-6 border border-gray-200 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
                            >
                                <Icon icon="logos:google-icon" className="text-xl" />
                                Google
                            </button>
                        </div>

                        <div className="mt-8 text-center text-sm">
                            <p className="mb-0 text-gray-600">
                                Already have an account?{" "}
                                <NavLink to="/auth/login" className="text-blue-600 font-semibold hover:underline">
                                    Sign In
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignInPage
