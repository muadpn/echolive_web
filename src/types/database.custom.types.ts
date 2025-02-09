import { type Database } from "./database.types";

export type TKeyIdentifierTableRow = keyof Database['public']['Tables']['Identifier']['Row']
export type TKeyUsersTableRow = keyof Database['public']['Tables']['users']['Row']
export type TKeyWebsiteDetailsTableRow = keyof Database['public']['Tables']['website_details']['Row']
