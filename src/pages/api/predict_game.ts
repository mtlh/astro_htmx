import * as tf from '@tensorflow/tfjs';
import type { APIRoute } from 'astro';
import { supabase } from '../../../functions/supabase';
import type { fixtures } from "../../../types/fixtures";

export const GET: APIRoute = async ({ request }) => {

    const team1 = new URL(request.url).searchParams.get("team1")
    const team2 = new URL(request.url).searchParams.get("team2")

    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    // Generate some synthetic data for training.
    const xs = tf.tensor1d([0, 0, 0, 0, 0, 0]);
    const ys = tf.tensor1d([-3, 0, 2, 5, 9, 10]);
    // Train the model using the data.
    await model.fit(xs, ys, {epochs: 50});
    // @ts-ignore
    let score1 = parseInt(model.predict(tf.tensor([0.7], [1, 1])).dataSync()[0])
    // @ts-ignore
    let score2 = parseInt(model.predict(tf.tensor([0.5], [1, 1])).dataSync()[0])

    if (score1 < 0) {
        score1 = 0;
    }
    if (score2 < 0) {
        score2 = 0;
    }
    
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
    
    let response = new Response(JSON.stringify({notfound: true}))
    json_res.matches.forEach(match => {
        if (team1?.toUpperCase() == match.homeTeam.tla.toUpperCase() && team2?.toUpperCase() == match.awayTeam.tla.toUpperCase()) {
            response = new Response(JSON.stringify({match, predictedValue: `${score1}:${score2}`}));
        }
    });

    response.headers.append('Access-Control-Allow-Origin', '*');
    return response;
}