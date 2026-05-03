"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";
import UsdcAsset from "../icons/UsdcAsset";
import UsdeToken from "../icons/UsdeToken";
import UsdtAsset from "../icons/UsdtAsset";
import DaiAsset from "../icons/DaiAsset";
import PtRsEthAsset from "../icons/PtRsEthAsset";
import Ethereum from "../icons/Ethereum";
import WethAsset from "../icons/WethAsset";
import WbtcAsset from "../icons/WbtcAsset";
import HyperliquidLogo from "../icons/HyperliquidLogo";
import FelixLogo from "../icons/FelixLogo";
import KinetiqHype from "../icons/KinetiqHype";
import UsdhlAsset from "../icons/UsdhlAsset";
import UsdhAsset from "../icons/UsdhAsset";

type Classes = {
  container?: string;
  icon?: string;
};

type DepositAssetsProps = {
  depositTokens: string[];
  classes?: Classes;
};

const depositTokenIconMap: Record<string, React.FC<{ className?: string }>> = {
  USDT: UsdtAsset,
  DAI: DaiAsset,
  PT_RSETH: PtRsEthAsset,
  ETH: Ethereum,
  WETH: WethAsset,
  WBTC: WbtcAsset,
  HYPE: HyperliquidLogo,
  FEUSD: FelixLogo,
  KHYPE: KinetiqHype,
  USDH: UsdhAsset,
  USDHL: UsdhlAsset,
  USDE: UsdeToken,
  USDC: UsdcAsset, // Default to USDC icon if not found
};

const DepositAssets = (props: DepositAssetsProps) => {
  const { depositTokens, classes } = props;

  const assets = useMemo(() => {
    return depositTokens.map((x) => {
      const upperCaseToken = x.toUpperCase();
      return depositTokenIconMap[upperCaseToken] || UsdcAsset;
    });
  }, [depositTokens]);

  return (
    <ul className={cn("flex items-center justify-center", classes?.container)}>
      {assets.map((AssetIcon, index) => (
        <li key={index}>
          <AssetIcon
            className={cn("w-10 h-10 -mx-2 shrink-0", classes?.icon)}
          />
        </li>
      ))}
    </ul>
  );
};

export default DepositAssets;
