import * as dotenv from "dotenv";
import {createError} from "../error.js";
import {Configuration, OpenAiApi} from "openai";

dotenv.config();

// Setup open ai api key
const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAiApi(Configuration);

// Controller to generate Image
export const generateImage = async(req, resizeBy, next)=>{
    
}