import { useState } from 'react';
import { FabricNetworkConnection } from '../FabricNetworkConnection';

export const LedgerStore = () => {
    const [storeResult, setStoreResult] = useState(null);
    const [formData, setFormData] = useState('');
    const { gateway } = FabricNetworkConnection();

    const storeData = async (data) => {
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

            // Submit the specified transaction.
            // Replace 'storeData' with your actual transaction function name
            // and make sure the arguments match your transaction function's parameters
            await contract.submitTransaction('storeData', data);
            setStoreResult('Data stored successfully');
        } catch (error) {
            console.error(`Failed to store data: ${error}`);
            setStoreResult('Failed to store data');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        storeData(formData);
    };

    const handleChange = (event) => {
        setFormData(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Data:
                    <input type="text" value={formData} onChange={handleChange} />
                </label>
                <input type="submit" value="Store Data" />
            </form>
            {storeResult}
        </div>
    );
};
