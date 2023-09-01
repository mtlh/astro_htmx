import { supabase } from "../../../functions/supabase";
import type standings from "../../../types/table";

export async function GET({}) {

    const { data } = await supabase.from("api_responses").select("footballstanding_response").eq("id", 1)
    
    let json_res: standings = {
        type: "",
        group: null,
        stage: "",
        table: []
    };
    
    if (data) {
        json_res = data[0].footballstanding_response.standings[0]
    }

    // `Hello, from ${json_res.toString()} I'm now an Edge Function!`
    const response = new Response(JSON.stringify(json_res));
    response.headers.append('Access-Control-Allow-Origin', '*');
    return response;
}