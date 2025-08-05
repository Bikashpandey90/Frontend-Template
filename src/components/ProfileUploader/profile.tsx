"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Upload } from "lucide-react"

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void
  mediaUrl?: string
}

export const ProfileUploader = ({ fieldChange, mediaUrl }: ProfileUploaderProps) => {
  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl || "")
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Convert file to URL utility function
  const convertFileToUrl = (file: File): string => {
    return URL.createObjectURL(file)
  }

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const selectedFile = files[0]
      const fileArray = [selectedFile]
      setFile(fileArray)
      fieldChange(fileArray)
      setFileUrl(convertFileToUrl(selectedFile))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileChange(e.dataTransfer.files)
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const removeFile = () => {
    setFile([])
    setFileUrl(mediaUrl || "")
    fieldChange([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.png,.jpeg,.jpg"
        onChange={handleInputChange}
        className="hidden"
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className={`relative cursor-pointer transition-all duration-200 ${isDragOver ? "scale-105" : "hover:scale-105"
          }`}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
          <img
            src={fileUrl || "/placeholder.svg?height=96&width=96&text=Profile"}
            alt="Profile"
            width={96}
            height={96}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-2 border-background shadow-lg">
          <Camera className="h-3 w-3 text-primary-foreground" />
        </div>

        {isDragOver && (
          <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
            <Upload className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-primary text-sm font-medium cursor-pointer" onClick={openFileDialog}>
          Change profile photo
        </p>

        {fileUrl && fileUrl !== mediaUrl && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="text-xs text-muted-foreground hover:text-destructive"
          >
            Remove photo
          </Button>
        )}

        <p className="text-xs text-muted-foreground text-center">
          Drag & drop or click to upload
          <br />
          PNG, JPG up to 5MB
        </p>
      </div>
    </div>
  )
}

export default ProfileUploader
