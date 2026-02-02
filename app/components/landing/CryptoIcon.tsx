"use client";

import { TokenIcon } from "@web3icons/react/dynamic";

type TokenIconVariant = "mono" | "branded" | "background";

interface CryptoIconProps {
  /** Token symbol (e.g. "btc", "eth") */
  symbol: string;
  size?: number;
  variant?: TokenIconVariant;
  className?: string;
}

export function CryptoIcon({
  symbol,
  size = 32,
  variant = "branded",
  className,
}: CryptoIconProps) {
  return (
    <TokenIcon
      symbol={symbol}
      size={size}
      variant={variant}
      className={className}
    />
  );
}
