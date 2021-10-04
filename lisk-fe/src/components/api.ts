import { apiClient } from '@liskhq/lisk-client';
import { RPC_ENDPOINT } from './constant'
import { LatestHello, HelloCounter } from '../types'

let clientCache: any;

export const getClient = async () => {
    if (!clientCache) {
        clientCache = await apiClient.createWSClient(RPC_ENDPOINT);
    }
    return clientCache;
};


export const fetchHelloCounter = async (): Promise<HelloCounter> => {
    const client = await getClient();
    let aoh = client.invoke('hello:amountOfHellos');
    console.log('AOH\n',aoh)
    return aoh;
};

export const fetchLatestHello = async (): Promise<LatestHello> => {
    const client = await getClient();
    let lh = client.invoke('helloAPI:latestHello');
    console.log('LH\n',lh)
    return lh;
};
