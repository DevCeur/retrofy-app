import { Button } from "../button";
import { TextInput } from "../text-input";

export const EmailPasswordField = () => {
  return (
    <div className="w-full">
      <div className="space-y-4 mb-6">
        <TextInput type="email" name="email" placeholder="Your email" />
        <TextInput
          type="password"
          name="password"
          placeholder="Your password (+6 characters)"
        />
      </div>

      <Button width="full">Create Account</Button>
    </div>
  );
};
