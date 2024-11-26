"use client"
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

const LoginDialog = () => {
    const [hiddenInput, setHiddenInput] = React.useState<boolean>(false);
    const form = useForm()
    const onSubmit = () => {

    }


    return (
        <div className="grid grid-cols-12 p-2">
            <div className="col-span-8 h-full border-[#3d3d3d] border-r-[1px] pr-8">
                <h3 className="text-center text-3xl text-primary-foreground font-black mb-8">Đăng nhập / Đăng ký</h3>
                <Form {...form}>
                    <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="sdt"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập số điện thoại" {...field}
                                               className="border-none bg-[#232323] !placeholder-[#91a0b5]"

                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="otp"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Nhập mã số" {...field}
                                                       className="border-none bg-[#232323] !placeholder-[#91a0b5]"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <button className="bg-[#3d3d3d] px-8" disabled={true}>Gửi OTP</button>
                        </div>

                        {
                            hiddenInput ? (
                                <FormField
                                    control={form.control}
                                    name="code"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Nhập mã của bạn (Không bắt buộc)" {...field}
                                                       className="border-none bg-[#232323] !placeholder-[#91a0b5]"

                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            ) : (
                                <p className="text-center py-4 text-[#4f4f4f] hover:text-primary-foreground cursor-pointer"
                                   onClick={() => setHiddenInput(true)}>Bạn
                                    có mã giới thiệu/kích hoạt ?</p>

                            )
                        }

                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms"/>
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#a0a0a0]"
                            >
                                <span>
                                    Tôi đã đồng ý với các <Link href=""
                                                                className="text-[#0078e6] underline">Điều khoản sử dụng</Link> và <Link
                                    href="" className="text-[#0078e6] underline">Chính sách bảo mật</Link> của MyTV
                                </span>
                            </label>
                        </div>
                        <button disabled={true} className="bg-[#3d3d3d] py-3">
                            Đăng nhập
                        </button>
                        <div className="relative">
                            <hr className="absolute top-1/2 w-full border-[#3d3d3d]"/>
                            <p className="bg-background px-2 w-max mx-auto relative text-[#3d3d3d]">Hoặc</p>
                        </div>
                        <button disabled={true} className="bg-[#3d3d3d] py-3 flex items-center justify-center gap-4">
                            <Image src="images/gmail.svg" alt="" width={24} height={24}/>
                            Sử dụng Gmail để đăng nhập
                        </button>
                    </form>

                </Form>
            </div>
            <div className="col-span-4 px-4 flex flex-col gap-4">
                <p className="text-center text-primary-foreground">Sử dụng Smartphone để đăng nhập nhanh</p>
                <p className="text-center">Làm mới sau 60</p>
                <Image src="/images/qrcode.webp" alt="" layout="responsive" width={100}
                       height={50}/>
            </div>
        </div>
    );
};

export default LoginDialog;