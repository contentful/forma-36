export interface PropType {
  name: string;
  raw?: string;
  value?: { value: string }[];
}

export interface PropDefinition {
  defaultValue: null | { value: string };
  description: string;
  name: string;
  required: boolean;
  type: PropType;
  parent?: {
    fileName: string;
  };
}

export interface PropComponentDefinition {
  description: string;
  displayName: string;
  props: {
    [key: string]: PropDefinition;
  };
}
