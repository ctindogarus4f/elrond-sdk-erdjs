import { Balance } from "../../balance";
import { IProvider } from "../../interface";
import { TestWallet } from "../../testutils";
import { ContractLogger } from "./contractLogger";
import { SendContext } from "./sendContext";

export class ChainSendContext {
    readonly context: SendContext;

    constructor(context: SendContext) {
        this.context = context;
    }

    sender(caller: TestWallet): this {
        this.context.sender(caller);
        return this;
    }

    gas(gas: number): this {
        this.context.gas(gas);
        return this;
    }

    autoGas(baseGas: number): this {
        this.context.autoGas(baseGas);
        return this;
    }

    value(value: Balance): this {
        this.context.value(value);
        return this;
    }

    logger(logger: ContractLogger | null): this {
        this.context.logger(logger);
        return this;
    }

    getProvider(): IProvider {
        return this.context.getProvider();
    }
}
