import { FC, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import SignInPage from "@/pages/login/login";
import HomePage from "@/pages/homepage/homepage";
import LoginPage from "@/pages/login/login";
import AuthLayout from "@/pages/auth/authlayout";
import SignInPage from "@/pages/signup/signinpage";
import ForgotPasswordPage from "@/pages/forgot-password/forgot";
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from "@/pages/sub-pages";



const Routing: FC = () => {
    const router = createBrowserRouter([
        {
            path: "",
            element: <HomePage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "explore",
                    element: <Explore />
                },
                {
                    path: "saved",
                    element: <Saved />

                },
                {
                    path: "all-users",
                    element: <AllUsers />
                },
                {
                    path: "create-post",
                    element: <CreatePost />
                }, {
                    path: "update-post/:id",
                    element: <EditPost />
                }, {
                    path: "posts/:id",
                    element: <PostDetails />

                }, {
                    path: "profile/:id",
                    element: <Profile />
                }, {
                    path: "update-profile",
                    element: <UpdateProfile />
                }



            ],
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <LoginPage />,
                    index: true
                }, {
                    path: "sign-in",
                    element: <SignInPage />
                }, {
                    path: "forgot-password",
                    element: <ForgotPasswordPage />
                }
            ]

        }

    ])

    const [queryClient] = useState(() => new QueryClient())
    return (<>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </>)
}

export default Routing