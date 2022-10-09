// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import {ISuperfluid, ISuperfluidToken, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {ISuperApp, ISuperAgreement} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {ContextDefinitions, SuperAppDefinitions} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {SuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol";

import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import {CFAv1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";

contract EmployeeAccounts {
    using CFAv1Library for CFAv1Library.InitData;

    int96 internal constant FLOW_RATE = 1000000000000;


    //initialize cfaV1 variable
    CFAv1Library.InitData public cfaV1;

    address private owner;
    ISuperToken daix;
    mapping(address => uint) getSalaryMap;
      
    // modifier to check if caller is owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor(ISuperfluid host, ISuperToken _daix) {
        daix = _daix;
        owner = msg.sender;
        
        //initialize InitData struct, and set equal to cfaV1
        cfaV1 = CFAv1Library.InitData(
            host,
            IConstantFlowAgreementV1(
                address(
                    host.getAgreementClass(
                        keccak256(
                            "org.superfluid-finance.agreements.ConstantFlowAgreement.v1"
                        )
                    )
                )
            )
        );
    }


    function createStream() public {
        cfaV1.createFlow(msg.sender, daix, FLOW_RATE);
    }

    function endStream() public {
        getSalaryMap[msg.sender] += getSalary(msg.sender);
        cfaV1.deleteFlow(address(this), msg.sender, daix);
    } 

    function getSalary(address sender) public view returns(uint256) {
         (uint256 starttime,,,) = cfaV1.cfa.getFlow(daix, address(this), sender);
         return getSalaryMap[sender] + (block.timestamp - starttime) * uint256(int256(FLOW_RATE));

    }

} 