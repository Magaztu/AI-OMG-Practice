// synaptic.d.ts type
declare module 'synaptic' {
    export class Layer {
        constructor(size: number);
        project(layer: Layer, type?: any, weights?: any): any;
        activate(input?: number[]): number[] | number;
        propagate(rate: number, target: number[]): void;
    }

    export class Network {
        constructor(options: { input: Layer; hidden: Layer[]; output: Layer });
        activate(input: number[]): number[];
        propagate(rate: number, target: number[]): void;
        toJSON(): any;
        static fromJSON(json: any): Network;
    }

    export class Trainer {
        constructor(network: Network);
        train(set: any[], options?: any): any;
    }
}
