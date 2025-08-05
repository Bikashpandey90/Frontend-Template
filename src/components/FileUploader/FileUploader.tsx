"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, ImageIcon } from "lucide-react"

type FileUploaderProps = {
  fieldChange: (files: File[]) => void
  mediaUrl?: string
}
const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
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

  const removeFile = () => {
    setFile([])
    setFileUrl("")
    fieldChange([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 transition-colors">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.png,.jpeg,.jpg,.svg"
        onChange={handleInputChange}
        className="hidden"
      />

      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img
              src={fileUrl || "/placeholder.svg"}
              alt="uploaded image"
              width={400}
              height={300}
              className="h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top"
            />
          </div>
          <div className="flex justify-center gap-4 p-4">
            <Button type="button" variant="outline" size="sm" onClick={removeFile} className="gap-2 bg-transparent">
              <X className="h-4 w-4" />
              Remove
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={openFileDialog} className="gap-2 bg-transparent">
              <Upload className="h-4 w-4" />
              Replace
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 pb-4">Click or drag photo to replace</p>
        </>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
          className={`flex flex-col items-center justify-center p-7 h-80 lg:h-[400px] transition-colors ${isDragOver
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
            : "hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2 text-center">Drag photo here</h3>
          <p className="text-sm text-gray-500 mb-6 text-center">SVG, PNG, JPG</p>
          <Button
            type="button"
            variant="outline"
            className="gap-2 bg-transparent"
            onClick={(e) => {
              e.stopPropagation()
              openFileDialog()
            }}
          >
            <Upload className="h-4 w-4" />
            Select from computer
          </Button>
        </div>
      )}
    </div>
  )
}

export default FileUploader