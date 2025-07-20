import { Layer, Network, Trainer } from "synaptic";

// Layers
const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

// Connections
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

// Network
const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

// Training with XOR data
const trainer = new Trainer(myNetwork);

trainer.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
], {
    rate: 0.2,
    iterations: 20000,
    error: 0.005
});

// Test
console.log("0 XOR 0:", myNetwork.activate([0, 0])[0].toFixed(2));
console.log("0 XOR 1:", myNetwork.activate([0, 1])[0].toFixed(2));
console.log("1 XOR 0:", myNetwork.activate([1, 0])[0].toFixed(2));
console.log("1 XOR 1:", myNetwork.activate([1, 1])[0].toFixed(2));
