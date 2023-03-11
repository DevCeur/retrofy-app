import { Button } from "../button";
import { TextInput } from "../text-input";

export const MagicLinkField = () => {
  return (
    <div>
      <div className="mb-6">
        <TextInput
          label="We'll send you an email"
          type="email"
          name="email"
          placeholder="Your email"
        />
      </div>

      <Button width="full" variant="secondary">
        Continue
      </Button>
    </div>
  );
};
