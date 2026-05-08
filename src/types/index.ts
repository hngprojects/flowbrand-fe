/**
 * User Type Definition
 */
export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url?: string;
  bio?: string;
  username?: string;
  is_superadmin?: boolean;
};

/**
 * Organisation Type Definition
 */
export type Organisation = {
  id: string;
  name: string;
  // Add other organisation fields as needed
};
