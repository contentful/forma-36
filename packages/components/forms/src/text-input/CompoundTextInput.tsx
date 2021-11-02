import { TextInput as OriginalTextInput } from './TextInput';
import { InputGroup } from './input-group/InputGroup';

type CompoundTextInput = typeof OriginalTextInput & {
  Group: typeof InputGroup;
};

export const TextInput = OriginalTextInput as CompoundTextInput;
TextInput.Group = InputGroup;
