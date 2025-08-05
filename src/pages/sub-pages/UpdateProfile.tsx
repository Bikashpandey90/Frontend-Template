"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import ProfileUploader from "@/components/ProfileUploader/profile"
import { Edit, Loader2 } from "lucide-react"

// Mock validation schema
const ProfileValidation = z.object({
  file: z.any(),
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  username: z.string().min(2, "Username must be at least 2 characters").max(50, "Username is too long"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(2200, "Bio is too long"),
})

// Mock user type
type MockUser = {
  $id: string
  name: string
  username: string
  email: string
  bio: string
  imageUrl: string
  imageId: string
}

type UpdateProfileProps = {
  userId?: string
}

const UpdateProfile = ({ userId = "user123" }: UpdateProfileProps) => {
  // const { toast } = useToast()
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)

  // Mock current user data
  const currentUser: MockUser = {
    $id: userId,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    bio: "I'm a passionate developer who loves creating amazing user experiences. Always learning and exploring new technologies.",
    imageUrl: "/placeholder.svg?height=200&width=200&text=Profile+Photo",
    imageId: "img123",
  }

  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      file: [],
      name: currentUser.name,
      username: currentUser.username,
      email: currentUser.email,
      bio: currentUser.bio || "",
    },
  })

  // Mock update handler
  const handleUpdate = async (value: z.infer<typeof ProfileValidation>) => {
    setIsLoadingUpdate(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock update logic
      console.log("Updating user profile:", {
        userId: currentUser.$id,
        name: value.name,
        bio: value.bio,
        file: value.file,
        imageUrl: currentUser.imageUrl,
        imageId: currentUser.imageId,
      })

      // toast({
      //   title: "Profile updated successfully!",
      //   description: "Your profile has been updated.",
      // })

      // Mock navigation - in a real app you'd use router.push()
      console.log(`Navigating to /profile/${userId}`)
    } catch (error) {
      // toast({
      //   title: "Update failed",
      //   description: "Please try again.",
      //   variant: "destructive",
      // })
    } finally {
      setIsLoadingUpdate(false)
    }
  }

  const handleCancel = () => {
    // Mock navigation back - in a real app you'd use router.back()
    console.log("Navigating back...")
  }

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex flex-1">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-start gap-3 justify-start w-full mb-8">
          <Edit className="h-9 w-9 text-primary" />
          <h2 className="text-3xl font-bold md:text-4xl text-left w-full">Edit Profile</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdate)} className="flex flex-col gap-7 w-full mt-4">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormControl>
                    <ProfileUploader fieldChange={field.onChange} mediaUrl={currentUser.imageUrl} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter your username" {...field} disabled className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-muted-foreground">Username cannot be changed</p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} disabled className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-muted-foreground">Email cannot be changed</p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[120px] resize-none"
                      placeholder="Tell us about yourself..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center justify-end">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoadingUpdate}>
                {isLoadingUpdate && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Update Profile
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default UpdateProfile
