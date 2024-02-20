export interface ExempleData {
  name: string;
  description?: string | null;
}

export interface UpdateExempleData {
  name?: string;
  description?: string | null;
}

export interface Exemple extends ExempleData {
  _id: string;
}
