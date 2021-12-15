/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.1-249
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface EventDef {
    getEventsByContractAddress: (contractAddress: string, callParams: CallParams<'contractAddress'>) => string | Promise<string>;
    getEventsByTransactionID: (transactionID: string, callParams: CallParams<'transactionID'>) => string | Promise<string>;
    setServer: (server: string, callParams: CallParams<'server'>) => string | Promise<string>;
}
export function registerEvent(service: EventDef): void;
export function registerEvent(serviceId: string, service: EventDef): void;
export function registerEvent(peer: FluencePeer, service: EventDef): void;
export function registerEvent(peer: FluencePeer, serviceId: string, service: EventDef): void;
       

export function registerEvent(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Event",
    "functions" : [
        {
            "functionName" : "getEventsByContractAddress",
            "argDefs" : [
                {
                    "name" : "contractAddress",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getEventsByTransactionID",
            "argDefs" : [
                {
                    "name" : "transactionID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setServer",
            "argDefs" : [
                {
                    "name" : "server",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions
