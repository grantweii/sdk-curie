/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IOrderBookInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(tuple)": FunctionFragment;
    "getExchange()": FunctionFragment;
    "getLiquidityCoefficientInFundingPayment(address,address,tuple)": FunctionFragment;
    "getOpenOrder(address,address,int24,int24)": FunctionFragment;
    "getOpenOrderById(bytes32)": FunctionFragment;
    "getOpenOrderIds(address,address)": FunctionFragment;
    "getPendingFee(address,address,int24,int24)": FunctionFragment;
    "getTotalOrderDebt(address,address,bool)": FunctionFragment;
    "getTotalQuoteBalanceAndPendingFee(address,address[])": FunctionFragment;
    "getTotalTokenAmountInPoolAndPendingFee(address,address,bool)": FunctionFragment;
    "hasOrder(address,address[])": FunctionFragment;
    "removeLiquidity(tuple)": FunctionFragment;
    "replaySwap(tuple)": FunctionFragment;
    "updateFundingGrowthAndLiquidityCoefficientInFundingPayment(address,address,tuple)": FunctionFragment;
    "updateOrderDebt(bytes32,int256,int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      {
        trader: string;
        baseToken: string;
        base: BigNumberish;
        quote: BigNumberish;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        fundingGrowthGlobal: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getExchange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityCoefficientInFundingPayment",
    values: [
      string,
      string,
      { twPremiumX96: BigNumberish; twPremiumDivBySqrtPriceX96: BigNumberish }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenOrder",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenOrderById",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenOrderIds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingFee",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalOrderDebt",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalQuoteBalanceAndPendingFee",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalTokenAmountInPoolAndPendingFee",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "hasOrder",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      {
        maker: string;
        baseToken: string;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        liquidity: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "replaySwap",
    values: [
      {
        baseToken: string;
        isBaseToQuote: boolean;
        shouldUpdateState: boolean;
        amount: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        exchangeFeeRatio: BigNumberish;
        uniswapFeeRatio: BigNumberish;
        globalFundingGrowth: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFundingGrowthAndLiquidityCoefficientInFundingPayment",
    values: [
      string,
      string,
      { twPremiumX96: BigNumberish; twPremiumDivBySqrtPriceX96: BigNumberish }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOrderDebt",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityCoefficientInFundingPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenOrderById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenOrderIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalOrderDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalQuoteBalanceAndPendingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalTokenAmountInPoolAndPendingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "replaySwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFundingGrowthAndLiquidityCoefficientInFundingPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOrderDebt",
    data: BytesLike
  ): Result;

  events: {
    "ExchangeChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExchangeChanged"): EventFragment;
}

export class IOrderBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IOrderBookInterface;

  functions: {
    addLiquidity(
      params: {
        trader: string;
        baseToken: string;
        base: BigNumberish;
        quote: BigNumberish;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        fundingGrowthGlobal: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getExchange(overrides?: CallOverrides): Promise<[string]>;

    getLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber] & { liquidityCoefficientInFundingPayment: BigNumber }
    >;

    getOpenOrder(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          number,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          liquidity: BigNumber;
          lowerTick: number;
          upperTick: number;
          lastFeeGrowthInsideX128: BigNumber;
          lastTwPremiumGrowthInsideX96: BigNumber;
          lastTwPremiumGrowthBelowX96: BigNumber;
          lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
          baseDebt: BigNumber;
          quoteDebt: BigNumber;
        }
      ]
    >;

    getOpenOrderById(
      orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          number,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          liquidity: BigNumber;
          lowerTick: number;
          upperTick: number;
          lastFeeGrowthInsideX128: BigNumber;
          lastTwPremiumGrowthInsideX96: BigNumber;
          lastTwPremiumGrowthBelowX96: BigNumber;
          lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
          baseDebt: BigNumber;
          quoteDebt: BigNumber;
        }
      ]
    >;

    getOpenOrderIds(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPendingFee(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalOrderDebt(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalQuoteBalanceAndPendingFee(
      trader: string,
      baseTokens: string[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalQuoteAmountInPools: BigNumber;
        totalPendingFee: BigNumber;
      }
    >;

    getTotalTokenAmountInPoolAndPendingFee(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAmount: BigNumber;
        totalPendingFee: BigNumber;
      }
    >;

    hasOrder(
      trader: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeLiquidity(
      params: {
        maker: string;
        baseToken: string;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replaySwap(
      params: {
        baseToken: string;
        isBaseToQuote: boolean;
        shouldUpdateState: boolean;
        amount: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        exchangeFeeRatio: BigNumberish;
        uniswapFeeRatio: BigNumberish;
        globalFundingGrowth: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOrderDebt(
      orderId: BytesLike,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    params: {
      trader: string;
      baseToken: string;
      base: BigNumberish;
      quote: BigNumberish;
      lowerTick: BigNumberish;
      upperTick: BigNumberish;
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getExchange(overrides?: CallOverrides): Promise<string>;

  getLiquidityCoefficientInFundingPayment(
    trader: string,
    baseToken: string,
    fundingGrowthGlobal: {
      twPremiumX96: BigNumberish;
      twPremiumDivBySqrtPriceX96: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOpenOrder(
    trader: string,
    baseToken: string,
    lowerTick: BigNumberish,
    upperTick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      liquidity: BigNumber;
      lowerTick: number;
      upperTick: number;
      lastFeeGrowthInsideX128: BigNumber;
      lastTwPremiumGrowthInsideX96: BigNumber;
      lastTwPremiumGrowthBelowX96: BigNumber;
      lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
      baseDebt: BigNumber;
      quoteDebt: BigNumber;
    }
  >;

  getOpenOrderById(
    orderId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      liquidity: BigNumber;
      lowerTick: number;
      upperTick: number;
      lastFeeGrowthInsideX128: BigNumber;
      lastTwPremiumGrowthInsideX96: BigNumber;
      lastTwPremiumGrowthBelowX96: BigNumber;
      lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
      baseDebt: BigNumber;
      quoteDebt: BigNumber;
    }
  >;

  getOpenOrderIds(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPendingFee(
    trader: string,
    baseToken: string,
    lowerTick: BigNumberish,
    upperTick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalOrderDebt(
    trader: string,
    baseToken: string,
    fetchBase: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalQuoteBalanceAndPendingFee(
    trader: string,
    baseTokens: string[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      totalQuoteAmountInPools: BigNumber;
      totalPendingFee: BigNumber;
    }
  >;

  getTotalTokenAmountInPoolAndPendingFee(
    trader: string,
    baseToken: string,
    fetchBase: boolean,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      tokenAmount: BigNumber;
      totalPendingFee: BigNumber;
    }
  >;

  hasOrder(
    trader: string,
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeLiquidity(
    params: {
      maker: string;
      baseToken: string;
      lowerTick: BigNumberish;
      upperTick: BigNumberish;
      liquidity: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replaySwap(
    params: {
      baseToken: string;
      isBaseToQuote: boolean;
      shouldUpdateState: boolean;
      amount: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      exchangeFeeRatio: BigNumberish;
      uniswapFeeRatio: BigNumberish;
      globalFundingGrowth: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
    trader: string,
    baseToken: string,
    fundingGrowthGlobal: {
      twPremiumX96: BigNumberish;
      twPremiumDivBySqrtPriceX96: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOrderDebt(
    orderId: BytesLike,
    base: BigNumberish,
    quote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      params: {
        trader: string;
        baseToken: string;
        base: BigNumberish;
        quote: BigNumberish;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        fundingGrowthGlobal: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        base: BigNumber;
        quote: BigNumber;
        fee: BigNumber;
        liquidity: BigNumber;
      }
    >;

    getExchange(overrides?: CallOverrides): Promise<string>;

    getLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenOrder(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        liquidity: BigNumber;
        lowerTick: number;
        upperTick: number;
        lastFeeGrowthInsideX128: BigNumber;
        lastTwPremiumGrowthInsideX96: BigNumber;
        lastTwPremiumGrowthBelowX96: BigNumber;
        lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
        baseDebt: BigNumber;
        quoteDebt: BigNumber;
      }
    >;

    getOpenOrderById(
      orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        liquidity: BigNumber;
        lowerTick: number;
        upperTick: number;
        lastFeeGrowthInsideX128: BigNumber;
        lastTwPremiumGrowthInsideX96: BigNumber;
        lastTwPremiumGrowthBelowX96: BigNumber;
        lastTwPremiumDivBySqrtPriceGrowthInsideX96: BigNumber;
        baseDebt: BigNumber;
        quoteDebt: BigNumber;
      }
    >;

    getOpenOrderIds(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPendingFee(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalOrderDebt(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalQuoteBalanceAndPendingFee(
      trader: string,
      baseTokens: string[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalQuoteAmountInPools: BigNumber;
        totalPendingFee: BigNumber;
      }
    >;

    getTotalTokenAmountInPoolAndPendingFee(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAmount: BigNumber;
        totalPendingFee: BigNumber;
      }
    >;

    hasOrder(
      trader: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeLiquidity(
      params: {
        maker: string;
        baseToken: string;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        base: BigNumber;
        quote: BigNumber;
        fee: BigNumber;
        takerBase: BigNumber;
        takerQuote: BigNumber;
      }
    >;

    replaySwap(
      params: {
        baseToken: string;
        isBaseToQuote: boolean;
        shouldUpdateState: boolean;
        amount: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        exchangeFeeRatio: BigNumberish;
        uniswapFeeRatio: BigNumberish;
        globalFundingGrowth: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber] & {
        tick: number;
        fee: BigNumber;
        insuranceFundFee: BigNumber;
      }
    >;

    updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateOrderDebt(
      orderId: BytesLike,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ExchangeChanged(
      exchange?: string | null
    ): TypedEventFilter<[string], { exchange: string }>;
  };

  estimateGas: {
    addLiquidity(
      params: {
        trader: string;
        baseToken: string;
        base: BigNumberish;
        quote: BigNumberish;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        fundingGrowthGlobal: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getExchange(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenOrder(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenOrderById(
      orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenOrderIds(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingFee(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalOrderDebt(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalQuoteBalanceAndPendingFee(
      trader: string,
      baseTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalTokenAmountInPoolAndPendingFee(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasOrder(
      trader: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      params: {
        maker: string;
        baseToken: string;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replaySwap(
      params: {
        baseToken: string;
        isBaseToQuote: boolean;
        shouldUpdateState: boolean;
        amount: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        exchangeFeeRatio: BigNumberish;
        uniswapFeeRatio: BigNumberish;
        globalFundingGrowth: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOrderDebt(
      orderId: BytesLike,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      params: {
        trader: string;
        baseToken: string;
        base: BigNumberish;
        quote: BigNumberish;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        fundingGrowthGlobal: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getExchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOpenOrder(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOpenOrderById(
      orderId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOpenOrderIds(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingFee(
      trader: string,
      baseToken: string,
      lowerTick: BigNumberish,
      upperTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalOrderDebt(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalQuoteBalanceAndPendingFee(
      trader: string,
      baseTokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalTokenAmountInPoolAndPendingFee(
      trader: string,
      baseToken: string,
      fetchBase: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasOrder(
      trader: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      params: {
        maker: string;
        baseToken: string;
        lowerTick: BigNumberish;
        upperTick: BigNumberish;
        liquidity: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replaySwap(
      params: {
        baseToken: string;
        isBaseToQuote: boolean;
        shouldUpdateState: boolean;
        amount: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        exchangeFeeRatio: BigNumberish;
        uniswapFeeRatio: BigNumberish;
        globalFundingGrowth: {
          twPremiumX96: BigNumberish;
          twPremiumDivBySqrtPriceX96: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFundingGrowthAndLiquidityCoefficientInFundingPayment(
      trader: string,
      baseToken: string,
      fundingGrowthGlobal: {
        twPremiumX96: BigNumberish;
        twPremiumDivBySqrtPriceX96: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOrderDebt(
      orderId: BytesLike,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
