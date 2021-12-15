import { TronWebDef } from '../generated/TronWeb'
import TronWeb from 'tronweb'

export class TronWeb implements TronWebDef {
  private tronWeb: TronWeb;

  constructor(tronWeb: TronWeb) {
    this.tronWeb = tronWeb;
  }

  getFullnodeVersion() {
    this.tronWeb.getFullnodeVersion();
  }

  setDefaultBlock(blockID: number) {
    this.tronWeb.setDefaultBlock(blockID);
  }

  setPrivateKey(privateKey: string) {
    this.tronWeb.setPrivateKey(privateKey);
  }

  setAddress(address: string) {
    this.tronWeb.setAddress(address);
  }

  fullnodeSatisfies(version: string): Promise<boolean> {
    return this.tronWeb.fullnodeSatisfies(version);
  }

  isValidProvider(provider: string): Promise<boolean> {
    return this.tronWeb.isValidProvider(provider);
  }

  setFullNode(fullNode: string) {
    this.tronWeb.setFullNode(fullNode);
  }

  setSolidityNode(solidityNode: string) {
    this.tronWeb.setSolidityNode(solidityNode);
  }

  setEventServer(eventServer: string) {
    this.tronWeb.setEventServer(eventServer);
  }

  setHeader(headers: string[]) {
    this.tronWeb.setHeader(headers);
  }

  setFullNodeHeader(headers: string[]) {
    this.tronWeb.setFullNodeHeader(headers);
  }

  setEventHeader(headers: string[]) {
    this.tronWeb.setEventHeader(headers);
  }

  currentProviders(): Promise<string> {
    return this.tronWeb.currentProviders();
  }

  currentProvider(): Promise<string> {
    return this.tronWeb.currentProvider();
  }

  // TODO
  getEventResult() {
    throw new Error('Method not implemented.');
  }

  getEventByTransactionID(transactionID: string): Promise<string> {
    return this.tronWeb.getEventByTransactionID(transactionID);
  }

  // TODO
  contract() {
    throw new Error('Method not implemented.');
  }

  sha3(input: string, prefix: boolean): Promise<string> {
    return this.tronWeb.sha3(input, prefix);
  }

  toHex(input: string): Promise<string> {
    return this.tronWeb.toHex(input);
  }

  toUtf8(input: string): Promise<string> {
    return this.tronWeb.toUtf8(input);
  }

  fromUtf8(input: string): Promise<string> {
    return this.tronWeb.fromUtf8(input);
  }

  toAscii(input: string): Promise<string> {
    return this.tronWeb.toAscii(input);
  }

  fromAscii(input: string, padding: string): Promise<string> {
    return this.tronWeb.fromAscii(input, padding);
  }

  toDecimal(input: string): Promise<number> {
    return this.tronWeb.toDecimal(input);
  }

  fromDecimal(input: number): Promise<string> {
    return this.tronWeb.fromDecimal(input);
  }

  fromSun(input: string): Promise<string> {
    return this.tronWeb.fromSun(input);
  }

  toSun(input: string): Promise<string> {
    return this.tronWeb.toSun(input);
  }

  toBigNumber(input: number): Promise<number> {
    return this.tronWeb.toBigNumber(input);
  }

  isAddress(address: string): Promise<boolean> {
    return this.tronWeb.isAddress(address);
  }
}
