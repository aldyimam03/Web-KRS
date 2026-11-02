import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { planApi, randomKrsApi, planningKrsApi, dashboardApi } from '../api/endpoints';

export function usePlans() {
  return useQuery({
    queryKey: ['plans'],
    queryFn: () => planApi.getAll(),
  });
}

export function useCreatePlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id_kelas: number }) => planApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plans'] });
    },
  });
}

export function useUpdatePlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: { id_kelas: number } }) => planApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plans'] });
    },
  });
}

export function useDeletePlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => planApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plans'] });
    },
  });
}

export function useRandomKrs(params?: { fakultas_id?: number; prodi_id?: number; semester?: number }) {
  return useQuery({
    queryKey: ['randomKrs', params],
    queryFn: () => randomKrsApi.filter(params || {}),
  });
}

export function usePlanningKrs() {
  return useMutation({
    mutationFn: (data: { id_matkul: number[] }) => planningKrsApi.suggestion(data),
  });
}

export function useDashboardUser() {
  return useQuery({
    queryKey: ['dashboardUser'],
    queryFn: () => dashboardApi.getUser(),
  });
}

export function useDashboardAdmin() {
  return useQuery({
    queryKey: ['dashboardAdmin'],
    queryFn: () => dashboardApi.getAdmin(),
  });
}