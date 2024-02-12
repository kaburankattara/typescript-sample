class SampleObj {

    static createInstance(name: string) {
        return new SampleObj(name);
    }

    private name: string

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
};

export { SampleObj };