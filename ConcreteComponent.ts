import { Component } from "./Component";

export class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}