import { transactions } from '@liskhq/lisk-client';
import React, { useState } from 'react';
import * as api from './api';
import { HelloTransaction } from '../types'
import { HELLO_MODULE_ID, HELLO_ASSET_ID } from './constant'

const Hello = () => {
    const [state, updateState] = useState<HelloTransaction>({
        hello: '',
        fee: '',
        passphrase: '',
        transaction: {},
        response: {}
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const client = await api.getClient();
        const tx = await client.transaction.create({
            moduleID: HELLO_MODULE_ID,
            assetID: HELLO_ASSET_ID,
            fee: BigInt(transactions.convertLSKToBeddows(state.fee)),
            asset: {
                helloString: state.hello,
            },
        }, state.passphrase);

        let res = {};
        try {
          res = await client.transaction.send(tx);
        } catch (error) {
          res = error;
        }
        updateState({
          transaction: client.transaction.toJSON(tx),
          response: res,
          hello: '',
          fee: '',
          passphrase: '',
        });
    };

    return (
        <div>
            <h2>Hello</h2>
            <p>Send a Hello transaction.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Hello message:
                        <input type="text" id="hello" name="hello" onChange={handleChange} value={state.hello} />
                </label>
                <label>
                    Fee:
                        <input type="text" id="fee" name="fee" onChange={handleChange} value={state.fee} />
                </label>
                <label>
                    Passphrase:
                        <input type="text" id="passphrase" name="passphrase" onChange={handleChange} value={state.passphrase} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <pre>Transaction: {JSON.stringify(state.transaction, null, 2)}</pre>
                <pre>Response: {JSON.stringify(state.response, null, 2)}</pre>
            </div>
        </div>
    );
}
export default Hello;