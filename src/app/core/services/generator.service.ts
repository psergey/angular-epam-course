import { Injectable } from "@angular/core";
import { genId } from "./gen-id.generator";

@Injectable()
export class GeneratorService {
    private _alphabet: string = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    generate(length: number): string {
        const chars: string[] = new Array(length);

        for(let i = 0; i < length; i++) {
            chars[i] = this._alphabet[Math.floor(Math.random() * this._alphabet.length)];
        }
        
        return ''.concat(...chars);
    }

    getNewID(): number {
        const result = genId.next();
        if (result.done)
            throw Error('Unable to generate new id');

        return result.value;
    }
}