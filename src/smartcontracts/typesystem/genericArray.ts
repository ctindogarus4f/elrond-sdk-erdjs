import { guardLength, guardTrue } from "../../utils";
import { CollectionOfTypedValues } from "./collections";
import { Type, TypedValue } from "./types";

// A type for known-length arrays. E.g. "array20", "array32", "array64" etc.
export class ArrayVecType extends Type {
    readonly length: number;

    constructor(length: number, typeParameter: Type) {
        super("Array", [typeParameter]);

        guardTrue(length > 0, "array length > 0");
        this.length = length;
    }
}

export class ArrayVec extends TypedValue {
    private readonly backingCollection: CollectionOfTypedValues;

    constructor(type: ArrayVecType, items: TypedValue[]) {
        super(type);
        guardLength(items, type.length);
        this.backingCollection = new CollectionOfTypedValues(items);
    }

    getLength(): number {
        return this.backingCollection.getLength();
    }

    getItems(): ReadonlyArray<TypedValue> {
        return this.backingCollection.getItems();
    }

    valueOf(): any[] {
        return this.backingCollection.valueOf();
    }

    equals(other: ArrayVec): boolean {
        return this.backingCollection.equals(other.backingCollection);
    }
}
