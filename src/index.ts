import { Fluence } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';
import TronWebJS from 'tronweb'
import { settings } from '../settings';
import { registerTrx } from './generated/Trx';
import { Trx } from './components/Trx';
import { registerTronWeb } from './generated/TronWeb';
import { TronWeb } from './components/TronWeb';
import { registerTransactionBuilder } from './generated/TransactionBuilder';
import { TransactionBuilder } from './components/TransactionBuilder';
import { registerSideChain } from './generated/SideChain';
import { SideChain } from './components/SideChain';
import { registerEvent } from './generated/Event';
import { Event } from './components/Event';

async function main() {
  await Fluence.start({
    connectTo: settings.connectTo.peerId === '' && settings.connectTo.multiaddr === '' ? krasnodar[0] : settings.connectTo
  });

  const fullNode = settings.tron.fullNode;
  const solidityNode = settings.tron.solidityNode;
  const eventServer = settings.tron.eventServer;

  // setting your private key here isn't recommended
  // please use a secure way of storing your private key
  // you can pass your private key as an argument to functions where its needed
  const privateKey = '';

  const tronWebJS = new TronWebJS(fullNode,solidityNode,eventServer,privateKey);

  registerTrx(new Trx(tronWebJS));
  registerTronWeb(new TronWeb(tronWebJS));
  registerTransactionBuilder(new TransactionBuilder(tronWebJS));
  registerSideChain(new SideChain(tronWebJS));
  registerEvent(new Event(tronWebJS));

  console.log('Initialized: ', Fluence.getStatus().isInitialized);
  console.log('Peer ID: ', Fluence.getStatus().peerId);
  console.log('Relay: ', Fluence.getStatus().relayPeerId);
  console.log('Connected: ', Fluence.getStatus().isConnected);
}

main();
