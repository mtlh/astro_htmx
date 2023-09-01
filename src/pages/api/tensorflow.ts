import * as tf from '@tensorflow/tfjs';

export async function GET({}) {

    var start = new Date().getTime() / 1000;

    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training. (y = 2x - 1)
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    // Train the model using the data.
    await model.fit(xs, ys, {epochs: 250});
    const test_res = model.predict(tf.tensor2d([20], [1, 1]))
    // @ts-ignore
    const value = test_res.dataSync()[0]

    var end = new Date().getTime() / 1000;

    const response = new Response(JSON.stringify({val: value, time: (end-start)*1000}));
    response.headers.append('Access-Control-Allow-Origin', '*');
    return response;
}