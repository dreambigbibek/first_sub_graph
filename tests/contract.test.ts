import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ERC20Recovered } from "../generated/schema"
import { ERC20Recovered as ERC20RecoveredEvent } from "../generated/Contract/Contract"
import { handleERC20Recovered } from "../src/contract"
import { createERC20RecoveredEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requestedBy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let newERC20RecoveredEvent = createERC20RecoveredEvent(
      requestedBy,
      token,
      amount
    )
    handleERC20Recovered(newERC20RecoveredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ERC20Recovered created and stored", () => {
    assert.entityCount("ERC20Recovered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ERC20Recovered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestedBy",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20Recovered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20Recovered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
