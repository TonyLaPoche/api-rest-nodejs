export interface ExempleData {
  name: string;
  description?: string;
}

export interface UpdateExempleData {
  name?: string;
  description?: string;
}

export interface Exemple extends ExempleData {
  _id: string;
}
