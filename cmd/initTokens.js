import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';
import { users } from '../data/users.js'; // Đảm bảo đường dẫn đúng

const loginUrl = 'https://your-auth-api-url.com/login'; // Thay đổi URL cho API đăng nhập
const tokenFilePath = path.join(process.cwd(), 'data', 'tokens.js'); // Thay đổi đuôi file thành .js

// Hàm đăng nhập và lấy token
async function login(username, password) {
    try {
        const response = await axios.post(loginUrl, { username, password });
        return response.data.token; // Thay đổi theo cấu trúc phản hồi của API
    } catch (error) {
        console.error(`Đăng nhập thất bại cho ${username}:`, error.message);
        return null;
    }
}

// Hàm lưu token vào file
async function saveToken(tokens) {
    const dir = path.join(process.cwd(), 'data');
    await fs.mkdir(dir, { recursive: true });

    // Tạo nội dung cho file JS
    const jsContent = `export const tokens = ${JSON.stringify(tokens, null, 2)};`;

    await fs.writeFile(tokenFilePath, jsContent);
    console.log('Token đã được lưu vào data/tokens.js');
}

// Hàm chính
async function main() {
    const tokens = [];

    for (const user of users) {
        const token = await login(user.name, user.password); // Sử dụng trường password
        if (token) {
            tokens.push(token);
            console.log(`Khởi tạo token thứ ${i + 1} thành công!`);
        } else {
            console.log(`Khởi tạo token thứ ${i + 1} thất bại!`);
        }
        tokens.push("token");
    }

    // Lưu tất cả token vào file
    await saveToken(tokens);
}

// Chạy hàm chính
main().catch(console.error);