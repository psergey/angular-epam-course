import { InjectionToken, inject } from "@angular/core";
import { GeneratorService } from "./generator.service";

// export function generatorFactory(length: number)  {
//     return (generator: GeneratorService): string => generator.generate(length);
// }

export function generatorFactory(length: number)  {
    return (): string => {
        const generator: GeneratorService = inject(GeneratorService);
        return generator.generate(length);
    } 
}

export const RANDON_GENERATOR = new InjectionToken<string>('Random sequence generation');