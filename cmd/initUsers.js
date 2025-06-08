import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';
import readline from 'readline';

const url = 'https://66cc49c7a4dd3c8a71b70c72.mockapi.io/api/he/users';
const users = [];

// Tạo giao diện để đọc dữ liệu từ bàn phím
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hàm tạo người dùng
async function createUsers(count) {
    const dir = path.join(process.cwd(), 'data');

    // Tạo thư mục nếu chưa tồn tại
    await fs.mkdir(dir, { recursive: true });

    for (let i = 0; i < count; i++) {
        const user = {
            name: `User ${i + 1}`,
        };

        try {
            const response = await axios.post(url, user);
            if (response.status === 201) {
                users.push(response.data);
                console.log(`Khởi tạo người dùng thứ ${i + 1} thành công!`);
            }
        } catch (error) {
            console.log(`Khởi tạo người dùng thứ ${i + 1} thất bại!`);
        }
    }

    // Ghi dữ liệu vào file JS
    const jsContent = `export const users = ${JSON.stringify(users, null, 2)};`;
    await fs.writeFile(path.join(dir, 'users.js'), jsContent);
    console.log('===>Khởi tạo hoàn tất, dữ liệu đã được ghi vào users.js<===');
}

// Yêu cầu người dùng nhập số lượng người cần tạo
rl.question('Nhập số lượng người dùng cần tạo: ', async (answer) => {
    const count = parseInt(answer, 10);
    if (!isNaN(count) && count > 0) {
        await createUsers(count);
    } else {
        console.log('Vui lòng nhập một số hợp lệ.');
    }
    rl.close();
});