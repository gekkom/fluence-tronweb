import { TransactionBuilderDef } from '../generated/TransactionBuilder'
import TronWeb from 'tronweb'

export class TransactionBuilder implements TransactionBuilderDef {
  private tronWeb: TronWeb;

  constructor(tronWeb: TronWeb) {
    this.tronWeb = tronWeb;
  }

  sendTrx(to: string, amount: number, fromAddr?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.sendTrx(to, amount, fromAddr);
  }

  sendToken(to: string, amount: number, tokenID: string, fromAddr?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.sendToken(to, amount, tokenID, fromAddr);
  }

  purchaseToken(issuerAddress: string, tokenID: string, amount: number, buyer?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.purchaseToken(issuerAddress, tokenID, amount, buyer);
  }

  freezeBalance(receiverAddress: string, amount?: number, duration?: number, resource?: string, address?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.freezeBalance(amount, duration, resource, address, receiverAddress);
  }

  unfreezeBalance(receiverAddress: string, resource?: string, address?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.unfreezeBalance(resource, address, receiverAddress);
  }

  withdrawBlockRewards(address: string): Promise<string> {
    return this.tronWeb.transactionBuilder.withdrawBlockRewards(address);
  }

  applyForSR(address?: string, url?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.applyForSR(address, url);
  }

  // TODO
  vote() {
    throw new Error('Method not implemented.');
  }

  // TODO
  createSmartContract() {
    throw new Error('Method not implemented.');
  }

  // TODO
  triggerSmartContract() {
    throw new Error('Method not implemented.');
  }

  // TODO
  triggerConstantContract() {
    throw new Error('Method not implemented.');
  }

  // TODO
  triggerConfirmedConstantContract() {
    throw new Error('Method not implemented.');
  }

  clearABI(contractAddress: string, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.clearABI(contractAddress, ownerAddress);
  }

  updateBrokerage(brokerage: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.updateBrokerage(brokerage, ownerAddress);
  }

  // TODO
  createToken() {
    throw new Error('Method not implemented.');
  }

  updateAccount(accountName: string, address?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.updateAccount(accountName, address);
  }

  setAccountId(accountId: string, address?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.setAccountId(accountId, address);
  }

  // TODO
  updateToken() {
    throw new Error('Method not implemented.');
  }

  sendAsset(to: string, amount: number, tokenID: string, fromAddr?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.sendAsset(to, amount, tokenID, fromAddr);
  }

  purchaseAsset(issuerAddress: string, tokenID: string, amount: number, buyer?: string): Promise<string> {
    return this.tronWeb.transactionBuilder.purchaseAsset(issuerAddress, tokenID, amount, buyer);
  }

  // TODO
  createAsset() {
    throw new Error('Method not implemented.');
  }

  // TODO
  updateAsset() {
    throw new Error('Method not implemented.');
  }

  // TODO
  createProposal() {
    throw new Error('Method not implemented.');
  }

  deleteProposal(proposalId: number, issuerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.deleteProposal(proposalId, issuerAddress);
  }

  voteProposal(proposalId: number, isApproval: boolean, voterAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.voteProposal(proposalId, isApproval, voterAddress);
  }

  createTRXExchange(tokenName: string, tokenBalance: number, trxBalance: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.createTRXExchange(tokenName, tokenBalance, trxBalance, ownerAddress);
  }

  createTokenExchange(firstTokenName: string, firstTokenBalance: number, secondTokenName: string, secondTokenBalance: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.createTokenExchange(firstTokenName, firstTokenBalance, secondTokenName, secondTokenBalance, ownerAddress);
  }

  injectExchangeTokens(exchangeID: number, tokenName: string, tokenAmount: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.injectExchangeTokens(exchangeID, tokenName, tokenAmount, ownerAddress);
  }

  withdrawExchangeTokens(exchangeID: number, tokenName: string, tokenAmount: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.withdrawExchangeTokens(exchangeID, tokenName, tokenAmount, ownerAddress);
  }

  tradeExchangeTokens(exchangeID: number, tokenName: string, tokenAmountSold: number, tokenAmountExpected: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.tradeExchangeTokens(exchangeID, tokenName, tokenAmountSold, tokenAmountExpected, ownerAddress);
  }

  updateSetting(contractAddress: string, userFeePercentage: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.updateSetting(contractAddress, userFeePercentage, ownerAddress);
  }

  updateEnergyLimit(contractAddress: string, originEnergyLimit: number, ownerAddress: string): Promise<string> {
    return this.tronWeb.transactionBuilder.updateEnergyLimit(contractAddress, originEnergyLimit, ownerAddress);
  }

  // TODO
  checkPermissions(){
    throw new Error('Method not implemented.');
  }

  // TODO
  updateAccountPermissions(){
    throw new Error('Method not implemented.');
  }

  // TODO
  newTxID(){
    throw new Error('Method not implemented.');
  }

  // TODO
  alterTransaction(){
    throw new Error('Method not implemented.');
  }

  // TODO
  extendExpiration(){
    throw new Error('Method not implemented.');
  }

  // TODO
  addUpdateData(){
    throw new Error('Method not implemented.');
  }
}
