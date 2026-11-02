import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fakultasApi, prodiApi, matkulApi, kelasApi, jamKelasApi } from '../api/endpoints';

export function useFakultas() {
  return useQuery({
    queryKey: ['fakultas'],
    queryFn: () => fakultasApi.getAll(),
  });
}

export function useFakultasById(id: number) {
  return useQuery({
    queryKey: ['fakultas', id],
    queryFn: () => fakultasApi.getById(id),
    enabled: !!id,
  });
}

export function useFakultasJamKelas(id: number) {
  return useQuery({
    queryKey: ['fakultas', id, 'jam-kelas'],
    queryFn: () => fakultasApi.getJamKelas(id),
    enabled: !!id,
  });
}

export function useCreateFakultas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => fakultasApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fakultas'] });
    },
  });
}

export function useUpdateFakultas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) => fakultasApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fakultas'] });
    },
  });
}

export function useDeleteFakultas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => fakultasApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fakultas'] });
    },
  });
}

export function useProdi() {
  return useQuery({
    queryKey: ['prodi'],
    queryFn: () => prodiApi.getAll(),
  });
}

export function useProdiById(id: number) {
  return useQuery({
    queryKey: ['prodi', id],
    queryFn: () => prodiApi.getById(id),
    enabled: !!id,
  });
}

export function useCreateProdi() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => prodiApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prodi'] });
    },
  });
}

export function useUpdateProdi() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) => prodiApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prodi'] });
    },
  });
}

export function useDeleteProdi() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => prodiApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prodi'] });
    },
  });
}

export function useMatkul() {
  return useQuery({
    queryKey: ['matkul'],
    queryFn: () => matkulApi.getAll(),
  });
}

export function useMatkulById(id: number) {
  return useQuery({
    queryKey: ['matkul', id],
    queryFn: () => matkulApi.getById(id),
    enabled: !!id,
  });
}

export function useCreateMatkul() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => matkulApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matkul'] });
    },
  });
}

export function useUpdateMatkul() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) => matkulApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matkul'] });
    },
  });
}

export function useDeleteMatkul() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => matkulApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matkul'] });
    },
  });
}

export function useKelas() {
  return useQuery({
    queryKey: ['kelas'],
    queryFn: () => kelasApi.getAll(),
  });
}

export function useKelasById(id: number) {
  return useQuery({
    queryKey: ['kelas', id],
    queryFn: () => kelasApi.getById(id),
    enabled: !!id,
  });
}

export function useKelasJadwal(id: number, jadwalId: number) {
  return useQuery({
    queryKey: ['kelas', id, 'jadwal', jadwalId],
    queryFn: () => kelasApi.getJadwal(id, jadwalId),
    enabled: !!id && !!jadwalId,
  });
}

export function useCreateKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => kelasApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kelas'] });
    },
  });
}

export function useUpdateKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, jadwalId, data }: { id: number; jadwalId: number; data: FormData }) =>
      kelasApi.update(id, jadwalId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kelas'] });
    },
  });
}

export function useDeleteKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => kelasApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kelas'] });
    },
  });
}

export function useJamKelas() {
  return useQuery({
    queryKey: ['jamKelas'],
    queryFn: () => jamKelasApi.getAll(),
  });
}

export function useJamKelasById(id: number) {
  return useQuery({
    queryKey: ['jamKelas', id],
    queryFn: () => jamKelasApi.getById(id),
    enabled: !!id,
  });
}

export function useCreateJamKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => jamKelasApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jamKelas'] });
    },
  });
}

export function useUpdateJamKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) => jamKelasApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jamKelas'] });
    },
  });
}

export function useDeleteJamKelas() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => jamKelasApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jamKelas'] });
    },
  });
}