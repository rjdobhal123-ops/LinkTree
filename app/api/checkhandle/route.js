import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";



export async function POST(request){
    try{
        const {handle} =await request.json();
        console.log(handle)

        const client = await clientPromise;
        const db = client.db("Linktree");
        const collection = db.collection("links");

        const item = await collection.findOne({ handle: handle });
         console.log("Database result:", item);

         if (!item) {
            return NextResponse.json({
                success: false,
                message: "Handle does not exist!"
            });
        }

         return NextResponse.json({
            success: true,
            message: "Handle found!"
        });
        

    }catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 500 });
}
}