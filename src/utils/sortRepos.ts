import { GitHubUserRepositories } from "../../src/types/apiTypes"

export const sortGitHubUserRepositories = (
    repositories: GitHubUserRepositories,
    sortBy: 'stars' | 'forks' | 'updated_at' | 'size' | 'name' | 'created_at',
    order: 'asc' | 'desc',
  ) => {
    const sortedRepositories = [...repositories].sort((a, b) => {
      let comparison = 0
  
      switch (sortBy) {
        case 'stars':
          comparison = (a.stargazers_count || 0) - (b.stargazers_count || 0)
          break
        case 'forks':
          comparison = (a.forks_count || 0) - (b.forks_count || 0)
          break
        case 'updated_at':
          comparison =
            new Date(a.updated_at || '').getTime() -
            new Date(b.updated_at || '').getTime()
          break
        case 'size':
          comparison = (a.size || 0) - (b.size || 0)
          break
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'created_at':
          comparison =
            new Date(a.created_at || '').getTime() -
            new Date(b.created_at || '').getTime()
          break
        default:
          break
      }
  
      return order === 'asc' ? comparison : -comparison
    })
  
    return sortedRepositories
  }

