"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"
import FileUploader  from "@/components/FileUploader/fileuploader"
import { Loader2 } from "lucide-react"

// Mock validation schema
const PostValidation = z.object({
  caption: z.string().min(5, "Caption must be at least 5 characters").max(2200, "Caption is too long"),
  file: z.any(),
  location: z.string().min(1, "Location is required").max(1000, "Location is too long"),
  tags: z.string(),
})

// Mock post type
type MockPost = {
  $id: string
  caption: string
  imageUrl: string
  imageId: string
  location: string
  tags: string[]
}

type PostFormProps = {
  post?: MockPost
  action: "Create" | "Update"
}

const PostForm = ({ post, action }: PostFormProps) => {
  // const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data
  const user = {
    id: "user123",
    name: "John Doe",
    email: "john@example.com",
  }

  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post.caption : "",
      file: [],
      location: post ? post.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  })

  // Mock submit handler
  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      if (post && action === "Update") {
        // Mock update logic
        console.log("Updating post:", { ...value, postId: post.$id })
        // toast({
        //   title: "Post updated successfully!",
        //   description: "Your post has been updated.",
        // })
      } else {
        // Mock create logic
        console.log("Creating post:", { ...value, userId: user.id })
        // toast({
        //   title: "Post created successfully!",
        //   description: "Your new post has been published.",
        // })
      }

      // Mock navigation - in a real app you'd use router.push()
      console.log("Navigating to posts page...")
    } catch (error) {
      // toast({
      //   title: `${action} post failed`,
      //   description: "Please try again.",
      //   variant: "destructive",
      // })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    // Mock navigation back - in a real app you'd use router.back()
    console.log("Navigating back...")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-9 w-full max-w-5xl mx-auto p-6">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[120px] resize-none"
                  placeholder="Write a caption for your post..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Add Photos</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl={post?.imageUrl ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Add Location</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter location..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Add Tags (separated by comma " , ")</FormLabel>
              <FormControl>
                <Input placeholder="Art, Expression, Learn" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {action} Post
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PostForm
