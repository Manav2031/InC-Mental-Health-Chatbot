const tf=require('@tensorflow/tfjs')
const path = require('path');
const fetch = require('node-fetch'); // Import the polyfill

// Monkey-patch TensorFlow.js to use node-fetch
tf.util.fetch = fetch;

async function loadModel() {
    const modelPath = path.join(__dirname, 'server/tfjs_model');
    console.log(modelPath)
    const model = await tf.loadLayersModel(`file://${modelPath}/model.json`);
    return model;
}

// Call the loadModel function
loadModel()
    .then(model => {
        console.log('Model loaded successfully:', model);
        // Use the loaded model for inference or other tasks
    })
    .catch(error => {
        console.error('Error loading the model:', error);
    });

  
