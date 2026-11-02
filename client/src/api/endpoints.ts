import api from '../api/client';

export const userApi = {
  login: (data: { email: string; password: string }) =>
    api.post('/user/login', data),
  register: (data: FormData) =>
    api.post('/user/register', data),
  registerAdmin: (data: FormData) =>
    api.post('/user/register/admin', data),
  getAll: () =>
    api.get('/user'),
  getById: (id: number) =>
    api.get(`/user/${id}`),
  update: (id: number, data: Partial<FormData>) =>
    api.patch(`/user/${id}`, data),
  delete: (id: number) =>
    api.delete(`/user/${id}`),
  forgotPassword: (data: { email: string }) =>
    api.patch('/user/forgot', data),
  updateProfile: (data: FormData) =>
    api.patch('/user/profile', data),
  getMatkul: () =>
    api.get('/user/matkul'),
  hasMatkul: (data: { id_matkul: number }) =>
    api.post('/user/matkul', data),
};

export const fakultasApi = {
  getAll: () =>
    api.get('/fakultas'),
  getById: (id: number) =>
    api.get(`/fakultas/${id}`),
  getJamKelas: (id: number) =>
    api.get(`/fakultas/${id}/jam-kelas`),
  create: (data: FormData) =>
    api.post('/fakultas', data),
  update: (id: number, data: FormData) =>
    api.patch(`/fakultas/${id}`, data),
  delete: (id: number) =>
    api.delete(`/fakultas/${id}`),
};

export const prodiApi = {
  getAll: () =>
    api.get('/program-studi'),
  getById: (id: number) =>
    api.get(`/program-studi/${id}`),
  create: (data: FormData) =>
    api.post('/program-studi', data),
  update: (id: number, data: FormData) =>
    api.patch(`/program-studi/${id}`, data),
  delete: (id: number) =>
    api.delete(`/program-studi/${id}`),
};

export const matkulApi = {
  getAll: () =>
    api.get('/matkul'),
  getById: (id: number) =>
    api.get(`/matkul/${id}`),
  create: (data: FormData) =>
    api.post('/matkul', data),
  update: (id: number, data: FormData) =>
    api.patch(`/matkul/${id}`, data),
  delete: (id: number) =>
    api.delete(`/matkul/${id}`),
};

export const kelasApi = {
  getAll: () =>
    api.get('/kelas'),
  getById: (id: number) =>
    api.get(`/kelas/${id}`),
  getJadwal: (id: number, jadwalId: number) =>
    api.get(`/kelas/${id}/jadwal/${jadwalId}`),
  create: (data: FormData) =>
    api.post('/kelas', data),
  update: (id: number, jadwalId: number, data: FormData) =>
    api.patch(`/kelas/${id}/jadwal/${jadwalId}`, data),
  delete: (id: number) =>
    api.delete(`/kelas/${id}`),
};

export const jamKelasApi = {
  getAll: () =>
    api.get('/jam-kelas'),
  getById: (id: number) =>
    api.get(`/jam-kelas/${id}`),
  create: (data: FormData) =>
    api.post('/jam-kelas', data),
  update: (id: number, data: FormData) =>
    api.patch(`/jam-kelas/${id}`, data),
  delete: (id: number) =>
    api.delete(`/jam-kelas/${id}`),
};

export const planApi = {
  getAll: () =>
    api.get('/my-plan'),
  create: (data: { id_kelas: number }) =>
    api.post('/my-plan', data),
  update: (id: number, data: { id_kelas: number }) =>
    api.patch(`/my-plan/${id}`, data),
  delete: (id: number) =>
    api.delete(`/my-plan/${id}`),
};

export const randomKrsApi = {
  filter: (params: { fakultas_id?: number; prodi_id?: number; semester?: number }) =>
    api.get('/random-krs', { params }),
};

export const planningKrsApi = {
  suggestion: (data: { id_matkul: number[] }) =>
    api.post('/planning-krs', data),
};

export const dashboardApi = {
  getUser: () =>
    api.get('/dashboard'),
  getAdmin: () =>
    api.get('/admin/dashboard'),
};