import path from 'path';
import { existsSync } from 'fs';

// Cập nhật đường dẫn đến config/dev.js trong thư mục src
const CONFIG_PATH = path.resolve(process.cwd(), 'src/config/testModes.js');

export async function loadConfig() {
    if (!existsSync(CONFIG_PATH)) {
        console.warn('ℹ Không có src/config/dev.js. Dùng mặc định chạy tất cả modules.');
        return null;
    }

    try {
        const configModule = await import(`${CONFIG_PATH}?cacheBust=${Date.now()}`);
        return configModule.default;
    } catch (err) {
        console.warn('⚠ Lỗi đọc src/config/dev.js. Dùng mặc định chạy tất cả modules.', err);
        return null;
    }
}
