export interface DocumentField {
  key: string;
  value: string;
  label: string;
  type: 'text' | 'date' | 'paragraph';
  placeholder?: string;
}

export interface DocumentTemplate {
  id: string;
  name: string;
  fields: DocumentField[];
  template: string;
  structure: {
    header?: string;
    content: string[];
    footer?: string;
  };
}