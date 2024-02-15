export const checkIsAuthenticated = (token) => {
    if (!token) return false;
    return true;
}