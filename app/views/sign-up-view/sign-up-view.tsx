import { useState } from "react";

import { Button } from "~/components/button";
import { TextInput } from "~/components/text-input";
import { SingFormWrapper } from "~/components/sign-form-wrapper";

export const SignUpView = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SingFormWrapper
      title="Create Account"
      summary="Fill the form and create an account, or use your Google or GitHub account!"
    >
      <form>
        <div className="space-y-6">
          <TextInput label="Email:" placeholder="I'm a text input" />
        </div>
      </form>

      <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
        Really long button
      </Button>
    </SingFormWrapper>
  );
};
