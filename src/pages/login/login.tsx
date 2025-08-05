"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className="min-h-screen bg-gray-50 flex flex-wrap">
            <div className="hidden lg:block lg:w-1/2">
                <div className="flex items-center flex-col h-full justify-center ">
                    <img
                        src="https://wowdash.pixcelsthemes.com/wowdash-bootstrap/WowDash/wowdash/assets/images/auth/auth-img.png"
                        alt=" ECA Nepal Logo"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 py-8 px-6 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    <div className="mb-8">
                        <NavLink to="/index" className="block mb-10 max-w-72">
                            <img src="/placeholder.svg?height=40&width=168&text=Logo" alt="ECA Nepal Logo" className="h-10" />
                        </NavLink>
                        <h4 className="mb-3 text-2xl font-semibold text-gray-900">Sign In to your Account</h4>
                        <p className="mb-8 text-gray-600 text-lg">Welcome back! please enter your detail</p>
                    </div>

                    <form>
                        <div className="relative mb-4">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon icon="mage:email" className="text-xl" />
                            </div>
                            <input
                                type="email"
                                className="w-full h-14 bg-gray-50 rounded-xl pl-12 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Email"
                            />
                        </div>

                        <div className="relative mb-5">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon icon="solar:lock-password-outline" className="text-xl" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full h-14 bg-gray-50 rounded-xl pl-12 pr-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="your-password"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <Icon icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"} className="text-xl" />
                            </button>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex items-center">
                                    <input
                                        className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mr-2"
                                        type="checkbox"
                                        id="remember"
                                    />
                                    <label className="text-sm text-gray-600" htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>
                                <NavLink to="#" className="text-blue-600 font-medium text-sm hover:underline">
                                    Forgot Password?
                                </NavLink>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl text-sm transition-colors mt-8"
                        >
                            Sign In
                        </button>

                        <div className="mt-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-gray-50 px-4 text-gray-500">Or sign in with</span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <button
                                type="button"
                                className="flex-1 font-semibold text-gray-700 py-4 px-6 border border-gray-200 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors"
                            >
                                <Icon icon="ic:baseline-facebook" className="text-blue-600 text-xl" />
                                Facebook
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
                                Don't have an account?{" "}
                                <NavLink to="/auth/sign-in" className="text-blue-600 font-semibold hover:underline">
                                    Sign Up
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LogInPage
