var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export function fetchScheduled(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://medium.com/${slug}/stories/scheduled`;
        const headers = {
            Accept: 'application/json',
        };
        try {
            const response = yield axios.get(url, { headers });
            const cleanedText = response.data.replace('])}while(1);</x>', ''); // Remove the prefix
            const data = JSON.parse(cleanedText); // Parse the cleaned text into a JSON object
            return data; // Return the fetched data
        }
        catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    });
}
