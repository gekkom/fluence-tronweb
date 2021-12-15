import { EventDef } from '../generated/Event'
import TronWeb from 'tronweb'

export class Event implements EventDef {
  private tronWeb: TronWeb;

  constructor (tronWeb: TronWeb) {
    this.tronWeb = tronWeb;
  }

  setServer(server: string): Promise<string> {
    return this.tronWeb.event.setServer(server);
  }

  getEventsByContractAddress(contractAddress: string): Promise<string> {
    return this.tronWeb.event.getEventsByContractAddress(contractAddress);
  }

  getEventsByTransactionID(transactionID: string): Promise<string> {
    return this.tronWeb.event.getEventsByTransactionID(transactionID);
  }
}
