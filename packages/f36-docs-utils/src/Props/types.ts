export interface PropType {
  name: string;
  raw?: string;
  value?: any;
}

export interface PropDefinition {
  defaultValue: null | { value: string };
  description: string;
  name: string;
  required: boolean;
  type: PropType;
}

export interface PropComponentDefinition {
  description: string;
  displayName: string;
  props: {
    [key: string]: PropDefinition;
  };
}
