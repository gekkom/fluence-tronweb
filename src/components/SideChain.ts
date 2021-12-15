import { SideChainDef } from '../generated/SideChain'
import TronWeb from 'tronweb'

export class SideChain implements SideChainDef {
  private tronWeb: TronWeb;

  constructor (tronWeb: TronWeb) {
    this.tronWeb = tronWeb;
  }

  setMainGatewayAddress(mainGatewayAddress: string) {
    return this.tronWeb.sidechain.setMainGatewayAddress(mainGatewayAddress);
  }

  setSideGatewayAddress(sideGatewayAddress: string) {
    return this.tronWeb.sidechain.setSideGatewayAddress(sideGatewayAddress);
  }

  setChainId(sideChainId: string) {
    return this.tronWeb.sidechain.setChainId(sideChainId);
  }

  // TODO
  signTransaction() {
    throw new Error('Method not implemented.');
  }

  // TODO
  multiSign() {
    throw new Error('Method not implemented.');
  }

  // TODO
  sign() {
    throw new Error('Method not implemented.');
  }

  depositTrx(callValue: number, depositFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.depositTrx(callValue, depositFee, feeLimit, {}, privateKey);
  }

  depositTrc10(tokenId: string, tokenValue: number, depositFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.depositTrc10(tokenId, tokenValue, depositFee, feeLimit, {}, privateKey);
  }

  depositTrc(functionSelector: string, num: number, fee: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.depositTrc(functionSelector, num, fee, feeLimit, contractAddress, {}, privateKey);
  }

  approveTrc20(num: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.approveTrc20(num, feeLimit, contractAddress, {}, privateKey);
  }

  approveTrc721(id: string, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.approveTrc721(id, feeLimit, contractAddress, {}, privateKey);
  }

  depositTrc20(num: number, depositFee: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.depositTrc20(num, depositFee, feeLimit, contractAddress, {}, privateKey);
  }

  depositTrc721(id: string, depositFee: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.depositTrc721(id, depositFee, feeLimit, contractAddress, {}, privateKey);
  }

  mappingTrc(trxHash: string, mappingFee: number, feeLimit: number, functionSelector: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.mappingTrc(trxHash, mappingFee, feeLimit, functionSelector, {}, privateKey);
  }

  mappingTrc20(trxHash: string, mappingFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.mappingTrc20(trxHash, mappingFee, feeLimit, {}, privateKey);
  }

  mappingTrc721(trxHash: string, mappingFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.mappingTrc721(trxHash, mappingFee, feeLimit, {}, privateKey);
  }

  withdrawTrx(callValue: number, withdrawFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.withdrawTrx(callValue, withdrawFee, feeLimit, {}, privateKey);
  }

  withdrawTrc10(tokenId: string, tokenValue: number, withdrawFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.withdrawTrc10(tokenId, tokenValue, withdrawFee, feeLimit, {}, privateKey);
  }

  withdrawTrc(functionSelector: string, numOrId: number, withdrawFee: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.withdrawTrc(functionSelector, numOrId, withdrawFee, feeLimit, contractAddress, {}, privateKey);
  }

  withdrawTrc20(num: number, withdrawFee: number, feeLimit: number, contractAddress: string, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.withdrawTrc20(num, withdrawFee, feeLimit, contractAddress, {}, privateKey);
  }

  injectFund(num: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.injectFund(num, feeLimit, {}, privateKey);
  }

  retryWithdraw(nonce: number, retryWithdrawFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.retryWithdraw(nonce, retryWithdrawFee, feeLimit, {}, privateKey);
  }

  retryDeposit(nonce: number, retryDepositFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.retryDeposit(nonce, retryDepositFee, feeLimit, {}, privateKey);
  }

  retryMapping(nonce: number, retryMappingFee: number, feeLimit: number, privateKey?: string): Promise<string> {
    return this.tronWeb.sidechain.retryMapping(nonce, retryMappingFee, feeLimit, {}, privateKey);
  }
}