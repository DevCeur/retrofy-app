import { Button } from "~/components/button";
import { TextInput } from "~/components/text-input";
import { SingFormWrapper } from "~/components/sign-form-wrapper";

export const SignUpView = () => {
  return (
    <SingFormWrapper
      title="Create Account"
      summary="Fill the form and create an account."
    >
      <form>
        <div className="space-y-5 mb-8">
          <TextInput type="email" name="email" placeholder="Email" />
          <TextInput
            type="password"
            name="password"
            placeholder="Password (+6 characters)"
          />
        </div>

        <Button width="full">Continue</Button>
      </form>
    </SingFormWrapper>
  );
};
