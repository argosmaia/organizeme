import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_KEY = 'authToken';

export const AuthService = {
    async getToken(): Promise<string | null> {
        return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    },

    async setToken(token: string) {
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    },

    async removeToken() {
        await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    }
};
