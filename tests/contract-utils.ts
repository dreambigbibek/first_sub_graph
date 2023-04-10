import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ERC20Recovered,
  ERC721Recovered,
  ETHReceived
} from "../generated/Contract/Contract"

export function createERC20RecoveredEvent(
  requestedBy: Address,
  token: Address,
  amount: BigInt
): ERC20Recovered {
  let erc20RecoveredEvent = changetype<ERC20Recovered>(newMockEvent())

  erc20RecoveredEvent.parameters = new Array()

  erc20RecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "requestedBy",
      ethereum.Value.fromAddress(requestedBy)
    )
  )
  erc20RecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  erc20RecoveredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return erc20RecoveredEvent
}

export function createERC721RecoveredEvent(
  requestedBy: Address,
  token: Address,
  tokenId: BigInt
): ERC721Recovered {
  let erc721RecoveredEvent = changetype<ERC721Recovered>(newMockEvent())

  erc721RecoveredEvent.parameters = new Array()

  erc721RecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "requestedBy",
      ethereum.Value.fromAddress(requestedBy)
    )
  )
  erc721RecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  erc721RecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return erc721RecoveredEvent
}

export function createETHReceivedEvent(amount: BigInt): ETHReceived {
  let ethReceivedEvent = changetype<ETHReceived>(newMockEvent())

  ethReceivedEvent.parameters = new Array()

  ethReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return ethReceivedEvent
}
