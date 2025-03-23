"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Edit2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountNav } from "@/components/account-nav"

export default function AccountPage() {
  const [user] = useState({
    name: "Dennis Opoola",
    email: "dennisopoola@gmail.com",
    phone: "+370 0 000 0000",
    address: "123 Main St, Apt 4B, New York, NY 10001",
    joinDate: "January 2023",
    profileImage: "/placeholder.svg?height=100&width=100",
  })

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-12">
        <div className="container grid gap-12 px-4 md:grid-cols-[240px_1fr] md:px-6 lg:grid-cols-[240px_1fr]">
          <AccountNav />
          <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">Account</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
              </div>
            </div>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your profile information and manage your account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full">
                          {user.profileImage ? (
                            <Image
                              src={user.profileImage || "/placeholder.svg"}
                              alt="Profile"
                              className="object-cover"
                              fill
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                              <User className="h-12 w-12 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <button
                          className="absolute bottom-0 right-0 rounded-full bg-teal-600 p-1 text-white shadow-sm hover:bg-teal-700"
                          aria-label="Change profile picture"
                        >
                          <Camera className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Member since {user.joinDate}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</p>
                            <button className="text-sm text-teal-600 hover:underline">
                              <Edit2 className="h-3 w-3" />
                            </button>
                          </div>
                          <p>{user.name}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                            <button className="text-sm text-teal-600 hover:underline">
                              <Edit2 className="h-3 w-3" />
                            </button>
                          </div>
                          <p>{user.email}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                            <button className="text-sm text-teal-600 hover:underline">
                              <Edit2 className="h-3 w-3" />
                            </button>
                          </div>
                          <p>{user.phone}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</p>
                            <button className="text-sm text-teal-600 hover:underline">
                              <Edit2 className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="break-words">{user.address}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your password and security settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Password</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated 3 months ago</p>
                      </div>
                      <Button variant="outline">Change password</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Two-factor authentication</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Manage your preferences and personalization settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Language</h3>
                      <div className="grid gap-2 sm:grid-cols-3">
                        <Button variant="outline" className="justify-start">
                          English (US)
                        </Button>
                        <Button variant="ghost" className="justify-start">
                          Spanish
                        </Button>
                        <Button variant="ghost" className="justify-start">
                          French
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium">Currency</h3>
                      <div className="grid gap-2 sm:grid-cols-3">
                        <Button variant="outline" className="justify-start">
                          USD ($)
                        </Button>
                        <Button variant="ghost" className="justify-start">
                          EUR (€)
                        </Button>
                        <Button variant="ghost" className="justify-start">
                          GBP (£)
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Email Notifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4>Order updates</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive updates about your orders
                            </p>
                          </div>
                          <Button variant="outline">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4>Promotions and deals</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Get notified about sales and special offers
                            </p>
                          </div>
                          <Button variant="outline">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4>Account activity</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive alerts about account activity
                            </p>
                          </div>
                          <Button variant="outline">Enabled</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

