const etherAddress = {
    '0x534e5f4d41494e': '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    '0x534e5f474f45524c49': '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7'
};

const gameTokenAddress = {
    '0x534e5f4d41494e': '',
    '0x534e5f474f45524c49': '0x076d616a4566c5cd5d46fe83cf7511f62f868d15e55b60d2ea56103239db2337'
};

const gameTokenFaucetAddress = {
    '0x534e5f4d41494e': '',
    '0x534e5f474f45524c49': '0x007f53eaefff754aad4b12b1316e33521cf20f79361f3934c87b98b575521d1f'
}

const gameRoomFactoryAddress = {
    '0x534e5f4d41494e': '',
    '0x534e5f474f45524c49': '0x03c26e12ddf74993db24a32956180b01de4753b1896751c0db70971c62732153'
};

const networkNames = {
    '0x534e5f4d41494e': 'StarkNet Mainnet',
    '0x534e5f474f45524c49': 'StarkNet Goerli Testnet'
};

const serverNetworkTag = {
    '0x534e5f4d41494e': 'starknet',
    '0x534e5f474f45524c49': 'starknet_goerli'
};

const supportedChainIds = ['0x534e5f474f45524c49'];
const defaultChainId = '0x534e5f474f45524c49';

function isTestnet(chainId) {
    return chainId != '0x534e5f4d41494e';
}

export {
    etherAddress,
    gameTokenAddress,
    gameTokenFaucetAddress,
    networkNames,
    serverNetworkTag,
    gameRoomFactoryAddress,
    supportedChainIds,
    defaultChainId,
    isTestnet
}