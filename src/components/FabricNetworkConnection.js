import { useState, useEffect } from 'react';
import { Gateway, Wallets } from 'fabric-network';
import fs from 'fs';
import path from 'path';

export const FabricNetworkConnection = () => {
    const [gateway, setGateway] = useState(null);

    useEffect(() => {
        const connectToNetwork = async () => {
            try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', 'Org1MSP', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'Org1MSP');
                const wallet = await Wallets.newFileSystemWallet(walletPath);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                    console.log('An identity for the user "appUser" does not exist in the wallet');
                    console.log('Run the registerUser.js application before retrying');
                    return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                setGateway(gateway);
            } catch (error) {
                console.error(`Failed to connect to network: ${error}`);
            }
        };

        connectToNetwork();
    }, []);

    return (
        <div>
            {gateway ? 'Connected to Hyperledger Fabric network' : 'Connecting...'}
        </div>
    );
};
