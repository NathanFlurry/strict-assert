export default {
    assert(condition: boolean, message: string | null = null) {
        if (!condition) throw new Error(message ? `Failed assertion: ${message}` : "Failed assertion.");
    },
    
    boolean(value: boolean) {
        this.assert(typeof value === "boolean", `${value} is not a boolean.`)
    },
    
    string(value: string) {
        this.assert(typeof value === "string", `${value} is not a string.`)
    },
    
    float(value: number) {
        this.assert(typeof value === "number" && !isNaN(value) && Number.isFinite(value), `${value} is not a valid float.`)
    },
    
    int(value: number) {
        this.assert(typeof value === "number" && !isNaN(value) && Number.isFinite(value) && Number.isSafeInteger(value), `${value} is not a valid integer.`)
    },
    
    uint(value: number) {
        this.assert(typeof value === "number" && !isNaN(value) && Number.isFinite(value) && Number.isSafeInteger(value) && value >= 0, `${value} is not a valid unsigned integer.`)
    },
    
    array(value: any[], length: number | null = null) {
        this.assert(Array.isArray(value) && (length != null ? value.length === length : true), `${value} is not a valid array.`);
    },
};
