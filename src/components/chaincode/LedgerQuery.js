import { useState, useEffect } from 'react';
import { FabricNetworkConnection } from '../FabricNetworkConnection';

const LedgerQuery = () => {
    const [queryResult, setQueryResult] = useState(null);
    const { gateway } = FabricNetworkConnection();

    useEffect(() => {
        const queryLedger = async () => {
            try {
                // Check if the gateway is connected
                if (!gateway) {
                    console.log('Gateway is not connected');
                    return;
                }

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('mycontract');

                // Evaluate the specified transaction.
                const result = await contract.evaluateTransaction('queryAllCars');
                setQueryResult(result.toString());
            } catch (error) {
                console.error(`Failed to query ledger: ${error}`);
            }
        };

        queryLedger();
    }, [gateway]);

    return (
        <div>
            {queryResult ? `Query Result: ${queryResult}` : 'Querying...'}
        </div>
    );
};
