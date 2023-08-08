import connect from "@/utilities/db";
import { NextResponse } from "next/server";
import Post from "../../../../models/Post";
export const GET=async(request,{params})=>{
    const {id}=params;
    try {
        await connect()
        const posts=await Post.findById(id);
        return new NextResponse(JSON.stringify(posts),{status:200})
    } catch (err) {
        console.log(err.message);
        return new NextResponse("Database Error",{status:500})
    }
};


export const DELETE=async(request,{params})=>{
    const {id}=params;
    try {
        await connect()
        const posts=await Post.findByIdAndDelete(id);
        return new NextResponse("Post Deleted",{status:200})
    } catch (err) {
        console.log(err.message);
        return new NextResponse("Database Error",{status:500})
    }
};