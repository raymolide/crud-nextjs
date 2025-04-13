export default class Id {
    static generate(): string {
        return  Math.random().toString(36).substring(2, 15);  
    }
}