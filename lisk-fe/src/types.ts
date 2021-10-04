export type AccountCredentials = {
    address: string,
    binaryAddress: string,
    passphrase: string,
    publicKey: string,
    privateKey: string
}

export type FaucetAccountState = { 
    address: string,
    amount: string,
    transaction: object,
    response: object
}

export type AccountAccountState = {
    address: string,
    account: object
}

export type HelloTransaction = {
    hello: string,
    fee: string,
    passphrase: string,
    transaction: object,
    response: object
}

export type HelloCounter = {
    helloCounter: number
}

export type LatestHello = {
    message: string,
    sender: string
}

export type HomeState = {
    counter: HelloCounter,
    latest: LatestHello
}