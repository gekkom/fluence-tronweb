import { TrxDef } from '../generated/Trx'
import TronWeb from 'tronweb'

export class Trx implements TrxDef {
  private tronWeb: TronWeb;

  constructor(tronWeb: TronWeb) {
    this.tronWeb = tronWeb
  }

  getCurrentBlock(): Promise<string> {
    return this.tronWeb.trx.getCurrentBlock();
  }

  getConfirmedCurrentBlock(): Promise<string> {
    return this.tronWeb.trx.getConfirmedCurrentBlock();
  }

  getBlock(block: string): Promise<string> {
    return this.tronWeb.trx.getBlock(block);
  }

  getBlockByHash(blockHash: string): Promise<string> {
    return this.tronWeb.trx.getBlockByHash(blockHash);
  }

  getBlockByNumber(blockID: number): Promise<string> {
    return this.tronWeb.trx.getBlockByNumber(blockID);
  }

  getBlockTransactionCount(block: string): Promise<number> {
    return this.tronWeb.trx.getBlockTransactionCount(block);
  }

  getTransactionFromBlock(index: number, block: string): Promise<string> {
    return this.tronWeb.trx.getTransactionFromBlock(block, index);
  }

  getTransaction(transactionID: string): Promise<string> {
    return this.tronWeb.trx.getTransaction(transactionID);
  }

  getConfirmedTransaction(transactionID: string): Promise<string> {
    return this.tronWeb.trx.getConfirmedTransaction(transactionID);
  }

  getUnconfirmedTransactionInfo(transactionID: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedTransactionInfo(transactionID);
  }

  getTransactionInfo(transactionID: string): Promise<string> {
    return this.tronWeb.trx.getTransactionInfo(transactionID);
  }

  getTransactionsToAddress(address: string, limit: number, offset: number): Promise<string> {
    return this.tronWeb.trx.getTransactionsToAddress(address, limit, offset);
  }

  getTransactionsFromAddress(address: string, limit: number, offset: number): Promise<string> {
    return this.tronWeb.trx.getTransactionsFromAddress(address, limit, offset);
  }

  getTransactionsRelated(address: string, direction: string, limit: number, offset: number): Promise<string> {
    return this.tronWeb.trx.getTransactionsRelated(address, direction, limit, offset);
  }

  getAccount(address: string): Promise<string> {
    return this.tronWeb.trx.getAccount(address);
  }

  getAccountById(id: string): Promise<string> {
    return this.tronWeb.trx.getAccountById(id);
  }

  getAccountInfoById(id: string, confirmed: boolean): Promise<string> {
    return this.tronWeb.trx.getAccountInfoById(id, confirmed, false);
  }

  getBalance(address: string): Promise<string> {
    return this.tronWeb.trx.getBalance(address);
  }

  getUnconfirmedAccount(address: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedAccount(address);
  }

  getUnconfirmedAccountById(id: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedAccountById(id);
  }

  getUnconfirmedBalance(address: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedBalance(address);
  }

  getBandwidth(address: string): Promise<string> {
    return this.tronWeb.trx.getBandwidth(address);
  }

  getTokensIssuedByAddress(address: string): Promise<string> {
    return this.tronWeb.trx.getTokensIssuedByAddress(address);
  }

  getTokenFromID(tokenID: string): Promise<string> {
    return this.tronWeb.trx.getTokenFromID(tokenID);
  }

  listNodes(): Promise<string> {
    return this.tronWeb.trx.listNodes();
  }

  getBlockRange(start: number, end: number): Promise<string> {
    return this.tronWeb.trx.getBlockRange(start, end);
  }

  listSuperRepresentatives(): Promise<string> {
    return this.tronWeb.trx.listSuperRepresentatives();
  }

  listTokens(limit?: number, offset?: number): Promise<string> {
    return this.tronWeb.trx.listTokens(limit, offset);
  }

  timeUntilNextVoteCycle(): Promise<string> {
    return this.tronWeb.trx.timeUntilNextVoteCycle();
  }

  getContract(address: string): Promise<string> {
    return this.tronWeb.trx.getContract(address);
  }

  verifyMessage(message: string, signature: string, address: string, useTronHeader?: boolean): Promise<string> {
    return this.tronWeb.trx.verifyMessage(message, signature, address, useTronHeader);
  }

  verifySignature(message: string, address: string, signature: string, useTronHeader?: boolean): Promise<string> {
    return this.tronWeb.trx.verifySignature(message, address, signature, useTronHeader);
  }

  sign(transaction: string, privateKey: string, useTronHeader?: boolean, multisig?: boolean): Promise<string> {
    return this.tronWeb.trx.sign(transaction, privateKey, useTronHeader, multisig);
  }

