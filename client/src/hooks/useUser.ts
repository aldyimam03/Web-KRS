import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../api/endpoints';
import type { User, ApiResponse } from '../types';

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => 
      userApi.login(data).then(res => res.data as ApiResponse<{ token: string; user: User }>),
    onSuccess: (response) => {
      if (response.data?.token) {
        localStorage.setItem('Authorization', `Bearer ${response.data.token}`);
        localStorage.setItem('Profile', JSON.stringify(response.data.user));
        queryClient.invalidateQueries({ queryKey: ['user'] });
      }
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (data: FormData) => userApi.register(data),
  });
}

export function useRegisterAdmin() {
  return useMutation({
    mutationFn: (data: FormData) => userApi.registerAdmin(data),
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userApi.getAll(),
  });
}

export function useUser(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userApi.getById(id),
    enabled: !!id,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<FormData> }) => userApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: { email: string }) => userApi.forgotPassword(data),
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => 
      userApi.updateProfile(data).then(res => res.data as ApiResponse<User>),
    onSuccess: (response) => {
      if (response.data) {
        localStorage.setItem('Profile', JSON.stringify(response.data));
        queryClient.invalidateQueries({ queryKey: ['user'] });
      }
    },
  });
}

export function useUserMatkul() {
  return useQuery({
    queryKey: ['userMatkul'],
    queryFn: () => userApi.getMatkul(),
  });
}

export function useHasMatkul() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id_matkul: number }) => userApi.hasMatkul(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userMatkul'] });
    },
  });
}