import type { APIRoute } from 'astro';
import { supabase } from '../../../functions/supabase';
import type { fixtures } from "../../../types/fixtures";

export const GET: APIRoute = async ({}) => {

    const { data } = await supabase.from("api_responses").select("footballmatch_response").eq("id", 1)
    
    let json_res: fixtures = {
        filters: {
            season: ''
        },
        matches: []
    };
    if (data) {
        json_res = data[0].footballmatch_response
    }

    let response = new Response(JSON.stringify(json_res))
    response.headers.append('Access-Control-Allow-Origin', '*');
    return response;
}