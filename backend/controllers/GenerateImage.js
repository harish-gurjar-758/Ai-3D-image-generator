import * as dotenv from "dotenv";
import {createError} from "../error.js";
import {Configuration, OpenAiApi} from "openai";
import { response } from "express";

dotenv.config();

// Setup open ai api key
const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAiApi(Configuration);

// Controller to generate Image
export const generateImage = async(req, resizeBy, next)=>{
    try {
        const {prompt} = req.body;

        const response = await openai.createImage({
            prompt,
            n:1,
            size: "1024x1024",
            response_format: "b64_json",
        });

        const generateImage = response.data.data[0].b64_json;
        res.status(200).json({photo: generateImage});
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error.message || error.message
            )
        );
    }
};