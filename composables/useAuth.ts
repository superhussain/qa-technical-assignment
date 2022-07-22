export const useAuth = async () => {
  return await useFetch('/api/me');
};
