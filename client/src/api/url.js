// @ts-nocheck
// Legacy compatibility shim - exports the new api client as `url`
import api from './client';

export const url = api;
export default api;