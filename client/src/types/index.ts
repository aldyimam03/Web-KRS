export interface User {
  id: number;
  nim: string;
  nama: string;
  email: string;
  program_studi: string;
  fakultas: string;
  role: 'user' | 'admin';
}

export interface Fakultas {
  id: number;
  nama: string;
}

export interface ProgramStudi {
  id: number;
  nama: string;
  fakultas_id: number;
}

export interface Matkul {
  id: number;
  nama: string;
  sks: number;
  semester: number;
  prodi_id: number;
}

export interface JamKelas {
  id: number;
  hari: string;
  jam_mulai: string;
  jam_selesai: string;
}

export interface Kelas {
  id: number;
  nama: string;
  matkul_id: number;
  dosen: string;
  kuota: number;
  jam_kelas: JamKelas[];
}

export interface Plan {
  id: number;
  user_id: number;
  kelas_id: number;
  status: 'pending' | 'approved' | 'rejected';
  kelas?: Kelas;
}

export interface DashboardUser {
  total_mahasiswa: number;
  total_matkul: number;
  total_kelas: number;
  total_plan: number;
}

export interface DashboardAdmin {
  total_mahasiswa: number;
  total_dosen: number;
  total_fakultas: number;
  total_prodi: number;
  total_matkul: number;
  total_kelas: number;
  total_plan: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}