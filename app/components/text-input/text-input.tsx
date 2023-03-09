import cn from "classnames";

import type { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, error, ...inputProps }: TextInputProps) => {
  return (
    <label className="flex flex-col space-y-2">
      {label && (
        <span className="block text-sm text-neutral-500 font-medium">
          {label}
        </span>
      )}

      <input
        className={cn({
          "text-sm font-medium px-4 py-3 border border-neutral-200 outline-none focus:border-brand-500 transition-colors duration-200":
            true,
          "border-red-500 focus:border-red-500": error,
        })}
        {...inputProps}
      />

      {error && <span className="block text-xs text-red-500">{error}</span>}
    </label>
  );
};
