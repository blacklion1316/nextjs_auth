import NextAuth from "next-auth";
import options from './options'
const handler = (req, res) => NextAuth(req, res, options);

export function GET(req, res) {
    return handler(req, res, options);
}

export function POST(req, res) {
    return handler(req, res, options);
}