  signString(message: string, privateKey: string, useTronHeader?: boolean): Promise<string> {
    return this.tronWeb.trx.signString(message, privateKey, useTronHeader);
  }

  multiSign(transaction: string, privateKey: string, permissionId: string): Promise<string> {
    return this.tronWeb.trx.multiSign(transaction, privateKey, permissionId);
  }

  getApprovedList(transaction: string): Promise<string> {
    return this.tronWeb.trx.getApprovedList(transaction);
  }

  getSignWeight(transaction: string, permissionId: string): Promise<string> {
    return this.tronWeb.trx.getSignWeight(transaction, permissionId);
  }

  sendRawTransaction(signedTransaction: string): Promise<string> {
    return this.tronWeb.trx.sendRawTransaction(signedTransaction);
  }

  sendHexTransaction(signedHexTransaction: string): Promise<string> {
    return this.tronWeb.trx.sendHexTransaction(signedHexTransaction);
  }

  sendTransaction(to: string, amount: number): Promise<string> {
    return this.tronWeb.trx.sendTransaction(to, amount);
  }

  sendToken(to: string, amount: number, tokenID: string): Promise<string> {
    return this.tronWeb.trx.sendToken(to, amount, tokenID);
  }

  freezeBalance(amount: number, duration: number, resource: string, receiverAddress: string): Promise<string> {
    return this.tronWeb.trx.freezeBalance(amount, duration, resource, {}, receiverAddress);
  }

  unfreezeBalance(resource: string, receiverAddress: string): Promise<string> {
    return this.tronWeb.trx.unfreezeBalance(resource, {}, receiverAddress);
  }

  updateAccount(accountName: string): Promise<string> {
    return this.tronWeb.trx.updateAccount(accountName);
  }

  signMessage(transaction: string, privateKey: string, useTronHeader?: boolean, multisig?: boolean): Promise<string> {
    return this.tronWeb.trx.sign(transaction, privateKey, useTronHeader, multisig);
  }

  sendAsset(to: string, amount: number, tokenID: string): Promise<string> {
    return this.tronWeb.trx.sendToken(to, amount, tokenID);
  }

  send(to: string, amount: number): Promise<string> {
    return this.tronWeb.trx.sendTransaction(to, amount);
  }

  sendTrx(to: string, amount: number): Promise<string> {
    return this.tronWeb.trx.sendTransaction(to, amount);
  }

  broadcast(signedTransaction: string): Promise<string> {
    return this.tronWeb.trx.sendRawTransaction(signedTransaction);
  }

  broadcastHex(signedHexTransaction: string): Promise<string> {
    return this.tronWeb.trx.sendHexTransaction(signedHexTransaction);
  }

  signTransaction(transaction: string, privateKey: string, useTronHeader?: boolean, multisig?: boolean): Promise<string> {
    return this.tronWeb.trx.sign(transaction, privateKey, useTronHeader, multisig);
  }

  getProposal(proposalID: number): Promise<string> {
    return this.tronWeb.trx.getProposal(proposalID);
  }

  listProposals(): Promise<string> {
    return this.tronWeb.trx.listProposals();
  }

  getChainParameters(): Promise<string> {
    return this.tronWeb.trx.getChainParameters();
  }

  getAccountResources(address: string): Promise<string> {
    return this.tronWeb.trx.getAccountResources(address);
  }

  getExchangeByID(exchangeID: number): Promise<string> {
    return this.tronWeb.trx.getExchangeByID(exchangeID);
  }

  listExchanges(): Promise<string> {
    return this.tronWeb.trx.listExchanges();
  }

  listExchangesPaginated(limit?: number, offset?: number): Promise<string> {
    return this.tronWeb.trx.listExchangesPaginated(limit, offset);
  }

  getNodeInfo(): Promise<string> {
    return this.tronWeb.trx.getNodeInfo();
  }

  getTokenListByName(tokenID: string): Promise<string> {
    return this.tronWeb.trx.getTokenListByName(tokenID);
  }

  getTokenByID(tokenID: string): Promise<string> {
    return this.tronWeb.trx.getTokenByID(tokenID);
  }

  getReward(address: string): Promise<string> {
    return this.tronWeb.trx.getReward(address);
  }

  getUnconfirmedReward(address: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedReward(address);
  }

  getBrokerage(address: string): Promise<string> {
    return this.tronWeb.trx.getBrokerage(address);
  }

  getUnconfirmedBrokerage(address: string): Promise<string> {
    return this.tronWeb.trx.getUnconfirmedBrokerage(address);
  }
}