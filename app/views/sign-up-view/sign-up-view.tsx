import { TextInput } from "~/components/text-input";
import { SingFormWrapper } from "~/components/sign-form-wrapper";

export const SignUpView = () => {
  return (
    <SingFormWrapper
      title="Create Account"
      summary="Fill the form and create an account, or use your Google or GitHub account!"
    >
      <form>
        <TextInput label="Email:" placeholder="I'm a text input" />
      </form>
    </SingFormWrapper>
  );
};
