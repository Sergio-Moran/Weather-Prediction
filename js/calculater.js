const weatherPerceptron = (weights_one, weights_two) => {
  const trainingData = [
    { inputs: [20, 60], output: 1 }, // Tiempo de entrenamiento: 60 minutos
    { inputs: [25, 70], output: 0 }, 
    { inputs: [15, 50], output: 1 }, 
    { inputs: [5, 55], output: 1 },
    { inputs: [9, 50], output: 1 },
    { inputs: [21, 65], output: 0 },
    { inputs: [11, 54], output: 1 },
    { inputs: [12, 56], output: 1 },
    { inputs: [13, 55], output: 1 },
    { inputs: [30, 90], output: 0 },
    { inputs: [26, 70], output: 0 },
    { inputs: [26, 72], output: 0 },
    { inputs: [28, 76], output: 0 },
    { inputs: [31, 82], output: 0 },
    { inputs: [29, 78], output: 0 },
    { inputs: [25, 73], output: 0 },
    { inputs: [12, 55], output: 1 },
    { inputs: [13, 54], output: 1 },
    { inputs: [17, 60], output: 1 },
    { inputs: [18, 59], output: 1 },
    { inputs: [21, 60], output: 1 },
    { inputs: [24, 61], output: 0 },
    { inputs: [18, 64], output: 0 },
    { inputs: [19, 58], output: 1 },
    { inputs: [18, 60], output: 0 },
    { inputs: [20, 61], output: 0 },
    { inputs: [14, 50], output: 1 },
    { inputs: [10, 55], output: 1 },
    { inputs: [20, 59], output: 1 },
    { inputs: [10, 60], output: 1 },
    { inputs: [10, 63], output: 0 },
    { inputs: [23, 61], output: 0 },
    { inputs: [10, 55], output: 1 },
    { inputs: [20, 60], output: 1 }, 
    { inputs: [25, 70], output: 0 }, 
    { inputs: [15, 50], output: 1 }, 
    { inputs: [23, 65], output: 0 },
    { inputs: [19, 55], output: 1 },
    { inputs: [22, 50], output: 0 },
    { inputs: [18, 70], output: 1 },
    { inputs: [27, 75], output: 0 },
    { inputs: [20, 45], output: 1 },
    { inputs: [24, 80], output: 0 },
    { inputs: [16, 55], output: 1 },
    { inputs: [21, 50], output: 0 },
    { inputs: [17, 60], output: 1 },
    { inputs: [28, 70], output: 0 },
    { inputs: [22, 50], output: 0 },
    { inputs: [19, 65], output: 1 },
    { inputs: [26, 75], output: 0 },
    { inputs: [20, 60], output: 1 },
    { inputs: [23, 50], output: 0 },
    { inputs: [18, 70], output: 1 },
    { inputs: [29, 80], output: 0 },
    { inputs: [21, 45], output: 1 },
    { inputs: [25, 60], output: 0 },
    { inputs: [17, 55], output: 1 },
    { inputs: [22, 50], output: 0 },
    { inputs: [16, 60], output: 1 },
    { inputs: [30, 70], output: 0 },
    { inputs: [20, 50], output: 1 },
    { inputs: [24, 75], output: 0 },
    { inputs: [18, 55], output: 1 },
    { inputs: [21, 50], output: 0 },
    { inputs: [18, 68], output: 1 }, 
    { inputs: [23, 73], output: 0 }, 
    { inputs: [19, 55], output: 1 }, 
    { inputs: [26, 85], output: 0 },
    { inputs: [17, 63], output: 1 },
    { inputs: [21, 50], output: 1 },
    { inputs: [22, 80], output: 0 },
    { inputs: [20, 45], output: 1 },
    { inputs: [25, 75], output: 0 },
    { inputs: [16, 57], output: 1 },
    { inputs: [22, 48], output: 1 },
    { inputs: [24, 82], output: 0 },
    { inputs: [19, 70], output: 1 },
    { inputs: [27, 77], output: 0 },
    { inputs: [21, 50], output: 1 },
    { inputs: [23, 90], output: 0 },
    { inputs: [18, 61], output: 1 },
    { inputs: [28, 80], output: 0 },
    { inputs: [20, 52], output: 1 },
    { inputs: [24, 76], output: 0 },
    { inputs: [17, 67], output: 1 },
    { inputs: [22, 50], output: 1 },
    { inputs: [19, 75], output: 0 },
    { inputs: [30, 85], output: 0 },
    { inputs: [21, 47], output: 1 },
    { inputs: [25, 72], output: 0 },
    { inputs: [16, 60], output: 1 },
    { inputs: [23, 50], output: 1 },
    { inputs: [18, 73], output: 1 },
    { inputs: [29, 78], output: 0 },
    { inputs: [20, 54], output: 1 },
    { inputs: [24, 80], output: 0 },
    { inputs: [17, 58], output: 1 },
    { inputs: [21, 50], output: 1 },
    { inputs: [24, 80], output: 0 },
    { inputs: [17, 58], output: 1 },
  ];
  
  class Perceptron {
    constructor(numInputs) {
      this.weights = new Array(numInputs);
      for (let i = 0; i < numInputs; i++) {
        this.weights[i] = Math.random() * 2 - 1;
      }
      this.bias = Math.random() * 2 - 1;
    }
  
    feedforward(inputs) {
      let sum = 0;
      for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * this.weights[i];
      }
      sum += this.bias;
      return this.activate(sum);
    }
  
    activate(sum) {
      return sum >= 0 ? 1 : 0;
    }
  
    train(inputs, target) {
      const output = this.feedforward(inputs);
      const error = target - output;
      for (let i = 0; i < inputs.length; i++) {
        this.weights[i] += error * inputs[i];
      }
      this.bias += error;
    }
  }
  const perceptron = new Perceptron(2);
  let maxIterations = Number(trainingData.length * 100);
  let desiredAccuracy = 0.95;
  let currentAccuracy = 0;
  let currentIteration = 0;
  
  while (currentAccuracy < desiredAccuracy && currentIteration < maxIterations) {
    currentIteration++;
    let correctCount = 0;
    for (const data of trainingData) {
      const output = perceptron.feedforward(data.inputs);
      const error = data.output - output;
      perceptron.train(data.inputs, data.output);
      if (error === 0) correctCount++;
    }
    currentAccuracy = correctCount / trainingData.length;
  }

  const prediction = perceptron.feedforward([weights_one, weights_two]);
  if (prediction === 1) {
    console.log("El clima para el entrenamiento es bueno.");
    return prediction;
  } else {
    console.log("El clima para el entrenamiento es malo.");
    return prediction;
  }
  
};

const perceptron = (weight_one, weight_two)=>{

   let weights = [0.5, 1.5];
   let bias = Math.random();
   
   const learningRate = 0.1;
 
   const correctOutputs = [false, false, false, true];
   
   let outputs = [];
   while (outputs.toString() !== correctOutputs.toString()) {
     outputs = [];
     
     for (let i = 0; i <= 1; i++) {
       for (let j = 0; j <= 1; j++) {
         const input = [i, j];
         const weightedSum = input[0] * weights[0] + input[1] * weights[1] + bias;
         const output = weightedSum >= 0 ? true : false;
         outputs.push(output);
 
         const error = correctOutputs[i * 2 + j] - output;
         if (error !== 0) {
           weights[0] += learningRate * error * input[0];
           weights[1] += learningRate * error * input[1];
           bias += learningRate * error;
         }
       }
     }
   }
 
   const weightedSum = weight_one * weights[0] + weight_two * weights[1] + bias;
   const output = weightedSum >= 0 ? true : false;
   return output;
}

export { weatherPerceptron, perceptron };
