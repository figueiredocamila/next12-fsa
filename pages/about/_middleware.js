import { NextResponse } from "next/server";

export default function middleware(req) {
    console.log(req)
    if(req.cookies['cliente']){
        return NextResponse.rewrite('/about/version-b')
    }

    return NextResponse.rewrite('/about')
}