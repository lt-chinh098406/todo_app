import { User } from '@/models/User'

export interface AuthState {
  authLoading: boolean
  isAuthenticated: boolean
  user: User | null
}

export interface AuthAction {
  type: 'SET_AUTH'
  payload: {
    isAuthenticated: boolean
    user: User | null
  }
}
