import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
 * iOS with emulator: localhost 
 * iOS physical device: Machine IP 
 * 
 * Android with emulator: localhost + adb reverse
 * Android with Android Studio Emulator: 10.0.2.2
 * Android with Genymotion: 10.0.3.2
 * Android physical device: Machine IP
 */
