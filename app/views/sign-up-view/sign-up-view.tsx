import { useState } from "react";

import { Button } from "~/components/button";
import { MagicLinkField } from "~/components/magic-link-field";
import { EmailPasswordField } from "~/components/email-password-field";
import { SingFormWrapper } from "~/components/sign-form-wrapper";

type SignOption = "idle" | "magic-link" | "email-password";

const SIGN_OPTIONS: { identifier: SignOption; text: string }[] = [
  { identifier: "magic-link", text: "With magic link" },
  { identifier: "email-password", text: "With email and password" },
];

export const SignUpView = () => {
  const [signOption, setSignOption] = useState<SignOption>("idle");

  const handleSetSignOption = (e: React.MouseEvent, identifier: SignOption) => {
    e.preventDefault();

    setSignOption(identifier);
  };

  return (
    <SingFormWrapper
      title="Create Account"
      summary="Fill the form and create an account."
    >
      <form className="space-y-6">
        {signOption === "idle" && (
          <ul className="space-y-4">
            {SIGN_OPTIONS.map(({ identifier, text }) => (
              <li key={identifier}>
                <Button
                  width="full"
                  variant="secondary"
                  onClick={(e) => handleSetSignOption(e, identifier)}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        )}

        {signOption === "magic-link" && <MagicLinkField />}

        {signOption === "email-password" && <EmailPasswordField />}

        {signOption !== "idle" && (
          <button
            className="w-full text-center text-sm text-neutral-400 underline"
            onClick={(e) => handleSetSignOption(e, "idle")}
          >
            Other options
          </button>
        )}
      </form>
    </SingFormWrapper>
  );
};
