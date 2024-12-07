import axios from "axios";

export interface SimpleUser {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
}

export type GitHubUser = SimpleUser;

export const GitHubUser = async (
  username: string
): Promise<GitHubUser> => {
  const response = await axios.get<GitHubUser>(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  return response.data
}

